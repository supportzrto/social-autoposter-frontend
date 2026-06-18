import {
  Link2,
  ImageIcon,
  CalendarDays,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Connect Accounts",
    description:
      "Connect your Facebook and Instagram Business accounts securely.",
  },

  {
    icon: ImageIcon,
    title: "Upload Media",
    description:
      "Upload images and videos to your media library.",
  },

  {
    icon: CalendarDays,
    title: "Schedule Posts",
    description:
      "Select date and time for publishing your content.",
  },

  {
    icon: Rocket,
    title: "Auto Publish",
    description:
      "SocialPoster automatically publishes your posts.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-4 text-gray-500">
            Get started in minutes with four simple steps.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="
                bg-gray-50
                rounded-3xl
                p-8
                text-center
                shadow-sm
                hover:shadow-lg
                transition
                "
              >

                <div
                  className="
                  w-16
                  h-16
                  mx-auto
                  rounded-2xl
                  bg-indigo-100
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon className="w-8 h-8 text-indigo-600" />
                </div>

                <div className="mt-6">

                  <div
                    className="
                    text-indigo-600
                    font-bold
                    text-sm
                    mb-2
                    "
                  >
                    STEP {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 mt-3">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}