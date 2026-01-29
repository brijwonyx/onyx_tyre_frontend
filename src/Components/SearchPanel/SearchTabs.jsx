const SearchTabs = ({onTabChange,activeTab}) => {
  const tabs = [
    {
      id: "tyres",
      label: "Tyres",
    },
    {
      id: "wheels",
      label: "Wheels",
    },
  ];
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`font-montserrat font-bold text-lg leading-7 tracking-normal text-center py-6 w-full ${tab.id === activeTab ? "bg-white" : "bg-[#D2D2D2]"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default SearchTabs;
