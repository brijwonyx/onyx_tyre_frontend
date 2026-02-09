const AddressModal = ({ open, onClose }) => {

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[520px] rounded-xl p-6 space-y-4">

        <h2 className="text-xl font-bold">
          Add New Address
        </h2>

        <Input label="Full Name" />
        <Input label="Street Address" />
        <Input label="Apartment / Suite" />
        <Input label="City" />
        <Input label="State" />
        <Input label="Zip Code" />
        <Input label="Phone Number" />

        <div className="flex justify-end gap-3 pt-4">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button className="bg-green-700 text-white px-6 py-2 rounded">
            Save Address
          </button>

        </div>

      </div>
    </div>
  );
};

const Input = ({ label }) => (
  <div>
    <label className="text-sm font-medium block mb-1">
      {label}
    </label>

    <input className="border rounded-md w-full px-3 py-2" />
  </div>
);

export default AddressModal;
