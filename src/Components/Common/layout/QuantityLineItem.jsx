import React from "react";

import QuantitySelector from "../Forms/QuantitySelector";
import CartQuantitySelector from "../Forms/CartQuantitySelector";

export default function QuantityLineItem({
  axle = "Size",
  size,
  price,
  quantity,
  total,
  actions = {},
  className,
}) {

  return (
    <div
      className={`relative bg-white border shadow-md shadow-[5px_7px_11.9px_0px_#00000014] rounded-md p-3 ${className} `}
    >
      {/* 🔥 Angled Tag */}
      <div className="absolute top-[-48px] left-0">
        {size && (
          <div
            className="bg-primary text-white font-semibold pl-3 pr-8 py-3 flex items-center 
                        [clip-path:polygon(0_0,85%_0,100%_100%,0%_100%)]"
          >
            <span className="font-openSans font-normal text-xs pr-1">
              {axle}
            </span>
            <span className="font-montserrat font-semibold text-base">
              {size}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-montserrat font-bold text-2xl text-black">
            ${price}.00
            <span className="text-[#8E8E8E] text-sm font-normal font-openSans">
              {" "}
              /tire
            </span>
          </p>
        </div>

        {/* <div className="text-right space-y-3">
          <QuantitySelector value={quantity} />
          <CartQuantitySelector item={item} variant="border"/>
        </div> */}
      </div>
      <div className="flex justify-end mt-3 text-sm">
        {actions.subtotal && (
          <p className="text-black font-openSans font-bold ">
            Total for {quantity}{" "}
            <span className="font-medium font-montserrat ">
              ${total ?? price * (quantity ?? 1)}
            </span>
          </p>
        )}
      </div>

      <div>
        {actions.remove && (
          <button className="text-red-500 font-medium">Remove</button>
        )}
        {/* {actions.specs && (
          <button className="text-gray-600 mt-3 flex items-center gap-1">
            Show tyre specification
            <span>⌄</span>
          </button>
        )} */}
      </div>
    </div>
  );
}
