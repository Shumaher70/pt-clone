import * as S from './sign-up-form.styled';

import { ISignUpFormProps } from '../../types';

export const SignUpForm = ({ error, signUp }: ISignUpFormProps) => {
  return (
    <S.Wrapper>
      <S.Logo path="/general/logo.png" alt="logo" />
      <S.Title>Create an Account</S.Title>
      <S.Form>
        <S.Group>
          <S.Label htmlFor="userName">UserName</S.Label>
          <S.Input
            id="userName"
            required
            type="text"
            placeholder="UserName"
            name="userName"
          />
        </S.Group>

        <S.Group>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Input
            id="name"
            required
            type="text"
            placeholder="Name"
            name="name"
          />
        </S.Group>

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
        <S.SubmitButton type="submit">Sign up</S.SubmitButton>
        <S.Description onClick={signUp}>
          Do you have an account? <S.Register>Login</S.Register>
        </S.Description>
        {error && <S.Error>{error}</S.Error>}
      </S.Form>
    </S.Wrapper>
  );
};
