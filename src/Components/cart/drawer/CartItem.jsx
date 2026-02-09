import QuantitySelector from "../../common/forms/QuantitySelector";

const CartItem = ({ item, variant = "drawer" }) => {
  const isDrawer = variant === "drawer";

  return (
    <div className={`flex ${isDrawer ? "gap-3 py-3" : "gap-6 py-6"} border-b border-[#8E8E8E]`}>
      {/* IMAGE */}
      <img
        src={item.image}
        alt=""
        className={isDrawer ? "w-20 h-20" : "w-24 h-24"}
      />

      {/* INFO */}
      <div className="flex-1">
        <h3 className="font-openSans text-sm text-black pb-1">{item.title}</h3>

        <p className="font-openSans text-sm text-black">{item.spec}</p>

        <div className="flex justify-between mt-2">
          <span className="font-bold font-montserrat text-2xl">
            ${item.price}
            <span className="text-[#8E8E8E] font-openSans text-sm font-normal">
              /tire
            </span>
          </span>

          <QuantitySelector variant="noborder"/>
        </div>
        <div className="flex justify-between mt-2 font-openSans text-sm">
          <p className="text-primary  ">Remove this item</p>

          <p className="font-normal">
            Total for 2  <span className="font-medium">${item.price * 2}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
