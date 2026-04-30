import SummaryRow from "../../common/SummaryRow";
import CartList from "../../cart/drawer/CartList";
import SummaryRewards from "./SummaryRewards";
import { useCart } from "../../../context/cardContext";
import CallApi from "../../../Common-Controller/controller";
import toast from "react-hot-toast";
import { deleteProtectionService } from "../../../api/api.services";

const SummaryItems = ({ priceBreakup }) => {
  const { subtotal, tax, tyre_fee, shipping, discount, installer_charge } =
    priceBreakup || {};

  const { protectionAdd, getPreviewCart } = useCart();

  const {
    price: protectionPrice,
    name: protectionName,
    id: protectionId,
  } = protectionAdd?.[0] || {};

  const removeProtectionDataAction = CallApi();

  const removeProtectionToCart = async (id) => {
    // API
    try {
      const response = await deleteProtectionService(
        removeProtectionDataAction.request,
        {
          addonIds: id,
        },
      );
      if (response?.success) {
        getPreviewCart();
      }
    } catch (err) {
      console.error("Add failed", err);

      const errorMessage =
        err?.response?.data?.message || err?.message || "Something went wrong";

      toast.error(errorMessage);
    } finally {
      //
    }
  };

  return (
    <>
      <CartList items={[]} />
      <div className="border-dashed border-t border-black pt-6">
        <SummaryRow label="Subtotal" value={`$${subtotal}`} />
        <SummaryRow
          label="Shipping"
          value={shipping === 0 ? "Free" : `$${shipping}`}
          free={shipping === 0}
        />
        <SummaryRow label="STATE TAX (6%)" value={`$${tax}`} />
        <SummaryRow label="Motor Vehicle Tire Fee" value={`$${tyre_fee}`} />
        {protectionAdd?.length > 0 ? (
          <SummaryRow
            label={protectionName}
            value={`$${protectionPrice}`}
            handleRemoveProtection={removeProtectionToCart}
            protectionId={protectionId}
          />
        ) : null}
      </div>

      {discount > 0 && (
        <SummaryRow
          label="Discount Applied"
          value={`- $${discount}`}
          className="text-red-500"
        />
      )}

      {installer_charge ? (
        <SummaryRow label="Installer Charge" value={`$${installer_charge}`} />
      ) : null}

      <SummaryRewards />
    </>
  );
};
export default SummaryItems;
