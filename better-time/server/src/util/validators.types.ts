//Register types
export type RegisterErrorsType = {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};
export type validateRegisterInputType = {
  errors: RegisterErrorsType;
  valid: boolean;
};

//Login types
export type LoginErrorsType = {
  username?: string;
  password?: string;
  general?: string;
};
export type validateLoginInputType = {
  errors: LoginErrorsType;
  valid: boolean;
};
