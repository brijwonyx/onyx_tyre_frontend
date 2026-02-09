import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InlineEditableField from "../common/InlineEditableField";
import Button from "../common/forms/Button";

const DeliveryMethod = () => {
  const [selected, setSelected] = useState("store");
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col gap-6">
      {/* TITLE */}
      <div>
        <h2 className="text-2xl font-semibold font-montserrat">
          Delivery and Installation
        </h2>

        <p className="font-openSans font-normal text-base mt-1">
          Please enter your shipping information and confirm a few additional
          details for your order.
        </p>
      </div>

      {/* PINCODE */}

      <InlineEditableField label="Pincode" value="40004" grey="true" />

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
