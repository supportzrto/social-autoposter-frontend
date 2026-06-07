"use client";

import { useEffect, useState } from "react";

interface Media {
  id: number;
  url: string;
  resource_type: string;
}

export default function MediaPage() {
  const [media, setMedia] = useState<Media[]>([]);
  const [uploading, setUploading] = useState(false);

  const API_URL =
    "https://social-poster-app.up.railway.app";

  const fetchMedia = async () => {
    try {
      const response = await fetch(
        `${API_URL}/media`,
        {
          credentials: "include",
        }
      );

      const data = await response.json();

      setMedia(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const uploadFile = async (
    file: File
  ) => {
    const formData = new FormData();

    formData.append("file", file);

    setUploading(true);

    try {
      const response = await fetch(
        `${API_URL}/media/upload`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (response.ok) {
        fetchMedia();
      }
    } catch (error) {
      console.error(error);
    }

    setUploading(false);
  };

  const deleteMedia = async (
    id: number
  ) => {
    const confirmDelete =
      window.confirm(
        "Delete this media?"
      );

    if (!confirmDelete) return;

    await fetch(
      `${API_URL}/media/${id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );

    fetchMedia();
  };

  return (
    <div className="p-6">

      <div className="flex items-center justify-between mb-6">

        <h1 className="text-2xl font-bold">
          Media Library
        </h1>

        <label
          className="
          cursor-pointer
          bg-indigo-600
          text-white
          px-4 py-2
          rounded-lg
          text-sm
          font-medium
          "
        >
          {uploading
            ? "Uploading..."
            : "Upload Media"}

          <input
            hidden
            type="file"
            accept="
              image/*,
              video/*
            "
            onChange={(e) => {

              const file =
                e.target.files?.[0];

              if (!file) return;

              uploadFile(file);
            }}
          />
        </label>

      </div>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-5
        "
      >
        {media.map((item) => (

          <div
            key={item.id}
            className="
            bg-white
            border
            border-gray-200
            rounded-xl
            overflow-hidden
            "
          >

            {item.resource_type ===
            "image" ? (

              <img
                src={item.url}
                alt=""
                className="
                w-full
                h-48
                object-cover
                "
              />

            ) : (

              <video
                controls
                className="
                w-full
                h-48
                object-cover
                "
              >
                <source
                  src={item.url}
                />
              </video>

            )}

            <div className="p-3">

              <p
                className="
                text-xs
                text-gray-500
                mb-3
                "
              >
                {item.resource_type}
              </p>

              <button
                onClick={() =>
                  deleteMedia(
                    item.id
                  )
                }
                className="
                text-red-500
                text-sm
                font-medium
                "
              >
                Delete
              </button>

            </div>

          </div>

        ))}
      </div>

    </div>
  );
}