import { useState } from "react";
import AddressCard from "../../components/account/address/AddressCard";
import AddressModal from "../../components/account/address/AddressModal";


const Addresses = () => {

  const [open, setOpen] = useState(false);

  const addresses = [1, 2]; // mock

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Saved Addresses
          </h1>

          <p className="text-gray-500">
            Manage your shipping and billing addresses
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-green-700 text-white px-6 py-2 rounded font-semibold"
        >
          + ADD ADDRESS
        </button>

      </div>

      {/* LIST */}
      <div className="grid grid-cols-2 gap-6">
        {addresses.map((_, i) => (
          <AddressCard key={i} />
        ))}
      </div>

      <AddressModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </div>
  );
};

export default Addresses;
