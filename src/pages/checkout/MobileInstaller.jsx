import MobileInstallerCard from "../../components/checkout/homeFitment/MobileInstallerCard";
import SlotSelector from "../../components/checkout/homeFitment/SlotSelector";
import InlineEditableField from "../../components/common/InlineEditableField";

const MobileInstaller = () => {
  return (
    <div className="space-y-8">
      <div className="border-t border-black ">
        <div className="w-10 bg-primary h-[2px]"></div>
        <h1 className="text-2xl font-bold font-montserrat my-3">
          Mobile fitment Installer
        </h1>

        <InlineEditableField label="Pincode" value="40004" grey="true" />
      </div>

      {/* AVAILABLE VANS LABEL */}
      <div className="bg-green-700 text-white inline-block px-4 py-1 rounded">
        Available vans
      </div>

      {/* VAN CARD */}
      <MobileInstallerCard />

      {/* SLOT */}
      <SlotSelector />
    </div>
  );
};

export default MobileInstaller;
