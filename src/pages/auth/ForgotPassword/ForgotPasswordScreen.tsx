import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Input from "../../../Components/Common/Forms/Input";
import Button from "../../../Components/Common/Forms/Button";

import EyeOnIcon from '../../../admin/assets/eye-on-icon.svg';
import EyeOffIcon from '../../../admin/assets/eye-off-icon.svg';

import { getForgotPasswordToken, getPhoneNumber } from "../../../utils/cookiesManager";
import { showToast } from "../../../shared/Toaster/constant";

import Toaster from "../../../shared/Toaster";

import { forgotPasswordApiCall } from "../utils.api";

import { PasswordFormKeys, PasswordFormType, PasswordPageErrorMessagesType } from "./type";
import { MAX_LENGTHS } from "./constant";
import { isFormValid, setErrorMsgOnValidationFailed, validateInput } from "./utils";

const ForgotPasswordScreen = () => {
  const [formValues, setFormValues] = useState<PasswordFormType>({
        [PasswordFormKeys.PASSWORD]: '',
        [PasswordFormKeys.CONFIRM_PASSWORD]: '',
  });

  const [errorMessages, setErrorMessages] = useState<PasswordPageErrorMessagesType>({});
  const [isFromValid, setIsFormValid] = useState(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPasswordShow, setConfirmPasswordShow] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement | null>(null);
  
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (
            !MAX_LENGTHS[name as PasswordFormKeys] ||
            value.length <= MAX_LENGTHS[name as PasswordFormKeys]
        ) {
            setFormValues((previousValue: PasswordFormType) => ({
                ...previousValue,
                [name]: value,
            }));

            const isFieldValid = validateInput(name as PasswordFormKeys, value);

            const { key, message, isInputValid } = isFieldValid;

            setErrorMsgOnValidationFailed({ key, message, isInputValid, setErrorMessages });
        }
    };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await forgotPasswordApiCall({
      mobile:`91${getPhoneNumber()}`,
      token:getForgotPasswordToken() ?? '',
      password:formValues[PasswordFormKeys.PASSWORD]
      });

    const {success , data  , message:error} = response || {}; 

    if(!success){
      throw new Error(error)
    }

    const {message} = data?.data || {};

    showToast({
      type:'success',
      message
    })

    setTimeout(() => {
      navigate('/');
    }, 1000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message :'Internal server error';

      showToast({
        type:'error',
        message:errorMessage
      })
    }finally{
      setLoading(false);
    }
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleConfirmPasswordVisibility = () => setConfirmPasswordShow(!confirmPasswordShow);

   const isConfirmPasswordAndPasswordSame =
        formValues[PasswordFormKeys.CONFIRM_PASSWORD] !== formValues[PasswordFormKeys.PASSWORD];

  const isButtonDisable = loading || !isFromValid || isConfirmPasswordAndPasswordSame;

   useEffect(() => {
        // Focus the name input when the component mounts
        if (passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }, []);

        useEffect(() => {
        const isValid = isFormValid({ formValues, errorMessages });

        setIsFormValid(isValid);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues]);

  return (
    <>
    <div className="bg-white text-black px-4 md:px-16 py-10 flex items-center">
      <div className="w-full md:w-5/12 mx-auto shadow-lg rounded-xl py-6 px-6">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="font-montserrat text-2xl font-semibold mb-2">
            Set new password
          </h2>
          <p className="text-[#6B7280] text-sm">
            Create a strong password to secure your account.
          </p>
        </div>
            <div className="space-y-4">
              <Input
                label="New Password"
                 type={!showPassword ? 'password' : 'text'}
                name={PasswordFormKeys.PASSWORD}
                inputRef={passwordInputRef}
                placeholder="Enter new password"
                value={formValues[PasswordFormKeys.PASSWORD]}
                endAdornment={<img style={{cursor:'pointer'}} src={showPassword ? EyeOnIcon :EyeOffIcon} onClick={handlePasswordVisibility}  />}
                onChange={handleChange}
              />
              <p className="text-red-500 text-sm">{errorMessages[PasswordFormKeys.PASSWORD]}</p>
              <Input
                label="Confirm Password"
                type={!confirmPasswordShow ? 'password' : 'text'}
                name={PasswordFormKeys.CONFIRM_PASSWORD}
                inputRef={confirmPasswordInputRef}
                placeholder="Re-enter password"
                endAdornment={<img style={{cursor:'pointer'}} src={confirmPasswordShow ? EyeOnIcon :EyeOffIcon} onClick={handleConfirmPasswordVisibility} />}
                value={formValues[PasswordFormKeys.CONFIRM_PASSWORD]}
                onChange={handleChange}
              />
              
              <p className="text-red-500 text-sm">{errorMessages[PasswordFormKeys.CONFIRM_PASSWORD]}</p>
              
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-4 pt-6">
              <Button
                onClick={handleSubmit}
                disabled={isButtonDisable}
                className="w-full"
              >
                {loading ? "Updating..." : "Update Password"}
              </Button>

              <Link
                to="/login"
                className="text-center text-sm text-primary font-medium"
              >
                Back to Login
              </Link>
            </div>
      </div>
    </div>
    <Toaster/>
    </>
  );
};

export default ForgotPasswordScreen;