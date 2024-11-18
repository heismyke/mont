// @ts-expect-error: Deno types
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// @ts-expect-error: Deno types
import { createClient } from "https://esm.sh/@supabase/supabase-js";
// @ts-expect-error: Deno types
import Stripe from "https://esm.sh/stripe@14.x";

// @ts-expect-error: Deno types
const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-10-28.acacia",
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    console.error("No signature in webhook request");
    return new Response(JSON.stringify({ error: "No signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const supabaseClient = createClient(
      // @ts-expect-error: Deno types
      Deno.env.get('SUPABASE_URL')!,
      // @ts-expect-error: Deno types
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, 
      {
        auth: {
          persistSession: false
        }
      }
    )

    const body = await req.text();
    const event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      // @ts-expect-error: Deno types
      Deno.env.get("STRIPE_WEBHOOK_SIGNING_SECRET")!
    );

    console.log("Webhook Event Type:", event.type);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const userId = session.metadata?.user_id;

        if (!userId) {
          console.error("No user_id found in checkout session metadata");
          return new Response(JSON.stringify({ error: "Missing user_id" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Retrieve the subscription details
        const subscription = await stripe.subscriptions.retrieve(
          session.subscription as string
        );

        await supabaseClient.from("subscriptions").upsert({
          user_id: userId,
          stripe_subscription_id: subscription.id,
          status: subscription.status,
          price_id: subscription.items.data[0].price.id,
          current_period_end: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        await supabaseClient
          .from("subscriptions")
          .update({ status: "canceled" })
          .match({ stripe_subscription_id: subscription.id });
        break;
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
});
