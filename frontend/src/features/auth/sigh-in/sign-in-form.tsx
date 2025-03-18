import { ISignInFormProps } from '../../types';

import * as S from './sign-in-form.styled';

export const SignInForm = ({ error, signIn }: ISignInFormProps) => {
  return (
    <S.Wrapper>
      <S.Logo path="/general/logo.png" alt="logo" />
      <S.Title>Login to your account</S.Title>
      <S.Form>
        <S.Group>
          <S.Label htmlFor="email">Email</S.Label>
          <S.Input
            id="email"
            required
            type="email"
            placeholder="Email"
            name="email"
          />
        </S.Group>

        <S.Group>
          <S.Label htmlFor="password">Password</S.Label>
          <S.Input
            id="password"
            required
            type="password"
            placeholder="Password"
            name="password"
          />
        </S.Group>
        <S.SubmitButton type="submit">Sign In</S.SubmitButton>
        <S.Description onClick={signIn}>
          Don't have an account? <S.Register>Register</S.Register>
        </S.Description>
        {error && <S.Error>{error}</S.Error>}
      </S.Form>
    </S.Wrapper>
  );
};
