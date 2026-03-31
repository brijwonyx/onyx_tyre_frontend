import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import CustomSelect from "../../common/forms/CustomSelect";

import Button from "../../common/forms/Button";

import CallApi from "../../../Common-Controller/controller";

import PincodeAutocomplete from "../../Common/Forms/PincodeAutocomplete";

import { getWidthRatioDiam } from "../../../api/api.services";

const TyreBySize = () => {
  const [inputZipvalue, setInputZipValue] = useState("");
  const [verifiedZipValue, setVerifiedZipValue] = useState("");

  const [options, setOptions] = useState({
    width: [],
    Ratio: [],
    Diameter: [],
  });

  const [selectedValue, setSelectedValue] = useState({
    width: null,
    diameter: null,
    ratio: null,
  });

  const router = useNavigate();

  const handleRedirection = () => {
    const redirectValue = {
      size: `${selectedValue?.width?.value}/${selectedValue?.diameter?.value}R${selectedValue?.ratio?.value}`,
      userPincode: inputZipvalue,
      historyPage: "tyrebySize",
    };

    router("/search?type=vehicle", {
      state: redirectValue,
    });
  };

  const AlltyreSpecApi = CallApi();

  const updateOptions = (key, value) => {
    setOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const formatOptions = (arr) => {
    if (!arr || !arr.length) return [];

    return arr.map((item) => ({
      label: item,
      value: item,
    }));
  };

  const getAllWidRDiam = async () => {
    const makeRes = await getWidthRatioDiam(AlltyreSpecApi.request);
    const { data: finalAllSpecData } = makeRes || {};

    const { tyre_width, tyre_r, tyre_profile } = finalAllSpecData || {};

    updateOptions("width", formatOptions(tyre_width));
    updateOptions("Ratio", formatOptions(tyre_r));
    updateOptions("Diameter", formatOptions(tyre_profile));
  };

  const handleSelectChange = (field) => (option) => {
    setSelectedValue((prev) => ({
      ...prev,
      [field]: option,
    }));
  };

  useEffect(() => {
    getAllWidRDiam();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              options={options?.width}
              labelKey="label"
              value={selectedValue?.width}
              onChange={handleSelectChange("width")}
            />
            <CustomSelect
              label="Ratio"
              placeholder={
                AlltyreSpecApi?.loading ? "Loading..." : "Select Ratio"
              }
              options={options?.Ratio}
              labelKey="label"
              value={selectedValue?.ratio}
              onChange={handleSelectChange("ratio")}
            />
            <CustomSelect
              label="Diameter"
              placeholder={
                AlltyreSpecApi?.loading ? "Loading..." : "Select Diameter"
              }
              options={options?.Diameter}
              labelKey="label"
              value={selectedValue?.diameter}
              onChange={handleSelectChange("diameter")}
            />
          </div>

          {/* comment removed if any clearity u got */}
          {/* <div className="flex gap-2">
            <input type="checkbox" className="scale-150" />
            <p className="font-openSans font-normal text-base leading-6 ">
              Add a Different Rear Tire Size
            </p>
          </div> */}
          {/* <div className="flex gap-4 w-full">
            <NumberField label="Width" />
            <NumberField label="Ratio" />
            <NumberField label="Diameter" />
          </div> */}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-white" />
          <span className="text-white text-base font-openSans">&amp;</span>
          <div className="flex-1 h-px bg-white" />
        </div>

        {/* <CustomSelect
          label="Enter ZIP or Postal Code to See Shipping & Installer Options:"
          placeholder="Zip Code"
          options={["000000", "111111", "101010"]}
          value={zipCode}
          onChange={setZipCode}
        /> */}

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
