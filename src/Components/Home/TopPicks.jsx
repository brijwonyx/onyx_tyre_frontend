import Button from "../common/forms/Button";
import tyreIitem from "../../assets/tyre-item.png";
import rattings from "../../assets/rattings.png";
const TopPicks = () => {
  return (
    <>
      <div className="bg-white text-black py-20">
        <div className="px-[76px] text-center">
          <h3 className="font-montserrat text-5xl font-semibold tracking-normal leading-[72px]">
            Top picks from our side
          </h3>
          <p className="text-secondary font-openSans font-normal text-2xl leading-[18px] tracking-normal">
            Hurry and grab these limited-time offers before the countdown runs
            out.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-20 px-[120px] ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="flex" key={index}>
              <img src={tyreIitem} alt="Tyre" className="w-[220px] h-full" />
              <div className="flex flex-col pl-4 gap-6">
                <div>
                  <h6 className="font-montserrat font-bold text-xl leading-[30px] tracking-normal mb-[10px]">
                    Michelin Pilot Sport 4
                  </h6>
                  <p className="text-[#231F20] font-openSans font-normal text-base leading-[24px]">
                    Designed for high performance and sports cars, the Michelin
                    Pilot Sport 4 S offers an unparalleled driving experience
                    due to
                  </p>
                  <img
                    src={rattings}
                    alt="Rattings"
                    className="w-[254px] h-[20px] mt-4 object-none"
                  />
                </div>

                <ul className="font-openSans font-normal text-sm leading-5 tracking-normal">
                  <li>/ Optimum handling performance</li>
                  <li>// Optimised surface footprint</li>
                  <li>// Excellent wet grip and braking</li>
                </ul>
                <div className="flex flex-col gap-6">
                  <p className="font-montserrat font-bold text-2xl leading-7 tracking-normal">
                    Start at $295.00
                    <span className="font-openSans font-normal text-sm leading-4 tracking-normal">
                      /tire
                    </span>
                  </p>
                  <Button solid className="w-fit">find your size</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default TopPicks;
