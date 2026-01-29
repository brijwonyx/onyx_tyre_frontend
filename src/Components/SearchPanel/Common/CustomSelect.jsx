import { useState } from "react";

const CustomSelect = ({ label, placeholder, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="font-montserrat font-normal text-base leading-[24px]">
        {label}
      </label>

      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full bg-white px-3 py-[13.5px] flex justify-between items-center mt-1"
      >
        <span className={`font-openSans font-normal text-base leading-5 ${value ? "text-black" : "text-black "}`}>
          {value || `Select ${placeholder}`}
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
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className="px-4 py-2 cursor-pointer text-black hover:bg-green-100"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
