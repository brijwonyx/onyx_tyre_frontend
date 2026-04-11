export enum PasswordFormKeys {
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirm_password",
}

export type PasswordFormType = {
  [key in PasswordFormKeys]: string;
};

export type PasswordPageErrorMessagesType = {
  [key in PasswordFormKeys]?: string;
};