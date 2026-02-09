import { useNavigate } from "react-router-dom";
import RatingStars from "../../common/RatingStars";
import Input from "../../common/forms/Input";
import CustomSelect from "../../common/forms/CustomSelect";
import Button from "../../common/forms/Button";

const SlotSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="w-fit flex flex-col gap-4">
      <h2 className="text-2xl font-semibold font-montserrat">
        Please select Available slot times
      </h2>

      <div className="flex items-center justify-between gap-2 text-sm">
        <span className="font-bold font-montserrat text-base">
          Onyx mobile tyre van
        </span>
        <RatingStars rating="4.8" reviews="300" />
      </div>

      {/* DATE + TIME */}
      <div className="flex gap-4">
        <Input label="Date" type="date" />
        <CustomSelect
          label="Time"
          options={["6:00 AM", "8:00 AM", "10:00 AM"]}
          value={"6:00"}
          className="border w-fit"
        />
      </div>
      <div>
        <p className="text-2xl font-montserrat font-bold text-right mb-4">
          $295.00
          <span className="text-[#8E8E8E] text-sm"> /tire</span>
        </p>
        {/* BUTTON */}
        <Button
          solid
          onClick={() => navigate("/checkout/home-fitment/address")}
          className="w-full"
        >
          {" "}
          BOOK MOBILE TYRE VAN
        </Button>
      </div>
    </div>
  );
};

export default SlotSelector;
