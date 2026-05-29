import PostsTable from '@/components/PostsTable';

export default function PostsPage() {
  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          All Posts
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage scheduled, published and failed posts.
        </p>
      </div>

      {/* Table */}
      <PostsTable />
    </div>
  );
}