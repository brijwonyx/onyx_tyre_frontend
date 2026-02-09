import { useState } from "react";

const QuantitySelector = ({
  value = 1,
  min = 1,
  max = 99,
  onChange,
  variant = "border",
}) => {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className={`grid grid-cols-3 items-center  rounded-md overflow-hidden w-fit ${variant === "border" ? "border border-[#E6E6E6]" : ""} `}>

      <button
        onClick={handleDecrease}
        className={` text-lg text-[#8E8E93] hover:bg-gray-100 ${variant === "border" ? "px-3 py-3" : "px-2"} `}
      >
        −
      </button>

      <div className="px-3 py-3  text-center">
        {value}
      </div>

      <button
        onClick={handleIncrease}
        className={` text-lg text-[#8E8E93] hover:bg-gray-100 ${variant === "border" ? "px-3 py-3" : "px-2"} `}
      >
        +
      </button>

    </div>
  );
};

export default QuantitySelector;
