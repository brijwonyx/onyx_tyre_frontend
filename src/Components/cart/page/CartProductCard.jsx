import LineItem from "../../common/LineItem";
import ProductItem from "../../searchResults/ProductItem";
import ProtectionPackages from "./ProtectionPackage";
import TyreLineItem from "./TyreLineItem";

const CartProductCard = ({ product }) => {
  // ✅ Calculate subtotal dynamically
  const subtotal = product.tyres.reduce(
    (acc, tyre) => acc + tyre.price * tyre.qty,
    0,
  );

  return (
    <>
      <div className="flex flex-col">
        <ProductItem image={product.image} name={product.title} desc={product.desc} price={product.price}  >
        <LineItem actions={{ quantity: true, subtotal: true, specs: true }} className="mt-16" />
        <LineItem actions={{ quantity: true, subtotal: true, specs: true }} className="mt-16" />
        </ProductItem>
        <ProtectionPackages />
      </div>
    </>
  );
};

export default CartProductCard;
