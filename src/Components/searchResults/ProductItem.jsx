import { Button } from "@headlessui/react";

import ProductIdentity from "../common/ProductIdentity";
import LineItem from "../common/LineItem";

const ProductItem = ({
  id,
  image,
  BrandImage,
  name,
  desc,
  children,
  season,
  review,
  rating,
  loadIndex,
  className,
  carType,
  cartSummary,
  speedRating,
}) => {
  return (
    <>
      <ProductIdentity
        id={id}
        name={name}
        image={image}
        desc={desc}
        BrandImage={BrandImage}
        season={season}
        review={review}
        rating={rating}
        loadIndex={loadIndex}
        className={className}
        cartSummary={cartSummary}
        car_type={carType}
        speedRating={speedRating}
      >
        {children && <div className="">{children}</div>}
      </ProductIdentity>
    </>
  );
};
export default ProductItem;
