import { Filter, Plus, SlidersHorizontal, Trash2 } from "lucide-react";

const PricingTab = () => {
 const data = {
  columns: [
    { key: "size", label: "Tire Size" },
    { key: "sku", label: "SKU" },
    { key: "price", label: "Price ($)", type: "currency" },
    { key: "compareAt", label: "Compare at ($)", type: "currency" },
    { key: "cost", label: "Cost", type: "currency" },
    { key: "margin", label: "Margin", type: "percentage" },
    { key: "inventory", label: "Inventory" },
    { key: "lowStock", label: "Low Stock Alert" },
  ],

  rows: [
    {
      size: "205/55R16",
      sku: "MB-501",
      price: 120.0,
      compareAt: 150.0,
      cost: 84.0,
      margin: 30.0,
      inventory: 100,
      lowStock: 10,
    },
    {
      size: "225/45R17",
      sku: "MB-502",
      price: 150.0,
      compareAt: 190.0,
      cost: 105.0,
      margin: 32.0,
      inventory: 234,
      lowStock: 10,
    },
    {
      size: "235/40R18",
      sku: "MB-503",
      price: 180.0,
      compareAt: 220.0,
      cost: 126.0,
      margin: 33.0,
      inventory: 231,
      lowStock: 10,
    },
    {
      size: "245/40ZR18",
      sku: "MB-504",
      price: 200.0,
      compareAt: 240.0,
      cost: 140.0,
      margin: 34.0,
      inventory: 434,
      lowStock: 10,
    },
    {
      size: "255/35ZR19",
      sku: "MB-505",
      price: 220.0,
      compareAt: 260.0,
      cost: 154.0,
      margin: 35.0,
      inventory: 563,
      lowStock: 10,
    },
    {
      size: "265/35ZR20",
      sku: "MB-506",
      price: 250.0,
      compareAt: 290.0,
      cost: 175.0,
      margin: 36.0,
      inventory: 234,
      lowStock: 10,
    },
    {
      size: "275/35R20",
      sku: "MB-507",
      price: 280.0,
      compareAt: 320.0,
      cost: 196.0,
      margin: 37.0,
      inventory: 123,
      lowStock: 10,
    },
  ],
};

  return (
    <div>
      <div className="flex gap-6 items-center justify-between py-3 px-4 border-b border-[#E4E4E7]">
        <div className="font-openSans ">
          <h5 className="font-medium text-[#18181B] mb-1">
            Pricing & Inventory
          </h5>
          <p className="font-normal text-[#52525B]">
            Set prices and stock levels for each variant 
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button className="shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] px-[10px] py-[6px] rounded-md">
            Bulk Upload CSV
          </button>
          <button className="flex gap-[6px] items-center shadow-[0_0_0_1px_#18181B,0_1px_2px_0px_#00000066,0_0.75px_0px_0px_#FFFFFF33_inset] bg-[#27272A] px-[10px] py-[6px] rounded-md text-white">
            <Plus size={15} /> Add variant
          </button>
        </div>
      </div>
      <div className="flex gap-6 items-center py-3 px-4">
        <div className="flex gap-2 items-center">
          <button className="shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] px-[10px] py-[6px] rounded-md flex gap-[6px] items-center">
           <SlidersHorizontal size={15} />View 
          </button>
          <button className="">
            Reset to default
          </button>
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          {/* Dynamic header */}
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              {data?.columns.map((col) => (
                <th key={col.key} className="text-left px-4 py-3 border-r">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Dynamic rows */}
          <tbody>
            {data?.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-t hover:bg-gray-50">
                {data?.columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 border-r">
                    {col.type === "checkbox" ? (
                      <input type="checkbox" checked={row[col.key]} readOnly />
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PricingTab;
