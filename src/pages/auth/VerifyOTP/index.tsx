import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Button from "../../../Components/Common/Forms/Button";

import Toaster from "../../../shared/Toaster";
import { showToast } from "../../../shared/Toaster/constant";

import { loginWithOTPApiCall, sendOTPApiCall } from "../utils.api";

import OTPInputBox from "../../../Components/OTPInputBox";

interface OtpVerificationProps {
  phone: string;
  timer: number;
  otp: string;
  loading: boolean;
  shake: boolean;
  error: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
  setShake: React.Dispatch<React.SetStateAction<boolean>>;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit:() => void;
}

const VerifyOTP = (props: OtpVerificationProps) => {
    const {
        phone, 
        otp , 
        loading ,
        error , 
        setLoading ,
        setError , 
        setShake , 
        setOtp , 
        setTimer , 
        timer , 
        shake , 
        handleSubmit 
    } = props;

  const navigate = useNavigate();

  const handleResendOtp = async () => {
    try {
      setLoading(true);

      const otpResponse = await sendOTPApiCall({phone});
      
      const {success:otpSuccess} = otpResponse || {};
      
      if(!otpSuccess){
          throw new Error("Failed to send OTP");
      }
      
      showToast({type:'success',message:"OTP sent successfully"})
    } catch (err) {
      console.error(err);
    }finally{

    }
  };

    // ⏳ Timer
  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // 🚀 Auto-submit when OTP complete
  useEffect(() => {
    if (otp?.length === 6) {
      handleSubmit();
    }
  }, [otp]);

  return (
    <>
     <div className="bg-white text-black px-16 py-10">
      <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
    <div className="text-center py-6">
      <h2 className="text-xl font-semibold mb-2">Enter OTP</h2>

      <p className="text-gray-500 text-sm">
        We sent a 6-digit code to <br />
        <span className="font-semibold text-black">+91 {phone}</span>
        <Link
          to="/otp-login"
          className="ml-2 text-[#2e7d32] font-medium"
        >
          Change
        </Link>
      </p> 
    <OTPInputBox
      otp={otp} 
      setOtp={setOtp} 
      error={error} 
      setError={setError} 
      shake={shake} 
    />
      {/* 🔁 Resend */}
      <div className="mt-4 text-sm">
        {timer > 0 ? (
          <p className="text-gray-500">
            Didn’t receive OTP? Resend in <span className="font-bold text-md text-[#2e7d32]">{timer}s</span>
          </p>
        ) : (
          <button
            onClick={handleResendOtp}
            className="text-green-600 font-medium"
          >
            Resend OTP
          </button>
        )}
      </div>
      <div className="mt-6">
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        🔒 Your number is safe and won’t be shared
      </p>
    </div>
    </div>
    </div>
    <Toaster/>
    </>
  );
};

export default VerifyOTP;