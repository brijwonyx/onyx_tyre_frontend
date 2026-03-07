import { useState } from "react";
import StoreCard from "./StoreCard";
import InlineEditableField from "../../common/InlineEditableField";
import StepRibbon from "../../common/StepRibbon";
import { Logs, Map } from "lucide-react";

const mockStores = Array(6).fill({
  name: "City Tyres Central",
  address: "618 BLOOMFIELD ROAD, BARDSTOWN, KY, 40004",
  distance: "2.6",
  rating: "4.7 (550 Reviews)",
  date: "Wed, Aug 6 (6 AM)",
  price: 295,
});

const Installer = () => {

  const [view, setView] = useState("list");

  return (
    <div className="border-t border-black">
      <div className="w-10 bg-primary h-[2px]"></div>
      {/* <StepRibbon step="Step 1" /> */}
      <h2 className="text-2xl font-bold font-montserrat my-3">
        Select Fitment Service
      </h2>

      {/* PINCODE */}
      <InlineEditableField label="Pincode" value="40004" grey="true" />

      {/* SORT + TOGGLE */}
      <div className="flex justify-between items-center mt-6">

        <select className="border rounded px-3 py-2">
          <option>Sort by Distance</option>
          <option>Sort by Rating</option>
        </select>

        <div className="flex gap-2 bg-[#EAEAEA] p-1 rounded-[4px]">
          <button
            onClick={() => setView("map")}
            className={`px-2 py-1 border rounded ${
              view === "map" && "bg-primary text-white"
            }`}
          >
            <Map size={18}/>
          </button>

          <button
            onClick={() => setView("list")}
            className={`px-2 py-1 border rounded ${
              view === "list" && "bg-primary text-white"
            }`}
          >
            <Logs size={18} />
          </button>
        </div>
      </div>

      {/* CONTENT */}
      {view === "list" ? (

        <div className="grid grid-cols-3 gap-6 mt-6">
          {mockStores.map((store, i) => (
            <StoreCard key={i} store={store} />
          ))}
        </div>

      ) : (

        <img
          src="/map.png"
          alt="map"
          className="rounded mt-6"
        />

      )}

    </div>
  );
};

export default Installer;
