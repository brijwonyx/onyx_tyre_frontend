import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";   

const ProductServices = ({className}) => {
  return (
    <>
      <div className={`${className} py-20 px-[120px] text-black`}>
        <div className="flex gap-8">
          <div className="flex gap-[30px]">
            <img src={banner1} alt="Icon" className="w-14 h-14" />
            <div>
              <h5 className="font-montserrat text-xl font-semibold leading-[30px] tracking-normal">
                Fast & Free Delivery
              </h5>
              <p className="font-openSans font-semibold text-xs leading-[18px] tracking-normal">
                We’ll deliver your tyres quickly and at no extra cost right to
                your doorstep or chosen fitting partner.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-[104px] bg-[#E6E6E6]"></div>
          <div className="flex gap-[30px]">
            <img src={banner2} alt="Icon" className="w-14 h-14" />
            <div>
              <h5 className="font-montserrat text-xl font-semibold leading-[30px] tracking-normal">
                Real Help, Real People
              </h5>
              <p className="font-openSans font-semibold text-xs leading-[18px] tracking-normal">
                Need help choosing the right tyres? Our friendly experts are
                just a call away no bots, no hassle.
              </p>
            </div>
          </div>
          <div className="w-[1px] h-[104px] bg-[#E6E6E6]"></div>
          <div className="flex gap-[30px]">
            <img src={banner3} alt="Icon" className="w-14 h-14" />
            <div>
              <h5 className="font-montserrat text-xl font-semibold leading-[30px] tracking-normal">
                Smooth, Stress-Free Fitting
              </h5>
              <p className="font-openSans font-semibold text-xs leading-[18px] tracking-normal">
                Enjoy fast, reliable fitting at your home, workplace, or local
                garage delivered and installed without the stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductServices;
