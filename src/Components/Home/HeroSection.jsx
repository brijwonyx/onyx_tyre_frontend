import SearchPanel from "../SearchPanel/SearchPanel";
import carImage from "../../assets/hero.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-green px-[200px] py-20 relative">
      <img src={carImage} alt="Car Image" className="absolute right-0 top-0 w-[calc(42%-20px)]"/>

      <div >
        <div>
          <h1 className="text-white font-openSans font-bold text-[56px] leading-[84px] text-left ">
            Buy Tyres Online. <br /> Fit Locally. Drive Happy.
          </h1>
        </div>
        <SearchPanel />
      </div>
    </section>
  );
};

export default HeroSection;
