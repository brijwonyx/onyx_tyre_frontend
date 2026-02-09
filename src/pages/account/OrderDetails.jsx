import OrderItemCard from "../../components/account/orderDetails/OrderItemCard";
import OrderSummary from "../../components/account/orderDetails/OrderSummary";
import TrackingTimeline from "../../components/account/orderDetails/TrackingTimeline";

import { useNavigate } from "react-router-dom";

const OrderDetails = () => {

  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="text-green-700 font-medium"
      >
        ← Back to orders
      </button>

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Order ONX-2024-001
          </h1>

          <p className="text-gray-500">
            Placed on 1/15/2024
          </p>
        </div>

        <button className="border px-4 py-2 rounded">
          DOWNLOAD INVOICE
        </button>

      </div>

      <OrderItemCard />

      {/* GRID */}
      <div className="grid grid-cols-2 gap-6">

        <OrderSummary />
        <TrackingTimeline />

      </div>

    </div>
  );
};

export default OrderDetails;
