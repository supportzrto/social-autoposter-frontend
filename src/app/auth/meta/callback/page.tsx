"use client";

import { useEffect } from "react";

export default function MetaCallbackPage() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const code = params.get("code");

    if (!code) return;

    window.location.href =
      `https://socailautoposterbackend-production.up.railway.app/auth/meta/callback?code=${code}`;
  }, []);

  return <div>Connecting Instagram...</div>;
}