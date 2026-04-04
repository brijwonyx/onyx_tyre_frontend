import { useState } from "react";

import tyreImg from "../../../assets/tyre-item.png";
import tyreBrand from "../../../assets/tyre-brand.png";

import FiltersBar from "../FilterBar";
import ProductItem from "../ProductItem";
import TopPicksCarousel from "./TopPicksCarousel";

import { Heart } from "lucide-react";

import Button from "../../common/forms/Button";

import ContactBanner from "../../home/ContactBanner";
import { useNavigate } from "react-router-dom";

const BrandResults = () => {
  const filterOption = ["All tyres", "Run Flat"];

  const router = useNavigate();

  const [selectedFilter, setSelectedFilter] = useState("All tyres");

  const handleProductDetail = () => {
    const redirectState = {
      productId: `35fe947f-55fe-486a-85b4-9ea42ff39ffc`,
    };

    router("/product-detail", {
      state: redirectState,
    });
  };

  return (
    <>
      <TopPicksCarousel />
      <div className="px-16 py-10">
        <FiltersBar
          filterOption={filterOption}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div className="flex flex-col gap-4">
          {[...Array(3)].map(() => (
            <ProductItem
              image={tyreImg}
              BrandImage={tyreBrand}
              name="Michelin Primacy Tour A/S"
              desc="Tailored for luxury touring vehicles, the Michelin Primacy Tour A/S combines comfort with exceptional wet and dry traction, ensuring"
              price={210}
              rating={4.5}
              reviews={420}
              className="shadow-md curor-pointer rounded-xl"
            >
              <div className="flex justify-between items-center mt-6">
                <p className="font-montserrat font-bold text-2xl">
                  $210.00
                  <span className="font-openSans font-regular text-sm text-[#8E8E8E]">
                    /tire
                  </span>
                </p>

                <div className="flex items-center gap-4">
                  <button className="">
                    <Heart />
                  </button>
                  <Button onClick={() => handleProductDetail()} solid>
                    Show Details
                  </Button>
                </div>
              </div>
            </ProductItem>
          ))}
        </div>
      </div>
      <ContactBanner />
    </>
  );
};
export default BrandResults;
