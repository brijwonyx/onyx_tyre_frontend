import ProductIdentity from "../../common/ProductIdentity";
import tyre from "../../../assets/tyre-item.png";
import tyreBrand from "../../../assets/tyre-brand.png";
import RatingStars from "../../common/RatingStars";
import ProductBadges from "../../common/Productbadges";
import Button from "../../common/forms/Button";

const ProductCard = () => {
  return (
    <div className="w-[420px] shadow-md border border-[#E6E6E6] ">
      <div className="w-[420px] h-[260px] flex">
        <img
          src={tyre}
          alt="tyre"
          className="bg-[#ececec] object-cover mb-2 w-full"
        />
      </div>
      <div className="bg-white p-4">
        <div className="flex flex-col w-full gap-4">
          <div>
            <h6 className="font-montserrat font-bold text-xs">Michelin</h6>
            <h3 className="font-montserrat font-bold text-xl">
              Michelin Pilot Sport 4
            </h3>
          </div>
          <RatingStars rating="4.7" reviews="550" />
           <ProductBadges />
          </div>
          <div className="flex flex-col gap-6 mt-6">
          <p className="font-montserrat font-bold text-2xl">Start at $295.00 <span className="text-[#8E8E8E] font-openSans text-sm font-normal">/tire</span></p>
          <Button solid className="w-full">find your size</Button>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;
