"use client";

import { useSearchParams } from "next/navigation";

export default function MetaCallbackPage() {
  const searchParams = useSearchParams();

  const code = searchParams.get("code");

  return (
    <div>
      <h1>Meta Callback</h1>
      <p>Code: {code}</p>
    </div>
  );
}