import axios from "axios";

import {
  FORGOT_PASSWORD_ENDPOINT,
  LOGIN_WITH_OTP_ENDPOINT,
  SEND_OTP_ENDPOINT,
  USER_VALIDATE_ENDPOINT,
  VERIFY_OTP_FOR_FORGOT_PASSWORD_ENDPOINT,
} from "../../api/apiRoutes";
import { COUNTRY_CODE } from "../../constant/appConstant";

export const userValidationApiCall = async (args: { phone: string }) => {
  const { phone } = args;

  const response = await axios.post(
    USER_VALIDATE_ENDPOINT,
    { mobile: phone },
    {
      headers: {
        accept: "/",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const sendOTPApiCall = async (args: { phone: string }) => {
  const { phone } = args;

  const includeCountryCode = COUNTRY_CODE + phone;

  const response = await axios.post(
    SEND_OTP_ENDPOINT,
    { mobile: includeCountryCode },
    {
      headers: {
        accept: "/",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const verifyOTPApiCall = async (args: { phone: string ; otp:string }) => {
  const { phone , otp } = args;

  const response = await axios.post(
    VERIFY_OTP_FOR_FORGOT_PASSWORD_ENDPOINT,
    { mobile: phone , otp },
    {
      headers: {
        accept: "/",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const forgotPasswordApiCall = async (args: { mobile: string ; password:string,token:string }) => {
  const { mobile , password , token } = args;

  const response = await axios.post(
    FORGOT_PASSWORD_ENDPOINT,
    { mobile,password,token },
    {
      headers: {
        accept: "/",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const loginWithOTPApiCall = async (args: {
  phone: string;
  otp: string;
}) => {
  const { phone, otp } = args;

const payload = {
    "mobile": "91" + phone,
    "otp": otp
};

  const response = await axios.post(
    LOGIN_WITH_OTP_ENDPOINT,
    payload,
    {
      headers: {
        accept: "/",
        "Content-Type": "application/json",
      },
    }
  );


  return response.data;
};
