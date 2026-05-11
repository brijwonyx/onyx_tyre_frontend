import { useState } from "react";

import { useNavigate } from "react-router-dom";

import CustomSelect from "../../common/forms/CustomSelect";

import Button from "../../common/forms/Button";

import CallApi from "../../../Common-Controller/controller";

import PincodeAutocomplete from "../../Common/Forms/PincodeAutocomplete";

import { tyreCart } from "../../../context/tyreContext";

const TyreBySize = () => {
  const router = useNavigate();

  const { AlltyreSpecApi, tyreWdrOptions } = tyreCart();

  // Initial States
  const [inputZipvalue, setInputZipValue] = useState("");
  const [verifiedZipValue, setVerifiedZipValue] = useState("");

  const [selectedValue, setSelectedValue] = useState({
    width: null,
    diameter: null,
    ratio: null,
  });

  // Redirection Function
  const handleRedirection = () => {
    const redirectValue = {
      size: `${selectedValue?.width?.value}/${selectedValue?.diameter?.value}R${selectedValue?.ratio?.value}`,
      userPincode: inputZipvalue,
      historyPage: "tyrebySize",
    };

    router("/search?type=tyre", {
      state: redirectValue,
    });
  };

  // handle Change
  const handleSelectChange = (field) => (option) => {
    setSelectedValue((prev) => ({
      ...prev,
      [field]: option,
    }));
  };
  
  // Disable Button Functionality
  const isButtonValid =
    !selectedValue?.width ||
    !selectedValue?.ratio ||
    !selectedValue?.diameter ||
    !verifiedZipValue;

  return (
    <>
      <div className="flex flex-col gap-4 text-white w-full ">
        <h5 className="font-montserrat font-semibold text-xl leading-[20px] text-left ">
          Search by Size
        </h5>
        <div className="py-6 flex flex-col gap-6">
          <div className="flex gap-4 w-full">
            <CustomSelect
              label="Width"
              placeholder={
                AlltyreSpecApi?.loading ? "Loading..." : "Select Width"
              }
              options={tyreWdrOptions?.width}
              labelKey="label"
              value={selectedValue?.width}
              onChange={handleSelectChange("width")}
            />
            <CustomSelect
              label="Diameter"
              placeholder={
                AlltyreSpecApi?.loading ? "Loading..." : "Select Diameter"
              }
              options={tyreWdrOptions?.Diameter}
              labelKey="label"
              value={selectedValue?.diameter}
              onChange={handleSelectChange("diameter")}
            />
            <CustomSelect
              label="Ratio"
              placeholder={
                AlltyreSpecApi?.loading ? "Loading..." : "Select Ratio"
              }
              options={tyreWdrOptions?.Ratio}
              labelKey="label"
              value={selectedValue?.ratio}
              onChange={handleSelectChange("ratio")}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-white" />
          <span className="text-white text-base font-openSans">&amp;</span>
          <div className="flex-1 h-px bg-white" />
        </div>

        <PincodeAutocomplete
          label="Enter ZIP or Postal Code to See Shipping & Installer Options:"
          inputZipvalue={inputZipvalue}
          setInputZipValue={setInputZipValue}
          verifiedZipValue={verifiedZipValue}
          setVerifiedZipValue={setVerifiedZipValue}
        />
        <Button
          solid
          className="w-fit mx-auto mt-3"
          onClick={handleRedirection}
          disabled={isButtonValid}
        >
          View Tyres
        </Button>
      </div>
    </>
  );
};
export default TyreBySize;
