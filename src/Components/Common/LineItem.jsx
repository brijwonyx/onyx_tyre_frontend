import bars from "../../assets/bars.svg";
import QuantitySelector from "./forms/QuantitySelector";
export default function LineItem({
  axle = "Front",
  size = "255/40R19",
  price = 295,
  stock = "In stock",
  actions = {},
  className
}) {
  return (
    <div className={`relative bg-white border shadow-md shadow-[5px_7px_11.9px_0px_#00000014] rounded-md p-3 ${className} `}>
      {/* 🔥 Angled Tag */}
      <div className="absolute top-[-48px] left-0">
        <div
          className="bg-primary text-white font-semibold pl-3 pr-8 py-3 flex items-center 
                        [clip-path:polygon(0_0,85%_0,100%_100%,0%_100%)]"
        >
          <span className="font-openSans font-normal text-xs pr-1">{axle}</span>
          <span className="font-montserrat font-semibold text-base">
            {size}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-montserrat font-bold text-2xl text-black">
            ${price}.00
            <span className="text-[#8E8E8E] text-sm font-normal font-openSans"> /tire</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-black font-openSans text-sm">
          <img src={bars} alt="Bars" />
          {stock}
        </div>

        <div className="text-right space-y-3">
          <QuantitySelector />
        </div>
      </div>
      <div className="flex justify-end mt-3 text-sm">
        {actions.subtotal && (
          <p className="text-black font-openSans font-normal ">
            Total for 2 <span className="font-medium font-montserrat ">$235.86</span>
          </p>
        )}
      </div>

      <div>
        {actions.remove && (
          <button className="text-red-500 font-medium">Remove</button>
        )}
        {actions.specs && (
          <button className="text-gray-600 mt-3 flex items-center gap-1">
            Show tyre specification
            <span>⌄</span>
          </button>
        )}
      </div>
    </div>
  );
}
