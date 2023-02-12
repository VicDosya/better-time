//Import types
import {
  validateRegisterInputType,
  RegisterErrorsType,
  validateLoginInputType,
  LoginErrorsType,
} from "./validators.types";

//Validate Register input
export const validateRegisterInput = (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
): validateRegisterInputType => {
  const errors = {} as RegisterErrorsType;
  if (username.trim() === "") {
    errors.username = "Username must not be empty.";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty.";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Email must be a valid email address.";
    }
  }
  if (password === "") {
    errors.password = "Password must not be empty.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password must match";
  }

  return {
    //Return the 'errors' object and 'valid' value (if true - no errors)
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

//Validate Login input
export const validateLoginInput = (
  username: string,
  password: string
): validateLoginInputType => {
  const errors = {} as LoginErrorsType;
  if (username.trim() === "") {
    errors.username = "Username must not be empty.";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty.";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
