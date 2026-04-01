import { useLocation } from "react-router-dom";
import FindTyreBanner from "../components/common/FindTyreBanner";
import ContextBar from "../components/common/layout/ContextBar";
import GetYourTyres from "../components/home/GetYoursTyre";
import FAQs from "../components/productDetails/faqs/FAQs";
import ProductHero from "../Components/productDetails/ProductHero";
// import ProductHero from "../components/productDetails/ProductHero";
import ProductOverview from "../components/productDetails/ProductOverview";
import ProductServices from "../components/productDetails/ProductServices";
import Reviews from "../Components/productDetails/reviews/Reviews";
import useProductDetailsController from "./product-details.controller";

const ProductDetails = () => {
  const location = useLocation();

  const {productId} = location.state || {};

  const {productDetails , loading} = useProductDetailsController({id: productId});

  return (
    <>
      <ContextBar
        breadCrumbs="Home / by brand / Michelin / Michelin Pilot Sport 4"
        children=""
      />
    {
      productDetails?.map((item)=>(
      <div className="py-10 px-16" key={item.id}>
        <ProductHero reviews={item.tyreModel.reviews} price={item?.inventories?.[0]?.price || 0} tyreDetails={item.tyreModel} />
        <ProductServices className="!px-0" />
        <ProductOverview />
        <Reviews reviews={item.tyreModel.reviews}  />
        <FAQs />
        <GetYourTyres variant="dark" />
      </div>
    
    ))
    }
      <FindTyreBanner />
    </>
  );
};
export default ProductDetails;
