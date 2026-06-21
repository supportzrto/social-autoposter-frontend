import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Rocket,
  Layers3,
  Clock3,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50">

        {/* Hero Section */}

        <section className="py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <h1 className="text-6xl font-bold text-gray-900">
              About SocialPoster
            </h1>

            <p className="mt-8 text-xl text-gray-500 leading-8">
              SocialPoster helps businesses automate Instagram and Facebook
              publishing from one powerful platform.
            </p>

          </div>

        </section>

        {/* Mission Section */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-4xl font-bold text-gray-900">
                Our Mission
              </h2>

              <p className="mt-8 text-gray-500 leading-8 text-lg">

                We believe social media management should be simple,
                automated, and accessible to everyone.

                SocialPoster enables creators, startups, and agencies to
                schedule content, manage brands, and save hours every week.

              </p>

            </div>

            <div className="bg-indigo-50 rounded-3xl p-10">

              <h3 className="text-3xl font-bold text-gray-900">
                Save Time
              </h3>

              <p className="mt-5 text-gray-500 leading-8">

                Spend less time posting manually and more time growing
                your business.

              </p>

            </div>

          </div>

        </section>

        {/* Why SocialPoster */}

        <section className="py-24">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="text-4xl font-bold">
                Why SocialPoster?
              </h2>

              <p className="mt-4 text-gray-500">
                Everything you need to manage social media efficiently.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              {/* Card 1 */}

              <div className="bg-white p-10 rounded-3xl shadow-sm">

                <Rocket className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  Automation
                </h3>

                <p className="mt-4 text-gray-500 leading-7">
                  Schedule and publish content automatically without
                  manual effort.
                </p>

              </div>

              {/* Card 2 */}

              <div className="bg-white p-10 rounded-3xl shadow-sm">

                <Layers3 className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  Multi Brand
                </h3>

                <p className="mt-4 text-gray-500 leading-7">
                  Manage multiple businesses and brands from one
                  dashboard.
                </p>

              </div>

              {/* Card 3 */}

              <div className="bg-white p-10 rounded-3xl shadow-sm">

                <Clock3 className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  Simplicity
                </h3>

                <p className="mt-4 text-gray-500 leading-7">
                  A simple and intuitive platform without complicated
                  workflows.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Statistics */}

        <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-3 gap-8 text-center">

              <div>

                <h2 className="text-5xl font-bold text-indigo-600">
                  1000+
                </h2>

                <p className="mt-4 text-gray-500">
                  Posts Published
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-bold text-indigo-600">
                  100+
                </h2>

                <p className="mt-4 text-gray-500">
                  Brands Managed
                </p>

              </div>

              <div>

                <h2 className="text-5xl font-bold text-indigo-600">
                  24/7
                </h2>

                <p className="mt-4 text-gray-500">
                  Automation
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Vision */}

        <section className="py-24">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-4xl font-bold">
              Our Vision
            </h2>

            <p className="mt-8 text-lg text-gray-500 leading-8">

              To become the easiest and most reliable social media
              automation platform for creators, startups, and agencies.

            </p>

          </div>

        </section>

        {/* CTA */}

        <section className="py-24 bg-indigo-600">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-5xl font-bold text-white">
              Ready to automate your social media?
            </h2>

            <p className="mt-6 text-indigo-100 text-lg">
              Start managing your content more efficiently today.
            </p>

            <Link
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
            </Link>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

