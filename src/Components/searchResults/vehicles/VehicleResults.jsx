import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ContextBar from "../../common/layout/ContextBar";
import FiltersBar from "../FilterBar";
import ProductItem from "../ProductItem";
import LineItem from "../../common/LineItem";

import ProductServices from "../../productDetails/ProductServices";
import FindTyreBanner from "../../common/FindTyreBanner";

import CallApi from "../../../Common-Controller/controller";

import { getDetailsSearchForTyre } from "../../../api/api.services";

import { HISTORY_PAGE } from "./constant";

import ShimmerCard from "../../Common/Forms/ShimmerCard";

import NoTyreState from "../../Common/layout/NoStockAvailable";

import { BRAND_TYRE_LIST, TYRE_VEHICLE } from "../../../api/apiRoutes";

const VehicleResults = () => {
  const { state } = useLocation();

  const router = useNavigate();

  const filterOption = ["All tyres", "Winters", "All seasons", "Run Flat"];

  const [selectedFilter, setSelectedFilter] = useState("All tyres");

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

  const normalizeTyreData = (rows = [], type) => {
    return rows.map((item) => {
      if (type === HISTORY_PAGE.TYRE_BY_BRAND) {
        const model = item?.tyreModels?.[0] || {};

        return {
          id: item.id,
          name: model?.model_name,
          image: item.image_url,
          brandLogo: item.logo,
          description: model?.model_name,
          rating: item.avgRating || 0,
          reviews: item.totalReviews || 0,
          season: model?.season_type,
          loadIndex: item.load_index,
          size: null,
          price: item.starting_price,
        };
      }

      return {
        id: item.id,
        name: item?.tyreModel?.model_name,
        image: item?.tyreModel?.image_url,
        brandLogo: item?.tyreModel?.brand?.logo,
        description: item?.tyreModel?.model_name,
        rating: item?.tyreModel?.avgRating || 0,
        reviews: item?.tyreModel?.totalReviews || 0,
        season: item?.tyreModel?.season_type,
        loadIndex: item?.load_index,
        size: item?.tyreSize?.size_label,
        price: item?.starting_price,
      };
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

      const rows = makeRes?.data?.rows || [];

      const normalized = normalizeTyreData(rows, state?.historyPage);

      setTyreList(normalized);
    } catch (err) {
      console.error(err);
      setTyreList([]);
    }
  };

  // const handleRedirection = () => {
  //   const redirectValue = {
  //     size: `${selectedValue?.width?.value}/${selectedValue?.diameter?.value}R${selectedValue?.ratio?.value}`,
  //     userPincode: inputZipvalue,
  //     historyPage: "tyrebySize",
  //   };

  //   router("/search?type=vehicle", {
  //     state: redirectValue,
  //   });
  // };

  const handleProductDetail = (item) => {
    const redirectState = {
      productId: `${item?.id}`,
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

  const historyPage = state?.historyPage;

  const TITLE_MAP = {
    [HISTORY_PAGE.TYRE_BY_SIZE]: `Tyres by Size - ${state?.size}`,
    [HISTORY_PAGE.TYRE_BY_VEHICLE]: `Tyres by Vehicle - ${state?.size}`,
    // [HISTORY_PAGE.TYRE_BY_BRAND]: `Tyres by Brand`,
    [HISTORY_PAGE.TYRE_BY_BRAND]: (
      <span className="flex items-center gap-2">
        Tyres by Brand
        {tyreList[0]?.brandLogo && (
          <img src={tyreList[0]?.brandLogo} alt="Tyre Brand" className="" />
        )}
      </span>
    ),
  };

  const childrenTitle = TITLE_MAP?.[historyPage];
  const breadCrumb = `Home / ${tyreList?.length || 0} Results`;

  return (
    <>
      <section className="">
        <ContextBar breadCrumbs={breadCrumb} children={childrenTitle} />
        {tyreDetailByWDR.loading ? (
          <div className="space-y-6 p-8">
            {[...Array(2)].map((_, i) => (
              <ShimmerCard key={i} />
            ))}
          </div>
        ) : tyreList.length === 0 ? (
          <div className="text-center p-20 text-gray-500">
            {/* No tyres found for this selection... */}
            <NoTyreState />
          </div>
        ) : (
          <div className="px-16">
            <div className="w-full h-px bg-[#404040] mt-10 mb-9"></div>
            <FiltersBar
              filterOption={filterOption}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
            <div
              className="flex flex-col gap-[24px]"
              onClick={handleProductDetail}
            >
              {tyreList?.map((item) => (
                <div
                  key={item?.id}
                  className="cursor-pointer"
                  onClick={() => {
                    handleProductDetail(item);
                  }}
                >
                  <ProductItem
                    image={item.image}
                    BrandImage={item.brandLogo}
                    name={item.name}
                    desc={`Tailored for luxury touring vehicles, the ${item?.name} Tour A/S combines comfort with exceptional wet and dry traction, ensuring`}
                    rating={item.rating}
                    reviews={item.reviews}
                    season={item.season}
                    loadIndex={item.loadIndex}
                  >
                    <LineItem
                      actions={{
                        quantity: true,
                        subtotal: true,
                        specs: true,
                      }}
                      size={item.size}
                      price={item.price || "_"}
                      className="mt-[72px]"
                    />
                    {/* PRICE ROW */}
                    {/* <div className="flex flex-col justify-end items-end mt-6">
    <p className="font-openSans font-normal text-sm">
      // eslint-disable-next-line no-irregular-whitespace
      // Tire Set Subtotal
      <span className="font-montserrat font-bold text-2xl pl-1">
        $469.72
      </span>
    </p>

    <div className="flex items-center gap-4 mt-6">
      <button className="">
        <Heart />
      </button>
      <Button solid>FIND YOUR SIZE</Button>
    </div>
  </div> */}
                  </ProductItem>
                </div>
              ))}
            </div>

            <ProductServices className="px-0 !py-10" />
          </div>
        )}
      </section>
      <FindTyreBanner />
    </>
  );
};

export default VehicleResults;
