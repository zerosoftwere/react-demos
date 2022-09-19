export type SignupFormType = {
  firstName: string;
  lastName: String;
  email: string;
  password: string;
  confirmPassword: string;
};

export type OnSignup = (value: SignupFormType) => void;