import { Link } from "react-router-dom";
import Button from "../../common/forms/Button";
import SummaryRow from "../../common/SummaryRow";
import SummaryDiscount from "../../checkout/orderSummary/SummaryDiscount";
import InlineEditableField from "../../common/InlineEditableField";

const CartOrderSummary = () => {
  return (
    <div
      className="w-[440px] bg-white rounded-lg overflow-hidden shadow-[3px_2px_23.5px_0px_#00000029] border border-[#E6E6E6]
h-fit"
    >
      {/* MAIN CARD */}
      <div className="py-6 px-4">
        <h2 className="text-xl font-bold font-montserrat">Order Summary</h2>

        <hr className="my-4 bg-black" />

        {/* ROWS */}
        <SummaryRow label="Subtotal" value="$469.72" />
        <SummaryRow label="Shipping" value="Free" free="true" />
        <SummaryRow label="STATE TAX (6%)" value="$12.00" />
        <SummaryRow label="Motor Vehicle Tire Fee" value="12.34" />
        {/* <SummaryRow label="Discount" value={<SummaryDiscount/>} /> */}

        <hr className="my-4 bg-black" />

        {/* TOTAL */}
        <div className="flex justify-between items-start  ">
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

        {/* NOTE */}
        <p className="text-sm text-black font-openSans italic mt-3">
          Installation cost is not included. Proceed to see your delivery &
          installation options.
        </p>

        <div className="py-6">
          <InlineEditableField label="Pincode" value="40004" />
        </div>

        {/* CTA */}
        <Link to="/checkout/delivery">
          <Button solid className="w-full whitespace-nowrap">CONTINUE TO DELIVERY & INSTALLATION</Button>
        </Link>
      </div>

      {/* YELLOW LOYALTY CARD */}
      <div className="bg-[#FFC857] py-6 px-4">
        <h3 className="font-semibold text-xl font-montserrat ">Unlock Loyalty Rewards</h3>

        <ul className="py-3 text-base font-sans font-normal">
          <li>🔹Earn <span className="font-bold">420 points ($4.20 value)</span>  with this order</li>
          <li>🔹Get <span className="font-bold">free shipping </span> on future orders</li>
          <li>🔹<span className="font-bold">Exclusive member-only</span> deals</li>
        </ul>

       <Button className="w-full mt-4 !bg-transparent">SIGN UP / LOG IN</Button>

        <p className="text-xs text-center mt-2 font-openSans italic">
          Takes 30 seconds. Points apply after login!
        </p>
      </div>
    </div>
  );
};

export default CartOrderSummary;
