import { useState } from 'react';

import {
  ProfileButtonImg,
  ProfileButtonLink,
  ProfileButtonOption,
  ProfileButtonOptions,
  ProfileButtonWrapper,
  ProfileButtonArrowIcon,
} from './profile-button.styled';

export const ProfileButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const currentUser = true;

  const openOptionsHandler = () => {
    setOpen((prev) => !prev);
  };

  const auth = currentUser ? (
    <ProfileButtonWrapper>
      <ProfileButtonImg src="/general/noAvatar.png" alt="no avatar icon" />
      <ProfileButtonArrowIcon
        onClick={openOptionsHandler}
        src="/general/arrow.svg"
        alt="arrow icon"
      />
      {open && (
        <ProfileButtonOptions>
          <ProfileButtonOption>Profile</ProfileButtonOption>
          <ProfileButtonOption>Setting</ProfileButtonOption>
          <ProfileButtonOption>Logout</ProfileButtonOption>
        </ProfileButtonOptions>
      )}
    </ProfileButtonWrapper>
  ) : (
    <ProfileButtonLink>Login </ProfileButtonLink>
  );

  return <>{auth}</>;
};
