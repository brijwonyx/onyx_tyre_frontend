import SummaryRow from "../../common/SummaryRow";
import { cartItems } from "../../../mock/CartData";
import CartList from "../../cart/drawer/CartList";
import SummaryRewards from "./SummaryRewards";

const SummaryItems = () => {
  return (
    <>
      <CartList items={cartItems} />
      <div className="border-dashed border-t border-black pt-6">
        <SummaryRow label="Subtotal" value="$469.72" />
        <SummaryRow label="Shipping" value="Free" free="true" />
        <SummaryRow label="STATE TAX (6%)" value="$12.00" />
        <SummaryRow label="Motor Vehicle Tire Fee" value="12.34" />
      </div>

      <SummaryRewards />
    </>
  );
};
export default SummaryItems;
