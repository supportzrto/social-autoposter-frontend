import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FaqSection from "@/components/pricing/FaqSection";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for getting started and exploring SocialPoster.",
    buttonText: "Start Free",
    features: ["1 Brand", "20 Posts / Month", "Media Library", "Basic Support"],
  },

  {
    name: "Pro",
    price: "₹499",
    description: "Designed for creators and growing businesses.",
    popular: true,
    buttonText: "Get Started",
    features: [
      "10 Brands",
      "Unlimited Posts",
      "Media Library",
      "Analytics",
      "API Access",
      "Priority Support",
    ],
  },

  {
    name: "Agency",
    price: "₹1499",
    description: "Built for agencies managing multiple clients and teams.",
    buttonText: "Contact Sales",
    features: [
      "Unlimited Brands",
      "Unlimited Posts",
      "Advanced Analytics",
      "API Access",
      "Team Members",
      "Priority Support",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50 min-h-screen">
        {/* Hero */}

        <section className="py-32">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-indigo-600 font-semibold tracking-widest mb-6">
              PRICING
            </p>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-gray-900">
              Simple pricing for every stage of your growth.
            </h1>

            <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-500 leading-9">
              Whether you're a creator, startup or agency, SocialPoster grows
              with you.
            </p>
          </div>
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
shadow-md
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
p-10
border
relative
${plan.popular ? "border-2 border-indigo-600 scale-105" : "border-gray-200"}
`}
              >
                {plan.popular && (
                  <div className="inline-block px-3 py-1 rounded-full bg-indigo-600 text-white text-xs mb-5">
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
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-green-500 font-bold">✓</span>

                      {feature}
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
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:bg-indigo-700
                  transition
                "
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Compare Plans */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Compare Plans</h2>

              <p className="text-gray-500 mt-4">
                Find the perfect plan for your needs.
              </p>
            </div>
            <div className="overflow-x-auto">
              <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-6 text-left text-lg font-semibold">
                        Features
                      </th>

                      <th className="p-6 font-semibold">Free</th>

                      <th className="p-6 font-semibold text-indigo-600">Pro</th>

                      <th className="p-6 font-semibold">Agency</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-t">
                      <td className="p-6 font-medium">Brands</td>

                      <td className="text-center">1</td>

                      <td className="text-center">10</td>

                      <td className="text-center">Unlimited</td>
                    </tr>

                    <tr className="border-t bg-gray-50">
                      <td className="p-6 font-medium">Posts / Month</td>

                      <td className="text-center">20</td>

                      <td className="text-center">Unlimited</td>

                      <td className="text-center">Unlimited</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-6 font-medium">Media Library</td>

                      <td className="text-center">Yes</td>

                      <td className="text-center">Yes</td>

                      <td className="text-center">Yes</td>
                    </tr>

                    <tr className="border-t bg-gray-50">
                      <td className="p-6 font-medium">Analytics</td>

                      <td className="text-center">No</td>

                      <td className="text-center">Yes</td>

                      <td className="text-center">Yes</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-6 font-medium">API Access</td>

                      <td className="text-center">No</td>

                      <td className="text-center">Yes</td>

                      <td className="text-center">Yes</td>
                    </tr>

                    <tr className="border-t bg-gray-50">
                      <td className="p-6 font-medium">Team Members</td>

                      <td className="text-center">No</td>

                      <td className="text-center">No</td>

                      <td className="text-center">Yes</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-6 font-medium">Priority Support</td>

                      <td className="text-center">No</td>

                      <td className="text-center">Yes</td>

                      <td className="text-center">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
        {/* CTA */}

        <section className="py-32 bg-linear-to-r from-indigo-600 to-purple-600">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-indigo-100 font-semibold tracking-widest mb-6">
              START TODAY
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Ready to automate your social media?
            </h2>

            <p className="max-w-2xl mx-auto mt-8 text-xl text-indigo-100 leading-8">
              Start publishing smarter, manage multiple brands, and save hours
              every week with SocialPoster.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
              <Link
                href="/register"
                className="
        bg-white
        text-indigo-600
        px-8
        py-4
        rounded-2xl
        font-semibold
        hover:bg-gray-100
        transition
        "
              >
                Get Started Free
              </Link>

              <Link
                href="/contact"
                className="
        border
        border-white/30
        text-white
        px-8
        py-4
        rounded-2xl
        font-semibold
        hover:bg-white/10
        transition
        "
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
