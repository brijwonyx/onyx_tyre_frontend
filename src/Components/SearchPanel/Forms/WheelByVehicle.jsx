import { useState } from "react";
import CustomSelect from "../Common/CustomSelect";
import Button from "../../Common/Forms/Button";

const WheelByVehicle = () => {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [style, setStyle] = useState("");
  const [zipCode, setZipCode] = useState("");

  return (
    <div className="flex flex-col gap-4 text-white w-full ">
      <h5 className="font-montserrat font-semibold text-xl leading-[20px] text-left ">
        Search by Vehicle
      </h5>
      <div className="grid grid-cols-4 gap-4">
        <CustomSelect
          label="Year"
          placeholder="Year"
          options={["2024", "2023", "2022"]}
          value={year}
          onChange={setYear}
        />
        <CustomSelect
          label="Make"
          placeholder="Make"
          options={["Honda", "Hyundai", "BMW"]}
          value={make}
          onChange={setMake}
        />
        <CustomSelect
          label="Model"
          placeholder="Model"
          options={["Honda", "Hyundai", "BMW"]}
          value={model}
          onChange={setModel}
        />
        <CustomSelect
          label="Style"
          placeholder="Style"
          options={["Honda", "Hyundai", "BMW"]}
          value={style}
          onChange={setStyle}
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-white" />
        <span className="text-white text-base font-openSans">&amp;</span>
        <div className="flex-1 h-px bg-white" />
      </div>
      <div>
        <CustomSelect
          label="Enter ZIP or Postal Code to See Shipping & Installer Options:"
          placeholder="Zip Code"
          options={["000000", "111111", "101010"]}
          value={zipCode}
          onChange={setZipCode}
        />
      </div>
      <Button solid className="w-fit mx-auto mt-3">
        View Tyres
      </Button>
    </div>
  );
};

export default WheelByVehicle;
