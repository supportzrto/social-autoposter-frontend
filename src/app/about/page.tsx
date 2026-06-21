import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Rocket,
  Layers3,
  BarChart3,
  ShieldCheck,
  Zap,
  TimerReset,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50">

        {/* Hero */}

        <section className="py-32">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <p className="text-indigo-600 font-semibold tracking-widest mb-6">
              ABOUT SOCIALPOSTER
            </p>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight text-gray-900">
              Building the future of{" "}
              <span className="text-indigo-600">
                social media automation.
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-10 text-xl text-gray-500 leading-9">
              SocialPoster helps creators, startups and agencies automate
              Instagram and Facebook publishing from one powerful dashboard.
            </p>

          </div>

        </section>

        {/* Mission */}

        <section className="bg-white py-28">

          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <p className="text-indigo-600 font-semibold mb-5">
                OUR MISSION
              </p>

              <h2 className="text-5xl font-bold leading-tight text-gray-900">

                Helping businesses spend less time posting and more time growing.

              </h2>

            </div>

            <div>

              <p className="text-lg text-gray-500 leading-9">

                We believe social media management should be simple,
                automated and accessible to everyone.

                SocialPoster enables businesses to manage brands,
                schedule posts and save hours every week.

              </p>

            </div>

          </div>

        </section>

        {/* Why SocialPoster */}

        <section className="py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="text-5xl font-bold text-gray-900">
                Why businesses choose SocialPoster
              </h2>

              <p className="mt-5 text-gray-500 text-lg">
                Everything you need to grow your brand faster.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <Rocket className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-8 text-2xl font-bold">
                  Smart Scheduling
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  Schedule and publish content automatically across your
                  social platforms.
                </p>

              </div>

              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <Layers3 className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-8 text-2xl font-bold">
                  Multi Brand Management
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  Manage multiple businesses from one dashboard.
                </p>

              </div>

              <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">

                <BarChart3 className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-8 text-2xl font-bold">
                  Analytics
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  Understand performance and grow faster with insights.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Stats */}

        <section className="bg-white py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="grid md:grid-cols-4 gap-10 text-center">

              <div>

                <h2 className="text-6xl font-bold text-indigo-600">
                  1000+
                </h2>

                <p className="mt-4 text-gray-500">
                  Posts Published
                </p>

              </div>

              <div>

                <h2 className="text-6xl font-bold text-indigo-600">
                  100+
                </h2>

                <p className="mt-4 text-gray-500">
                  Brands Managed
                </p>

              </div>

              <div>

                <h2 className="text-6xl font-bold text-indigo-600">
                  24/7
                </h2>

                <p className="mt-4 text-gray-500">
                  Automation
                </p>

              </div>

              <div>

                <h2 className="text-6xl font-bold text-indigo-600">
                  99.9%
                </h2>

                <p className="mt-4 text-gray-500">
                  Uptime
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Values */}

        <section className="py-28">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16">

              <h2 className="text-5xl font-bold">
                Our Values
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-3xl p-10">

                <ShieldCheck className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  Reliability
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  Your content should always publish on time.
                </p>

              </div>

              <div className="bg-white rounded-3xl p-10">

                <Zap className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  Speed
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  Manage everything in minutes instead of hours.
                </p>

              </div>

              <div className="bg-white rounded-3xl p-10">

                <TimerReset className="w-12 h-12 text-indigo-600" />

                <h3 className="mt-6 text-2xl font-bold">
                  Simplicity
                </h3>

                <p className="mt-5 text-gray-500 leading-8">
                  Powerful tools without complicated workflows.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Vision */}

        <section className="py-32 bg-white">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-5xl font-bold leading-tight text-gray-900">

              Our vision is to become the easiest and most reliable platform
              for social media automation.

            </h2>

          </div>

        </section>

        {/* CTA */}

        <section className="py-28 bg-linear-to-r from-indigo-600 to-purple-600">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-5xl font-bold text-white">
              Ready to automate your social media?
            </h2>

            <p className="mt-6 text-indigo-100 text-lg">
              Join SocialPoster and save hours every week.
            </p>

            <Link
              href="/register"
              className="inline-block mt-10 bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
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

