import { useState } from "react";
import Toggle from "../common/Toggle";
import Input from "../../../components/common/forms/Input";

const EditCustomer = () => {
  return (
    <div className="px-6 py-4 text-sm">
        <Input label="Email" variant="dark" />
        <Input label="First Name" variant="dark" />
        <Input label="Last Name" variant="dark" />
        <Input label="Company" variant="dark" />
        <Input label="Phone" variant="dark" />
    </div>
  );
};

export default EditCustomer;
