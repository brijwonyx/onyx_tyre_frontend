import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import ResetPassword from "./pages/auth/ResetPassword";
import AdminRoutes from "./admin/routes/AdminRoutes";
import Home from "./pages/home";
import OtpLogin from "./pages/auth/OtpLogin";
import SearchResults from "./pages/SearchResults";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CheckoutLayout from "./pages/checkout/CheckoutLayout";
import Delivery from "./pages/checkout/Delivery";
import InstallerPage from "./pages/checkout/InstallerPage";
import ReviewPage from "./pages/checkout/ReviewPage";
import PaymentPage from "./pages/checkout/PaymentPage";
import MobileInstaller from "./pages/checkout/MobileInstaller";
import ShippingAddress from "./pages/checkout/ShippingAddress";
import AccountLayout from "./pages/account/AccountLayout";
import OrderHistory from "./pages/account/OrderHistory";
import OrderDetails from "./pages/account/OrderDetails";
import Vehicles from "./pages/account/Vehicles";
import Addresses from "./pages/account/Addresses";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/otp-login" element={<OtpLogin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product-detail" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutLayout />}>
            <Route path="delivery" element={<Delivery />} />
            <Route path="store-fitment/installer" element={<InstallerPage />} />
            <Route path="home-fitment/mobile" element={<MobileInstaller />} />
            <Route path="home-fitment/address" element={<ShippingAddress />} />
            <Route path="review" element={<ReviewPage />} />
            <Route path="payment" element={<PaymentPage />} />
          </Route>
          <Route path="/account" element={<AccountLayout />}>
            <Route path="orders" element={<OrderHistory />} />
            <Route path="orders/:id" element={<OrderDetails />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="addresses" element={<Addresses />} />
            {/* <Route path="saved" element={<SavedItems />} /> */}
            {/* <Route path="settings" element={<AccountSettings />} /> */}
            {/* <Route path="ratings" element={<Ratings />} /> */}
          </Route>
        </Route>

        {AdminRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
