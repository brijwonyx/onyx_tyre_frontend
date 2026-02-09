import RatingStars from "../../common/RatingStars";

const ReviewCard = () => {
  return (
    <div className="flex gap-8 border-b pb-6">
      <div>
        <h4 className="font-bold font-montserrat text-base">Hazel Greene</h4>
        <p className="text-sm text-[#8E8E8E] font-medium">
          Reviewed on: <span className="text-[#272D9B]"> 27/03/2025 </span>{" "}
        </p>
        <p className="text-sm text-[#8E8E8E] font-medium">
          Purchased on: <span className="text-[#272D9B]">15/03/2025</span>
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-[14px]">
        <div className="flex justify-between">
          <RatingStars rating="4.8" rattingText={false} />
          <span className="text-sm font-openSans font-medium text-[#8E8E8E]">March 27, 2025</span>
        </div>

        <p className="font-openSans font-normal text-base text-black">
          Incredible tires! We've been using them...
        </p>

        {/* Images */}
        <div className="flex gap-2">
          <div className="w-20 h-20 bg-gray-200 rounded" />
          <div className="w-20 h-20 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
