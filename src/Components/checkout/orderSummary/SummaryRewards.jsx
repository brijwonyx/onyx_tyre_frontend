import { useState } from "react";

const SummaryRewards = () => {

  const [points, setPoints] = useState("");

  return (
    <div className="border-t border-dashed py-5 mt-5">

      {/* AVAILABLE POINTS */}
      <div className="flex justify-between items-center mb-3">
        <p className="flex items-center gap-2 font-medium">
          ⭐ Available Points
        </p>

        <p className="font-medium">
          15,420 ($154.20)
        </p>
      </div>

      {/* INPUT + APPLY */}
      <p className="text-sm text-gray-500 mb-2">
        Redeem points for a reward coupon
      </p>

      <div className="flex gap-3">

        <input
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          placeholder="eg 100"
          className="flex-1 border rounded-md px-3 py-2 bg-gray-100 outline-none focus:ring-2 focus:ring-primary"
        />

        <button
          className={`px-6 rounded-md font-semibold transition
            ${
              points
                ? "bg-primary text-white hover:bg-green-800"
                : "bg-gray-400 text-white cursor-not-allowed"
            }
          `}
          disabled={!points}
        >
          APPLY
        </button>

      </div>

      {/* LOYALTY TEXT */}
      <p className="text-xs text-gray-500 mt-3">
        Loyalty perks: 10 points = $1 off
      </p>

      {/* GREEN EARN BAR */}
      <div className="bg-[#33981F33] text-green-800 text-sm font-medium rounded-full py-2 text-center mt-4">
        Points You'll Earn on this order <span className="font-bold">+5,017</span>
      </div>

    </div>
  );
};

export default SummaryRewards;
