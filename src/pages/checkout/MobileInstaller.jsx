"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import MobileInstallerCard from "../../components/checkout/homeFitment/MobileInstallerCard";
import SlotSelector from "../../components/checkout/homeFitment/SlotSelector";
import CallApi from "../../Common-Controller/controller";
import { MapPin } from "lucide-react";
import {
  getHomeSlotApiService,
  getInstallerApiService,
} from "../../api/api.services";
import toast from "react-hot-toast";
import ShimmerCard from "../../Components/Common/Forms/Shimmer";

const MobileInstaller = () => {
  // STATES
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [inputValue, setInputValue] = useState("");
  const [editing, setEditing] = useState(true);

  const [installerVehicle, setInstallerVehicle] = useState([]);
  const [selectedInstallerVehicle, setSelectedInstallerVehicle] =
    useState(null);

  const [homeSlots, setHomeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const [loader, setLoader] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const inputRef = useRef(null);
  const lastFetchedRef = useRef("");

  const shimmerMap = new Array(3).fill(null);

  const getInstallerAction = CallApi();
  const getSlotAction = CallApi();

  // FETCH INSTALLER
  const fetchInstaller = async (pincode) => {
    if (pincode.length !== 4) return;

    setLoader(true);
    setHasFetched(false);
    setSelectedInstallerVehicle(null);

    try {
      const res = await getInstallerApiService(
        getInstallerAction.request,
        pincode,
      );

      if (!res || !res.success) throw new Error("Failed");

      setInstallerVehicle(res.data || []);
      setHasFetched(true);
    } catch (err) {
      setInstallerVehicle([]);
      setHasFetched(true);
      toast.error("Failed to fetch installers");
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  // FETCH SLOTS
  const fetchInstallerSlot = async (vehicle) => {
    try {
      const res = await getHomeSlotApiService(
        getSlotAction.request,
        vehicle,
        date,
      );

      if (!res || !res.success) throw new Error("Failed");

      setHomeSlots(res.data || []);
    } catch (err) {
      setHomeSlots([]);
      toast.error("Failed to fetch slots");
      console.error(err);
    }
  };

  //  RESTORE PINCODE
  useEffect(() => {
    const stored = localStorage.getItem("installer_pincode");

    if (stored) {
      const parsed = JSON.parse(stored);
      setInputValue(parsed);
      setEditing(false);
    }
  }, []);

  // AUTO FETCH (DEBOUNCED)
  useEffect(() => {
    if (inputValue.length !== 4) return;
    if (lastFetchedRef.current === inputValue) return;

    const timer = setTimeout(() => {
      lastFetchedRef.current = inputValue;

      setEditing(false);
      localStorage.setItem("installer_pincode", JSON.stringify(inputValue));

      fetchInstaller(inputValue);
    }, 400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  // 🔹 FETCH SLOTS WHEN VEHICLE SELECTED
  useEffect(() => {
    if (selectedInstallerVehicle) {
      fetchInstallerSlot(selectedInstallerVehicle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInstallerVehicle, date]);

  // FILTERED INSTALLERS
  const filteredInstallers = useMemo(() => {
    if (!selectedInstallerVehicle) return installerVehicle;

    return installerVehicle.filter(
      (item) => item.id === selectedInstallerVehicle.id,
    );
  }, [installerVehicle, selectedInstallerVehicle]);

  // HANDLERS
  const handleChange = (e) => {
    const val = e.target.value.replace(/\D/g, "");
    setInputValue(val);
  };

  const handleEdit = () => {
    setEditing(true);
    setInputValue("");
    setInstallerVehicle([]);
    setHasFetched(false);
    setSelectedInstallerVehicle(null);
    setSelectedTimeSlot(null);

    lastFetchedRef.current = "";

    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  };

  const handleChangeInstaller = () => {
    setSelectedInstallerVehicle(null);
    setSelectedTimeSlot(null);
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="border-t border-black">
        <div className="w-10 bg-primary h-[2px]" />
        <h1 className="text-2xl font-bold my-3">Mobile fitment Installer</h1>

        <div className="rounded-lg px-4 py-3 flex items-center justify-between bg-[#EAEAEA] border border-[#E6E6E6]">
          {!editing ? (
            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span className="font-medium">{inputValue}</span>
            </div>
          ) : (
            <input
              ref={inputRef}
              value={inputValue}
              onChange={handleChange}
              maxLength={4}
              inputMode="numeric"
              placeholder="Enter 4-digit pincode"
              className="bg-transparent outline-none border-b border-gray-400 w-[16rem]"
            />
          )}

          {!editing && (
            <button onClick={handleEdit} className="text-green-700 font-medium">
              Edit
            </button>
          )}
        </div>
      </div>

      {/* STATES */}
      {inputValue.length !== 4 ? (
        <div className="bg-[#bce8f1] p-3 text-[#31708f] border rounded-md">
          Please enter pincode where you want our van to come.
        </div>
      ) : loader ? (
        shimmerMap.map((_, i) => (
          <ShimmerCard key={i} className="h-[200px] rounded-lg" />
        ))
      ) : !hasFetched ? null : installerVehicle.length === 0 ? (
        <div className="text-white p-3 bg-red-500 border rounded-md">
          No vans available for this pincode
        </div>
      ) : (
        <>
          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div className="bg-green-700 text-white px-4 py-1 rounded">
              Available vans
            </div>

            {selectedInstallerVehicle && (
              <div
                className="cursor-pointer text-red-600"
                onClick={handleChangeInstaller}
              >
                Change Installer
              </div>
            )}
          </div>

          {/* VANS */}
          <MobileInstallerCard
            installerVehicle={filteredInstallers}
            selectedInstallerVehicle={selectedInstallerVehicle}
            setSelectedInstallerVehicle={setSelectedInstallerVehicle}
          />

          {/* SLOTS */}
          {selectedInstallerVehicle && (
            <SlotSelector
              date={date}
              setDate={setDate}
              homeSlots={homeSlots}
              setSelectedTimeSlot={setSelectedTimeSlot}
              selectedTimeSlot={selectedTimeSlot}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MobileInstaller;
