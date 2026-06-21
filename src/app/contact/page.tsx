import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Mail,
  Clock3,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50">

        {/* Hero */}

        <section className="py-32">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="text-indigo-600 font-semibold mb-6">
              CONTACT US
            </p>

            <h1 className="text-6xl font-bold text-gray-900 leading-tight">

              We'd love to hear from you.

            </h1>

            <p className="mt-8 text-xl text-gray-500 leading-8">

              Have questions, feedback or need support?
              Our team is here to help.

            </p>

          </div>

        </section>

        {/* Contact Cards */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">

              <Mail className="w-12 h-12 text-indigo-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Email
              </h3>

              <p className="mt-4 text-gray-500">
                support@socialposter.com
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">

              <Clock3 className="w-12 h-12 text-indigo-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Response Time
              </h3>

              <p className="mt-4 text-gray-500">
                Usually within 24 hours.
              </p>

            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">

              <MessageSquare className="w-12 h-12 text-indigo-600" />

              <h3 className="mt-6 text-2xl font-bold">
                Support
              </h3>

              <p className="mt-4 text-gray-500">
                Available Monday to Friday.
              </p>

            </div>

          </div>

        </section>

        {/* Contact Form */}

        <section className="pb-28">

          <div className="max-w-3xl mx-auto px-6">

            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200">

              <h2 className="text-3xl font-bold text-gray-900">

                Send us a message

              </h2>

              <div className="mt-10 space-y-6">

                <div>

                  <label className="block mb-2 font-medium">
                    Name
                  </label>

                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-600"
                    placeholder="Your name"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-600"
                    placeholder="Your email"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-indigo-600"
                    placeholder="How can we help?"
                  />

                </div>

                <button
                  className="
                  bg-indigo-600
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  hover:bg-indigo-700
                  transition
                  "
                >
                  Send Message
                </button>

              </div>

            </div>

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

            <button
              className="
              mt-10
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
            </button>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}
