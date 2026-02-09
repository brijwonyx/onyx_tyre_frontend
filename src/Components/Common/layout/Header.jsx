import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const Header = () => {
  return (
    <>
      <div className="header py-1 px-16">
        <div className="flex gap-6 items-center justify-between">
          <div className="flex gap-10">
            <div className="logo h-[54px]">
              <Link to="/" >
              <img src={logo} className="" />
              </Link>
            </div>
            <div className="flex items-center gap-4 font-openSans text-sm leading-5 tracking-normal">
              <Link to="/">Tyres</Link>
              <Link to="/">Tyre Brands</Link>
              <Link to="/">Wheels</Link>
              <Link to="/">Deals</Link>
              <Link to="/">Delivery & Installation</Link>
            </div>
          </div>
          <div>
            <div className="flex gap-3 text-sm">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
