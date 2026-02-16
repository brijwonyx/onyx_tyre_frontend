import { Plus, Trash2 } from "lucide-react";

const VariantsTab = () => {
  const data = {
    columns: [
      { key: "size", label: "Tire Size" },
      { key: "sku", label: "SKU" },
      { key: "width", label: "Width (mm)" },
      { key: "aspect", label: "Aspect Ratio" },
      { key: "rim", label: "Rim Size (in)" },
      { key: "speed", label: "Speed Rating" },
      { key: "load", label: "Load Index" },
      { key: "fuel", label: "Fuel Rating" },
      { key: "wet", label: "Wet" },
      { key: "noise", label: "Noise" },
      { key: "runFlat", label: "Run Flat", type: "checkbox" },
    ],

    rows: [
      {
        size: "205/55R16",
        sku: "MB-501",
        width: 205,
        aspect: 55,
        rim: 16,
        speed: "W",
        load: 92,
        fuel: "D",
        wet: "B",
        noise: "72dB",
        runFlat: false,
      },
      {
        size: "225/45R17",
        sku: "MB-502",
        width: 225,
        aspect: 45,
        rim: 18,
        speed: "X",
        load: 93,
        fuel: "E",
        wet: "C",
        noise: "74dB",
        runFlat: true,
      },
    ],
  };

  return (
    <div>
        <div className="flex gap-6 items-center justify-between py-3 px-4">
            <div className="font-openSans ">
                <h5 className="font-medium text-[#18181B] mb-1">Product Variants</h5>
                <p className="font-normal text-[#52525B]">Add tyre variants manually or upload via CSV. Each variant is a unique size/specification combination.</p>
            </div>
            <div className="flex gap-2 items-center">
                <button className="shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] px-[10px] py-[6px] rounded-md">Bulk Upload CSV</button>
                <button className="flex gap-[6px] items-center shadow-[0_0_0_1px_#18181B,0_1px_2px_0px_#00000066,0_0.75px_0px_0px_#FFFFFF33_inset] bg-[#27272A] px-[10px] py-[6px] rounded-md text-white">
                  <Plus size={15}/> Add variant
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

              <th className="px-4 py-3">Action</th>
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

                {/* Action column */}
                <td className="px-4 py-3">
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default VariantsTab;
