import { useNavigate } from "react-router-dom";
import Button from "../../common/forms/Button";
import { MapPin } from "lucide-react";
import RatingStars from "../../common/RatingStars";

const StoreCard = ({ store }) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-5 hover:shadow-md transition">
      <div className="flex flex-col gap-6">
        <p className="text-xs bg-[#2E7D3233] text-primary px-2 py-1 rounded flex w-fit items-center gap-2 font-openSans">
          <MapPin size={16} /> {store.distance} mi away
        </p>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold mt-2 font-montserrat text-xl">
            {store.name}
          </h3>
          <RatingStars rating={store.rating} reviews={store.reviews} />

          <p className="text-sm text-black font-openSans">
            {store.address}
          </p>
        </div>

        <p className="text-sm font-openSans">
          Next available install <br />
          <span className="text-primary font-medium font-base">
            {store.date}
          </span>
        </p>

        <p className="text-2xl font-bold font-montserrat text-right">
          ${store.price}
          <span className="text-[#8E8E8E] text-sm"> /tire</span>
        </p>

        <Button
          solid
          onClick={() => navigate("/checkout/review")}
          className="w-full"
        >
          SELECT
        </Button>
      </div>
    </div>
  );
};

export default StoreCard;
