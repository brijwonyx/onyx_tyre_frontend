import SummaryRow from "../../common/SummaryRow";
// import { cartItems } from "../../../mock/CartData";
import CartList from "../../cart/drawer/CartList";
import SummaryRewards from "./SummaryRewards";
import { useCart } from "../../../context/cardContext";

const SummaryItems = ({ priceBreakup }) => {
  const { subtotal, tax, tyre_fee, shipping, discount } = priceBreakup || {};
  const { protectionAdd } = useCart();

  const { price: protectionPrice, name: protectionName } =
    protectionAdd?.[0] || {};

  return (
    <>
      <CartList items={[]} />
      <div className="border-dashed border-t border-black pt-6">
        <SummaryRow label="Subtotal" value={`$${subtotal}`} />
        <SummaryRow
          label="Shipping"
          value={shipping === 0 ? "Free" : `${shipping}%`}
          free={shipping === 0}
        />
        <SummaryRow label="STATE TAX (6%)" value={`$${tax}`} />
        <SummaryRow label="Motor Vehicle Tire Fee" value={`$${tyre_fee}`} />
        {protectionAdd?.length ? (
          <SummaryRow label={protectionName} value={`$${protectionPrice}`} />
        ) : null}
      </div>
      {discount > 0 && (
        <SummaryRow
          label="Discount Applied"
          value={`- $${discount}`}
          className="text-red-500"
        />
      )}

      <SummaryRewards />
    </>
  );
};
export default SummaryItems;
