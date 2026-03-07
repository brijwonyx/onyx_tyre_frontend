import tyreImg from "../../../assets/tyre-item.png";
import tyreBrand from "../../../assets/tyre-brand.png";

import FiltersBar from "../FilterBar";
import ProductItem from "../ProductItem";
import TopPicksCarousel from "./TopPicksCarousel";
import { Heart } from "lucide-react";
import Button from "../../common/forms/Button";
import ContactBanner from "../../home/ContactBanner";

const BrandResults = () => {
  return (
    <>
      <TopPicksCarousel />
      <div className="px-16 py-10">
        <FiltersBar />

        <ProductItem
          image={tyreImg}
          BrandImage={tyreBrand}
          name="Michelin Primacy Tour A/S"
          desc="Tailored for luxury touring vehicles, the Michelin Primacy Tour A/S combines comfort with exceptional wet and dry traction, ensuring"
          price={210}
          rating={4.5}
          reviews={420}
        >
          <div className="flex justify-between items-center  mt-6">
            <p className="font-montserrat font-bold text-2xl">
              Start at $210.00
              <span className="font-openSans font-regular text-sm text-[#8E8E8E]">
                /tire
              </span>
            </p>

            <div className="flex items-center gap-4">
              <button className="">
                <Heart />
              </button>
              <Button solid>FIND YOUR SIZE</Button>
            </div>
          </div>
        </ProductItem>


      </div>
            <ContactBanner/>
    </>
  );
};
export default BrandResults;
