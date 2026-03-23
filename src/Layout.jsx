import { Outlet } from "react-router-dom";
import TopBar from "./Components/Common/layout/TopBar";
import Header from "./Components/Common/layout/Header";
import Footer from "./Components/Common/layout/Footer";
import AddToCartDrawer from "./Components/cart/drawer/AddToCartDrawer";
import { useState } from "react";

const Layout = () => {
  const [openCart, setOpenCart] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("token");
  });
  return (
    <>
      <TopBar />
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      <Outlet
        context={{
          openCart: () => setOpenCart(true),setIsLoggedIn
        }}
      />
      <Footer />

      <AddToCartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        closeCart={() => setOpenCart(false)}
      />
    </>
  );
};
export default Layout;
