import { useEffect, useState } from "react";
import BrandCard from "../Common/BrandCard";

// Commented if not in use removed after release
import CustomSelect from "../../common/forms/CustomSelect";
import Button from "../../common/forms/Button";
import CallApi from "../../../Common-Controller/controller";
import { getBrand } from "../../../api/api.services";

import { useNavigate } from "react-router-dom";
import PincodeAutocomplete from "../../Common/Forms/PincodeAutocomplete";

// const Brands = Array.from({ length: 4 }, (_, index) => ({
//   id: `{brand-${index}}`,
//   name: "Michelin",
//   img: "/",
// }))

// const MAX_VISIBLE = 16

const TyreByBrand = () => {
  const [optionBrands, setOptionBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [inputZipvalue, setInputZipValue] = useState("");
  const [verifiedZipValue, setVerifiedZipValue] = useState("");

  const router = useNavigate();

  const brandApi = CallApi();

  const toggleBrand = (brand) => {
    setSelectedBrand((prev) => (prev?.value === brand ? null : brand));
  };

  const fetchBrand = async () => {
    const makeRes = await getBrand(brandApi.request);
    const { data: finalBandsData } = makeRes || {};
    setOptionBrands(finalBandsData);
  };

  useEffect(() => {
    fetchBrand();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleView = () => {
    const redirectValue = {
      brand: `${selectedBrand?.vendor_name}`,
      userPincode: inputZipvalue,
      historyPage: "tyrebyBrand",
    };
    router("/search?type=vehicle", {
      state: redirectValue,
    });
  };

  const isButtonDisable = !selectedBrand || !verifiedZipValue;

  return (
    <div className="flex flex-col gap-4 text-white w-full ">
      <h5 className="font-montserrat font-semibold text-xl leading-[20px] text-left ">
        Search by Brand
      </h5>
      <div>
        {optionBrands?.length > 0 ? (
          <div className="grid grid-cols-4">
            {optionBrands.map((brand) => (
              <BrandCard
                key={brand.id}
                id={brand.id}
                logo={brand.logo}
                checked={selectedBrand?.id === brand.id}
                onChange={() => toggleBrand(brand)}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center">Loading...</div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 h-px bg-white" />
        <span className="text-white text-base font-openSans">&amp;</span>
        <div className="flex-1 h-px bg-white" />
      </div>
      <div>
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
      </div>
      <Button
        solid
        className="w-fit mx-auto mt-3"
        onClick={handleView}
        disabled={isButtonDisable}
      >
        View Tyres
      </Button>
    </div>
  );
};

export default TyreByBrand;
