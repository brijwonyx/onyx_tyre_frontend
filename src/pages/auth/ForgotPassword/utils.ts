import { ERROR_MESSAGES, VALIDATION_RULES } from "./constant";
import { PasswordFormKeys, PasswordFormType, PasswordPageErrorMessagesType } from "./type";

export const setErrorMsgOnValidationFailed = (args: {
    key: PasswordFormKeys;
    message: string | undefined;
    isInputValid: boolean;
    setErrorMessages: (value: React.SetStateAction<PasswordPageErrorMessagesType>) => void;
}) => {
    const { key, isInputValid, message, setErrorMessages } = args;
    setErrorMessages((prevMessages: any) => ({
        ...prevMessages,
        [key]: isInputValid ? '' : message,
    }));
};

export const isFormValid = (args: {
    formValues: PasswordFormType;
    errorMessages: PasswordPageErrorMessagesType;
}) => {
    const { formValues, errorMessages } = args;

    const isAllFieldsFilled = Object.keys(formValues).every(
        (key) => formValues[key as PasswordFormKeys].trim() !== '',
    );

    const areAllErrorsFalse = Object.values(errorMessages).every((message) => message === '');

    return isAllFieldsFilled && areAllErrorsFalse;
};

export const validateInput = (key: PasswordFormKeys, value: string | number | boolean) => {
    const rule = VALIDATION_RULES[key];
    let message = '';
    const { passwordPattern } = ERROR_MESSAGES;

    let isInputValid = true;

    if (
        ('required' in rule && rule.required && !value) ||
        ('regex' in rule && rule.regex && !rule.regex.test(value as string))
    ) {
        isInputValid = false;
        message = passwordPattern;

        return { key, message, isInputValid };
    }

    return { key, message, isInputValid };
};