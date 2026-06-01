"use client";

export default function SettingsPage() {
  const connectInstagram = () => {
    window.location.href =
      "https://socailautoposterbackend-production.up.railway.app/auth/meta/login";
  };

  const metaData =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem("meta_data") || "{}"
        )
      : null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Settings
      </h1>

      <div className="border rounded-lg p-6">
        <h2 className="font-semibold">
          Instagram Connection
        </h2>

        <p className="text-gray-500 mb-4">
          Connect your Instagram Business account
        </p>

        <button
          onClick={connectInstagram}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Connect Instagram
        </button>

        {/* Connected Status */}

        {metaData?.pages?.data?.length > 0 && (
          <div className="mt-4 p-4 border rounded bg-green-50">
            <h3 className="font-bold text-green-700">
              Connected ✅
            </h3>

            <p>
              Page: {metaData.pages.data[0].name}
            </p>

            <p>
              Page ID: {metaData.pages.data[0].id}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}