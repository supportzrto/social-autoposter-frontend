"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    fetch(
      "https://socailautoposterbackend-production.up.railway.app/auth/me",
      {
        credentials: "include",
      }
    )
      .then((res) => {
        if (res.ok) {
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      })
      .catch(() => {
        router.push("/login");
      });
  }, []);

  return null;
}