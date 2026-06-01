"use client";

import { useEffect } from "react";

export default function MetaCallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");

    if (!code) return;

    fetch(
      `https://socailautoposterbackend-production.up.railway.app/auth/meta/callback?code=${code}`
    )
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "meta_data",
          JSON.stringify(data)
        );

        window.location.href =
          "/dashboard/settings?connected=true";
      })
      .catch((err) => {
        console.error("Meta callback error:", err);
      });
  }, []);

  return <div>Connecting Instagram...</div>;
}