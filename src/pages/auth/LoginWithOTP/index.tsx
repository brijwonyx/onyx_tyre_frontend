import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileNumberValidation from "../ValidateUser/MobileNumberValidation";
import VerifyOTP from "../VerifyOTP";

import { loginWithOTPApiCall } from "../utils.api";

import { setAccessToken } from "../../../utils/cookiesManager";
import { showToast } from "../../../shared/Toaster/constant";

const LoginWithOTP = () => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();

   const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
    };

    const handleSubmit = async () => {
      if (otp.length !== 6) return;
  
      setLoading(true);
      setError("");
  
      try {
        const response  = await loginWithOTPApiCall({phone,otp})
  
        const data = response;
  
        const {success , result , message} = data || {};
  
        if(!success){
          throw new Error(message)
        }
  
        const {accessToken} = result || {};
  
        setAccessToken(accessToken);
        localStorage.setItem("token", accessToken);

        showToast({
          type:'success',
          message:'Login successfully'
        })
  
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } catch (error) {
        setError( "Invalid or expired OTP");
        triggerShake(); 
      } finally {
        setLoading(false);
      }
    };

  return (
     <>
        {step === "phone" && (
          <div className="bg-white text-black px-16 py-10">
          <div className="w-6/12 mx-auto shadow-[3px_2px_23.5px_0px_#00000029] py-4">
          <MobileNumberValidation
            phone={phone}
            setPhone={setPhone}
            setStep={setStep}
          />
           </div>
            </div>
        )}
        {step === "otp" && 
        <VerifyOTP 
        phone={phone} 
        otp={otp} 
        setOtp={setOtp} 
        error={error} 
        setError={setError} 
        setLoading={setLoading} 
        loading={loading} 
        timer={timer} 
        setTimer={setTimer}
        shake={shake}
        setShake={setShake}
        handleSubmit={handleSubmit}
        />
        }
   </>
  );
};


export default LoginWithOTP;