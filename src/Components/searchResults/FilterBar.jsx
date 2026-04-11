// import CustomSelect from "../common/forms/CustomSelect";
// import filter from "../../assets/filter.svg";

import ShimmerCard from "../../Components/Common/Forms/Shimmer";

const FiltersBar = ({
  filterOption,
  selectedFilter,
  setSelectedFilter,
  loader,
  tyreList,
}) => {
  const handleFilterChange = (item) => {
    setSelectedFilter(item);
  };

  return (
    <>
      {tyreList?.length ? (
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div className="flex items-center gap-2 ">
            <h6 className="font-montserrat font-semibold text-base leading-5 mr-4">
              Quick filter
            </h6>
            {/* "Deals" uncomment and in array if backend add deals filter */}
            {loader ? (
              <div className="flex gap-2">
                {[...Array(2)].map((_, i) => (
                  <ShimmerCard className="w-36 h-10" key={i} />
                ))}
              </div>
            ) : (
              filterOption?.map((item, i) => (
                <button
                  key={i}
                  className={`font-openSans font-normal text-base leading-[18px] py-3 px-6 border 
                ${item === selectedFilter ? "bg-primary text-white font-semibold" : "bg-white text-black"}
              `}
                  onClick={() => handleFilterChange(item)}
                >
                  {item}
                </button>
              ))
            )}
          </div>
          {/* <div className="flex gap-2 shrink-0">
        <CustomSelect
          placeholder="Sort by"
          options={["Low to High", "High to Low"]}
          className="h-12 px-6 border border-gray-300 bg-[#EAEAEA] font-openSans text-base text-gray-700 flex items-center"
        />

        <button className=" px-6 bg-primary text-white text-base inline-flex items-center gap-3 whitespace-nowrap">
          More Filters
          <img src={filter} alt="filter" className="w-[20px] h-[18px] mr-2" />
        </button>
      </div> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default FiltersBar;
