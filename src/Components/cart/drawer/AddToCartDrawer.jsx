import Drawer from "../../common/Drawer";
import CartList from "./CartList";

import CartSummary from "./CartSummary";

import { useCart } from "../../../context/cardContext";

import ShimmerCard from "../../Common/Forms/Shimmer";

const AddToCartDrawer = ({ open, onClose, closeCart, setOpenCart }) => {
  const { cart, globalAddingCartLoader } = useCart();

  (cart,'cart')

  return (
    <>
      <Drawer open={open} onClose={onClose} title={`Cart (${cart?.length})`} footer={null}>
        <div className="flex flex-col justify-between h-full">
          {!globalAddingCartLoader ? (
            cart?.length > 0 ? (
              <CartList items={cart} variant="drawer" />
            ) : (
              <div className="flex items-center justify-center h-[100%]">
                You currently have no products in the cart.
              </div>
            )
          ) : (
            <div className="flex justify-center">Loading...</div>
          )}

          <div className="">
            <CartSummary closeCart={closeCart} setOpenCart={setOpenCart} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddToCartDrawer;
