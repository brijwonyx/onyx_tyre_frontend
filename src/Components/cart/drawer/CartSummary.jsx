import { Link, useOutletContext } from "react-router-dom";
import Button from "../../common/forms/Button";


const CartSummary = ({ total, closeCart }) => {
  return (
    <>
      <div className="flex justify-between border-t border-[#8E8E8E] py-6 px-4 ">
        <div className="">
          <h5 className="font-montserrat font-semibold text-base">Order Total</h5>
          <p className="font-openSans font-normal text-xs">Tax included and shipping calculated at checkout</p>
        </div>
        <div className="flex justify-between mb-2">
          {/* <span>Subtotal</span> */}
          <span className="font-montserrat font-bold text-2xl">${total}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full py-2 px-4">
        <button onClick={closeCart} className="font-montserrat font-semibold text-base uppercase">Keep Shoping</button>
        <Link to="/cart">
        <Button solid className="w-full">Checkout</Button></Link>
        
      </div>
    </>
  );
};

export default CartSummary;
