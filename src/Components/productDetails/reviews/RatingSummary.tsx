import { useMemo } from "react";
import { Review } from "../../../types/ProductDetailsType";
import RatingStars from "../../common/RatingStars";
import { getOverAllRating } from "../../../utils/getOverAllRating";
import { getRatingDistribution } from "../../../utils/getRatingDistribution";

interface RatingSummaryPropsType{
  reviews:Review[] | [];
}

const RatingSummary = (props:RatingSummaryPropsType) => {
  const {reviews} = props;

  const overAllRating = useMemo(() => getOverAllRating(reviews),[reviews])

  const ratings = useMemo(()=>getRatingDistribution(reviews),[reviews])

  return (
    <div className="flex flex-col gap-4 font-openSans">
      <h3 className="font-bold text-base">Overall rating</h3>

      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">{overAllRating}</span>
        <RatingStars reviews={reviews?.length || 0} rating={overAllRating ? Number(overAllRating) : 0} rattingText={false} />
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-2">
        {ratings.map((r) => (
          <div key={r.star} className="flex items-center gap-2">
            <span className="w-6">{r.star}★</span>

            <div className="flex-1 h-2 bg-gray-200 rounded">
              <div
                style={{
                  width: `${(r.count / ratings?.length) * 100}%`,
                }}
                className="h-2 bg-green-600 rounded"
              />
            </div>

            <span className="w-6 text-sm text-gray-600">{r.count}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4 [&_button]:border [&_button]:border[#D6D3D1] [&_button]:rounded-full [&_button]:font-openSans [&_button]:font-medium [&_button]:text-base">
        <button className="border px-4 py-2 rounded">Write a review</button>

        <button className="border px-4 py-2 rounded">All reviews</button>
      </div>
    </div>
  );
};

export default RatingSummary;
