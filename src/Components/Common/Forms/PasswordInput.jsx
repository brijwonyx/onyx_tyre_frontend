import { useState } from "react";
import Input from "./Input";

const PasswordInput = ({ label, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
      label={label}
      placeholder="Enter Password"
        type={show ? "text" : "password"}
        {...props}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-[38px] text-sm text-gray-500
                   hover:text-gray-700"
      >
        {/* {show ? "Hide" : "Show"} */}
      </button>
    </div>
  );
};

export default PasswordInput;
