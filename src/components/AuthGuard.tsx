"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch(
      "https://socailautoposterbackend-production.up.railway.app/auth/me",
      {
        credentials: "include",
      }
    )
      .then((res) => {
        if (!res.ok) {
          router.push("/login");
          return;
        }

        setLoading(false);
      })
      .catch(() => {
        router.push("/login");
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}