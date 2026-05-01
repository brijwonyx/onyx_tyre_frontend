import { useState } from "react";

import { useNavigate } from "react-router-dom";

import ShimmerCard from "../Common/Forms/Shimmer";

import { useCart } from "../../context/cardContext";

// import InlineEditableField from "../common/InlineEditableField";

import Button from "../common/forms/Button";

import ProtectionPackages from "../cart/page/ProtectionPackage";

import { ShoppingCart } from "lucide-react";

import CartProductCard from "../cart/page/CartProductCard";

import QuantityLineItem from "../Common/layout/QuantityLineItem";

import ProductItem from "../searchResults/ProductItem";

const DeliveryMethod = () => {
  const [selected, setSelected] = useState("home");

  const { cartSummayItems: cartItems, globalAddingCartLoader } = useCart();

  const shimmerMap = new Array(3).fill(null);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate(
      selected === "store"
        ? "/checkout/store-fitment/installer"
        : "/checkout/home-fitment/mobile",
    );
  };

  const handleGoforShopping = () => {
    navigate("/");
  };

  return (
    <div className=" flex flex-col gap-6">
      {/* TITLE */}
      <div>
        <p className="font-openSans font-normal text-base mt-1">
          Please enter your shipping information and confirm a few additional
          details for your order.
        </p>
      </div>

      {/* PINCODE */}

      {/* <InlineEditableField label="Pincode" value="40004" grey="true" /> */}

      <div className="flex gap-4 items-center">
        <ShoppingCart className="text-2xl" />
        <h2 className="text-2xl">Your Shopping Cart</h2>
      </div>

      {globalAddingCartLoader ? (
        shimmerMap.map((_, index) => (
          <ShimmerCard className="h-[200px] rounded-lg" key={index} />
        ))
      ) : cartItems?.length ? (
        cartItems?.map((item) => {
          return (
            <div className="flex flex-col rounded-lg shadow-md shadow-[5px_7px_11.9px_0px_#00000014]">
              <ProductItem
                id={item.id}
                image={item.image}
                name={item.label}
                price={item.price}
                quantity={item.qty}
                BrandImage={item.logo}
                cartSummary={true}
                carType={item?.car_type}
                season={item?.season_type}
                speedRating={item?.speed_rating}
                loadIndex={item?.load_index}
              >
                <QuantityLineItem
                  actions={{ quantity: false, subtotal: true, specs: true }}
                  quantity={item?.qty}
                  item={item}
                  price={item?.price}
                  total={item?.total}
                  // size={item?.price}
                  className="mt-16"
                />
              </ProductItem>
            </div>
          );
        })
      ) : (
        <>
          <div className="bg-[#bce8f1] p-3 text-[#31708f] border rounded-md">
            <h5>You currently have no products in the cart.</h5>
          </div>
          <div className="">
            <Button
              className="font-montserrat font-semibold text-base uppercase"
              onClick={() => {
                handleGoforShopping();
              }}
            >
              Keep Shoping
            </Button>
          </div>
        </>
      )}

      {cartItems?.length > 0 && (
        <>
          <div>
            <ProtectionPackages />
          </div>

          <h2 className="text-2xl font-bold font-montserrat">
            Delivery and Installation
          </h2>

          <div className="grid grid-cols-2 gap-6 text-center">
            {/* <Card
              selected={selected === "store"}
              onClick={() => setSelected("store")}
              title="Store Fitment"
              desc="Get Tyres Delivered and Fitted at a nearby Store"
              icon="🏪"
            /> */}

            <Card
              selected={selected === "home"}
              onClick={() => setSelected("home")}
              title="Home Fitment"
              desc="Get Tyres Delivered and Fitted at your Doorstep as per your Convenience"
              icon="🚚"
            />
          </div>

          <Button onClick={handleContinue} solid className="w-fit">
            CONTINUE
          </Button>
        </>
      )}
      {/* <div className="bg-[#FFC857] py-6 px-4">
        <h3 className="font-semibold text-xl font-montserrat ">
          Unlock Loyalty Rewards
        </h3>

        <ul className="py-3 text-base font-sans font-normal">
          <li>
            🔹Earn <span className="font-bold">420 points ($4.20 value)</span>{" "}
            with this order
          </li>
          <li>
            🔹Get <span className="font-bold">free shipping </span> on future
            orders
          </li>
          <li>
            🔹<span className="font-bold">Exclusive member-only</span> deals
          </li>
        </ul>

        <Button className="w-full mt-4 !bg-transparent">
          SIGN UP / LOG IN
        </Button>

        <p className="text-xs text-center mt-2 font-openSans italic">
          Takes 30 seconds. Points apply after login!
        </p>
      </div> */}
    </div>
  );
};

export default DeliveryMethod;

const Card = ({ selected, onClick, title, desc, icon }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer border rounded-lg p-6 transition shadow-md
        ${selected ? "border-primary shadow-md" : "border-gray-200"}
      `}
    >
      <div className="text-3xl">{icon}</div>

      <h3 className="font-semibold mt-4 font-montserrat">{title}</h3>

      <p className="text-black mt-2 text-sm font-openSans">{desc}</p>
    </div>
  );
};
