import CustomSelect from "../common/forms/CustomSelect";
import RatingStars from "../common/RatingStars";
import ProductGallery from "./ProductGallery";
import img1 from "../../assets/tyre-brand.png";
import img2 from "../../assets/tyre-item.png";
import QuantitySelector from "../common/forms/QuantitySelector";
import { useState } from "react";
import Button from "../common/forms/Button";
import { useOutletContext } from "react-router-dom";
import ProductIdentity from "../common/ProductIdentity";
import InlineEditableField from "../common/InlineEditableField";

const ProductHero = () => {
  const [qty, setQty] = useState(2);
  const { openCart } = useOutletContext();
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {/* Image */}
        <div className="">
          <ProductGallery
            images={[img1, img2, img1, img2, img1, img2, img1, img2]}
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col w-full gap-6">
            <ProductIdentity
              name="Michelin Latitude Sport 3"
              desc="Ideal for high-end SUVs, the Michelin Latitude Sport 3 delivers remarkable handling and stability on both dry and wet roads, providing"
              BrandImage={img1}
              className="!py-0"
            />
            <CustomSelect
              label="Pick a tire size for exact price"
              placeholder="255/40R/19"
              options={["255/40R/19", "255/40R/19", "255/40R/19"]}
              value=""
              onChange=""
              className="border border-[#E6E6E6] mt-1"
            />
            {/* Price */}
            <div>
              <h4 className="font-montserrat font-bold text-4xl mb-3">
                $295.00 <span className="font-openSans font-normal text-base">/tire</span>
              </h4>
              <p className="font-openSans font-normal text-base">
                Total for 2 <span className="font-medium">$590.00</span>
              </p>
            </div>
            <div className="flex gap-3">
              <QuantitySelector value={qty} onChange={setQty} />
              <Button solid className="w-full" onClick={openCart}>
                Add to Cart
              </Button>
            </div>
            <div>
              <InlineEditableField label="Delivery Option" value="40004" />
              <p className="font-openSans font-normal text-base py-1">Estimated delivery time is 2-3 days</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductHero;
