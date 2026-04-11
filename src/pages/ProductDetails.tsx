// import { useLocation } from "react-router-dom";
// import FindTyreBanner from "../components/common/FindTyreBanner";
// import ContextBar from "../components/common/layout/ContextBar";
// import GetYourTyres from "../components/home/GetYoursTyre";
// import FAQs from "../components/productDetails/faqs/FAQs";
// import ProductHero from "../Components/productDetails/ProductHero";
// // import ProductHero from "../components/productDetails/ProductHero";
// import ProductOverview from "../components/productDetails/ProductOverview";
// import ProductServices from "../components/productDetails/ProductServices";
// import Reviews from "../Components/productDetails/reviews/Reviews";
// import useProductDetailsController from "./product-details.controller";

// import ProductShimmerCard from "../Components/Common/Forms/ProductShimmerCard";
// import NoTyreState from "../components/Common/layout/NoStockAvailable";

// const ProductDetails = () => {
//   const location = useLocation();

//   const { productId } = location.state || {};

//   const { productDetails, loading } = useProductDetailsController({
//     id: productId,
//   });

//   return (
//     <>
//       {loading ? (
//         <div className="space-y-6 p-8">
//           {[...Array(1)].map((_, i) => (
//             <ProductShimmerCard key={i} />
//           ))}
//         </div>
//       ) : productDetails?.length === 0 ? (
//         <div className="text-center p-20 text-gray-500">
//           {/* No tyres found for this selection... */}
//           <NoTyreState />
//         </div>
//       ) : (
//         productDetails?.map((item) => (
//           <div className="py-10 px-16" key={item.id}>
//             <ProductHero
//               reviews={item.tyreModel.reviews}
//               price={item?.inventories?.[0]?.price || 0}
//               tyreDetails={item.tyreModel}
//             />
//             <ProductServices className="!px-0" />
//             <ProductOverview />
//             <Reviews reviews={item.tyreModel.reviews} />
//             <FAQs />
//             <GetYourTyres variant="dark" />
//           </div>
//         ))
//       )}
//       <FindTyreBanner />
//     </>
//   );
// };
// export default ProductDetails;

import { useLocation } from "react-router-dom";
import { useMemo } from "react";

import FindTyreBanner from "../components/common/FindTyreBanner";
import GetYourTyres from "../components/home/GetYoursTyre";
import FAQs from "../components/productDetails/faqs/FAQs";
import ProductHero from "../Components/productDetails/ProductHero";
import ProductOverview from "../components/productDetails/ProductOverview";
import ProductServices from "../components/productDetails/ProductServices";
import Reviews from "../Components/productDetails/reviews/Reviews";

import useProductDetailsController from "./product-details.controller";

import ProductShimmerCard from "../Components/Common/Forms/ProductShimmerCard";
import NoTyreState from "../components/Common/layout/NoStockAvailable";

const ProductDetails = () => {
  const location = useLocation();
  const { productId } = location.state || {};

  const { productDetails, loading } = useProductDetailsController({
    id: productId,
  });

  const product = useMemo(() => {
    if (!productDetails || productDetails.length === 0) return null;

    const item = productDetails[0];

    return {
      id: item.id,
      tyreDetails: item.tyreModel,
      reviews: item.tyreModel?.reviews || [],
      price: item.inventories?.[0]?.price ?? 0,
      wareHouseId: item.inventories?.[0]?.warehouse_id || "_",
      stock: Number(item?.inventories?.[0]?.stock),
      tyreSize: item.tyreSize?.size_label || "_",
    };
  }, [productDetails]);

  if (loading) {
    return (
      <div className="space-y-6 p-8">
        <ProductShimmerCard />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center p-20 text-gray-500">
        <NoTyreState />
      </div>
    );
  }

  return (
    <>
      <div className="py-10 px-16">
        <ProductHero
          tyreId={product?.id}
          reviews={product?.reviews}
          price={product?.price}
          tyreDetails={product?.tyreDetails}
          tyreSize={product?.tyreSize}
          wareHouseId={product?.wareHouseId}
          stock={product?.stock}
        />

        <ProductServices className="!px-0" />

        <ProductOverview />

        <Reviews reviews={product.reviews} />

        <FAQs />

        <GetYourTyres variant="dark" />
      </div>

      <FindTyreBanner />
    </>
  );
};

export default ProductDetails;
