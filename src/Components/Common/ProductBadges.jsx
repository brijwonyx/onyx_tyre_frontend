import touring from "../../assets/touring.svg";
import winter from "../../assets/winter.svg";
import fuel from "../../assets/fuel.svg";
import rain from "../../assets/rain.svg";
import sound from "../../assets/sound.svg";
const ProductBadges = () => {
  return (
    <>
      <div className="flex gap-1 font-openSans font-normal text-xs text-white">
        <span className="bg-[#1E90FF] rounded-[4px] py-2 px-1 flex gap-1">
          <img src={touring} alt="touring" />
          Touring
        </span>
        <span className="bg-[#4CAF50] rounded-[4px] py-2 px-1 flex gap-1">
          <img src={winter} alt="winter" />
          All-Season
        </span>
        <span className="rounded-[4px] [&_span]:py-2  flex gap-[1px]">
          <span className="bg-[#FF9800] px-1 rounded-l-[4px]">92</span>
          <span className="bg-[#05935D] px-2 rounded-r-[4px]">H</span>
        </span>
        <span className="rounded-[4px] [&_span]:py-2  flex gap-[1px] [&_span]:flex [&_span]:gap-1">
          <span className="bg-[#4CAF50] px-1 rounded-l-[4px]">
          <img src={fuel} alt="fuel" />
            
            A</span>
          <span className="bg-[#4CAF50] px-2 rounded-r-[4px]">
          <img src={rain} alt="rain" />
            
            V</span>
        </span>
        <span className="bg-[#CFA600] rounded-[4px] py-2 px-1 flex gap-1">
          <img src={sound} alt="touring" />
          B 69db
        </span>
      </div>
    </>
  );
};
export default ProductBadges;
