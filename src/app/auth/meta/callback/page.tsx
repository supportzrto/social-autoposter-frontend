"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function MetaCallbackPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) return;

    const backendUrl =
      `https://socailautoposterbackend-production.up.railway.app/auth/meta/callback?code=${code}`;

    window.location.href = backendUrl;
  }, [searchParams]);

  return <div>Connecting Instagram...</div>;
}