import { useCart } from "../../context/cardContext";
import ProductBadges from "./Productbadges";
import RatingStars from "./RatingStars";
import { Trash2 } from "lucide-react";

interface ProductIdentityPropsType {
  id: string;
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
  cartSummary: boolean;
  speedRating?: string;
}

const ProductIdentity = (props: ProductIdentityPropsType) => {
  const { removeFromSummaryCart } = useCart();
  const {
    id,
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
    cartSummary,
    speedRating,
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
        <div className="flex  justify-between items-center">
          <img src={BrandImage} alt={name} className="h-[55px] w-[171px]" />
          {!!cartSummary && (
            <div className="relative group cursor-pointer inline-block">
              <Trash2
                className="transition-all duration-200 group-hover:text-red-500"
                onClick={() => removeFromSummaryCart(id)}
              />

              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                   opacity-0 group-hover:opacity-100 
                   translate-y-1 group-hover:translate-y-0
                   transition-all duration-200
                   text-red-500 text-xs px-2 py-1 rounded shadow-md whitespace-nowrap"
              >
                Remove from Cart
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="font-montserrat font-bold text-xl leading-[32px] ">
              {name}
            </h3>
            <h2 className="mb-2">{size}</h2>
            {!cartSummary && (
              <p className="font-openSans text-base leading-[24px]">{desc}</p>
            )}
          </div>

          {!cartSummary && <RatingStars rating={rating} reviews={review} />}
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
