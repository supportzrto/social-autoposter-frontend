import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <h1 className="text-6xl font-bold text-gray-900 leading-tight">

              Schedule Instagram & Facebook Posts Automatically

            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-8">

              Manage multiple brands, upload media, schedule posts and
              publish automatically from one platform.

            </p>

            <div className="mt-10 flex gap-5">

              <Link
                href="/register"
                className="
                bg-indigo-600
                hover:bg-indigo-700
                text-white
                px-7
                py-4
                rounded-xl
                font-medium
                "
              >
                Get Started
              </Link>

              <Link
                href="/pricing"
                className="
                border
                border-gray-300
                px-7
                py-4
                rounded-xl
                font-medium
                "
              >
                View Pricing
              </Link>

            </div>

          </div>

          {/* Right */}

          <div>

            <div
              className="
              h-[500px]
              rounded-3xl
              bg-gradient-to-br
              from-indigo-600
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-bold
              "
            >
              Dashboard Preview
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}