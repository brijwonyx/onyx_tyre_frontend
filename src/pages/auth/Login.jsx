import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useRef, useState } from "react";

import Input from "../../Components/Common/Forms/Input";

import PasswordInput from "../../Components/Common/Forms/PasswordInput";

import { Button } from "@headlessui/react";

import CallApi from "../../Common-Controller/controller";

import { LOGIN_URL } from "../../api/apiRoutes";

const Login = () => {
  const { setIsLoggedIn } = useOutletContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState("");

  const passwordRef = useRef(null);

  const { loading, error, request } = CallApi();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (showError) setShowError("");

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setShowError("Please fill all fields");
      return;
    }

    try {
      const response = await request({
        url: LOGIN_URL,
        method: "POST",
        data: {
          identifier: formData?.email,
          password: formData?.password,
        },
      });

      if (response?.success) {
        localStorage.setItem("token", response?.data);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (field === "email") {
        passwordRef.current?.focus();
      } else if (field === "password") {
        if (formData.email && formData.password) {
          handleSubmit(e);
        }
      }
    }
  };

  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        <div className="py-4 text-center px-4">
          <h2 className="font-montserrat text-2xl font-medium mb-2">Login</h2>
          <p className="text-[#8D8D8D] text-sm font-openSans">
            Please enter your email and password below to access your account
          </p>
        </div>

        <form className="px-4 py-6" onSubmit={handleSubmit}>
          <Input
            label="Email Address *"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "email")}
            placeholder="Email Address"
          />

          <PasswordInput
            label="Password *"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            inputRef={passwordRef}
          />

          {(showError || error) && (
            <p className="text-red-500 text-sm text-center">
              {showError || error}
            </p>
          )}

          <div className="text-primary text-sm text-center">
            <Link to="/otp-login" className="pointer-events-none opacity-50">
              Login with OTP
            </Link>
          </div>

          <div className="flex gap-6 pt-6">
            <Button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            <Link
              to="/reset-password"
              className={`font-montserrat text-primary font-semibold text-sm uppercase py-[10px] 
                
              }`}
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
