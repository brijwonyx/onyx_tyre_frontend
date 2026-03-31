import { Review } from "../../../types/ProductDetailsType";
import RatingStars from "../../common/RatingStars";

interface ReviewCardPropsType{
  reviewerDetails:Review
}

const ReviewCard = (props:ReviewCardPropsType) => {
  const {reviewerDetails} = props;

  console.log(reviewerDetails,'revieieieie')

  return (
    <div className="flex gap-8 border-b pb-6">
      <div>
        <h4 className="font-bold font-montserrat text-base">{reviewerDetails.reviewer_name}</h4>
        <p className="text-sm text-[#8E8E8E] font-medium">
          Reviewed on: <span className="text-[#272D9B]"> 27/03/2025 </span>{" "}
        </p>
        <p className="text-sm text-[#8E8E8E] font-medium">
          Purchased on: <span className="text-[#272D9B]">15/03/2025</span>
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-[14px]">
        <div className="flex justify-between">
          <RatingStars rating={reviewerDetails?.rating || 0} showText={true} rattingText={true} />
          <span className="text-sm font-openSans font-medium text-[#8E8E8E]">March 27, 2025</span>
        </div>

        <p className="font-openSans font-normal text-base text-black">
          {reviewerDetails?.comment}
        </p>

        {/* Images */}
        <div className="flex gap-2">
        {reviewerDetails?.images?.map((item , index) => (
        <img
           key={index}
          src={item.image_url}
          alt="product"
          className="w-20 h-20 object-contain"
        />
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
