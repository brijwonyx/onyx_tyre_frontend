const VehicleCard = () => {
  return (
    <div className="border rounded-xl p-6 space-y-6 shadow-sm">

      {/* VEHICLE TITLE */}
      <div className="flex justify-between">

        <span className="bg-green-700 text-white px-4 py-1 rounded text-sm">
          2024 Audi A6
        </span>

        <button className="text-red-500 text-sm">
          Delete
        </button>

      </div>

      {/* TYRE SIZE */}
      <p className="text-sm">
        Tyre size: 195/50ZR16 - 84W
        <span className="text-green-700 ml-2 cursor-pointer">
          Edit
        </span>
      </p>

      <hr />

      {/* RECOMMENDED */}
      <div className="flex justify-between">

        <div className="flex gap-4">

          <div className="w-24 h-24 bg-gray-200 rounded" />

          <div>
            <h3 className="font-semibold">
              Michelin Latitude Sport 3
            </h3>

            <p className="text-gray-500 text-sm max-w-md">
              Ideal for high-end SUVs, the Michelin Latitude Sport 3 delivers remarkable handling and stability on both dry and wet roads.
            </p>

            {/* TAGS */}
            <div className="flex gap-2 mt-2 flex-wrap">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                Touring
              </span>

              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
                All-Season
              </span>

              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded">
                92H
              </span>
            </div>

            <p className="font-bold mt-3">
              Start at $320.00
              <span className="text-sm text-gray-400">
                /tire
              </span>
            </p>

          </div>

        </div>

        {/* CTA */}
        <button className="bg-green-700 text-white px-6 py-2 h-fit rounded font-semibold">
          SHOP NOW →
        </button>

      </div>

    </div>
  );
};

export default VehicleCard;
