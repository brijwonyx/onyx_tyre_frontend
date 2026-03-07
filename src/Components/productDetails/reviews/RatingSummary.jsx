import RatingStars from "../../common/RatingStars";

const ratings = [
  { star: 5, count: 41 },
  { star: 4, count: 4 },
  { star: 3, count: 2 },
  { star: 2, count: 0 },
  { star: 1, count: 0 },
];

const RatingSummary = () => {
  const total = 48;

  return (
    <div className="flex flex-col gap-4 font-openSans">
      <h3 className="font-bold text-base">Overall rating</h3>

      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">4.7</span>
        <RatingStars rating="4.7" rattingText={false} />
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-2">
        {ratings.map((r) => (
          <div key={r.star} className="flex items-center gap-2">
            <span className="w-6">{r.star}★</span>

            <div className="flex-1 h-2 bg-gray-200 rounded">
              <div
                style={{
                  width: `${(r.count / total) * 100}%`,
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
