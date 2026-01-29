import { useState, useRef } from "react";
import Input from "../Components/Common/Forms/Input";
import Button from "../Components/Common/Forms/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const OtpLogin = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");

  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        {step === "phone" && (
          <EnterPhone
            phone={phone}
            setPhone={setPhone}
            setStep={setStep}
          />
        )}
        {step === "otp" && <OtpVerification phone={phone} />}
      </div>
    </div>
  );
};

/* ---------------- ENTER PHONE ---------------- */

const EnterPhone = ({ phone, setPhone, setStep }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // only digits, max 10
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);
    setPhone(value);
  };

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await axios.post(
        "http://3.26.11.176/api/v1/auth/otp/send",
        { mobile: phone },
        {
          headers: {
            accept: "/",
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ move to OTP screen ONLY on success
      setStep("otp");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="py-4 text-center tracking-normal pt-4">
        <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2">
          Enter Phone Number
        </h2>
        <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
          We will send you an OTP to your registered Phone No.
        </p>
      </div>

      <div className="px-4 py-6">
        <Input
          type="text"
          label="Phone Number"
          placeholder="Phone Number"
          value={phone}
          onChange={handlePhoneChange}
        />

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">
            {error}
          </p>
        )}

        <div className="flex gap-6 pt-6">
          <Button
            onClick={handleSendOtp}
            disabled={loading || phone.length !== 10}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>

          <Link
            to="/login"
            className="font-montserrat text-primary font-semibold text-sm uppercase py-[10px]"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ---------------- OTP VERIFICATION ---------------- */

const OtpVerification = ({ phone }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate()

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleSubmit = async () => {
    const finalOtp = otp.join("");

    if (finalOtp.length !== 6) {
      setError("OTP must be 6 digits");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://3.26.11.176/api/v1/auth/otp/verify",
        {
          mobile: phone,
          otp: finalOtp,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("OTP Verified:", res.data);

      // ✅ SUCCESS ACTION (choose one)
      // navigate("/dashboard");
      // localStorage.setItem("token", res.data.token);

      navigate("/")
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      await axios.post(
        "http://3.26.11.176/api/v1/auth/otp/send",
        { mobile: phone },
        {
          headers: {
            accept: "/",
            "Content-Type": "application/json",
          },
        }
      );
      alert("OTP resent successfully");
    } catch {
      alert("Failed to resend OTP");
    }
  };

  return (
    <div>
      <div className="py-4 text-center tracking-normal pt-4">
        <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2">
          Enter OTP
        </h2>
        <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
          Please enter the OTP sent to your registered Phone No.
        </p>
      </div>

      <div className="w-9/12 mx-auto py-5 px-5">
        <div className="flex justify-center gap-5 py-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputsRef.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="
                w-12 h-12
                text-center text-lg font-semibold
                border border-gray-300 rounded-md
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            />
          ))}
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* <button
          onClick={handleResendOtp}
          className="text-primary text-sm font-medium flex justify-end w-full font-montserrat"
        >
          Resend OTP
        </button> */}

        <div className="flex justify-center gap-6 pt-6">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Verifying..." : "Submit"}
          </Button>

          <Link
            to="/login"
            className="font-montserrat text-primary font-semibold text-sm uppercase py-[10px]"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};


export default OtpLogin;
