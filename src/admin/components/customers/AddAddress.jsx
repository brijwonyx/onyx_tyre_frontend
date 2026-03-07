import { useState } from "react";
import Toggle from "../common/Toggle";
import Input from "../../../components/common/forms/Input";

const AddAddress = () => {
  return (
    <div className="px-6 py-4 text-sm">
        <Input label="Address name" variant="dark" />
        <div className="grid grid-cols-2 gap-3">
        <Input label="Address" variant="dark" />
        <Input label="Apartment, suite, etc. " subLabel={"(Optional)"} variant="dark" />

        </div>
         <div className="grid grid-cols-2 gap-3">
        <Input label="Postal Code" subLabel={"(Optional)"} variant="dark" />
        <Input label="City" subLabel={"(Optional)"} variant="dark" />

        </div>
                <div className="grid grid-cols-2 gap-3">
        <Input label="Country" variant="dark" />
        <Input label="City" subLabel={"(Optional)"} variant="dark" />

        </div>
                <div className="grid grid-cols-2 gap-3">
        <Input label="Company" subLabel={"(Optional)"} variant="dark" />
        <Input label="Phone" subLabel={"(Optional)"} variant="dark" />

        </div>

    </div>
  );
};

export default AddAddress;
