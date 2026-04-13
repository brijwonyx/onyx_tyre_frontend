import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InlineEditableField from "../common/InlineEditableField";
import Button from "../common/forms/Button";
import ProtectionPackages from "../cart/page/ProtectionPackage";

const DeliveryMethod = () => {
  const [selected, setSelected] = useState("store");
  const navigate = useNavigate();

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

      <InlineEditableField label="Pincode" value="40004" grey="true" />

      <div>
        <ProtectionPackages />
      </div>

      {/* <h2 className="text-2xl font-semibold font-montserrat">
        Delivery and Installation
      </h2> */}

      <h2 className="text-2xl font-bold font-montserrat">
        Protection Packages
      </h2>
      {/* OPTIONS */}
      <div className="grid grid-cols-2 gap-6 text-center">
        {/* STORE */}
        <Card
          selected={selected === "store"}
          onClick={() => setSelected("store")}
          title="Store Fitment"
          desc="Get Tyres Delivered and Fitted at a nearby Store"
          icon="🏪"
        />

        {/* HOME */}
        <Card
          selected={selected === "home"}
          onClick={() => setSelected("home")}
          title="Home Fitment"
          desc="Get Tyres Delivered and Fitted at your Doorstep as per your Convenience"
          icon="🚚"
        />
      </div>

      <Button
        onClick={() =>
          navigate(
            selected === "store"
              ? "/checkout/store-fitment/installer"
              : "/checkout/home-fitment/mobile",
          )
        }
        solid
        className="w-fit"
      >
        CONTINUE
      </Button>

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
