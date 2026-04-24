import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import TopBar from "./Components/Common/layout/TopBar";
import Header from "./Components/Common/layout/Header";
import Footer from "./Components/Common/layout/Footer";
import AddToCartDrawer from "./Components/cart/drawer/AddToCartDrawer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  const [openCart, setOpenCart] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });

  const location = useLocation();

  const HIDE_HEADER_ROUTES = ["/checkout"];

  const shouldHideHeader = HIDE_HEADER_ROUTES.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <>
      <TopBar />
      {!shouldHideHeader && (
        <Header
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          setOpenCart={setOpenCart}
        />
      )}

      <Outlet
        context={{
          openCart: () => setOpenCart(true),
          setIsLoggedIn,
        }}
      />
      <Footer />

      <AddToCartDrawer
        open={openCart}
        setOpenCart={setOpenCart}
        onClose={() => setOpenCart(false)}
        closeCart={() => setOpenCart(false)}
      />

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
export default Layout;
