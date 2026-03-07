import { Children } from "react";
import ProductBadges from "./Productbadges";
import RatingStars from "./RatingStars";

const ProductIdentity = ({ name, image, desc, BrandImage, children,className }) => {
  return (
    <div className={`flex gap-6 py-6 ${className} `}>
      {image && (
        <img
          src={image}
          alt={name}
          className="bg-[#ececec] object-contain mb-2"
        />
      )}

      <div className="flex flex-col w-full">
        <img src={BrandImage} alt={name} className="h-[55px] w-[171px]" />
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-montserrat font-bold text-xl leading-[32px] ">
              {name}
            </h3>
            <p className="font-openSans text-base leading-[24px]">{desc}</p>
          </div>

          <RatingStars rating="4.8" reviews="300" />
        </div>

        <ProductBadges />
        {children}
      </div>
    </div>
  );
};
export default ProductIdentity;
