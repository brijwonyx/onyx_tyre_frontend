import { Review } from "../../../types/ProductDetailsType";
import RatingSummary from "./RatingSummary";
import ReviewCard from "./ReviewCard";

interface ReviewPropsType{
reviews:Review[] | [];
}

const Reviews = (props:ReviewPropsType) => {
  const {reviews} = props;
  
  return (
    <div className="mt-16">

      {/* Title */}
      <h2 className="text-2xl font-montserrat font-bold mb-6">
        Reviews <span className="font-medium">{`(${reviews?.length})`}</span>
      </h2>

      <div className="flex gap-12">

        {/* LEFT */}
        <div className="w-[320px] flex-shrink-0">
          <RatingSummary reviews={reviews}  />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10 flex-1">
          {
            reviews?.map((item)=>(
              <ReviewCard reviewerDetails={item} />
            ))}
          {/* <ReviewCard />
          <ReviewCard /> */}
        </div>

      </div>
    </div>
  );
};

export default Reviews;
