import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../Components/Common/Forms/Input";

import Button from "../../Components/Common/Forms/Button";

import PasswordInput from "../../Components/Common/Forms/PasswordInput";

import CallApi from "../../Common-Controller/controller";

import { SIGNUP_URL } from "../../api/apiRoutes";

import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { loading, request } = CallApi();

  const refs = {
    lastName: useRef(null),
    mobile: useRef(null),
    email: useRef(null),
    password: useRef(null),
  };

  const phoneRegex = /^\d{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);

    setFormData((prev) => ({ ...prev, mobile: value }));

    if (errors.mobile) {
      setErrors((prev) => ({ ...prev, mobile: "" }));
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.mobile) newErrors.mobile = "Phone is required";
    else if (!phoneRegex.test(formData.mobile))
      newErrors.mobile = "Must be 10 digits";

    if (!formData.email) newErrors.email = "Email is required";

    if (!formData.password) newErrors.password = "Password is required";

    return newErrors;
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await request({
        url: SIGNUP_URL,
        method: "POST",
        data: {
          mobile: formData.mobile,
          email: formData.email,
          password: formData.password,
        },
      });

      const { success, data } = response || {};

      if (success && data?.message === "Verification email sent") {
        toast.success(data?.message || "Verification email sent");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "Registration failed");
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const order = ["firstName", "lastName", "mobile", "email", "password"];
      const currentIndex = order.indexOf(field);

      if (currentIndex < order.length - 1) {
        const nextField = order[currentIndex + 1];
        refs[nextField]?.current?.focus();
      } else {
        handleRegister(e);
      }
    }
  };

  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="bg-[#F4F4F4] w-6/12 mx-auto py-6 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-2">Register</h2>
          <p className="text-[#8D8D8D] text-sm">
            Please register below to create an account
          </p>
        </div>

        <form className="px-6 pt-6" onSubmit={handleRegister}>
          <Input
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "firstName")}
            placeholder="First Name"
            disabled={loading}
          />

          <Input
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "lastName")}
            inputRef={refs.lastName}
            placeholder="Last Name"
            disabled={loading}
          />

          <Input
            label="Phone Number *"
            name="mobile"
            value={formData.mobile}
            onChange={handlePhoneChange}
            onKeyDown={(e) => handleKeyDown(e, "mobile")}
            inputRef={refs.mobile}
            placeholder="Phone Number"
            error={errors.mobile}
            disabled={loading}
          />

          <Input
            label="Email Address *"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "email")}
            inputRef={refs.email}
            placeholder="Email Address"
            error={errors.email}
            disabled={loading}
          />

          <PasswordInput
            label="Password *"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyDown(e, "password")}
            inputRef={refs.password}
            error={errors.password}
            disabled={loading}
          />

          {/* {(errors.general || apiError) && (
            <p className="text-red-500 text-sm text-center">
              {errors.general || apiError}
            </p>
          )} */}

          <div className="flex gap-6 pt-6">
            <Button type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
