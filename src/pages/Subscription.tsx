import React, { useState } from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
  isYearly,
  onToggle,
}) => (
  <div className="flex justify-center items-center gap-2 mb-12">
    <button
      onClick={() => onToggle(false)}
      className={`px-4 py-2 rounded-md ${
        !isYearly
          ? "bg-purple-500 text-white"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      Quarterly
    </button>
    <button
      onClick={() => onToggle(true)}
      className={`px-4 py-2 rounded-md ${
        isYearly
          ? "bg-purple-500 text-white"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      Yearly
      <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
        Save 17%
      </span>
    </button>
  </div>
);

interface PricingCardProps {
  title: string;
  price: number | null;
  description: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
  buttonAction: () => void;
  billingPeriod: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular,
  buttonText,
  buttonAction,
  billingPeriod,
}) => (
  <Card
    className={`w-full max-w-sm rounded-lg border ${
      isPopular ? "border-purple-500 shadow-lg" : "border-gray-200"
    }`}
  >
    <CardHeader>
      {isPopular && (
        <p className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold text-purple-500">
          Most Popular
        </p>
      )}
      <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      <CardDescription className="text-gray-600">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="mb-6">
        {price !== null ? (
          <>
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-gray-600 ml-2">/month</span>
            <div className="text-sm text-gray-500 mt-1">
              Billed {billingPeriod === "yearly" ? "annually" : "quarterly"}
              {billingPeriod === "yearly"
                ? ` ($${price * 12}/year)`
                : ` ($${price * 3}/quarter)`}
            </div>
          </>
        ) : (
          <span className="text-3xl font-bold text-gray-400">Custom price</span>
        )}
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-4 w-4 text-purple-500" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button
        onClick={buttonAction}
        className={`w-full ${
          buttonText === "Current Plan"
            ? "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-default"
            : buttonText === "Contact Sales"
            ? "bg-white text-purple-500 border-2 border-purple-500 hover:bg-purple-50"
            : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Subscription = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const handleSubscribe = async (isYearly: boolean) => {
    try {
      const { data, error } = await supabase.functions.invoke(
        "create-checkout",
        {
          body: { isYearly },
        }
      );

      if (error) throw error;
      if (data?.url) window.location.href = data.url;
    } catch (error) {
      console.error("Error:", error);
      // Handle error (show toast, etc.)
    }
  };

  const plans = [
    {
      title: "Free",
      price: 0,
      description: "Perfect for getting started",
      features: [
        "Basic features",
        "Up to 1,000 records",
        "Community support",
        "Basic analytics",
      ],
      buttonText: "Current Plan",
      buttonAction: () => {},
      isPopular: false,
    },
    {
      title: "Pro",
      price: isYearly ? 30 : 35,
      description: "Best for growing businesses",
      features: [
        "All Free features",
        "Unlimited records",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access",
      ],
      buttonText: "Subscribe Now",
      buttonAction: () => handleSubscribe(isYearly),
      isPopular: false,
    },
    {
      title: "Enterprise",
      price: null,
      description: "For large-scale operations",
      features: [
        "All Pro features",
        "Dedicated support",
        "Custom SLA",
        "Advanced security",
        "Custom training",
        "Multiple team workspaces",
      ],
      buttonText: "Contact Sales",
      buttonAction: () =>
        (window.location.href = "mailto:sales@yourdomain.com"),
      isPopular: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        <BillingToggle isYearly={isYearly} onToggle={setIsYearly} />

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              billingPeriod={isYearly ? "yearly" : "quarterly"}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Need help choosing?{" "}
            <a href="#" className="text-purple-500 hover:text-purple-600">
              Talk to our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
