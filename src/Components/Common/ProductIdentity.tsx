import { Children } from "react";
import ProductBadges from "./Productbadges";
import RatingStars from "./RatingStars";

interface ProductIdentityPropsType {
  name: string;
  image?: string;
  desc?: string;
  BrandImage?: string;
  season?: string;
  review?: number;
  rating?: number;
  loadIndex?: number;
  className?: string;
  children?: React.ReactNode;
  car_type?: string;
  size?: string;
}

const ProductIdentity = (props: ProductIdentityPropsType) => {
  const {
    name,
    image,
    desc,
    BrandImage,
    season,
    review,
    rating,
    loadIndex,
    className,
    children,
    car_type,
    size,
  } = props;

  return (
    <div className={`flex gap-6 px-6 py-4 ${className}`}>
      {image ? (
        <img
          src={image}
          alt={name}
          className="bg-[#ececec] object-contain mb-2 w-[204px] max-w-[204px]"
        />
      ) : null}

      <div className="flex flex-col w-full justify-center">
        <img src={BrandImage} alt={name} className="h-[55px] w-[171px]" />
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-montserrat font-bold text-xl leading-[32px] ">
              {name}
            </h3>
            <h2 className="mb-2">{size}</h2>

            <p className="font-openSans text-base leading-[24px]">{desc}</p>
          </div>

          <RatingStars rating={rating} reviews={review} />
        </div>

        <ProductBadges
          car_type={car_type}
          season={season}
          loadIndex={loadIndex}
        />
        {children}
      </div>
    </div>
  );
};
export default ProductIdentity;
