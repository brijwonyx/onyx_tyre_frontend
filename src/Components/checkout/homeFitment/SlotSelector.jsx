import { useNavigate } from "react-router-dom";
import RatingStars from "../../common/RatingStars";
import Input from "../../common/forms/Input";
import CustomSelect from "../../common/forms/CustomSelect";
import Button from "../../common/forms/Button";
import CallApi from "../../../Common-Controller/controller";

import toast from "react-hot-toast";

import { bookHomeSlotApiService } from "../../../api/api.services";
import { useState } from "react";

const SlotSelector = ({
  date,
  setDate,
  homeSlots,
  setSelectedTimeSlot,
  selectedTimeSlot,
}) => {
  const navigate = useNavigate();

  const [bookLoader, setBookLoader] = useState(false);

  // after Api issue resolve
  const bookTyreVanAction = CallApi();

  const handleBookHomeVan = async () => {
    if (selectedTimeSlot) {
      try {
        setBookLoader(true);

        const res = await bookHomeSlotApiService(bookTyreVanAction.request, {
          slot_id: selectedTimeSlot?.slot_id,
        });

        const { success, message } = res || {};

        if (!success) {
          throw new Error(message || "Login failed");
        }

        toast.success(message);

        setTimeout(() => {
          navigate("/checkout/home-fitment/address");
          setBookLoader(false);
        }, 1000);
      } catch (err) {
        setBookLoader(false);
        const errorMessage =
          err?.response?.data?.message ||
          err?.message ||
          "Something went wrong";

        toast.error(errorMessage);
      } finally {
        setBookLoader(false);
      }
    }
  };

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
        {/* DATE INPUT */}
        <div>
          <Input
            label=" Select Date"
            type="date"
            name="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <CustomSelect
          label="Time"
          placeholder="Select time slot"
          options={homeSlots}
          value={selectedTimeSlot}
          onChange={setSelectedTimeSlot}
          className="border w-fit h-[58px] rounded-xl"
          labelKey="label"
        />
      </div>
      <div>
        {/* <p className="text-2xl font-montserrat font-bold text-right mb-4">
          $295.00
          <span className="text-[#8E8E8E] text-sm"> /tire</span>
        </p> */}
        {/* BUTTON */}
        <Button
          solid
          // onClick={() => navigate("/checkout/home-fitment/address")}
          onClick={() => handleBookHomeVan()}
          className="w-full z-0"
          disabled={!selectedTimeSlot || bookLoader}
        >
          {" "}
          {bookLoader ? "Booking your Slot" : "BOOK MOBILE TYRE VAN"}
        </Button>
      </div>
    </div>
  );
};

export default SlotSelector;
