import { Star } from "lucide-react"; // or any icon lib

const RatingStars = ({
  rating = 0,
  reviews,
  showText = true,
  size = 16,
  rattingText = true,
}) => {
  const totalStars = 5;

  return (
    <div className="inline-flex flex-none items-center gap-2">

      {/* Stars */}
      <div className="flex">
        {[...Array(totalStars)].map((_, i) => (
          <Star
            key={i}
            size={size}
            className={
              i < Math.round(rating)
                ? "fill-primary text-green-600"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      {/* Optional Text */}
      {showText && (
        <span className="text-sm text-gray-600">
          {rattingText ? rating : ""}
           {reviews && `(${reviews} Reviews)`}
        </span>
      )}
      
    </div>
  );
};

export default RatingStars;
