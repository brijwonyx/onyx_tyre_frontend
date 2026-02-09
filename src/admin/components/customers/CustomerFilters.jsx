

const FiltersButton = ({ label }) => (
  <button className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-md text-gray-600 hover:bg-gray-50">
    {/* <Icon name="plus" className="w-4 h-4" /> */}
    {label}
  </button>
);

const CustomerFilters = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b">
      <div className="flex items-center gap-2">
        <FiltersButton label="Payment" />
        <FiltersButton label="Fulfillment" />
        <FiltersButton label="Created" />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          {/* <Icon
            name="search"
            className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400"
          /> */}
          <input
            placeholder="Search"
            className="pl-8 pr-3 py-1.5 border rounded-md text-sm"
          />
        </div>

        <button className="p-2 border rounded-md hover:bg-gray-50">
          {/* <Icon name="filter" className="w-4 h-4" /> */}
        </button>
      </div>
    </div>
  );
};

export default CustomerFilters;
