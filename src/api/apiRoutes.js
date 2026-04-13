const API_BASE_URL = "https://tyreevo.com.au/api/api/v1";

/*  Landing Page Api */

const GET_MAKE_URL = `${API_BASE_URL}/tyre-addict/vehicles/makes`;

const GET_YEAR_URL = `${API_BASE_URL}/tyre-addict/vehicles/models`;

const LOGIN_URL = `${API_BASE_URL}/auth/login`;

const SIGNUP_URL = `${API_BASE_URL}/auth/register`;

const BRAND_IMAGE_URL = `${API_BASE_URL}/tyre/brand-list`;

const TYRE_ALL_NUMBER_FITS = `${API_BASE_URL}/tyre-addict/tyre/fitments`;

const POSTAL_CODE_VERIFICATION = `${API_BASE_URL}/tyre/postal-codes/verify`;

const TYRE_VEHICLE = `${API_BASE_URL}/tyre`;

const BRAND_TYRE_LIST = `${TYRE_VEHICLE}/brand`;

const ADD_TO_CART = `${API_BASE_URL}/cart/add`;

const GET_CART_FROM_BACKEND = `${API_BASE_URL}/cart`;

const MERGE_CART_TO_BACKEND = `${API_BASE_URL}/cart/merge`

/** AUTHENTICATION */
const AUTH_URL = `${API_BASE_URL}/auth`;
const USER_VALIDATE_ENDPOINT = `${AUTH_URL}/verify-mobile`;
const SEND_OTP_ENDPOINT = `${AUTH_URL}/otp/send`;
const LOGIN_WITH_OTP_ENDPOINT = `${AUTH_URL}/login-with-otp`;
const VERIFY_OTP_FOR_FORGOT_PASSWORD_ENDPOINT = `${AUTH_URL}/verify-otp-for-reset`;
const FORGOT_PASSWORD_ENDPOINT = `${AUTH_URL}/reset-password`;

export {
  GET_MAKE_URL,
  GET_YEAR_URL,
  LOGIN_URL,
  SIGNUP_URL,
  BRAND_IMAGE_URL,
  TYRE_ALL_NUMBER_FITS,
  POSTAL_CODE_VERIFICATION,
  TYRE_VEHICLE,
  BRAND_TYRE_LIST,
  USER_VALIDATE_ENDPOINT,
  SEND_OTP_ENDPOINT,
  LOGIN_WITH_OTP_ENDPOINT,
  VERIFY_OTP_FOR_FORGOT_PASSWORD_ENDPOINT,
  FORGOT_PASSWORD_ENDPOINT,
  ADD_TO_CART,
  GET_CART_FROM_BACKEND,
  MERGE_CART_TO_BACKEND,
};
