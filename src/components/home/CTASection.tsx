import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-indigo-600">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">

          Ready to automate your social media?

        </h2>

        <p className="mt-6 text-indigo-100 text-lg">

          Save time and manage all your brands from one platform.

        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            href="/register"
            className="
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
          </Link>

          <Link
            href="/pricing"
            className="
            border
            border-white
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:bg-indigo-500
            transition
            "
          >
            View Pricing
          </Link>

        </div>

      </div>

    </section>
  );
}