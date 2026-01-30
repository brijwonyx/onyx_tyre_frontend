import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Button from "../Components/Common/Forms/Button";
import Input from "../Components/Common/Forms/Input";
import PasswordInput from "../Components/Common/Forms/PasswordInput";

const Login = () => {
  const navigate = useNavigate(); // ✅ REQUIRED

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // 🔒 STRICT GUARD
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://3.26.11.176/api/v1/auth/login",
        {
          identifier,
          password,
        },
        {
          headers: {
            accept: "*/*",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Login success:", res.data);

      // ✅ Redirect ONLY after successful API response
      navigate("/");
      
      // optional
      // localStorage.setItem("token", res.data.data.token);

    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        <div className="py-4 text-center px-4">
          <h2 className="font-montserrat text-2xl font-medium mb-2">
            Login
          </h2>
          <p className="text-[#8D8D8D] text-sm font-openSans">
            Please enter your email and password below to access your account
          </p>
        </div>

        <form className="px-4 py-6" onSubmit={handleLogin}>
          <Input
            label="Email Address *"
            type="text"
            placeholder="Email Address"
            value={identifier}
            disabled={loading}
            onChange={(e) => setIdentifier(e.target.value)}
          />

          <PasswordInput
            label="Password *"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm text-center mb-3">
              {error}
            </p>
          )}

          <div className="text-primary text-sm text-center">
            <Link
              to="/otp-login"
              className={loading ? "pointer-events-none opacity-50" : ""}
            >
              Login with OTP
            </Link>
          </div>

          <div className="flex gap-6 pt-6">
            <Button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </Button>

            <Link
              to="/reset-password"
              className={`font-montserrat text-primary font-semibold text-sm uppercase py-[10px] ${
                loading ? "pointer-events-none opacity-50" : ""
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
