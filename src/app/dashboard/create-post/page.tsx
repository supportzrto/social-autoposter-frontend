"use client";

import { useEffect, useState } from "react";

export default function CreatePostPage() {

  const API_URL =
    "https://socailautoposterbackend-production.up.railway.app";

  const [title, setTitle] = useState("");

  const [caption, setCaption] = useState("");

  const [scheduleTime, setScheduleTime] =
    useState("");

  const [media, setMedia] = useState<any[]>([]);

  const [selectedMedia, setSelectedMedia] =
    useState<string[]>([]);

  const fetchMedia = async () => {

    const response = await fetch(
      `${API_URL}/media`,
      {
        credentials: "include",
      }
    );

    const data = await response.json();

    setMedia(data);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const toggleMedia = (url: string) => {

    setSelectedMedia((prev) => {

      if (prev.includes(url)) {

        return prev.filter(
          (item) => item !== url
        );
      }

      return [...prev, url];
    });
  };

  const createPost = async () => {

    if (!title) {
      alert("Title required");
      return;
    }

    if (
      selectedMedia.length === 0
    ) {
      alert(
        "Select at least one media"
      );
      return;
    }

    const response = await fetch(
      `${API_URL}/posts`,
      {
        method: "POST",

        credentials: "include",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          title,
          caption,

          media_urls:
            selectedMedia,

          media_type:
            selectedMedia.length > 1
              ? "CAROUSEL"
              : "IMAGE",

          platforms: [
            "INSTAGRAM",
          ],

          schedule_time:
            scheduleTime,

          status: "PENDING",
        }),
      }
    );

    if (response.ok) {

      alert(
        "Post created successfully"
      );

      setTitle("");
      setCaption("");
      setScheduleTime("");
      setSelectedMedia([]);
    }
  };

  return (
    <div className="p-6 max-w-6xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Post
      </h1>

      <div className="space-y-4">

        <input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Title"
          className="
          w-full
          border
          rounded-lg
          p-3
          "
        />

        <textarea
          value={caption}
          onChange={(e) =>
            setCaption(
              e.target.value
            )
          }
          placeholder="Caption"
          rows={5}
          className="
          w-full
          border
          rounded-lg
          p-3
          "
        />

        <input
          type="datetime-local"
          value={scheduleTime}
          onChange={(e) =>
            setScheduleTime(
              e.target.value
            )
          }
          className="
          border
          rounded-lg
          p-3
          "
        />

      </div>

      <h2
        className="
        mt-8 mb-4
        text-lg
        font-semibold
        "
      >
        Select Media
      </h2>

      <div
        className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-4
        "
      >

        {media.map((item) => (

          <div
            key={item.id}
            onClick={() =>
              toggleMedia(
                item.url
              )
            }
            className={`
              border
              rounded-lg
              overflow-hidden
              cursor-pointer

              ${
                selectedMedia.includes(
                  item.url
                )
                  ? "ring-4 ring-indigo-500"
                  : ""
              }
            `}
          >

            {item.resource_type ===
            "image" ? (

              <img
                src={item.url}
                alt=""
                className="
                w-full
                h-40
                object-cover
                "
              />

            ) : (

              <video
                className="
                w-full
                h-40
                object-cover
                "
              >
                <source
                  src={item.url}
                />
              </video>

            )}

          </div>

        ))}

      </div>

      <button
        onClick={createPost}
        className="
        mt-8
        bg-indigo-600
        text-white
        px-6
        py-3
        rounded-lg
        font-medium
        "
      >
        Create Post
      </button>

    </div>
  );
}