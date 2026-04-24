import { useState } from "react";

import CallApi from "../../../Common-Controller/controller";

import {
  addApplyCouponService,
  removeApplyCouponService,
} from "../../../api/api.services";

import toast from "react-hot-toast";

import { useCart } from "../../../context/cardContext";

const SummaryRewards = () => {
  const { getPreviewCart, priceBreakup } = useCart();

  const { discount } = priceBreakup || {};

  const [coupon, setCoupon] = useState("");

  const addApplyCouponAction = CallApi();

  const handleCoupon = (e) => {
    setCoupon(e.target.value);
  };

  const handleApplyCoupon = async () => {
    try {
      const res = await addApplyCouponService(addApplyCouponAction.request, {
        code: coupon,
      });

      if (!res.success) {
        throw new Error("Failed");
      }
      toast.success(res?.message);
      getPreviewCart();
    } catch (err) {
      setCoupon("");
      console.error("Cart sync failed", err);
    }
  };

  const handleRemoveCoupon = async () => {
    try {
      const res = await removeApplyCouponService(addApplyCouponAction.request);

      if (!res.success) {
        throw new Error("Failed");
      }
      toast.success(res?.message);
      setCoupon("");
      getPreviewCart();
    } catch (err) {
      setCoupon("");
      console.error("Cart sync failed", err);
    }
  };

  const isCouponApplied = discount > 0;

  return (
    <div className="border-t border-dashed py-5 mt-5">
      {/* AVAILABLE POINTS */}
      {/* <div className="flex justify-between items-center mb-3">
        <p className="flex items-center gap-2 font-medium">
          ⭐ Available Points
        </p>

        <p className="font-medium">15,420 ($154.20)</p>
      </div> */}

      {/* INPUT + APPLY */}

      <p className="text-sm text-gray-500 mb-2">
        {!isCouponApplied
          ? "🎉 Have a coupon? Apply it here!"
          : "🎊 Lucky You! Discount Applied"}
      </p>

      <div className="flex gap-3">
        <input
          value={isCouponApplied ? `${discount} Coupon Applied` : coupon}
          onChange={handleCoupon}
          placeholder="Enter coupon code"
          disabled={isCouponApplied}
          className={`flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary ${
            isCouponApplied ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        />
        
        {/* {isCouponApplied ? (
          <input
            value={coupon}
            onChange={(e) => handleCoupon(e)}
            placeholder="eg 100"
            className="flex-1 border rounded-md px-3 py-2 bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
          />
        ) : (
          <input
            value={`${discount} Coupon Applied`}
            onChange={(e) => handleCoupon(e)}
            placeholder="eg 100"
            disabled
            className="flex-1 border rounded-md px-3 py-2 bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
          />
        )} */}

        {/* {!coupon || discount > 0 ? (
          <button
            className={`px-6 rounded-md font-semibold transition
            ${
              coupon
                ? "bg-primary text-white hover:bg-green-800"
                : "bg-gray-400 text-white cursor-not-allowed"
            }
          `}
            onClick={() => handleApplyCoupon()}
          >
            Redeem
          </button>
        ) : (
          <button
            className={`px-6 rounded-md font-semibold transition
            ${
              coupon
                ? "bg-primary text-white hover:bg-green-800"
                : "bg-gray-400 text-white cursor-not-allowed"
            }
          `}
            onClick={() => handleRemoveCoupon()}
          >
            Remove
          </button>
        )} */}
        {/* <button
          className={`px-6 rounded-md font-semibold transition ${"bg-primary text-white hover:bg-green-800"}`}
          onClick={isCouponApplied ? handleRemoveCoupon : handleApplyCoupon}
        >
          {isCouponApplied ? "Remove" : "Redeem"}
        </button> */}

        <button
          disabled={!coupon && !isCouponApplied}
          className={`px-6 rounded-md font-semibold transition ${
            !coupon && !isCouponApplied
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-primary text-white hover:bg-green-800"
          }`}
          onClick={isCouponApplied ? handleRemoveCoupon : handleApplyCoupon}
        >
          {isCouponApplied ? "Remove" : "Redeem"}
        </button>
      </div>

      {/* LOYALTY TEXT */}
      {/* <p className="text-xs text-gray-500 mt-3">
        Loyalty perks: 10 points = $1 off
      </p> */}

      {/* GREEN EARN BAR */}
      {/* <div className="bg-[#33981F33] text-green-800 text-sm font-medium rounded-full py-2 text-center mt-4">
        Points You'll Earn on this order{" "}
        <span className="font-bold">+5,017</span>
      </div> */}
    </div>
  );
};

export default SummaryRewards;
