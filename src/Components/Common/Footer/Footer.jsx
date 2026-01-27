import social from "../../../assets/social-icons.png";
import payment   from "../../../assets/payment-methods.png";


const Footer = () => {
  return (
    <>
      <footer className="flex flex-col gap-12 py-10 px-16 bg-black text-white">
        {/* Footer Links */}
        <section className="footer-links grid grid-cols-5 gap-20 py-8">
            <div>
                <h3 className="font-openSans font-bold text-xs leading-[18px]">Tyres</h3>
                <div className="h-px bg-white/30 my-3"></div>
                <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                </ul>
            </div>
                        <div>
                <h3 className=" font-openSans font-bold text-xs leading-[18px]">Tyre Manufacturers</h3>
                <div className="h-px bg-white/30 my-3"></div>
                <ul  className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                </ul>
            </div>
                        <div>
                <h3 className="font-openSans font-bold text-xs leading-[18px]">Garage Services</h3>
                <div className="h-px bg-white/30 my-3"></div>
                <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                </ul>
            </div>
                        <div>
                <h3 className=" font-openSans font-bold text-xs leading-[18px]">Popular Sizes</h3>
                <div className="h-px bg-white/30 my-3"></div>
                <ul className="font-openSans font-regular text-xs leading-[16px] space-y-1.5">
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                    <li>Car tyres</li>
                </ul>
            </div>
                        <div>
                <h3 className=" font-openSans font-bold text-xs leading-[18px]">Help and Advice</h3>
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
        <section className="footer-info grid grid-cols-3 gap-8">
          <div>
            <h3>Receive Exclusive Discounts</h3>
            <p>
              Get the latest information about new products, special deals,
              news, top-rated items, promotions and more!
            </p>
          </div>
          <div>
            <h3>Need expert advice?</h3>
            <div className="flex justify-between gap-14">
              <div>
                <p>Mon - Fri: 8 AM - 6 PM (ET) </p>
                <p>Sat: 9 AM - 5 PM (ET)  </p>
                <p>Sun: Closed </p>
              </div>
              <div>
                <p>0000000000</p>
                <p>info@onyxytire.com</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3>Stay connected</h3>
              <img src={social} alt="Social icons"/>
            </div>
            <div>
              <h3>Payment methods</h3>
              <img src={payment} alt="Payment icons"/>

            </div>
          </div>
        </section>
        {/* Copyright */}
        <div className="copyright border-t border-white py-8">
          <div className="flex gap-5">
            <p>© 2025 onyxtyres.com  </p>
            <nav>
              <ul className="flex gap-5">
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
