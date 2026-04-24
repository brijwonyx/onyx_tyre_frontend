import { useMemo, useState, useCallback } from "react";
import { useOutletContext } from "react-router-dom";

import ProductGallery from "./ProductGallery";

import QuantitySelector from "../common/forms/QuantitySelector";

import Button from "../common/forms/Button";
import InlineEditableField from "../Common/InlineEditableField";
import ProductIdentity from "../common/ProductIdentity";

import { Review, TyreModelType } from "../../types/ProductDetailsType";
import { getOverAllRating } from "../../utils/getOverAllRating";
import { useCart } from "../../context/cardContext";

interface ProductHeroPropsType {
  tyreId: string;
  tyreDetails: TyreModelType;
  price: number;
  reviews: Review[];
  tyreSize: string;
  wareHouseId: string;
  stock: number;
}

type OutletContextType = {
  openCart: () => void;
};

const ProductHero = ({
  tyreId,
  tyreDetails,
  price,
  reviews,
  tyreSize,
  wareHouseId,
  stock,
}: ProductHeroPropsType) => {
  const { addToCart, globalAddingCartLoader } = useCart();
  const [qty, setQty] = useState(1);
  const { openCart } = useOutletContext<OutletContextType>();

  const product = useMemo(() => {
    return {
      id: tyreId,
      name: tyreDetails?.model_name || "",
      description: tyreDetails?.description || "",
      brandLogo: tyreDetails?.brand?.logo || "",
      season: tyreDetails?.season_type || "",
      carType: tyreDetails?.car_type || "",
      images:
        tyreDetails?.images?.map((img) => img?.image_url).filter(Boolean) || [],
      rating: Number(getOverAllRating(reviews)) || 0,
      reviewCount: reviews?.length || 0,
      price: price ?? 0,
      size: tyreSize,
      wareHouseId: wareHouseId,
      stock: stock,
    };
  }, [tyreId, tyreDetails, reviews, price, wareHouseId, stock, tyreSize]);

  const handleAddCart = useCallback(() => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.images?.[0] || "",
      tyreSize: product.size,
      wareHouseId: product.wareHouseId,
      stock: product.stock,
    });

    setTimeout(() => {
      openCart();
    }, 2000);

    setQty(1);
  }, [addToCart, product, qty, openCart]);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Image */}
      <div>
        <ProductGallery images={product.images} />
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex flex-col w-full gap-6">
          <ProductIdentity
            id={product.id}
            name={product.name}
            desc={product.description}
            BrandImage={product.brandLogo}
            className="!py-0"
            review={product.reviewCount}
            rating={product.rating}
            season={product.season}
            car_type={product.carType}
            cartSummary={false}
          />

          {/* Price */}
          <div>
            <span className="font-openSans font-normal text-base">
              Tyre Size - {product.size || "_"}
            </span>
            <h4 className="font-montserrat font-bold text-4xl mb-3 mt-2">
              ${product.price || "_"}
              <span className="font-openSans font-normal text-base">/tire</span>
            </h4>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <QuantitySelector
              value={qty}
              onChange={setQty}
              stock={product?.stock}
            />

            <Button
              solid
              className="w-full"
              onClick={handleAddCart}
              loading={globalAddingCartLoader}
            >
              {globalAddingCartLoader ? "Adding your items" : "Add to Cart"}
            </Button>
          </div>

          {/* Delivery */}
          <div>
            <InlineEditableField label="Delivery Option" />
            <p className="font-openSans font-normal text-base py-1">
              Estimated delivery time is 2-3 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
