const OrderItemCard = () => {
  return (
    <div className="border rounded-xl p-6 flex justify-between">

      <div className="flex gap-4">

        <div className="w-20 h-20 bg-gray-200 rounded" />

        <div>
          <h3 className="font-semibold">
            Continental ExtremeContact DWS06 PLUS
          </h3>

          <p className="text-gray-500 text-sm">
            195/50ZR16 - 84W
          </p>

          <p className="text-sm">
            Quantity: 2
          </p>
        </div>

      </div>

      <div className="text-right">
        <p className="font-bold text-xl">
          $229.00
          <span className="text-sm text-gray-400">
            /tire
          </span>
        </p>

        <p className="text-gray-500 text-sm">
          Total → $459.00
        </p>
      </div>

    </div>
  );
};

export default OrderItemCard;
