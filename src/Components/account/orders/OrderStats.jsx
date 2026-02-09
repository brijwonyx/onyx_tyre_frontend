const stats = [
  { label: "Total Orders", value: 3, color: "bg-green-700" },
  { label: "Processing", value: 0, color: "bg-orange-500" },
  { label: "Shipped", value: 1, color: "bg-blue-600" },
  { label: "Delivered", value: 3, color: "bg-green-800" },
];

const OrderStats = () => {
  return (
    <div className="grid grid-cols-4 overflow-hidden rounded-lg">

      {stats.map(stat => (
        <div
          key={stat.label}
          className={`${stat.color} text-white p-6`}
        >
          <p className="text-2xl font-bold">
            {stat.value}
          </p>

          <p className="text-sm">
            {stat.label}
          </p>
        </div>
      ))}

    </div>
  );
};

export default OrderStats;
