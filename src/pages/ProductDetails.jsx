import FindTyreBanner from "../components/common/FindTyreBanner";
import ContextBar from "../components/common/layout/ContextBar";
import GetYourTyres from "../components/home/GetYoursTyre";
import FAQs from "../components/productDetails/faqs/FAQs";
import ProductHero from "../components/productDetails/ProductHero";
import ProductOverview from "../components/productDetails/ProductOverview";
import ProductServices from "../components/productDetails/ProductServices";
import Reviews from "../components/productDetails/reviews/Reviews";

const ProductDetails = () => {
  return (
    <>
      <ContextBar
        breadCrumbs="Home / by brand / Michelin / Michelin Pilot Sport 4"
        children=""
      />
      <div className="py-10 px-16">
        <ProductHero />
        <ProductServices className="!px-0" />
        <ProductOverview />
        <Reviews />
        <FAQs />
        <GetYourTyres variant="dark" />
      </div>
      <FindTyreBanner />
    </>
  );
};
export default ProductDetails;
