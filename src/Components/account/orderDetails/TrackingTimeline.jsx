const steps = [
  "Order Placed",
  "Processing",
  "Shipped",
  "Out for Delivery",
  "Delivered",
];

const TrackingTimeline = () => {
  return (
    <div className="border rounded-xl p-6">

      <h3 className="font-semibold text-lg mb-4">
        Tracking & Timeline
      </h3>

      <div className="space-y-4">

        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">

            <div className="w-3 h-3 bg-green-600 rounded-full" />

            <span>{step}</span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TrackingTimeline;
