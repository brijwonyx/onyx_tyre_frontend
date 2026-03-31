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
};
