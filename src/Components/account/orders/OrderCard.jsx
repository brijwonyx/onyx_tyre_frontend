import { use } from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div className="border rounded-xl p-6 shadow-sm space-y-6">

      {/* TOP BAR */}
      <div className="flex justify-between items-center">

        <span className="bg-green-700 text-white px-4 py-1 text-sm rounded">
          Order ONX-2024-001
        </span>

        <span className="font-bold text-lg">
          $700.00
        </span>
      </div>

      {/* PRODUCT */}
      <div className="flex justify-between">

        <div className="flex gap-4">

          <div className="w-20 h-20 bg-gray-200 rounded" />

          <div>
            <h3 className="font-semibold">
              Continental ExtremeContact DWS06 PLUS
            </h3>

            <p className="text-gray-500 text-sm">
              195/50ZR16 - 84W
            </p>

            <p className="text-sm mt-1">
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

          <p className="text-sm text-gray-500">
            Total for 2 → $459.00
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <hr />

      {/* TRACKING */}
      <div className="grid grid-cols-3 text-sm">

        <div>
          <p className="text-gray-400">
            Tracking Number
          </p>
          <p className="font-medium">
            1234567890
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Status
          </p>
          <p className="font-medium">
            Shipped
          </p>
        </div>

        <div>
          <p className="text-gray-400">
            Estimated Delivery
          </p>
          <p className="font-medium">
            1/18/2024
          </p>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex gap-4">

        <button className="border px-4 py-2 rounded font-medium" onClick={() => navigate("/account/orders/1")}>
          VIEW DETAILS
        </button>

        <button className="border px-4 py-2 rounded font-medium">
          TRACK PACKAGE
        </button>

        <button className="bg-green-700 text-white px-6 py-2 rounded font-medium">
          REORDER
        </button>

      </div>

    </div>
  );
};

export default OrderCard;
