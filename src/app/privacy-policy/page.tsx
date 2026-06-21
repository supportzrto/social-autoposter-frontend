import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <div className="bg-gray-50">

        {/* Hero */}

        <section className="py-32">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="text-indigo-600 font-semibold mb-6">
              PRIVACY POLICY
            </p>

            <h1 className="text-6xl font-bold text-gray-900">
              Your privacy matters.
            </h1>

            <p className="mt-8 text-xl text-gray-500 leading-8">
              We are committed to protecting your personal information and
              providing transparency about how SocialPoster uses data.
            </p>

          </div>

        </section>

        {/* Content */}

        <section className="pb-32">

          <div className="max-w-5xl mx-auto px-6">

            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-12 space-y-14">

              {/* Information */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Information We Collect
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  SocialPoster may collect information such as your name,
                  email address, connected social media accounts and content
                  required to provide our services.
                </p>

              </div>

              {/* Usage */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  How We Use Your Information
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  We use your information to provide social media automation,
                  improve our platform, deliver support and enhance your
                  experience.
                </p>

              </div>

              {/* Cookies */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Cookies
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  Cookies help us maintain sessions and improve the
                  performance and usability of the platform.
                </p>

              </div>

              {/* Third Party */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Third-Party Services
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  SocialPoster integrates with third-party services such as
                  Meta, Instagram, Facebook, Cloudinary and payment providers
                  to deliver its functionality.
                </p>

              </div>

              {/* Security */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Data Security
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  We implement industry-standard measures to protect user
                  information and maintain the integrity of our systems.
                </p>

              </div>

              {/* Contact */}

              <div>

                <h2 className="text-3xl font-bold text-gray-900">
                  Contact Us
                </h2>

                <p className="mt-6 text-gray-500 leading-8">
                  If you have any questions regarding this Privacy Policy,
                  please contact us at:
                </p>

                <div className="mt-6 bg-gray-50 rounded-2xl p-6">

                  <p className="font-semibold text-gray-900">
                    support@socialposter.com
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}
