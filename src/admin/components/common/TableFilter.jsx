import { Plus, Search, Filter, ArrowDownWideNarrow, CirclePlus } from "lucide-react";

export default function TableFilters({
  filters = [],
  activeFilter,
  onFilterChange,
}) {

  const FiltersButton = ({ label, onClick }) => (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]"
    >
      <CirclePlus size={16} />
      {label}
    </button>
  );

  return (
    <div className="flex gap-2 justify-between p-3">

      {/* Filters */}
      <div className="flex gap-2">
        {filters?.map((filter) => (
          <FiltersButton
            key={filter.key}
            label={filter.label}
            onClick={() => onFilterChange?.(filter.key)}
          />
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex items-center gap-2">

        <div className="relative">
          <Search className="absolute left-2.5 top-2 w-4 h-4 text-gray-400" />

          <input
            placeholder="Search"
            className="pl-8 pr-3 py-1 border rounded-md text-sm shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] text-[#71717A] bg-[#FAFAFA]"
          />
        </div>

        <button className="p-2 border rounded-md hover:bg-gray-50">
          <ArrowDownWideNarrow className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
}
