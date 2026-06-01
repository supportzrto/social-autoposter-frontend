"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [brandName, setBrandName] = useState<string | null>(null);
  const [igId, setIgId] = useState<string | null>(null);

  useEffect(() => {
    setBrandName(localStorage.getItem("brand_name"));
    setIgId(localStorage.getItem("instagram_business_id"));
  }, []);

  const connectInstagram = () => {
    window.location.href =
      "https://socailautoposterbackend-production.up.railway.app/auth/meta/login";
  };

  const disconnect = () => {
    localStorage.removeItem("brand_id");
    localStorage.removeItem("brand_name");
    localStorage.removeItem("instagram_business_id");
    setBrandName(null);
    setIgId(null);
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="border border-gray-200 rounded-xl p-6">
        <h2 className="font-semibold text-gray-900">Instagram Connection</h2>
        <p className="text-sm text-gray-500 mt-1 mb-4">
          Connect your Instagram Business account via Facebook
        </p>

        {brandName ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <p className="text-sm font-semibold text-green-700">✅ Connected</p>
            <p className="text-sm text-green-700 mt-1">Page: {brandName}</p>
            {igId && (
              <p className="text-xs text-green-600 mt-0.5">
                Instagram ID: {igId}
              </p>
            )}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
            <p className="text-sm text-gray-500">No account connected</p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={connectInstagram}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            {brandName ? "Reconnect" : "Connect Instagram"}
          </button>

          {brandName && (
            <button
              onClick={disconnect}
              className="border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Disconnect
            </button>
          )}
        </div>
      </div>
    </div>
  );
}