"use client";

import { useEffect, useState } from "react";

export default function CreatePostPage() {
  const API_URL = "https://socailautoposterbackend-production.up.railway.app";

  const [title, setTitle] = useState("");

  const [caption, setCaption] = useState("");

  const [scheduleTime, setScheduleTime] = useState("");

  const [platforms, setPlatforms] = useState<string[]>(["INSTAGRAM"]);

  const [media, setMedia] = useState<any[]>([]);

  const [selectedMedia, setSelectedMedia] = useState<any[]>([]);

  const togglePlatform = (platform: string) => {
    setPlatforms((prev) => {
      if (prev.includes(platform)) {
        return prev.filter((p) => p !== platform);
      }

      return [...prev, platform];
    });
  };

  const fetchMedia = async () => {
    const response = await fetch(`${API_URL}/media`, {
      credentials: "include",
    });

    const data = await response.json();

    setMedia(data);
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const toggleMedia = (item: any) => {
    setSelectedMedia((prev) => {
      const exists = prev.find((m) => m.id === item.id);

      if (exists) {
        return prev.filter((m) => m.id !== item.id);
      }

      return [...prev, item];
    });
  };

  const createPost = async () => {
    if (!title.trim()) {
      alert("Title required");
      return;
    }

    if (selectedMedia.length === 0) {
      alert("Select at least one media");
      return;
    }

    if (!scheduleTime) {
      alert("Select schedule time");
      return;
    }

    if (platforms.length === 0) {
      alert("Select at least one platform");
      return;
    }

    const payload = {
      title,
      caption,

      media_urls: selectedMedia.map((item) => item.url),

      media_type:
        selectedMedia.length > 1
          ? "CAROUSEL"
          : selectedMedia[0]?.resource_type === "video"
            ? "VIDEO"
            : "IMAGE",

      platforms,

      schedule_time: new Date(scheduleTime).toISOString(),

      status: "PENDING",
    };

    console.log(payload);

    console.log("PAYLOAD:", payload);

    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log("STATUS:", response.status);
      console.log("RESPONSE:", data);

      if (!response.ok) {
        alert(JSON.stringify(data, null, 2));

        return;
      }

      alert("Post created successfully");

      setTitle("");
      setCaption("");
      setScheduleTime("");
      setSelectedMedia([]);
    } catch (error) {
      console.error(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="p-6 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6">Create Post</h1>

      <div className="space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setCaption(e.target.value)}
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
          onChange={(e) => setScheduleTime(e.target.value)}
          className="
          border
          rounded-lg
          p-3
          "
        />
      </div>

      <div className="mt-6">
        <label
          className="
    block text-sm
    font-medium mb-3
    "
        >
          Platforms
        </label>

        <div
          className="
    flex gap-4
    "
        >
          <label
            className="
      flex items-center gap-2
      cursor-pointer
      "
          >
            <input
              type="checkbox"
              checked={platforms.includes("INSTAGRAM")}
              onChange={() => togglePlatform("INSTAGRAM")}
            />
            Instagram
          </label>

          <label
            className="
      flex items-center gap-2
      cursor-pointer
      "
          >
            <input
              type="checkbox"
              checked={platforms.includes("FACEBOOK")}
              onChange={() => togglePlatform("FACEBOOK")}
            />
            Facebook
          </label>
        </div>
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
            onClick={() => toggleMedia(item)}
            className={`
              border
              rounded-lg
              overflow-hidden
              cursor-pointer

              ${
                selectedMedia.some((media) => media.id === item.id)
                  ? "ring-4 ring-indigo-500"
                  : ""
              }
            `}
          >
            {item.resource_type === "image" ? (
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
                <source src={item.url} />
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
