import RatingSummary from "./RatingSummary";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="mt-16">

      {/* Title */}
      <h2 className="text-2xl font-montserrat font-bold mb-6">
        Reviews <span className="font-medium">(48)</span>
      </h2>

      <div className="flex gap-12">

        {/* LEFT */}
        <div className="w-[320px] flex-shrink-0">
          <RatingSummary />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-10 flex-1">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>

      </div>
    </div>
  );
};

export default Reviews;
