import ContentCard from "../../components/common/ContentCard";
import DataTable from "../../components/common/DataTable";
import InfoRow from "../../components/common/InfoRow";
import PageHeader from "../../components/common/PageHeader";
import TableFilters from "../../components/common/TableFilter";
import ActionDropdown from "../../components/common/ActionDropdown";
import Badge from "../../components/common/Badge";
import { CircleCheck, CirclePlus, Pencil } from "lucide-react";
import { useState } from "react";

const VariantDetails = () => {
    const [editingPrices, setEditingPrices] = useState(false);
  
  const product = {
    name: "Michelin Pilot Sport 4",
    status: "Published",
    brand: "Bridge Stone",
    description: "abc xyz",
    slug: "/pirelli-pzero",
    onSale: "Yes",
  };

  const variantsColumns = [
    { key: "location", label: "Location" },
    { key: "availability", label: "Availability" },
  ];

  const variantsData = [
    {
      location: "Main Warehouse",
      availability: "123",
    },
    {
      location: "East Fitment Center",
      availability: "153",
    },
  ];
  return (
    <>
      <PageHeader title="Products" />
      <div className=" grid grid-cols-3 gap-[10px] px-[10px]">
        {/* LEFT SIDE */}
        <div className="col-span-2">
          {/* Product Info */}
          <ContentCard>
            <div className="flex justify-between items-center py-4 px-6">
              <h2 className="text-base font-medium">205/55R16</h2>
              <div className="flex gap-2 items-center">
                <Badge variant="success">Published</Badge>
                <ActionDropdown />
              </div>
            </div>

            <InfoRow label="SKU" value="MIC-205551691V" />
            <div className="grid grid-cols-3">
              <InfoRow label="Width (mm)" value="205" className="border-r" />
              <InfoRow label="Aspect Ratio" value="55" className="border-r" />
              <InfoRow label="Rim Size (in)" value="16" className="border-r" />
            </div>
            <div className="grid grid-cols-3">
              <InfoRow label="Speed Rating" value="W" className="border-r" />
              <InfoRow label="Load Index" value="92" className="border-r" />
              <InfoRow label="Fuel Rating" value="D" className="border-r" />
            </div>
            <div className="grid grid-cols-3">
              <InfoRow label="Wet" value="B" className="border-r" />
              <InfoRow label="Noise" value="72D" className="border-r" />
              <InfoRow label="Run Flat" value="Yes" className="border-r" />
            </div>
          </ContentCard>

          {/* Media */}
          <ContentCard title="Media">
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Media</h2>
            </div>
            <div className="flex gap-3 p-3">
              {[1, 2, 3, 4].map((img) => (
                <div key={img} className="w-20 h-20 bg-gray-100 rounded-lg " />
              ))}
            </div>
          </ContentCard>

          {/* Variants */}
          <ContentCard title="Variants">
            <div className="flex justify-between p-3 border-b border-[#E4E4E7]">
              <div className="flex gap-2">
                <h2 className="text-base font-medium">Inventory Item</h2>
              </div>
            </div>
            <TableFilters
              filters={[{ label: "Created" }, { label: "Inventory" }]}
            />
            <DataTable columns={variantsColumns} data={variantsData} />
          </ContentCard>
        </div>

        {/* RIGHT SIDE */}
        <div className="">
          <ContentCard title="">
            <div className="p-3 border-b border-[#E4E4E7] flex justify-between items-center">
              <h2 className="text-base font-medium">Prices</h2>
              <div>
                {!editingPrices ? (
                  <Pencil
                    size={16}
                    className="cursor-pointer"
                    onClick={() => setEditingPrices(true)}
                  />
                ) : (
                  <div className="flex gap-2 text-xs">
                    <button onClick={() => setEditingPrices(false)}>
                      <CirclePlus
                        color="#971717"
                        size={16}
                        className="rotate-45"
                      />
                    </button>
                    <button className="primary ">
                      <CircleCheck size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
            <InfoRow label="AUD" value="$12" editing={editingPrices}/>
          </ContentCard>
        </div>
      </div>
    </>
  );
};
export default VariantDetails;
