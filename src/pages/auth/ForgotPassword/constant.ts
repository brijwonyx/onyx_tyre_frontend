import { PASSWORD_LENGTH } from "../../../constant/appConstant";
import { PASSWORD_PATTERN } from "../../../utils/regex";
import { PasswordFormKeys } from "./type";

export const ERROR_MESSAGES = {
    passwordPattern:
        'Password should contain 8 least characters (1 lowercase , 1 uppercase , and 1 number)',
    passwordSame: 'Password and confirm password should be same',
};

export const VALIDATION_RULES = {
    [PasswordFormKeys.PASSWORD]: {
        regex: PASSWORD_PATTERN,
    },
    [PasswordFormKeys.CONFIRM_PASSWORD]: {
        regex: PASSWORD_PATTERN,
    },
};

export const MAX_LENGTHS: Record<PasswordFormKeys, number> = {
    [PasswordFormKeys.PASSWORD]: PASSWORD_LENGTH,
    [PasswordFormKeys.CONFIRM_PASSWORD]: PASSWORD_LENGTH,
};


export const AUTHENTICATION_FLOW_STEPS_MAPPING = {
    MOBILE_NUMBER_AUTHENTICATION: 'MOBILE_NUMBER_AUTHENTICATION',
    VERIFY_OTP: 'VERIFY_OTP',
    FORGOT_PASSWORD: 'FORGOT_PASSWORD',
};
