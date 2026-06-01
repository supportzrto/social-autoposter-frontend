"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function MetaCallbackPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

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
  }, [searchParams]);

  return <div>Connecting Instagram...</div>;
}