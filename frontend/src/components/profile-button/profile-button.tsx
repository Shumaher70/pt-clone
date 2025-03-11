import { useState } from 'react';

import * as S from './profile-button.styled';

export const ProfileButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const currentUser = true;

  const openOptionsHandler = () => {
    setOpen((prev) => !prev);
  };

  const auth = currentUser ? (
    <S.ButtonWrapper>
      <S.ButtonImg src="/general/noAvatar.png" alt="no avatar icon" />
      <S.ButtonArrowIcon
        onClick={openOptionsHandler}
        src="/general/arrow.svg"
        alt="arrow icon"
      />
      {open && (
        <S.ButtonOptions>
          <S.ButtonOption>S.</S.ButtonOption>
          <S.ButtonOption>Setting</S.ButtonOption>
          <S.ButtonOption>Logout</S.ButtonOption>
        </S.ButtonOptions>
      )}
    </S.ButtonWrapper>
  ) : (
    <S.ButtonLink>Login </S.ButtonLink>
  );

  return <>{auth}</>;
};
