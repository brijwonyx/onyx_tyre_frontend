import { useState } from "react";
import AddVehicleModal from "../../components/account/AddVehicleModal";
import VehicleCard from "../../components/account/VehicleCard";


const vehicles = [1, 2]; // mock

const Vehicles = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            My Vehicles
          </h1>

          <p className="text-gray-500">
            Manage your saved vehicles and get personalized tire recommendations
          </p>
        </div>

        <button className="bg-green-700 text-white px-6 py-2 rounded font-semibold" onClick={() => setOpen(true)}>
          + ADD VEHICLE
        </button>

      </div>

      {/* LIST */}
      <div className="space-y-6">
        {vehicles.map((_, i) => (
          <VehicleCard key={i} />
        ))}
      </div>
        <AddVehicleModal open={open} onClose={() => setOpen(false)} />

    </div>
  );
};

export default Vehicles;
