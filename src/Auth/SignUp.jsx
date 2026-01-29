import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../Components/Common/Forms/Button";
import Input from "../Components/Common/Forms/Input";
import PasswordInput from "../Components/Common/Forms/PasswordInput";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // 🔒 STRICT GUARD
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://3.26.11.176/api/v1/auth/register",
        {
          email,
          password,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ redirect ONLY after successful POST response
      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="bg-[#F4F4F4] w-6/12 mx-auto py-6 rounded-lg">
        <div className="text-center tracking-normal">
          <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2">
            Register
          </h2>
          <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
            Please register below to create an account
          </p>
        </div>

        {/* ✅ FORM */}
        <form className="px-6 pt-6" onSubmit={handleRegister}>
          <Input
            label="First Name"
            type="text"
            placeholder="First Name"
            value={firstName}
            disabled={loading}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            label="Last Name"
            type="text"
            placeholder="Last Name"
            value={lastName}
            disabled={loading}
            onChange={(e) => setLastName(e.target.value)}
          />

          <Input
            label="Email Address *"
            type="text"
            placeholder="Email Address"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Password *"
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm text-center mt-3">
              {error}
            </p>
          )}

          <div className="flex gap-6 pt-6">
            <Button type="submit" solid disabled={loading}>
              {loading ? "Registering..." : "Register now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
