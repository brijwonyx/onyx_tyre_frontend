import { Outlet } from "react-router-dom";
import TopBar from "./Components/Common/layout/TopBar";
import Header from "./components/common/layout/Header";
import Footer from "./components/common/layout/Footer";
import AddToCartDrawer from "./components/cart/drawer/AddToCartDrawer";
import { useState } from "react";

const Layout = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <TopBar />
      <Header />
      <Outlet
        context={{
          openCart: () => setOpenCart(true),
        }}
      />
      <Footer />

      <AddToCartDrawer open={openCart} onClose={() => setOpenCart(false)} closeCart={() => setOpenCart(false)}/>
    </>
  );
};
export default Layout;
