import { useState } from "react";


const CustomSelect = ({ label, placeholder, options, value, onChange,className,variant = 'default' }) => {
  const [open, setOpen] = useState(false);
  const variants = {
    default: "bg-white px-3 py-[13.5px]",
    dark: "box-shadow-[0_0_0_1px_#00000014,0_1px_2px_0px_#0000001F] bg-[#FAFAFA] px-2 py-[6px] rounded-md mt-2 border border-gray-300",
  };


  return (
    <div className="relative w-full">
      {/* Label */}
      <label className={`font-montserrat  leading-[24px] ${variant === "dark"? "font-medium text-[13px]" : "font-normal text-base"}`}>
        {label}
      </label>

      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex justify-between items-center  ${className} ${variants[variant]}`}
      >
        <span
          className={`font-openSans font-normal  leading-5 
            ${value ? "text-black" : "text-[#A1A1AA]"} 
            ${variant === "dark"? "text-[13px] " : "text-base"} `}
        >
          {value || `${placeholder}`}
        </span>

        <span className="text-sm">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.833374 0.833253L5.83337 5.83325L10.8334 0.833252"
              stroke="#2E7D32"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute z-10 mt-1 w-full bg-white rounded shadow-lg
            max-h-64 overflow-y-auto
          "
        >
          {options.map((option, index) => (
            <div
              key={option.value ?? index}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer text-black "
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
