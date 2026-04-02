import { Button } from "@headlessui/react";

import ProductIdentity from "../common/ProductIdentity";
import LineItem from "../common/LineItem";

const ProductItem = ({
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
}) => {
  return (
    <>
      <ProductIdentity
        name={name}
        image={image}
        desc={desc}
        BrandImage={BrandImage}
        season={season}
        review={review}
        rating={rating}
        loadIndex={loadIndex}
        className={className}
      >
        {children && <div className="">{children}</div>}
      </ProductIdentity>
    </>
  );
};
export default ProductItem;
