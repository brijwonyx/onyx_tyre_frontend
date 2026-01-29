import { useState } from "react";
import Input from "../../Common/Forms/Input";
import CustomSelect from "../Common/CustomSelect";
import NumberField from "../Common/NumberField";
import Button from "../../Common/Forms/Button";

const TyreBySize = () => {
  const [zipCode, setZipCode] = useState("");

  return (
    <>
      <div className="flex flex-col gap-4 text-white w-full ">
        <h5 className="font-montserrat font-semibold text-xl leading-[20px] text-left ">
          Search by Vehicle
        </h5>
        <div className="py-6 flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <NumberField label="Width" />
            <NumberField label="Ratio" />
            <NumberField label="Diameter" />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" className="scale-150" />
            <p className="font-openSans font-normal text-base leading-6 ">
              Add a Different Rear Tire Size
            </p>
          </div>
          <div className="flex gap-4 w-full">
            <NumberField label="Width" />
            <NumberField label="Ratio" />
            <NumberField label="Diameter" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-white" />
          <span className="text-white text-base font-openSans">&amp;</span>
          <div className="flex-1 h-px bg-white" />
        </div>

        <CustomSelect
          label="Enter ZIP or Postal Code to See Shipping & Installer Options:"
          placeholder="Zip Code"
          options={["000000", "111111", "101010"]}
          value={zipCode}
          onChange={setZipCode}
        />
        <Button solid className="w-fit mx-auto mt-3">
          View Tyres
        </Button>
      </div>
    </>
  );
};
export default TyreBySize;
