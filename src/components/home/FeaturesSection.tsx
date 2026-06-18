import {
  Calendar,
  ImageIcon,
  BarChart3,
  Upload,
} from "lucide-react";

import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
  {
    icon: (
      <FaInstagram className="w-8 h-8 text-pink-500" />
    ),
    title: "Instagram Publishing",
    description:
      "Publish reels automatically to Instagram Business accounts.",
  },

  {
    icon: (
      <FaFacebook className="w-8 h-8 text-blue-600" />
    ),
    title: "Facebook Publishing",
    description:
      "Cross-post videos directly to Facebook pages.",
  },

  {
    icon: (
      <ImageIcon className="w-8 h-8 text-indigo-600" />
    ),
    title: "Media Library",
    description:
      "Upload and reuse images and videos anytime.",
  },

  {
    icon: (
      <Calendar className="w-8 h-8 text-indigo-600" />
    ),
    title: "Smart Scheduler",
    description:
      "Schedule posts and publish automatically.",
  },

  {
    icon: (
      <Upload className="w-8 h-8 text-indigo-600" />
    ),
    title: "Bulk Upload",
    description:
      "Upload multiple posts and manage content easily.",
  },

  {
    icon: (
      <BarChart3 className="w-8 h-8 text-indigo-600" />
    ),
    title: "Analytics",
    description:
      "Track published posts and performance.",
  },
];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Powerful Features
          </h2>

          <p className="text-gray-500 mt-4">
            Everything you need to automate social media publishing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-sm
                hover:shadow-lg
                transition
              "
            >
              {feature.icon}

              <h3 className="text-xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}