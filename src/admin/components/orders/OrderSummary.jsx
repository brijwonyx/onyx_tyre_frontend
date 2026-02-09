import ContentCard from "../common/ContentCard";


const OrderSummary = () => {
  return (
    <ContentCard>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="text-sm font-medium">Order Summary</h3>
        <button className="text-gray-400">•••</button>
      </div>

      {/* Item */}
      <div className="px-4 py-4 border-b">
        <div className="flex justify-between text-sm">
          <div>
            <p className="font-medium">Pirelli Tire</p>
            <p className="text-gray-500 text-xs">sku-374-3483</p>
          </div>
          <div className="text-right">
            <p>€29.99 × 2</p>
            <p className="font-medium">€59.98</p>
          </div>
        </div>
      </div>

      {/* Totals */}
      <div className="px-4 py-4 space-y-2 text-sm">
        <Row label="Item Subtotal" value="€59.98" />
        <Row label="Shipping" value="€5.00" />
        <Row label="Tax" value="€4.50" />
        <Row label="Order Total" value="€69.48" bold />
        <hr />
        <Row label="Discount" value="€10.00" />
        <Row label="Total After Discount" value="€59.48" bold />
        <hr />
        <Row label="Paid" value="€59.48 AUD" />
        <Row label="Outstanding" value="€0.00 AUD" />
      </div>
    </ContentCard>
  );
};

const Row = ({ label, value, bold }) => (
  <div className={`flex justify-between ${bold ? "font-medium" : ""}`}>
    <span className="text-gray-500">{label}</span>
    <span>{value}</span>
  </div>
);

export default OrderSummary;
