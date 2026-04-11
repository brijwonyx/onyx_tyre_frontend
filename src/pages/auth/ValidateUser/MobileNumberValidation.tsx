import React, { useState } from "react";

import Input from "../../../Components/Common/Forms/Input";

import FlagIcon from '../../../assets/flag-icon.svg';
import SuccessIcon from '../../../assets/success-icon.svg';
import PrivacyIcon from '../../../assets/privacy-icon.svg';

import { showToast } from "../../../shared/Toaster/constant";
import Toaster from "../../../shared/Toaster";

import { sendOTPApiCall, userValidationApiCall } from "../utils.api";

interface MobileNumberValidationProps {
    phone:string;
    setPhone:React.Dispatch<React.SetStateAction<string>>;
    setStep:React.Dispatch<React.SetStateAction<string>>;
}

const MobileNumberValidation = (props:MobileNumberValidationProps) => {
  const {phone , setPhone , setStep} = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // only digits, max 10
  const handlePhoneChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 10) value = value.slice(0, 10);
    
    setPhone(value);
  };

  const handleSendOtp = async () => {
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    try {
        setLoading(true);

        const response = await userValidationApiCall({phone})

        const {success , data} = response || {};

        if(!success){
            throw new Error("Failed to validate user");
        }

        const {exists , message} = data || {};

        if(!exists){
            throw new Error(message || "User does not exist");
        }

        const otpResponse = await sendOTPApiCall({phone});

        const {success:otpSuccess} = otpResponse || {};

        if(!otpSuccess){
            throw new Error("Failed to send OTP");
        }

        showToast({type:'success',message:"OTP sent successfully"})

        setTimeout(() => {
            setStep("otp")
        }, 2000);

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";

        showToast({type:'error',message:errorMessage})

    }finally{
        setLoading(false);
    }
   
  };

  const isButtonDisabled = loading || phone.length !== 10;

  return (
    <>
    <div>
      <div className="py-4 text-center tracking-normal pt-4">
        <h2 className="font-montserrat text-2xl font-medium leading-[32px] mb-2">
          Enter your mobile number
        </h2>
        <p className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">
          We'll send a 6-digit OTP for verification.
        </p>
      </div>

      <div className="px-4 py-6">
        <Input
          type="text"
          label="Phone Number"
          placeholder="Enter phone number"
          value={phone}
          onChange={handlePhoneChange}
          inputClassName="pl-[100px]"
          endAdornment={phone.length === 10 && <img src={SuccessIcon} className="w-[30px] h-[30px]" />}
          slug={<div className="ml-[10px] pr-[5px] h-[25px] flex items-center gap-[4px] border-r"><img src={FlagIcon} className="w-[40px] h-[40px]" /><span>+61</span></div>}
        />

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">
            {error}
          </p>
        )}       
          <button
            onClick={handleSendOtp}
            className={`py-[12px] rounded-lg bg-[#2e7d32] w-full text-white ${isButtonDisabled ? 'opacity-50':''} `}
            disabled={isButtonDisabled}
          >
            {loading ? "Sending..." : "Request OTP"}
          </button>

         <div className="flex gap-[4px] mt-[12px] justify-center items-center">
            <img src={PrivacyIcon} className="w-[20px] h-[20px]" />
            <span className="text-[#8D8D8D] text-sm font-openSans font-normal leading-[120%]">Your number is safe and won't be shared.</span>
         </div>
       
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default MobileNumberValidation;