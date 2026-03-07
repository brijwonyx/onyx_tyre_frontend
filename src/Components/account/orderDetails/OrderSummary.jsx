const OrderSummary = () => {
  return (
    <div className="border rounded-xl p-6 space-y-4">

      <h3 className="font-semibold text-lg">
        Order Summary
      </h3>

      <Row label="Subtotal" value="$469.72" />
      <Row label="Shipping" value="Free" green />
      <Row label="STATE TAX (6%)" value="$12.00" />
      <Row label="Motor Vehicle Tire Fee" value="12.34" />

      <hr />

      <div className="flex justify-between font-bold text-xl">
        <span>Order Total</span>
        <span>$1240.00</span>
      </div>

    </div>
  );
};

const Row = ({ label, value, green }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-500">{label}</span>
    <span className={green ? "text-green-700" : ""}>
      {value}
    </span>
  </div>
);

export default OrderSummary;
