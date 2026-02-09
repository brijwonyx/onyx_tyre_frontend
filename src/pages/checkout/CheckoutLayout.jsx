import { Outlet } from "react-router-dom";
import StepHeader from "../../components/checkout/StepHeader";
import CheckoutOrderSummary from "../../components/checkout/orderSummary/CheckoutOrderSummary";

const CheckoutLayout = () => {
  return (
    <div className=" mx-auto">
      <StepHeader />
      <div className="grid grid-cols-3 gap-10 px-16 py-10">
        <div className="col-span-2">
          <Outlet />
        </div>

        {/* RIGHT */}
        <div className="sticky top-24 h-fit">
          <CheckoutOrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
