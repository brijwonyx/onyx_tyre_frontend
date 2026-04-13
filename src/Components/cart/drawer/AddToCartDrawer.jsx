import Drawer from "../../common/Drawer";
import CartList from "./CartList";

import CartSummary from "./CartSummary";

import { useCart } from "../../../context/cardContext";

const AddToCartDrawer = ({ open, onClose, closeCart, setOpenCart }) => {
  // Get Data here from local storage
  const { cart } = useCart();

  return (
    <>
      <Drawer open={open} onClose={onClose} title="Cart" footer={null}>
        <div className="flex flex-col justify-between h-full">
          {cart?.length > 0 ? (
            <CartList items={cart} variant="drawer" />
          ) : (
            <div className="flex items-center justify-center h-[100%]">
              You currently have no products in the cart.
            </div>
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
