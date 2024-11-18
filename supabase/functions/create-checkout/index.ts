// @ts-expect-error: Deno types
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
// @ts-expect-error: Deno types
import { createClient } from "https://esm.sh/@supabase/supabase-js";
// @ts-expect-error: Deno types
import Stripe from "https://esm.sh/stripe@14.x";

// @ts-expect-error: Deno types
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2024-10-28.acacia',
  httpClient: Stripe.createFetchHttpClient()
})

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get request data
    const { isYearly } = await req.json()

    // Initialize Supabase client
    const supabaseClient = createClient(
      // @ts-expect-error: Deno types
      Deno.env.get('SUPABASE_URL')!,
      // @ts-expect-error: Deno types
      Deno.env.get('SUPABASE_ANON_KEY')!,
    )

    // Get user from auth header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) throw new Error('No auth header')

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    )

    if (authError || !user) throw new Error('Not authenticated')

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          
          price: isYearly   
            // @ts-expect-error: Deno types
            ? Deno.env.get('STRIPE_YEARLY_PRICE_ID')
            // @ts-expect-error: Deno types
            : Deno.env.get('STRIPE_QUARTERLY_PRICE_ID'),
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${req.headers.get('origin')}/dashboard?success=true`,
      cancel_url: `${req.headers.get('origin')}/subscription?canceled=true`,
      metadata: {
        user_id: user.id,
      },
    })

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})