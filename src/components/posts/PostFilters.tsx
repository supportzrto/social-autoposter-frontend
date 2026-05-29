'use client';

import { Search, X } from 'lucide-react';

type Props = {
  search: string;
  onSearchChange: (value: string) => void;

  statusFilter: string;
  onStatusChange: (value: string) => void;

  dateFilter: string;
  onDateChange: (value: string) => void;

  onClearFilters: () => void;

  startDate: string;
  endDate: string;

  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
};

const STATUS_OPTIONS = [
  'all',
  'published',
  'scheduled',
  'pending',
  'failed',
];

const DATE_OPTIONS = [
  {
    label: 'Today',
    value: 'today',
  },

  {
    label: 'Yesterday',
    value: 'yesterday',
  },

  {
    label: 'Last 7 Days',
    value: 'last7days',
  },

  {
    label: 'Last 30 Days',
    value: 'last30days',
  },

  {
    label: 'This Month',
    value: 'thisMonth',
  },

  {
    label: 'Last Month',
    value: 'lastMonth',
  },

  {
    label: 'Custom Range',
    value: 'custom',
  },
];

export default function PostFilters({
  search,
  onSearchChange,

  statusFilter,
  onStatusChange,

  dateFilter,
  onDateChange,

  onClearFilters,

  startDate,
  endDate,

  onStartDateChange,
  onEndDateChange,
}: Props) {
  return (
    <div
      className="bg-white border border-gray-100
      rounded-2xl p-4 mb-5"
    >

      <div
        className="flex flex-col xl:flex-row
        gap-4 xl:items-center xl:justify-between"
      >

        {/* Search */}
        <div className="relative w-full xl:max-w-sm">

          <Search
            size={16}
            className="absolute left-3 top-1/2
            -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            className="w-full h-11 pl-10 pr-4
            rounded-xl border border-gray-200
            text-sm outline-none
            focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Right Filters */}
        <div className="flex flex-wrap gap-3">

          {/* Status */}
          <select
            value={statusFilter}
            onChange={(e) =>
              onStatusChange(e.target.value)
            }
            className="h-11 px-4 rounded-xl
            border border-gray-200
            bg-white text-sm outline-none
            focus:ring-2 focus:ring-indigo-500"
          >

            {STATUS_OPTIONS.map((status) => (
              <option
                key={status}
                value={status}
              >
                {status.charAt(0).toUpperCase() +
                  status.slice(1)}
              </option>
            ))}

          </select>

          {/* Date Filter */}
          <select
            value={dateFilter}
            onChange={(e) =>
              onDateChange(e.target.value)
            }
            className="h-11 px-4 rounded-xl
            border border-gray-200
            bg-white text-sm outline-none
            focus:ring-2 focus:ring-indigo-500"
          >

            <option value="all">
              All Dates
            </option>

            {DATE_OPTIONS.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}

          </select>

          {dateFilter === 'custom' && (

            <div className="flex-col xl:flex-row gap-3 mt-4">

              {/* Start Date */}
              <div className="flex flex-col gap-1">

                <label className="text-sm text-gray-500">
                  Start Date
                </label>

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) =>
                    onStartDateChange(e.target.value)
                  }
                  className="h-11 px-4 rounded-xl
        border border-gray-200
        text-sm outline-none
        focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* End Date */}
              <div className="flex flex-col gap-1">

                <label className="text-sm text-gray-500">
                  End Date
                </label>

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) =>
                    onEndDateChange(e.target.value)
                  }
                  className="h-11 px-4 rounded-xl
        border border-gray-200
        text-sm outline-none
        focus:ring-2 focus:ring-indigo-500"
                />
              </div>

            </div>
          )}

          {/* Clear */}
          <button
            onClick={onClearFilters}
            className="h-11 px-4 rounded-xl
            border border-red-200
            text-red-600 bg-red-50
            hover:bg-red-100 transition-colors
            flex items-center gap-2 text-sm font-medium"
          >

            <X size={15} />

            Clear

          </button>

        </div>

      </div>

    </div>
  );
}