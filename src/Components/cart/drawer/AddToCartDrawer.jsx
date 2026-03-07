import Drawer from "../../common/Drawer";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import {cartItems} from "../../../mock/CartData"
import { useOutletContext } from "react-router-dom";

const AddToCartDrawer = ({ open, onClose, closeCart }) => {
  // const {closeCart} = useOutletContext();
  return (
    <>
      <Drawer open={open} onClose={onClose} title="Cart" footer={null}>
        <div className="flex flex-col justify-between h-full">
          <CartList items={cartItems} variant="drawer" />

          <div className="">
            <CartSummary total="255" closeCart={closeCart} />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AddToCartDrawer;
