import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for getting started.",
    features: [
      "1 Brand",
      "20 Posts / Month",
      "Media Library",
    ],
  },

  {
    name: "Pro",
    price: "₹499",
    description: "For creators and growing businesses.",
    popular: true,
    features: [
      "10 Brands",
      "Unlimited Posts",
      "Media Library",
      "Priority Support",
    ],
  },

  {
    name: "Agency",
    price: "₹1499",
    description: "Built for agencies and teams.",
    features: [
      "Unlimited Brands",
      "Unlimited Posts",
      "Team Members",
      "Priority Support",
    ],
  },
];

export default function PricingPreview() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Pricing Plans
          </h2>

          <p className="text-gray-500 mt-4">
            Simple and transparent pricing.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`
              rounded-3xl
              bg-white
              p-8
              shadow-sm
              border
              ${
                plan.popular
                  ? "border-indigo-600"
                  : "border-gray-200"
              }
              `}
            >

              {plan.popular && (

                <div
                  className="
                  inline-block
                  bg-indigo-600
                  text-white
                  px-3 py-1
                  rounded-full
                  text-xs
                  mb-5
                  "
                >
                  Most Popular
                </div>

              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <div className="mt-5">

                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-gray-500">
                  /month
                </span>

              </div>

              <p className="mt-5 text-gray-500">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="text-gray-600"
                  >
                    ✓ {feature}
                  </li>

                ))}

              </ul>

              <Link
                href="/register"
                className="
                mt-8
                block
                text-center
                bg-indigo-600
                text-white
                py-3
                rounded-xl
                hover:bg-indigo-700
                transition
                "
              >
                Get Started
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}