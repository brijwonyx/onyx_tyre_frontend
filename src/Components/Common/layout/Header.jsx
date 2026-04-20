import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

import { BRANDS_MENU, NAV_LINKS, TYRES_MENU } from "../../../data/navigation";

import { ChevronDown, ShoppingCart, User } from "lucide-react";

import MegaMenu from "../../navigation/MegaMenu";

// import { useEffect } from "react";
// import { clearAllCookies, getAccessToken } from "../../../utils/cookiesManager";

import { useCart } from "../../../context/cardContext";

const MENUS = {
  TYRES_MENU,
  BRANDS_MENU,
};

const Header = (props) => {
  const { setOpenCart } = props;

  const { cart } = useCart();
  // const token = getAccessToken();

  // const navigate = useNavigate();

  // const token = localStorage.getItem("token");

  // const location = useLocation();

  // const { pathname } = location;

  // const handleLogout = () => {
  //   clearAllCookies();
  //   setIsLoggedIn(false);
  //   navigate("/");
  // };

  // useEffect(() => {
  //   setIsLoggedIn(!!token);
  // }, [token]);

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
          {/* Removed because flow changes */}
          {/* {isLoggedIn ? (
            <button onClick={handleLogout} className="text-red-500">
              Logout
            </button>
          ) : (
            <>
              {pathname !== "/login" && <Link to="/login">Login</Link>}
              {pathname !== "/register" && <Link to="/register">Register</Link>}
            </>
          )} */}

          <div>
            <User />{" "}
          </div>

          <div
            onClick={() => setOpenCart(true)}
            className="relative cursor-pointer"
          >
            <ShoppingCart />

            {/* Badge */}
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
