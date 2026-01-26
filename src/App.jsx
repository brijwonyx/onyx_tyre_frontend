import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Layout from "./Layout";
import OtpLogin from "./Auth/OtpLogin";
import Login from "./Auth/Login";
import SignUp from "./Auth/Signup";
import ResetPassword from "./Auth/ResetPassword";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
