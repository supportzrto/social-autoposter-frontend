"use client";

import { useState } from "react";

export default function UploadPage() {

  const [file, setFile] =
    useState<File | null>(null);

  const uploadExcel = async () => {

    if (!file) return;

    const formData =
      new FormData();

    formData.append(
      "file",
      file
    );

    const response =
      await fetch(
        "https://socailautoposterbackend-production.up.railway.app/upload/excel",
        {
          method: "POST",
          body: formData,
          credentials: "include"
        }
      );

    const data =
      await response.json();

    console.log(data);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Upload Excel
      </h1>

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] || null
          )
        }
      />

      <button
        onClick={uploadExcel}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded"
      >
        Upload
      </button>

    </div>
  );
}