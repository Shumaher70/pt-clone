import { useState } from 'react';
import { SignInForm, SignUpForm } from '../constants';

export const Auth = () => {
  const [isRegister, setIsRegister] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const handleSignIn = () => {
    setIsRegister(false);
    setError('');
  };

  const handleSignUp = () => {
    setIsRegister(true);
    setError('');
  };

  return (
    <>
      {isRegister ? (
        <SignInForm signIn={handleSignIn} error={error} />
      ) : (
        <SignUpForm signUp={handleSignUp} error={error} />
      )}
    </>
  );
};
