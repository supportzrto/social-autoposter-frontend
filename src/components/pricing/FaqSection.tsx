"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel your subscription whenever you want.",
  },
  {
    question: "Can I upgrade later?",
    answer:
      "Absolutely. Upgrade or downgrade your plan anytime.",
  },
  {
    question: "Do you offer a free plan?",
    answer:
      "Yes. SocialPoster provides a free plan to get started.",
  },
  {
    question: "Will I lose my posts if I downgrade?",
    answer:
      "No. Your data is safe and can be accessed again after upgrading.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need to know.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="bg-white rounded-2xl border border-gray-200"
            >

              <button
                className="
                w-full
                flex
                items-center
                justify-between
                p-6
                text-left
                "
                onClick={() =>
                  setOpenIndex(
                    openIndex === index
                      ? null
                      : index
                  )
                }
              >

                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition ${
                    openIndex === index
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {openIndex === index && (

                <div className="px-6 pb-6 text-gray-500">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}