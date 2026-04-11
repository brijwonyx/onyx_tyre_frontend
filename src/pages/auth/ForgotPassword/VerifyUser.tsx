import React, { useState } from "react";

import { Link } from "react-router-dom";

import Input from "../../../Components/Common/Forms/Input";
import Button from "../../../Components/Common/Forms/Button";

import FlagIcon from '../../../assets/flag-icon.svg';
import SuccessIcon from '../../../assets/success-icon.svg';

import { sendOTPApiCall, userValidationApiCall } from "../utils.api";
import { showToast } from "../../../shared/Toaster/constant";
import { setPhoneNumber } from "../../../utils/cookiesManager";
import { AUTHENTICATION_FLOW_STEPS_MAPPING } from "./constant";
import Toaster from "../../../shared/Toaster";

interface VerifyUserProps{
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  setPhone:React.Dispatch<React.SetStateAction<string>>;
  phone:string;
}

const VerifyUser = (props:VerifyUserProps) => {
  const {setCurrentStep , setPhone , phone} = props;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
 
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

    setPhoneNumber(phone);

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
          setCurrentStep(AUTHENTICATION_FLOW_STEPS_MAPPING.VERIFY_OTP)
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
    <div className="bg-white text-black px-4 md:px-16 py-10 flex items-center">
      <div className="w-full md:w-5/12 mx-auto shadow-lg rounded-xl py-6 px-6">
        
        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="font-montserrat text-2xl font-semibold mb-2">
            Reset your password
          </h2>
          <p className="text-[#6B7280] text-sm">
            Enter your registered phone and we’ll send you Otp
            (valid for 10 minutes).
          </p>
        </div>


            <div className="mb-4">
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
                <p className="text-red-500 text-sm">{error}</p>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-4">
              <Button
                onClick={handleSendOtp}
                disabled={isButtonDisabled}
                className="w-full"
              >
                {loading ? "Sending..." : "Request Otp"}
              </Button>

              <Link
                to="/login"
                className="text-center text-sm text-primary font-medium"
              >
                Back to Login
              </Link>
            </div>

            {/* EXTRA UX */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Remember your password?{" "}
                <Link to="/login" className="text-primary font-medium">
                  Login
                </Link>
              </p>
            </div>        
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default VerifyUser;