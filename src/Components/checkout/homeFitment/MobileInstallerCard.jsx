import van from "../../../assets/van.png";
import RatingStars from "../../common/RatingStars";
const MobileInstallerCard = () => {
  return (
    <div className="flex justify-between items-center border rounded-lg p-4 bg-[#EAEAEA] w-full">
      {/* LEFT */}
      <div className="flex gap-6 items-center w-full">
        <img src={van} alt="van" className="w-60 object-contain" />
        <div className="flex flex-col gap-9 w-full">
          <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl font-montserrat">
            Onyx mobile tyre van
          </h3>

          <RatingStars rating="4.8" reviews="300" />
          </div>

          <div className="flex justify-between w-full">
            <p className="text-sm font-openSans flex flex-col">
              Next available install
              <span className="text-primary font-semibold text-base">
                Wed, Aug 6 (6 AM)
              </span>
            </p>
            <p className="text-2xl font-montserrat font-bold">
              $295.00
              <span className="text-[#8E8E8E] text-sm"> /tire</span>
            </p>
          </div>
        </div>
      </div>

      {/* PRICE */}
    </div>
  );
};

export default MobileInstallerCard;
