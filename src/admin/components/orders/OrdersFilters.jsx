import Icon from "../common/Icons";


const FiltersButton = ({ label }) => (
  <button className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]">
    <Icon name="add" className="w-4 h-4" />
    {label}
  </button>
);

const OrdersFilters = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b">
      <div className="flex items-center gap-2">
        <FiltersButton label="Payment" />
        <FiltersButton label="Fulfillment" />
        <FiltersButton label="Created" />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Icon
            name="search"
            className="absolute left-2.5 top-2 w-4 h-4"
          />
          <input
            placeholder="Search"
            className="pl-8 pr-3 py-1 border rounded-md text-sm shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] text-[#71717A] bg-[#FAFAFA]"
          />
        </div>

        <button className="p-2 border rounded-md hover:bg-gray-50">
          <Icon name="filter" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OrdersFilters;
