import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

import { BRANDS_MENU, NAV_LINKS, TYRES_MENU } from "../../../data/navigation";

import { ChevronDown } from "lucide-react";
import MegaMenu from "../../navigation/MegaMenu";

const MENUS = {
  TYRES_MENU,
  BRANDS_MENU,
};

const Header = () => {
  return (
    <div className="py-1 px-16 relative border-b bg-white">

      <div className="flex items-center justify-between">

        {/* LEFT */}
        <div className="flex gap-10 items-center">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} className="h-[54px]" />
          </Link>

          {/* NAV */}
          <nav className="flex items-center gap-6 text-sm">

            {NAV_LINKS.map((item) => {
              const menu = item.menu ? MENUS[item.menu] : null;

              return (
                <div key={item.id} className="relative group">

                  {/* LINK */}
                  {item.path ? (
                    <Link to={item.path} className="py-4 block">
                      {item.label}
                    </Link>
                  ) : (
                    <button className="py-4 flex items-center gap-1">
                      {item.label}
                      <ChevronDown
                        size={16}
                        className="transition group-hover:rotate-180"
                      />
                    </button>
                  )}

                  {/* MEGA MENU */}
                  {menu && (
                    <div
                      className="
                        absolute
                        left-0
                        top-[105%]
                        opacity-0
                        invisible
                        group-hover:opacity-100
                        group-hover:visible
                        transition duration-200
                        z-50
                        w-max
                      "
                    >
                      <MegaMenu menu={menu} />
                    </div>
                  )}

                </div>
              );
            })}

          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex gap-3 text-sm">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </div>
  );
};

export default Header;
