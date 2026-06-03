'use client';

import { X } from 'lucide-react';

type Props = {
  post: any;
  open: boolean;
  onClose: () => void;
};

export default function PostDetailsModal({
  post,
  open,
  onClose,
}: Props) {

  if (!open || !post) return null;

  return (
    <div
      className="
      fixed inset-0 z-50
      flex items-center justify-center
      bg-black/40 backdrop-blur-sm
      p-4
      "
    >

      <div
        className="
        w-full max-w-2xl
        bg-white rounded-2xl
        shadow-2xl overflow-hidden
        "
      >

        {/* Header */}
        <div
          className="
          flex items-center justify-between
          px-6 py-4
          border-b border-gray-100
          "
        >

          <div>

            <h2
              className="
              text-xl font-semibold
              text-gray-900
              "
            >
              Post Details
            </h2>

            <p
              className="
              text-sm text-gray-500
              mt-1
              "
            >
              View scheduled post information
            </p>

          </div>

          <button
            onClick={onClose}
            className="
            w-9 h-9 rounded-lg
            border border-gray-200
            flex items-center justify-center
            hover:bg-gray-100
            transition-colors
            "
          >

            <X
              size={16}
              className="text-gray-500"
            />

          </button>

        </div>

        {/* Body */}
        <div className="p-6">

          {/* Media Preview */}
          <div
            className="
            w-full h-72
            rounded-2xl
            bg-gray-100
            border border-gray-200
            overflow-hidden
            mb-6
            "
          >

            {post.media_type === 'VIDEO' ? (

              <video
                controls
                className="
                w-full h-full
                object-cover
                "
              >
                <source
                  src={post.media_urls?.[0]}
                />
              </video>

            ) : (

              <img
                src={post.media_urls?.[0]}
                alt={post.title}
                className="
                w-full h-full
                object-cover
                "
              />

            )}

          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-5">

            <div>

              <p className="text-sm text-gray-500">
                Title
              </p>

              <p
                className="
                font-medium
                text-gray-900
                mt-1
                "
              >
                {post.title}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Media Type
              </p>

              <p
                className="
                font-medium
                text-gray-900
                mt-1 capitalize
                "
              >
                {post.media_type}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Platforms
              </p>

              <div
                className="
                flex gap-2 flex-wrap
                mt-2
                "
              >

                {post.platforms?.map(
                  (platform: string) => (

                    <span
                      key={platform}
                      className="
                      px-2 py-1 rounded-md
                      text-xs
                      bg-indigo-50
                      text-indigo-700
                      "
                    >
                      {platform}
                    </span>

                  )
                )}

              </div>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Scheduled At
              </p>

              <p
                className="
                font-medium
                text-gray-900
                mt-1
                "
              >
                {new Date(
  post.schedule_time
).toLocaleString(
  "en-IN",
  {
    timeZone: "Asia/Kolkata",
  }
)}
              </p>

            </div>

            <div>

              <p className="text-sm text-gray-500">
                Status
              </p>

              <p
                className="
                font-medium
                text-gray-900
                mt-1 capitalize
                "
              >
                {post.status}
              </p>

            </div>

          </div>

          {/* Caption */}
          <div className="mt-6">

            <p className="text-sm text-gray-500">
              Caption
            </p>

            <div
              className="
              mt-2
              p-4
              rounded-xl
              bg-gray-50
              border border-gray-100
              "
            >

              <p
                className="
                text-sm
                text-gray-700
                whitespace-pre-wrap
                "
              >
                {post.caption || 'No caption'}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}