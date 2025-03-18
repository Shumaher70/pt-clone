export interface IOptionButton {
  type: string;
}

export interface ISignInFormProps {
  error: string;
  signIn: () => void;
}
export interface ISignUpFormProps {
  error: string;
  signUp: () => void;
}
