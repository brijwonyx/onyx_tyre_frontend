import { Link, useNavigate } from "react-router-dom";

import Button from "../../common/forms/Button";

import { useCart } from "../../../context/cardContext";
import { getAccessToken } from "../../../utils/cookiesManager";

const CartSummary = ({ closeCart, setOpenCart }) => {
  const { cart: cartItems, totalPrice } = useCart();
  const router = useNavigate();

  const handleClick = () => {
    const accessToken = getAccessToken();

    if (accessToken) {
      setOpenCart(false);
      router("/checkout/delivery");
    } else {
      setOpenCart(false);
      router("/login");
    }
  };

  return (
    <>
      <div className=" border-t border-[#8E8E8E] py-6 px-4 ">
        {cartItems?.length > 0 && (
          <div className="flex justify-between">
            <div className="">
              <h5 className="font-montserrat font-semibold text-base">
                Order Total
              </h5>
              <p className="font-openSans font-normal text-xs">
                Tax included and shipping calculated at checkout
              </p>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-montserrat font-bold text-2xl">
                ${totalPrice}
              </span>
            </div>
          </div>
        )}
      </div>
      {!cartItems?.length > 0 && (
        <div className="flex justify-center">
          <Button
            onClick={closeCart}
            className="font-montserrat font-semibold text-base uppercase"
          >
            Keep Shoping
          </Button>
        </div>
      )}

      {cartItems?.length > 0 && (
        <div className="grid grid-cols-2 gap-2 w-full py-2 px-4">
          <Button
            onClick={closeCart}
            className="font-montserrat font-semibold text-base uppercase"
          >
            Keep Shoping
          </Button>

          <Button solid className="w-full" onClick={handleClick}>
            Checkout
          </Button>
        </div>
      )}
    </>
  );
};

export default CartSummary;
