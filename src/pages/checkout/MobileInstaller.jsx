import { useEffect, useMemo, useState } from "react";
import MobileInstallerCard from "../../components/checkout/homeFitment/MobileInstallerCard";
import SlotSelector from "../../components/checkout/homeFitment/SlotSelector";
import Input from "../../components/common/forms/Input";
import InlineEditableField from "../../components/common/InlineEditableField";
import CallApi from "../../Common-Controller/controller";
import {
  getHomeSlotApiService,
  getInstallerApiService,
} from "../../api/api.services";
import { getWithExpiry } from "../../utils/localStorageWithExpiry";
import toast from "react-hot-toast";

const MobileInstaller = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const [installerVehicle, setInstallerVehicle] = useState([]);
  const [selectedInstallerVehicle, setSelectedInstallerVehicle] =
    useState(null);

  const [homeSlots, setHomeSlots] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const getInstallerAction = CallApi();
  const getSlotAction = CallApi();

  const fetchInstaller = async () => {
    const storedPincode = getWithExpiry("shippment_pincode");
    if (storedPincode) {
      const pinCodeFinal = storedPincode?.pincode;
      try {
        const res = await getInstallerApiService(
          getInstallerAction.request,
          pinCodeFinal,
        );

        if (!res.success) {
          throw new Error("Failed");
        }
        setInstallerVehicle(res?.data);
      } catch (err) {
        setInstallerVehicle([]);
        toast.success("Something going wrong");
        console.error("Something going wrong", err);
      }
    }
  };

  const fetchInstallerSlot = async (selectedInstallerVehicle) => {
    const staticDate = "2026-04-13";
    try {
      const res = await getHomeSlotApiService(
        getSlotAction.request,
        selectedInstallerVehicle,
        // date,
        staticDate,
      );

      if (!res.success) {
        throw new Error("Failed");
      }
      setHomeSlots(res?.data);
    } catch (err) {
      setHomeSlots([]);
      toast.success("Something going wrong");
      console.error("Something going wrong", err);
    }
  };

  const handleChangeInstaller = () => {
    setSelectedInstallerVehicle(null);
  };

  useEffect(() => {
    fetchInstaller();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredInstallers = useMemo(() => {
    if (!selectedInstallerVehicle) return installerVehicle;

    return installerVehicle.filter(
      (item) => item.id === selectedInstallerVehicle.id,
    );
  }, [installerVehicle, selectedInstallerVehicle]);

  useEffect(() => {
    if (selectedInstallerVehicle !== null) {
      fetchInstallerSlot(selectedInstallerVehicle);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedInstallerVehicle, date]);

  return (
    <div className="space-y-8">
      <div className="border-t border-black">
        <div className="w-10 bg-primary h-[2px]"></div>
        <h1 className="text-2xl font-bold font-montserrat my-3">
          Mobile fitment Installer
        </h1>

        <InlineEditableField label="Pincode" grey="true" />
      </div>

      {/* AVAILABLE VANS */}
      <div className="flex justify-between items-center">
        <div className="bg-green-700 text-white inline-block px-4 py-1 rounded">
          Available vans
        </div>
        {selectedInstallerVehicle !== null ? (
          <div
            className="cursor-pointer text-red-600"
            onClick={() => handleChangeInstaller()}
          >
            Change Installer
          </div>
        ) : null}
      </div>

      {/* VAN CARD */}
      <MobileInstallerCard
        installerVehicle={filteredInstallers}
        selectedInstallerVehicle={selectedInstallerVehicle}
        setSelectedInstallerVehicle={setSelectedInstallerVehicle}
      />

      {/* SLOT */}
      {selectedInstallerVehicle !== null ? (
        <SlotSelector
          date={date}
          setDate={setDate}
          homeSlots={homeSlots}
          setSelectedTimeSlot={setSelectedTimeSlot}
          selectedTimeSlot={selectedTimeSlot}
        />
      ) : null}
    </div>
  );
};

export default MobileInstaller;
