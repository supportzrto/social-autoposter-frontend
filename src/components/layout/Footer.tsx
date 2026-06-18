import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              SocialPoster
            </h2>

            <p className="mt-5">
              Automate Instagram and Facebook publishing
              with ease.
            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Product
            </h3>

            <div className="space-y-3">

              <Link href="/">
                <p>Home</p>
              </Link>

              <Link href="/pricing">
                <p>Pricing</p>
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Company
            </h3>

            <div className="space-y-3">

              <Link href="/about">
                <p>About</p>
              </Link>

              <Link href="/contact">
                <p>Contact</p>
              </Link>

            </div>

          </div>

          {/* Support */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Support
            </h3>

            <div className="space-y-3">

              <Link href="/login">
                <p>Login</p>
              </Link>

              <Link href="/register">
                <p>Register</p>
              </Link>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center">

          © 2026 SocialPoster. All rights reserved.

        </div>

      </div>

    </footer>
  );
}