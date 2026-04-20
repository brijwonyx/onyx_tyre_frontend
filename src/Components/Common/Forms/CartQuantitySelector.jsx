import { useCart } from "../../../context/cardContext";

const CartQuantitySelector = ({ item, min = 1, variant = "border" }) => {
  const { updateQty } = useCart();

  const handleDecrease = () => {
    if (item?.quantity > min) updateQty(item?.id, Number(item?.quantity) - 1);
  };

  const handleIncrease = () => {
    if (item?.quantity < item?.stock)
      updateQty(item?.id, Number(item?.quantity) + 1);
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

      <div className="px-3 py-3  text-center">{item?.quantity}</div>

      <button
        onClick={handleIncrease}
        className={` text-lg text-[#8E8E93] hover:bg-gray-100 ${variant === "border" ? "px-3 py-3" : "px-2"} `}
      >
        +
      </button>
    </div>
  );
};

export default CartQuantitySelector;
