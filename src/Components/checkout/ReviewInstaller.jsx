import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReviewInstaller = () => {
  const navigate = useNavigate();
  return (
    <div className="border-t border-black ">
      <div className="w-10 bg-primary h-[2px]"></div>
      <div className="py-4">
        <h2 className="text-2xl font-bold font-montserrat my-3">Review</h2>
        <div className="bg-[#486CFF1A] p-3 rounded-md flex items-center gap-3">
          <Mail size={24} className="text-[#486CFF]" />
          <p className="text-[#486CFF]">
            We’ll confirm your appointment once your order is placed
          </p>
        </div>
        <div className="border mt-6 bg-[#ECECEC] p-4">
          <h4 className="font-montserrat text-2xl font-semibold">
            Installation Details
          </h4>
          <div className="flex justify-between bg-white p-3 mt-6 rounded-md">
            <div>
              <p className="text-black text-sm">Date and time</p>

              <p className="font-semibold font-montserrat">
                Monday, August 11, 2025 (AM)
              </p>
            </div>

            <button className="text-green-700">Change</button>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between bg-white p-3 rounded-md">
            <div>
              <p className="text-black text-sm">Location</p>

              <p className="font-semibold font-montserrat">
                BIG O TIRES - BARDSTOWN
              </p>

              <p className="text-base text-black">618 BLOOMFIELD ROAD</p>
            </div>

            <button className="text-green-700">Change</button>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-primary text-white px-8 py-3 mt-6 hover:bg-green-800 rounded-full  "
            onClick={() => navigate("/checkout/payment")}
          >
            CONTINUE TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewInstaller;
