import { Button } from "@headlessui/react";

import ProductIdentity from "../common/ProductIdentity";
import LineItem from "../common/LineItem";

const ProductItem = ({
  image,
  BrandImage,
  name,
  desc,
  price,
  liked = false,
  children,
}) => {
  return (
    <>
      <ProductIdentity
        name={name}
        image={image}
        desc={desc}
        BrandImage={BrandImage}
      >
        {children && <div className="">{children}</div>}
      </ProductIdentity>
    </>
  );
};
export default ProductItem;
