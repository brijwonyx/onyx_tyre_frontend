import { useLocation } from "react-router-dom";

import SummaryItems from "./SummaryItems";
import SummaryRewards from "./SummaryRewards";
import SummaryDiscount from "./SummaryDiscount";
import SummaryShipping from "./SummaryShipping";

const CheckoutOrderSummary = () => {
  const { pathname } = useLocation();

  const isInstaller = pathname.includes("installer");
  const isPayment = pathname.includes("payment");

  return (
    <div
      className="bg-white rounded-lg p-6  shadow-[3px_2px_23.5px_0px_#00000029] border border-[#E6E6E6]
h-fit"
    >
      <h2 className="text-xl font-bold font-montserrat mb-3">Order Summary</h2>
   

      {/* ALWAYS SHOW */}
      <SummaryItems />
      {/* <SummaryDiscount /> */}
        <div className="flex justify-between items-start border-t border-black border-dashed pt-6 ">
          <span className="text-base font-normal font-montserrat">
            Order Total
          </span>

          <div className="text-right">
            <p className="text-2xl font-bold font-montserrat">$700.00</p>
            <p className="text-sm text-black font-openSans font-normal">
              $211.96 total savings
            </p>
          </div>
        </div>

      {/* FINAL STEP */}
      {isPayment && <SummaryShipping />}
    </div>
  );
};

export default CheckoutOrderSummary;
