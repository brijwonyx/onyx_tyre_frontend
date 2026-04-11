import { useState } from "react";
import { AUTHENTICATION_FLOW_STEPS_MAPPING } from "./constant";
import ForgotPasswordScreen from "./ForgotPasswordScreen";
import VerifyUser from "./VerifyUser";
import VerifyOTP from "../VerifyOTP";
import { verifyOTPApiCall } from "../utils.api";
import Toaster from "../../../shared/Toaster";
import { COUNTRY_CODE } from "../../../constant/appConstant";
import { setForgotPasswordToken } from "../../../utils/cookiesManager";
import { showToast } from "../../../shared/Toaster/constant";

const COMPONENT_STEPS_MAPPING = {
    [AUTHENTICATION_FLOW_STEPS_MAPPING.MOBILE_NUMBER_AUTHENTICATION]: VerifyUser,
    [AUTHENTICATION_FLOW_STEPS_MAPPING.VERIFY_OTP]: VerifyOTP,
    [AUTHENTICATION_FLOW_STEPS_MAPPING.FORGOT_PASSWORD]: ForgotPasswordScreen,
};


const ForgotPassword = () => {
    const [currentStep, setCurrentStep] = useState<string>(
        AUTHENTICATION_FLOW_STEPS_MAPPING.MOBILE_NUMBER_AUTHENTICATION,
    ); 

   const [phone , setPhone] = useState(''); 
   const [otp, setOtp] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const [timer, setTimer] = useState(60);
   const [shake, setShake] = useState(false);

   const handleVerifyOTP = async() => {
    try {
        setLoading(true);

        const payload = {
            phone : COUNTRY_CODE + phone,
            otp
        }
     
        const response = await verifyOTPApiCall(payload);

        const {success , data} = response || {};

        if(!success){
            throw new Error()
        }

        const {data:forgotPasswordData} = data || {};

        const {token} = forgotPasswordData || {};
         
        setForgotPasswordToken(token)

        setCurrentStep(AUTHENTICATION_FLOW_STEPS_MAPPING.FORGOT_PASSWORD)

     } catch (error) {
        const errorMessage = error instanceof Error ? error.message :'Internal server error'

        showToast({type:'error',message:errorMessage})
     }finally{
        setLoading(false);
     }
    
   }

   const CurrentStepComponent = COMPONENT_STEPS_MAPPING[currentStep];

    if (!CurrentStepComponent) {
        return null;
    }

  return (
    <>
    <CurrentStepComponent
    setCurrentStep={setCurrentStep}
    otp={otp}
    setOtp={setOtp}
    setError={setError}
    error={error}
    shake={shake}
    setShake={setShake}
    phone={phone}
    setLoading={setLoading}
    loading={loading}
    timer={timer}
    setTimer={setTimer}
    handleSubmit={handleVerifyOTP}
    setPhone={setPhone}
    />
    <Toaster/>
    </>
  )
}

export default ForgotPassword