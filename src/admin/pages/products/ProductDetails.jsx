import Card from "@/components/ui/Card";
import InfoRow from "@/components/ui/InfoRow";
import DataTable from "@/components/ui/DataTable";

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
    <div className="p-6 grid grid-cols-3 gap-6">

      {/* LEFT SIDE */}
      <div className="col-span-2 space-y-6">

        {/* Product Info */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-lg font-semibold">
              {product.name}
            </h1>

            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
              {product.status}
            </span>
          </div>

          <InfoRow label="Brand" value={product.brand} />
          <InfoRow label="Description" value={product.description} />
          <InfoRow label="Slug" value={product.slug} />
          <InfoRow label="On Sale" value={product.onSale} />

        </Card>

        {/* Media */}
        <Card title="Media">
          <div className="flex gap-3">
            {[1,2,3,4].map((img) => (
              <div
                key={img}
                className="w-20 h-20 bg-gray-100 rounded-lg"
              />
            ))}
          </div>
        </Card>

        {/* Variants */}
        <Card title="Variants">

          <div className="flex justify-between mb-4">

            <div className="flex gap-2">
              <button className="border px-3 py-1 text-sm rounded">
                Created
              </button>

              <button className="border px-3 py-1 text-sm rounded">
                Inventory
              </button>
            </div>

            <button className="bg-black text-white px-3 py-1 text-sm rounded">
              Create variant
            </button>

          </div>

          <DataTable
            columns={variantsColumns}
            data={variantsData}
          />

        </Card>

      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">

        {/* Organize */}
        <Card title="Organize">
          <InfoRow label="Tags" value="-" />
          <InfoRow label="Type" value="-" />
          <InfoRow label="Collection" value="-" />
          <InfoRow label="Categories" value="-" />
        </Card>

        {/* Attributes */}
        <Card title="Attributes">
          <InfoRow label="Length" value="-" />
          <InfoRow label="MID code" value="-" />
          <InfoRow label="HS code" value="-" />
          <InfoRow label="Country of origin" value="-" />
        </Card>

      </div>

    </div>
  );
}
