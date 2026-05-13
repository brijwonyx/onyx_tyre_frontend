import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

// import tyreImg from "../../../assets/tyre-item.png";
// import tyreBrand from "../../../assets/tyre-brand.png";

import FiltersBar from "../FilterBar";
import ProductItem from "../ProductItem";

import TopPicksCarousel from "./TopPicksCarousel";

import NoTyreState from "../../Common/layout/NoStockAvailable";

// import { Heart } from "lucide-react";

// import Button from "../../common/forms/Button";

import ContactBanner from "../../home/ContactBanner";

import { BRAND_TYRE_LIST, TYRE_VEHICLE } from "../../../api/apiRoutes";

import { HISTORY_PAGE } from "../vehicles/constant";

import CallApi from "../../../Common-Controller/controller";

import { getDetailsSearchForTyre } from "../../../api/api.services";

import LineItem from "../../common/LineItem";

import ProductServices from "../../productDetails/ProductServices";

import ProductShimmerCard from "../../../Components/Common/Forms/ProductShimmerCard";

import ShimmerCard from "../../../Components/Common/Forms/Shimmer";

const BrandResults = () => {
  const [selectedFilter, setSelectedFilter] = useState("All tyres");

  const filterOption = ["All tyres", "Run Flat"];

  const router = useNavigate();

  const { state } = useLocation();

  const [tyreList, setTyreList] = useState([]);

  const params = new URLSearchParams();

  if (state?.size) params.append("size", state?.size);
  if (state?.brand) params.append("brand", state?.brand);
  if (state?.userPincode) params.append("userPincode", state?.userPincode);

  const userFetchDetails = params.toString();

  const tyreDetailByWDR = CallApi();

  const URL_MAP = {
    [HISTORY_PAGE.TYRE_BY_BRAND]: BRAND_TYRE_LIST,
    [HISTORY_PAGE.TYRE_BY_SIZE]: TYRE_VEHICLE,
    [HISTORY_PAGE.TYRE_BY_VEHICLE]: TYRE_VEHICLE,
  };

  const normalizeTyreData = (rows = []) => {
    if (!Array.isArray(rows)) return [];

    return rows.map((item) => {
      const model = item?.tyreModel || {};
      const brand = model?.brand || {};

      return {
        id: item?.id,

        name: model?.model_name || "_",
        image: model?.image_url || item?.image_url || "",
        brandLogo: brand?.logo || item?.logo || "",
        brandName: brand?.vendor_name || item?.vendor_name || "_",

        description:
          model?.description ||
          `Tailored for ${model?.car_type || "vehicles"}, the ${
            model?.model_name || "tyre"
          } delivers reliable ${model?.season_type || "all-season"} performance.`,

        // smart fallback (handles both APIs)
        rating: model?.avgRating ?? item?.avgRating ?? 0,
        reviews: model?.totalReviews ?? item?.totalReviews ?? 0,

        season: model?.season_type || "_",
        loadIndex: item?.load_index || "_",

        //  works for both cases
        size: item?.tyreSize?.size_label || "_",

        price: item?.starting_price ?? "_",
      };
    });
  };

  const flattenTyreModels = (data = []) => {
    if (!Array.isArray(data)) return [];

    return data.flatMap((item) => {
      const models = item?.tyreModels || [];

      return models.map((model) => ({
        ...item,
        id: model?.tyre_id,
        tyreModel: model,
      }));
    });
  };

  const getAllDetailList = async () => {
    try {
      const baseUrl = URL_MAP[state?.historyPage] || TYRE_VEHICLE;

      const finalUrl = userFetchDetails
        ? `${baseUrl}?${userFetchDetails}`
        : baseUrl;

      const makeRes = await getDetailsSearchForTyre(
        tyreDetailByWDR.request,
        finalUrl,
      );

      let rows = makeRes?.data?.rows || [];

      // ONLY flatten for brand page
      if (state?.historyPage === HISTORY_PAGE.TYRE_BY_BRAND) {
        rows = flattenTyreModels(rows);
      }

      const normalized = normalizeTyreData(rows, state?.historyPage);

      setTyreList(normalized);
    } catch (err) {
      console.error(err);
      setTyreList([]);
    }
  };

  // Put Id here static Id is here right now
  const handleProductDetail = (item) => {
    const redirectState = {
      productId: item.id,
    };

    router("/product-detail", {
      state: redirectState,
    });
  };

  useEffect(() => {
    if (state?.size || state?.brand) {
      getAllDetailList();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      {tyreDetailByWDR?.loading ? (
        <ShimmerCard className="w-full h-[420px]" />
      ) : tyreList?.length ? (
        <TopPicksCarousel
          tyreList={tyreList}
          handleProductDetail={handleProductDetail}
        />
      ) : (
        ""
      )}

      <div className="px-16 py-10">
        <FiltersBar
          loader={tyreDetailByWDR?.loading}
          filterOption={filterOption}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        {tyreDetailByWDR.loading ? (
          <div className="space-y-6 p-8">
            {[...Array(2)].map((_, i) => (
              <ProductShimmerCard key={i} />
            ))}
          </div>
        ) : tyreList.length === 0 ? (
          <div className="text-center p-20 text-gray-500">
            {/* No tyres found for this selection... */}
            <NoTyreState />
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {tyreList &&
              tyreList.map((item) => (
                <div
                  key={item?.id}
                  className="cursor-pointer"
                  onClick={() => handleProductDetail(item)}
                >
                  <ProductItem
                    image={item?.image}
                    BrandImage={item?.brandLogo}
                    name={item?.name}
                    price={item?.price}
                    rating={item?.rating}
                    reviews={item?.reviews}
                    desc={item?.description}
                    season={item.season}
                    loadIndex={item.loadIndex}
                    className="shadow-md rounded-xl"
                  >
                    {/* Commented this code for now */}
                    {/* <div className="flex justify-between items-center mt-6">
                  <p className="font-montserrat font-bold text-2xl">
                    ${item?.price}
                    <span className="font-openSans font-regular text-sm text-[#8E8E8E]">
                      /tire
                    </span>
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="">
                      <Heart />
                    </button>
                    <Button onClick={() => handleProductDetail()} solid>
                      Show Details
                    </Button>
                  </div>
                </div> */}

                    <LineItem
                      actions={{
                        quantity: true,
                        subtotal: true,
                        specs: true,
                      }}
                      size={item.size || "_"}
                      price={item.price || "_"}
                      handleRedirection={() => handleProductDetail(item)}
                      className="mt-[72px]"
                    />
                  </ProductItem>
                </div>
              ))}
          </div>
        )}

        <ProductServices className="!px-0 !pt-10 !pb-0" />
      </div>
      <ContactBanner />
    </>
  );
};

export default BrandResults;
