type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function PostPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-5">

      <p className="text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </p>

      <div className="flex gap-2">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className={`px-4 py-2 rounded-lg text-sm
            border transition-colors
            ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-gray-50 border-gray-200'
            }`}
        >
          Previous
        </button>

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className={`px-4 py-2 rounded-lg text-sm
            border transition-colors
            ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white hover:bg-gray-50 border-gray-200'
            }`}
        >
          Next
        </button>

      </div>
    </div>
  );
}