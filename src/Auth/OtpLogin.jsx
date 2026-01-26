import { useState, useRef } from "react";
import Input from "../Components/Common/Forms/Input";
import Button from "../Components/Common/Forms/Button";
import { Link } from "react-router-dom";

const OtpLogin = () => {
  const [step, setStep] = useState("phone");
  return (
    <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
        {step === "phone" && <EnterPhone setStep={setStep} />}
        {step === "otp" && <OtpVerification setStep={setStep} />}
      </div>
    </div>
  );
};

const EnterPhone = ({ setStep }) => {
  return (
    <div>
      <div className="py-4 text-center tracking-normal pt-4   ">
        <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2 ">
          Enter Phone Number
        </h2>
        <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
          We will send you an OTP to your registed Phone No.
        </p>
      </div>
      <div className="px-4 py-6">
        <Input type="text" label="Phone Number" placeholder="Phone Number" />
        <div className="flex gap-6 pt-6">
          <Button onClick={() => setStep("otp")}>Submit</Button>
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
const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <div>
      <div className="py-4 text-center tracking-normal pt-4   ">
        <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2 ">
          Enter OTP
        </h2>
        <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
          Please enter the OTP send to your registered Phone No.
        </p>
      </div>
      <div className="w-9/12 mx-auto py-5 px-5">
        <div className="flex justify-center gap-5 py-5">
          {otp.map((digit, index) => (
            <input
              key={index}
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
        <button className="text-primary text-sm font-medium flex justify-end w-full font-montserrat">
          Resend OTP
        </button>
        <div className="flex justify-center gap-6 pt-6">
          <Button>Submit</Button>
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
