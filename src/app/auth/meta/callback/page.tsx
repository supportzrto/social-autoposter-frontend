"use client";

import { useEffect } from "react";

export default function MetaCallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");

    if (!code) return;

    fetch(
      `https://social-poster-app.up.railway.app/auth/meta/callback?code=${code}&state=${state}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          console.error("Meta auth failed:", data.error);
          window.location.href = "/dashboard/settings?error=auth_failed";
          return;
        }

        // Save brand_id and name — this is all the frontend needs
        localStorage.setItem("brand_id", String(data.brand_id));
        localStorage.setItem("brand_name", data.brand_name);
        localStorage.setItem("instagram_business_id", data.instagram_business_id ?? "");

        window.location.href = "/dashboard/settings?connected=true";
      })
      .catch((err) => {
        console.error("Meta callback error:", err);
        window.location.href = "/dashboard/settings?error=network";
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-sm">Connecting Instagram...</p>
    </div>
  );
}