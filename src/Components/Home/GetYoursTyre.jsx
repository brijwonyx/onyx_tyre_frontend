import vanImg from "../../assets/van.png";
import trustedInstallerImg from "../../assets/installer.svg";
import mobileFitting from "../../assets/mobile.svg";
import workshops from "../../assets/workshop.svg";
import gurantted from "../../assets/satisfaction.svg";
import arrow from "../../assets/arrow.svg";

const benefits = [
  {
    label: "12K+ Trusted Installers",
    img: trustedInstallerImg,
  },
  {
    label: "Mobile Fitting",
    img: mobileFitting,
  },
  {
    label: "Local Verified Workshops",
    img: workshops,
  },
  {
    label: "Satisfaction Guaranteed",
    img: gurantted,
  },
];

export default function GetYourTyres({ variant = "dark" }) {
  return (
    <div
      className={`"bg-white min-h-screen  py-10 ${variant === "dark" ? "px-0" : "px-[64px]"} `}
    >
      <div
        className={`px-[56px] py-4 rounded-xl ${variant === "dark" ? "bg-[#ECECEC]" : "bg-white"}`}
      >
        <div className="grid grid-cols-2 gap-10 items-center mb-6">
          <div>
            <h1 className="main-heading mb-6 leading-[60px]">
              Get Your Tyres <br /> Fitted Your Way
            </h1>

            <p className="font-openSans font-medium text-2xl text-black">
              Whether you're after convenience or prefer visiting in person,
              we've got you covered.
            </p>
          </div>

          <img src={vanImg} alt="van" className="w-[520px] ml-auto" />
        </div>
        <div className="grid grid-cols-[auto_25px_1fr] gap-6">
          <div className="flex flex-col gap-6">
            {benefits.map((item, i) => (
              <div
                key={i}
                className={`flex items-center px-6 py-7 gap-4 bg-white ${variant === "dark" ? "border-0 rounded-2xl" : "border-[#8E8E8E] border-b "} `}
              >
                <img src={item.img} alt={item.label} />
                <span className="font-openSans font-semibold text-xl text-black">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative flex flex-col items-center">
            <div className="h-full border-l border-dashed border-black" />
            <span className={`bg-white p-3 absolute top-[40%] mt-4 text-black font-montserrat font-semibold text-base ${variant === "dark" ? "bg-[#ECECEC]" : "bg-white "} `}>
              Or
            </span>
          </div>
          <div className="flex gap-6">
            <div className="bg-primary text-white  px-6 pt-6">
              <h2 className="font-montserrat text-2xl font-semibold mb-6">
                Melbourne
              </h2>

              <StoreBlock
                title="STORE 1"
                address="77-79 Strzelecki Ave, Sunshine West, 3020"
              />

              <StoreBlock
                title="STORE 2"
                address="Unit 32/1-11 Bryants Rd, Dandenong South, 3175"
              />
            </div>

            {/* BRISBANE */}
            <div className="bg-primary text-white  h-fit px-6 pt-6">
              <h2 className="text-2xl font-semibold mb-6">Brisbane</h2>

              <StoreBlock address="41 Musgrave Rd, Coopers Plains QLD 4108, Australia" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SMALL helper — not over-componentized */
function StoreBlock({ title, address }) {
  return (
    <div className="border-t border-white border-dashed pt-4 mb-6">
      {title && (
        <p className="font-openSans font-normal text-xs mb-4">{title}</p>
      )}

      <p className="font-openSans font-medium text-base mb-8">{address}</p>

      <div className="flex justify-between font-openSans font-semibold font-base">
        <p>(03) 9315 2689</p>
        <button className="flex gap-2 font-medium">
          Direction <img src={arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
