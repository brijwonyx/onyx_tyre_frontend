import Cookies from 'js-cookie';

export const ACCESS_TOKEN = 'a_t';
export const PHONE_NUMBER = 'phoneNumber';
export const FORGOT_PASSWORD_TOKEN = 'f_t'

export const setAccessToken = (token:string) => {

    if(!token) return;

    Cookies.set(ACCESS_TOKEN,token,{expires:1,path:'/'});
}

export const setForgotPasswordToken = (token:string) => {

    if(!token) return;

    Cookies.set(FORGOT_PASSWORD_TOKEN,token,{expires:1,path:'/'});
}

export const setPhoneNumber = (mobileNumber:string) => {

    if(!mobileNumber) return;

    Cookies.set(PHONE_NUMBER,mobileNumber,{expires:1,path:'/'});
}

export const getAccessToken = () => Cookies.get(ACCESS_TOKEN);
export const getPhoneNumber = () => Cookies.get(PHONE_NUMBER);
export const getForgotPasswordToken = () => Cookies.get(FORGOT_PASSWORD_TOKEN);

export const clearAllCookies = () => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(PHONE_NUMBER);
    Cookies.remove(FORGOT_PASSWORD_TOKEN);
}

export const removePhoneNumber = () => Cookies.remove(PHONE_NUMBER);
export const removeForgotPasswordToken = () => Cookies.remove(FORGOT_PASSWORD_TOKEN);