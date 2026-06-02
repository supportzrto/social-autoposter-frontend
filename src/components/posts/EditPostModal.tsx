"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

type Props = {
  post: any;
  open: boolean;
  onClose: () => void;

  posts: any[];

  setPosts: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function EditPostModal({
  post,
  open,
  onClose,

  posts,
  setPosts,
}: Props) {
  const API_URL = "https://socailautoposterbackend-production.up.railway.app";

  const [title, setTitle] = useState("");

  const [caption, setCaption] = useState("");

  const [status, setStatus] = useState("PENDING");

  const [scheduleTime, setScheduleTime] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");

      setCaption(post.caption || "");

      setStatus(post.status || "PENDING");

      setScheduleTime(
        post.schedule_time ? post.schedule_time.slice(0, 16) : "",
      );
    }
  }, [post]);

  if (!open || !post) return null;

  const handleSave = async () => {
    try {
      const response = await fetch(`${API_URL}/posts/${post.id}`, {
        method: "PUT",

        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title,
          caption,

          media_urls: post.media_urls,

          media_type: post.media_type,

          platforms: post.platforms,

          schedule_time: new Date(scheduleTime).toISOString(),

          status,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.detail || "Failed to update post");

        return;
      }

      const updatedPosts = posts.map((item) =>
        item.id === post.id ? data : item,
      );

      setPosts(updatedPosts);

      toast.success("Post updated successfully");

      onClose();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div
      className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40 backdrop-blur-sm p-4
            "
    >
      <div
        className="
                w-full max-w-2xl
                bg-white rounded-2xl
                shadow-2xl overflow-hidden
                "
      >
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
              Edit Post
            </h2>

            <p
              className="
                            text-sm text-gray-500 mt-1
                            "
            >
              Update post details
            </p>
          </div>

          <button
            onClick={onClose}
            className="
                        w-9 h-9 rounded-lg
                        border border-gray-200
                        flex items-center justify-center
                        hover:bg-gray-100
                        "
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label
              className="
                            text-sm text-gray-500
                            "
            >
              Title
            </label>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="
                            w-full h-11 px-4 mt-1
                            rounded-xl border border-gray-200
                            "
            />
          </div>

          <div>
            <label
              className="
                            text-sm text-gray-500
                            "
            >
              Caption
            </label>

            <textarea
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              rows={4}
              className="
                            w-full p-4 mt-1
                            rounded-xl border border-gray-200
                            "
            />
          </div>

          <div>
            <label
              className="
                            text-sm text-gray-500
                            "
            >
              Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="
                            w-full h-11 px-4 mt-1
                            rounded-xl border border-gray-200
                            "
            >
              <option value="PENDING">PENDING</option>

              <option value="PUBLISHED">PUBLISHED</option>

              <option value="FAILED">FAILED</option>
            </select>
          </div>

          <div>
            <label
              className="
                            text-sm text-gray-500
                            "
            >
              Schedule Time
            </label>

            <input
              type="datetime-local"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="
                            w-full h-11 px-4 mt-1
                            rounded-xl border border-gray-200
                            "
            />
          </div>

          <div
            className="
                        flex justify-end gap-3 pt-3
                        "
          >
            <button
              onClick={onClose}
              className="
                            h-11 px-5 rounded-xl
                            border border-gray-200
                            "
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              className="
                            h-11 px-5 rounded-xl
                            bg-indigo-600 text-white
                            "
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
