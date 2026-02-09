import CartProductCard from "../components/cart/page/CartProductCard";
import ContextBar from "../components/common/layout/ContextBar";
import tyreImg from "../assets/tyre-item.png";
import CartOrderSummary from "../components/cart/page/CartOrderSummary";

const Cart = () => {
  const product = {
    id: 1,
    title: "Michelin Latitude Sport 3",
    brand: "MICHELIN",
    image: tyreImg,

    tyres: [
      {
        id: "front",
        type: "Front",
        size: "255/40R19",
        price: 295,
        qty: 2,
        stock: true,
      },
      {
        id: "rear",
        type: "Rear",
        size: "255/40R19",
        price: 295,
        qty: 2,
        stock: true,
      },
    ],
  };

  return (
    <>
      <ContextBar
        breadCrumbs="Continue shopping"
        children="Shopping cart (4 Items)"
      />
      <div className="grid grid-cols-3 justify-between px-16 py-10 gap-10">
        <div className="col-span-2">
          <CartProductCard product={product} />
        </div>
        <CartOrderSummary />
      </div>
    </>
  );
};
export default Cart;
