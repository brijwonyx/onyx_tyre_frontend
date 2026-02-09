import OrderStats from "../../components/account/orders/OrderStats";
import OrderCard from "../../components/account/orders/OrderCard";

const orders = [1, 2]; // mock

const OrderHistory = () => {
  return (
    <div className="space-y-6">

      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-bold">
          Order History & Tracking
        </h1>

        <p className="text-gray-500">
          View and track all your orders
        </p>
      </div>

      <OrderStats />

      {/* ORDER LIST */}
      <div className="space-y-6">
        {orders.map((_, i) => (
          <OrderCard key={i} />
        ))}
      </div>

    </div>
  );
};

export default OrderHistory;
