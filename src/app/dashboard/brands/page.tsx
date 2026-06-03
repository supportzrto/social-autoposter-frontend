"use client";

import { useEffect, useState } from "react";

type Brand = {
  id: number;
  name: string;
  facebook_page_id?: string;
  instagram_business_id?: string;
};

export default function BrandsPage() {
  const API_URL = "https://socailautoposterbackend-production.up.railway.app";

  const [brands, setBrands] = useState<Brand[]>([]);

  const [name, setName] = useState("");

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${API_URL}/brands`, {
        credentials: "include",
      });

      const data = await response.json();

      setBrands(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const createBrand = async () => {
    if (!name.trim()) return;

    try {
      const response = await fetch(`${API_URL}/brands`, {
        method: "POST",

        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
        }),
      });

      if (!response.ok) return;

      setName("");

      fetchBrands();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBrand = async (
  brandId: number
) => {

  try {

    const response = await fetch(
      `${API_URL}/brands/${brandId}`,
      {
        method: "DELETE",

        credentials: "include",
      }
    );

    if (!response.ok) {

      alert(
        "Failed to delete brand"
      );

      return;
    }

    fetchBrands();

  } catch (error) {

    console.log(error);

  }
};

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1
          className="
          text-2xl font-bold
          "
        >
          Brands
        </h1>

        <p
          className="
          text-gray-500 mt-2
          "
        >
          Manage your brands
        </p>
      </div>

      <div
        className="
        bg-white
        rounded-xl
        border
        p-6
        mb-6
        "
      >
        <div
          className="
          flex gap-3
          "
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Brand Name"
            className="
            flex-1
            border
            rounded-lg
            px-4 py-2
            "
          />

          <button
            onClick={createBrand}
            className="
            px-4 py-2
            bg-indigo-600
            text-white
            rounded-lg
            "
          >
            Add Brand
          </button>
        </div>
      </div>

      <div
        className="
        bg-white
        rounded-xl
        border
        "
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="
            flex items-center
            justify-between
            p-4 border-b
            "
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{brand.name}</h3>

              <button
                onClick={() => deleteBrand(brand.id)}
                className="
    px-3 py-1
    text-red-600
    border border-red-200
    rounded-lg
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
