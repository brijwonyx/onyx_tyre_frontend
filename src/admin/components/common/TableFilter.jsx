export default function TableFilters({
  filters = [],
  activeFilter,
  onFilterChange,
}) {
  return (
    <div className="flex gap-2">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`px-3 py-1 text-sm rounded-md border ${
            activeFilter === filter.key
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-50"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
