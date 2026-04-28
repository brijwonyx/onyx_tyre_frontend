import { useLocation } from "react-router-dom";

const QuantitySelector = ({
  value,
  min = 1,
  stock,
  onChange,
  variant = "border",
  productId
}) => {
  console.log("stock", stock);
  console.log("productId", productId);
  
  const location = useLocation();

  console.log("location", location.state);
  const handleDecrease = () => {
    // const getCart = localStorage.getItem("tyre_cart");

    // const cart = JSON.parse(getCart);

    // const {value}  = cart || {};

    // console.log("valuevalue", value);

    // const item = value.find((item) => item.id === stock.id);
    // console.log("stock in localStorage", item);

    if (value > min) onChange(value - 1);
  };

  console.log(value,'valuevalue')

  const handleIncrease = () => {
    if (value < stock) onChange(value + 1);
  };

  return (
    <div
      className={`grid grid-cols-3 items-center  rounded-md overflow-hidden w-fit ${variant === "border" ? "border border-[#E6E6E6]" : ""} `}
    >
      <button
        onClick={handleDecrease}
        className={` text-lg text-[#8E8E93] hover:bg-gray-100 ${variant === "border" ? "px-3 py-3" : "px-2"} `}
      >
        −
      </button>

      <div className="px-3 py-3  text-center">{value}</div>

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
