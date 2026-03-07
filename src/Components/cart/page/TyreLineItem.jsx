import QuantitySelector from "../../common/forms/QuantitySelector";

const TyreLineItem = ({ type, size, price, qty, stock }) => {
  return (
    <div className="flex flex-col items-center justify-between border rounded-lg p-4 shadow-sm mt-4">
      <p className="bg-green-700 text-white text-xs px-3 py-1 inline-block rounded">
        {type} {size}
      </p>
      <div className="flex">
        <p className="text-2xl font-bold mt-2">
          ${price}
          <span className="text-gray-400 text-sm"> /tire</span>
        </p>

        <p className="text-green-600 text-sm mt-1">
          {stock ? "In stock" : "Out of stock"}
        </p>

        <QuantitySelector value={qty} />
      </div>
      <div className="flex">
        <p>Remove This Item</p>
        <p>Total for {qty} {price * qty}</p>
      </div>
    </div>
  );
};

export default TyreLineItem;
