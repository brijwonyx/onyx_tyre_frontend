const AddressCard = () => {
  return (
    <div className="border rounded-xl p-6 shadow-sm space-y-4 relative">

      {/* TAG */}
      <span className="bg-green-700 text-white px-3 py-1 rounded text-sm">
        Home
      </span>

      {/* NAME */}
      <h3 className="font-semibold">
        John Smith
      </h3>

      {/* ADDRESS */}
      <p className="text-gray-600 text-sm">
        123 Main Street <br />
        Apt 4B <br />
        Los Angeles, CA 90210 <br />
        United States
      </p>

      {/* PHONE */}
      <p className="text-sm">
        📞 (555) 123-4567
      </p>

      {/* BADGES */}
      <div className="flex gap-2">
        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
          Shipping
        </span>

        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">
          Billing
        </span>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-3 pt-4">

        <button className="border px-4 py-2 rounded font-medium">
          EDIT ADDRESS
        </button>

        <button className="border px-4 py-2 rounded font-medium">
          SET AS DEFAULT
        </button>

      </div>

    </div>
  );
};

export default AddressCard;
