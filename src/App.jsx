import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/home";
import Login from "./Login/Login";
import ResetPassword from "./Login/ResetPassword";
import SignUp from "./Login/Signup";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
