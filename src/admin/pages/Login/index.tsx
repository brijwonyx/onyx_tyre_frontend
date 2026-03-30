import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import CallApi from "../../../Common-Controller/controller";

import { LOGIN_URL } from "../../../api/apiRoutes";

import { ErrorState, FormState } from "./type";

import "./styles.css";

const Login: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
  });
  
    const navigate = useNavigate();

  const [errors, setErrors] = useState<ErrorState>({});

  // Email regex
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const { loading, request } = CallApi();

  const validate = (): ErrorState => {
    const newErrors: ErrorState = {};

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => {
      const newErrors = { ...prev };

      if (name === "email") {
        if (!value) {
          newErrors.email = "Email is required";
        } else if (!validateEmail(value)) {
          newErrors.email = "Enter valid email";
        } else {
          delete newErrors.email;
        }
      }

      if (name === "password") {
        if (!value) {
          newErrors.password = "Password is required";
        } else {
          delete newErrors.password;
        }
      }

      return newErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

     try {
          const response = await request({
            url: LOGIN_URL,
            method: "POST",
            data: {
              identifier: form.email,
              password: form.password,
            },
          });
    
          if (response?.success) {
            localStorage.setItem("token", response?.data);
            // setIsLoggedIn(true);
            navigate("/admin/products");
          }
        } catch (err) {
          console.error("Login Failed:", err);
        }
  };

  const isFormValid =
    form.email &&
    form.password &&
    validateEmail(form.email);

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">
          Welcome to <span>Admin Panel</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email@domain.com"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={!isFormValid || loading}

          >
            {loading ? 'loading...' :'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;