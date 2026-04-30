import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import StepHeader from "../../components/checkout/StepHeader";

import CheckoutOrderSummary from "../../components/checkout/orderSummary/CheckoutOrderSummary";

import CallApi from "../../Common-Controller/controller";

import { useCart } from "../../context/cardContext";

const CheckoutLayout = () => {
  const {
    getPreviewCart,
    cartSummayItems: cartItems,
    priceBreakup,
    shippingAddress
  } = useCart();

  useEffect(() => {
    getPreviewCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" mx-auto">
      <StepHeader />
      <div className="grid grid-cols-3 gap-10 px-16 py-10">
        <div className="col-span-2">
          <Outlet />
        </div>
        {cartItems.length ? (
          <div className="sticky top-24 h-fit">
            <CheckoutOrderSummary priceBreakup={priceBreakup} shippingAddress={shippingAddress} />
          </div>
        ) : (
          <div className="flex justify-center">Safe And Simple Payments</div>
        )}
      </div>
    </div>
  );
};

export default CheckoutLayout;
