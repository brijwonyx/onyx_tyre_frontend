import { Plus } from "lucide-react";
import ActionDropdown from "../../components/common/ActionDropdown";
import Badge from "../../components/common/Badge";
import ContentCard from "../../components/common/ContentCard";
import DataTable from "../../components/common/DataTable";
import InfoRow from "../../components/common/InfoRow";
import PageHeader from "../../components/common/PageHeader";
import TableFilters from "../../components/common/TableFilter";

export default function ProductDetails() {
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
              <h2 className="text-base font-medium">{product.name}</h2>
              <div className="flex gap-2 items-center">
                <Badge variant="success">Published</Badge>
                <ActionDropdown />
              </div>
            </div>

            <InfoRow label="Brand" value={product.brand} />
            <InfoRow label="Description" value={product.description} />
            <InfoRow label="Slug" value={product.slug} />
            <InfoRow label="On Sale" value={product.onSale} />
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
                <h2 className="text-base font-medium">Variants</h2>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]">
                  <Plus size={16} />
                  Edit Stock Levels
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-xs border rounded-md text-[#09090B]">
                  <Plus size={16} />
                  Edit Prices
                </button>

                <button className="bg-black text-white text-sm px-2 py-1 rounded-md flex items-center gap-2 shadow-[0_0_0_1px_#18181B,0_1px_2px_0px_#00000066,0_0.75px_0px_0px_#FFFFFF33_inset]">
                  Create variant
                </button>
              </div>
            </div>
            <TableFilters
              filters={[{ label: "Created" }, { label: "Inventory" }]}
            />
            <DataTable columns={variantsColumns} data={variantsData} />
          </ContentCard>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Organize */}
          <ContentCard title="">
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Organize</h2>
            </div>
            <InfoRow label="Tags" value="-" />
            <InfoRow label="Type" value="-" />
            <InfoRow label="Collection" value="-" />
            <InfoRow label="Categories" value="-" />
          </ContentCard>

          {/* Attributes */}
          <ContentCard title="">
            <div className="p-3 border-b border-[#E4E4E7]">
              <h2 className="text-base font-medium">Attributes</h2>
            </div>
            <InfoRow label="Length" value="-" />
            <InfoRow label="MID code" value="-" />
            <InfoRow label="HS code" value="-" />
            <InfoRow label="Country of origin" value="-" />
          </ContentCard>
        </div>
      </div>
    </>
  );
}
