import ProductGallery from "./ProductGallery";
import img1 from "../../assets/tyre-brand.png";

import QuantitySelector from "../common/forms/QuantitySelector";
import { useMemo, useState } from "react";
import Button from "../common/forms/Button";
import { useOutletContext } from "react-router-dom";
// import ProductIdentity from "../common/ProductIdentity";

import InlineEditableField from "../common/InlineEditableField";

import { Review, TyreModelType } from "../../types/ProductDetailsType";
import ProductIdentity from "../common/ProductIdentity";
import { getOverAllRating } from "../../utils/getOverAllRating";

interface ProductHeroPropsType{
  tyreDetails:TyreModelType;
  price : number;
  reviews:Review[] | [];
}

const ProductHero = (props:ProductHeroPropsType) => {
  const {tyreDetails ,price , reviews } = props;

  console.log("Product Details in Hero:", tyreDetails);

  // const {} = productDetails || {};

  const [qty, setQty] = useState(2);

  const { openCart } = useOutletContext();

  const getProductImages = () => {
    if(tyreDetails  && tyreDetails?.images && tyreDetails?.images?.length){
      const images = tyreDetails?.images?.map((img) => img?.image_url);

      return images;
    }

    return [];
  }

  const productImages = useMemo(()=> getProductImages(),[tyreDetails]);
  

  const overAllRating = useMemo(() => getOverAllRating(reviews),[reviews])

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {/* Image */}
        <div className="">
          <ProductGallery
            images={productImages}
          />
        </div>
        <div className="p-4">
          <div className="flex flex-col w-full gap-6">
            <ProductIdentity
              name={tyreDetails?.model_name}
              desc={tyreDetails?.description || ''}
              BrandImage={img1}
              className="!py-0"
              review={reviews?.length}
              rating={Number(overAllRating)}
              season={tyreDetails?.season_type}
              car_type={tyreDetails?.car_type}
            />
            {/* <CustomSelect
              label="Pick a tire size for exact price"
              placeholder="255/40R/19"
              options={["255/40R/19", "255/40R/19", "255/40R/19"]}
              value=""
              onChange=""
              className="border border-[#E6E6E6] mt-1"
            /> */}
            {/* Price */}
            <div>
              <h4 className="font-montserrat font-bold text-4xl mb-3">
                ${price} <span className="font-openSans font-normal text-base">/tire</span>
              </h4>
              {/* <p className="font-openSans font-normal text-base">
                Total for {qty} is <span className="font-medium">${qty * price}</span>
              </p> */}
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
