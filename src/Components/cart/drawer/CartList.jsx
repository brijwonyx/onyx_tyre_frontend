import CartItem from "./CartItem";

const CartList = ({ items, variant }) => {
  return (
    <div className="flex flex-col">
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          variant={variant} 
        />
      ))}
    </div>
  );
};

export default CartList;
