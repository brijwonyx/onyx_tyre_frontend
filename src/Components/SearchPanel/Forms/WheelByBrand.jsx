import { useState } from "react";
import BrandCard from "../Common/BrandCard";
import CustomSelect from "../Common/CustomSelect";
import Button from "../../Common/Forms/Button";

const Brands = Array.from({ length: 16 }, (_, index) => ({
  id: `{brand-${index}}`,
  name: "Michelin",
  img: "/",
}));
// const MAX_VISIBLE = 16

const WheelByBrand = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [zipCode, setZipCode] = useState("");


  const toggleBrand = (id) => {
    setSelectedBrands((prev) =>
      prev.includes(id) ? prev.filter((b) => b !== id) : [...prev, id],
    );
  };
  // const visibleBrands = BRANDS.slice(0, MAX_VISIBLE);

  return (
    <div className="flex flex-col gap-4 text-white w-full ">
      <h5 className="font-montserrat font-semibold text-xl leading-[20px] text-left ">
        Search by Vehicle
      </h5>
      <div className="grid grid-cols-4">
        {Brands.map((brand) => (
          <BrandCard
            key={brand.id}
            id={brand.id}
            logo={brand.logo}
            checked={selectedBrands.includes(brand.id)}
            onChange={toggleBrand}
          />
        ))}
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

export default WheelByBrand;
