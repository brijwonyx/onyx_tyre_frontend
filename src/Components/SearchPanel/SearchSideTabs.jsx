import { CarIcon, WheelIcon, BrandIcon } from "./Common/SearchIcon";

const SearchSideTabs = ({ activeSideTab, onSideTabChange }) => {
  const tabs = [
    {
      id: "vehicle",
      label: "By Vehicle",
      icon: CarIcon,
    },
    {
      id: "size",
      label: "By Size",
      icon: WheelIcon,
    },
    {
      id: "brand",
      label: "By Brand",
      icon: BrandIcon,
    },
  ];
  return (
    <div className="flex">
      <div className="flex flex-col">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return(
          <button
            key={tab.id}
            onClick={() => onSideTabChange(tab.id)}
            className={`flex flex-col flex-1 items-center justify-center w-[105px] h-[102px] font-openSans font-normal text-xs leading-[18px] tracking-normal text-center ${tab.id === activeSideTab ? "text-white" : "text-secondary"}`}
          >
             <Icon active={activeSideTab === tab.id} className="mt-2"/>
            {/* <img src={tab.img} alt={tab.name} /> */}
            {tab.label}
          </button>
        )})}
      </div>
       <div className="w-px bg-white" />
    </div>
  );
};
export default SearchSideTabs;
