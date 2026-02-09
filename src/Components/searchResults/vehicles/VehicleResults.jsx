import ContextBar from "../../common/layout/ContextBar";
import FiltersBar from "../FilterBar";
import ProductItem from "../ProductItem";
import tyreImg from "../../../assets/tyre-item.png";
import tyreBrand from "../../../assets/tyre-brand.png";
import LineItem from "../../common/LineItem";
import { Heart } from "lucide-react";
import Button from "../../common/forms/Button";
import ProductServices from "../../productDetails/ProductServices";
import FindTyreBanner from "../../common/FindTyreBanner";

const VehicleResults = () => {
  return (
    <>
      <section className="">
        <ContextBar
          breadCrumbs="Home"
          children="2024 ford mustang dark horse - 255/40R19 - 275/40R19"
        />
        <div className="px-16">
          <div className="w-full h-px bg-[#404040] mt-10 mb-9"></div>
          <FiltersBar />
          <ProductItem
            image={tyreImg}
            BrandImage={tyreBrand}
            name="Michelin Primacy Tour A/S"
            desc="Tailored for luxury touring vehicles, the Michelin Primacy Tour A/S combines comfort with exceptional wet and dry traction, ensuring"
            rating={4.5}
            reviews={420}
          >
            <LineItem
              actions={{
                quantity: true,
                subtotal: true,
                specs: true,
              }}
              className="mt-[72px]"
            />
            {/* PRICE ROW */}
            <div className="flex flex-col justify-end items-end mt-6">
              <p className="font-openSans font-normal text-sm">
                Tire Set Subtotal 
                <span className="font-montserrat font-bold text-2xl pl-1">
                  $469.72
                </span>
              </p>

              <div className="flex items-center gap-4 mt-6">
                <button className="">
                  <Heart />
                </button>
                <Button solid>FIND YOUR SIZE</Button>
              </div>
            </div>
          </ProductItem>
          <ProductServices className="px-0 !py-10" />
        </div>
      </section>
      <FindTyreBanner />
    </>
  );
};

export default VehicleResults;
