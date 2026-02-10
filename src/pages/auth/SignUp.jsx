import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../components/common/forms/Input";
import Button from "../../components/common/forms/Button";
import PasswordInput from "../../components/common/forms/PasswordInput";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Regex pattern: exactly 10 digits
  const phoneRegex = /^\d{10}$/;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (loading) return;

    // Validate mobile number length
    if (!phoneRegex.test(mobile)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://3.26.11.176/api/v1/auth/register",
        {
          // firstName,
          // lastName,
          mobile,
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

      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  // Only allow digits and max length 10
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // remove non-digits
    if (value.length > 10) value = value.slice(0, 10); // limit to 10 digits
    setMobile(value);
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
            label="Phone Number *"
            type="text"
            placeholder="Phone Number"
            value={mobile}
            disabled={loading}
            onChange={handlePhoneChange}
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
            <p className="text-red-500 text-sm text-center mt-3">{error}</p>
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
