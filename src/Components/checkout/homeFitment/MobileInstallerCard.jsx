import van from "../../../assets/van.png";

import RatingStars from "../../common/RatingStars";

const MobileInstallerCard = ({
  installerVehicle,
  selectedInstallerVehicle,
  setSelectedInstallerVehicle,
}) => {
  const handleSelectInstallerVehicle = (id) => {
    setSelectedInstallerVehicle(id);
  };
  return (
    <>
      {installerVehicle?.map((item) => (
        <div
          className={`flex justify-between items-center border rounded-lg p-4 bg-[#EAEAEA] w-full cursor-pointer 
    ${
      selectedInstallerVehicle === item?.installer_id
        ? "border-primary shadow-md"
        : "border-gray-200"
    }`}
          onClick={() => handleSelectInstallerVehicle(item?.installer_id)}
        >
          {/* LEFT */}
          <div className="flex gap-6 items-center w-full">
            <img src={van} alt="van" className="w-60 object-contain" />
            <div className="flex flex-col gap-9 w-full">
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl font-montserrat">
                  {item?.name}
                </h3>

                {/* <RatingStars rating="4.8" reviews="300" /> */}
              </div>

              <div className="flex justify-between w-full">
                <p className="text-sm font-openSans flex flex-col">
                  Next available install
                  <span className="text-primary font-semibold text-base">
                    {item?.next_available_slot?.date} (
                    {item?.next_available_slot?.start_time})
                    {/* Wed, Aug 6 (6 AM) */}
                  </span>
                </p>
                <p className="text-2xl font-montserrat font-bold">
                  ${item?.service_charge}
                  <span className="text-[#8E8E8E] text-sm"> /tire</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MobileInstallerCard;
