import Badge from "../common/Badge";


const orders = [
  {
    id: "49652",
    date: "Nov 15, 2024",
    customer: "Jane Doe",
    payment: "success",
    fulfillment: "shipped",
    items: 5,
    total: "$125.00",
  },
  {
    id: "48573",
    date: "Nov 12, 2024",
    customer: "Mike Lee",
    payment: "success",
    fulfillment: "delivered",
    items: 2,
    total: "$125.00",
  },
];

const OrdersTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="px-4 py-2 text-left font-medium">Order #</th>
            <th className="px-4 py-2 text-left font-medium">Created</th>
            <th className="px-4 py-2 text-left font-medium">Customer</th>
            <th className="px-4 py-2 text-left font-medium">Payment</th>
            <th className="px-4 py-2 text-left font-medium">Fulfillment</th>
            <th className="px-4 py-2 text-right font-medium">Items</th>
            <th className="px-4 py-2 text-right font-medium">Order Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr
              key={order.id}
              className="border-t hover:bg-gray-50 cursor-pointer"
            >
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.date}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">
                <Badge variant={order.payment}>{order.payment}</Badge>
              </td>
              <td className="px-4 py-2">
                <Badge variant={order.fulfillment}>
                  {order.fulfillment}
                </Badge>
              </td>
              <td className="px-4 py-2 text-right">{order.items}</td>
              <td className="px-4 py-2 text-right">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
