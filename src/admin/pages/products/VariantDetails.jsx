import { Badge, Plus } from "lucide-react";
import ContentCard from "../../components/common/ContentCard";
import DataTable from "../../components/common/DataTable";
import InfoRow from "../../components/common/InfoRow";
import PageHeader from "../../components/common/PageHeader";
import TableFilters from "../../components/common/TableFilter";
import ActionDropdown from "../../components/common/ActionDropdown";

const VariantDetails = () => {
      const product = {
    name: "Michelin Pilot Sport 4",
    status: "Published",
    brand: "Bridge Stone",
    description: "abc xyz",
    slug: "/pirelli-pzero",
    onSale: "Yes",
  };

  const variantsColumns = [
    { key: "size", label: "Tire Size" },
    { key: "sku", label: "SKU" },
    { key: "inventory", label: "Inventory" },
  ];

  const variantsData = [
    {
      size: "205/55R16",
      sku: "MB-501",
      inventory: "256 available at 7 location",
    },
    {
      size: "225/45R17",
      sku: "MB-502",
      inventory: "482 available at 5 location",
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
              <InfoRow label="Aspect Ratio" value="55" className="border-r"/>
              <InfoRow label="Rim Size (in)" value="16" className="border-r"/>
            </div>
                        <div className="grid grid-cols-3">
              <InfoRow label="Width (mm)" value="205" className="border-r" />
              <InfoRow label="Aspect Ratio" value="55" className="border-r"/>
              <InfoRow label="Rim Size (in)" value="16" className="border-r"/>
            </div>
                        <div className="grid grid-cols-3">
              <InfoRow label="Width (mm)" value="205" className="border-r" />
              <InfoRow label="Aspect Ratio" value="55" className="border-r"/>
              <InfoRow label="Rim Size (in)" value="16" className="border-r"/>
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
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Prices</h2>
            </div>
            <InfoRow label="AUD" value="$12" />

          </ContentCard>


        </div>
      </div>
    </>
  );
};
export default VariantDetails;
