import { Dialog } from "@headlessui/react";
import CustomSelect from "../common/forms/CustomSelect";

const AddVehicleModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[520px] p-6 shadow-lg">

        {/* HEADER */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-xl font-bold">
              Add New Vehicle
            </h2>

            <p className="text-gray-500 text-sm">
              Add your vehicle details to get personalized tire recommendations and track maintenance.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 text-xl"
          >
            ✕
          </button>

        </div>

        {/* FORM */}
        <div className="space-y-4 mt-6">
            <CustomSelect label="Year" options={["2024", "2023", "2022"]}  />
            <CustomSelect label="Make" options={["2024", "2023", "2022"]}/>
            <CustomSelect label="Model" options={["2024", "2023", "2022"]}/>
            <CustomSelect label="Style" options={["2024", "2023", "2022"]}/>

        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            CANCEL
          </button>

          <button className="bg-green-700 text-white px-6 py-2 rounded font-semibold">
            + ADD VEHICLE
          </button>

        </div>

      </div>
    </div>
  );
};

export default AddVehicleModal;
