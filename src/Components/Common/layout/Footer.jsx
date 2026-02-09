import social from "../../../assets/social-icons.png";
import payment from "../../../assets/payment-methods.png";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col gap-12 py-10 px-16 bg-black text-white">
        {/* Footer Links */}
        <section className="footer-links grid grid-cols-5 gap-20">
          <div>
            <h3 className="font-openSans font-bold text-xs leading-[18px]">
              Tyres
            </h3>
            <div className="h-px bg-white/30 my-3"></div>
            <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
            </ul>
          </div>
          <div>
            <h3 className=" font-openSans font-bold text-xs leading-[18px]">
              Tyre Manufacturers
            </h3>
            <div className="h-px bg-white/30 my-3"></div>
            <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
            </ul>
          </div>
          <div>
            <h3 className="font-openSans font-bold text-xs leading-[18px]">
              Garage Services
            </h3>
            <div className="h-px bg-white/30 my-3"></div>
            <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
            </ul>
          </div>
          <div>
            <h3 className=" font-openSans font-bold text-xs leading-[18px]">
              Popular Sizes
            </h3>
            <div className="h-px bg-white/30 my-3"></div>
            <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
            </ul>
          </div>
          <div>
            <h3 className=" font-openSans font-bold text-xs leading-[18px]">
              Help and Advice
            </h3>
            <div className="h-px bg-white/30 my-3"></div>
            <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
              <li>Car tyres</li>
            </ul>
          </div>
        </section>
        {/* Footer Info */}
        <section className="footer-info grid grid-cols-3 gap-14">
          <div>
            <h3 className="font-montserrat font-bold text-base leading-4 uppercase mb-3">
              Receive Exclusive Discounts
            </h3>
            <p className="font-montserrat font-normal text-xs leading-5 tracking-normal">
              Get the latest information about new products, special deals,
              news, top-rated items, promotions and more!
            </p>
            <div className="flex mt-6 w-full">
              <input
                type="text"
                className="py-3 px-4 w-full border border-[#E6E6E6] rounded-tl-[3px] rounded-bl-[3px] text-black"
                placeholder="Enter email address"
              />
              <button className="bg-primary text-white py-3 px-4 font-openSans font-medium text-sm leading-4 uppercase">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-sm leading-4 uppercase mb-6">
              Need expert advice?
            </h3>
            <div className="flex justify-between gap-6">
              <div className="font-montserrat text-sm leading-5 font-normal text-white [&_p]:mb-[6px]">
                <p>Mon - Fri: 8 AM - 6 PM (ET) </p>
                <p>Sat: 9 AM - 5 PM (ET)  </p>
                <p>Sun: Closed </p>
              </div>
              <div className="font-montserrat font-normal text-sm leading-5 [&_p]:flex [&_p]:gap-3 [&_p]:mb-3">
                <p>
                  <Phone />
                  0000000000
                </p>
                <p>
                  {" "}
                  <Mail />
                  info@onyxytire.com
                </p>
              </div>
            </div>
          </div>
          <div className="font-montserrat font-bold text-sm leading-4 tracking-normal uppercase flex flex-col gap-6">
            <div>
              <h3 className="mb-3">Stay connected</h3>
              <img src={social} alt="Social icons" />
            </div>
            <h3>Payment methods</h3>
            <img src={payment} alt="Payment icons" />
          </div>
        </section>
        {/* Copyright */}
        <div className="copyright border-t border-white pt-6">
          <div className="flex gap-2 font-openSans font-normal text-[10px] ">
            <p>© 2025 onyxtyres.com  </p>
            <nav>
              <ul className="flex gap-2">
                <li>Terms & Conditions</li> |<li>Cookie policy</li> |
                <li>Privacy policy</li> |<li>Sitemap</li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
