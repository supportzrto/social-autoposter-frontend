import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for trying SocialPoster.",
    features: ["1 Brand", "20 Posts / Month", "Media Library", "Basic Support"],
  },

  {
    name: "Pro",
    price: "₹499",
    description: "Best for creators and small businesses.",
    popular: true,
    features: [
      "10 Brands",
      "Unlimited Posts",
      "Media Library",
      "Analytics",
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
      "Analytics",
      "Team Members",
      "Priority Support",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}

      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Simple Pricing</h1>

        <p className="mt-5 text-lg text-gray-500">
          Choose a plan that fits your business.
        </p>
      </section>

      {/* Pricing Cards */}

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                bg-white
                rounded-3xl
                shadow-sm
                p-10
                border
                ${plan.popular ? "border-indigo-600" : "border-gray-200"}
              `}
            >
              {plan.popular && (
                <div
                  className="
                  inline-block
                  px-3 py-1
                  rounded-full
                  bg-indigo-600
                  text-white
                  text-xs
                  mb-5
                  "
                >
                  Most Popular
                </div>
              )}

              <h2 className="text-3xl font-bold">{plan.name}</h2>

              <div className="mt-5">
                <span className="text-5xl font-bold">{plan.price}</span>

                <span className="text-gray-500">/month</span>
              </div>

              <p className="mt-5 text-gray-500">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-700">
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/register"
                className="
                mt-10
                block
                text-center
                bg-indigo-600
                text-white
                py-3
                rounded-xl
                font-medium
                hover:bg-indigo-700
                transition
                "
              >
                Get Started
              </Link>

              {/* Feature Comparison */}

              <section className="bg-white py-24">
                <div className="max-w-6xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">Compare Plans</h2>

                    <p className="text-gray-500 mt-4">
                      Find the perfect plan for your needs.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-2xl overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="p-5 text-left">Features</th>

                          <th className="p-5">Free</th>

                          <th className="p-5">Pro</th>

                          <th className="p-5">Agency</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t">
                          <td className="p-5">Brands</td>

                          <td className="text-center">1</td>

                          <td className="text-center">10</td>

                          <td className="text-center">Unlimited</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-5">Posts / Month</td>

                          <td className="text-center">20</td>

                          <td className="text-center">Unlimited</td>

                          <td className="text-center">Unlimited</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-5">Media Library</td>

                          <td className="text-center">Yes</td>

                          <td className="text-center">Yes</td>

                          <td className="text-center">Yes</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-5">Analytics</td>

                          <td className="text-center">No</td>

                          <td className="text-center">Yes</td>

                          <td className="text-center">Yes</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-5">Team Members</td>

                          <td className="text-center">No</td>

                          <td className="text-center">No</td>

                          <td className="text-center">Yes</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-5">Priority Support</td>

                          <td className="text-center">No</td>

                          <td className="text-center">Yes</td>

                          <td className="text-center">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* FAQ */}

              <section className="py-24 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold">
                        Can I cancel anytime?
                      </h3>

                      <p className="text-gray-500 mt-3">
                        Yes. You can cancel your subscription at any time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        Can I upgrade later?
                      </h3>

                      <p className="text-gray-500 mt-3">
                        Absolutely. Upgrade or downgrade whenever you need.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold">
                        Is there a free plan?
                      </h3>

                      <p className="text-gray-500 mt-3">
                        Yes. You can start using SocialPoster completely free.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-24 bg-indigo-600">
                <div className="max-w-5xl mx-auto px-6 text-center">
                  <h2 className="text-5xl font-bold text-white">
                    Ready to automate your social media?
                  </h2>

                  <p className="mt-6 text-indigo-100">
                    Join SocialPoster and save hours every week.
                  </p>

                  <a
                    href="/register"
                    className="
      inline-block
      mt-10
      bg-white
      text-indigo-600
      px-8
      py-4
      rounded-xl
      font-semibold
      hover:bg-gray-100
      transition
      "
                  >
                    Get Started Free
                  </a>
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
