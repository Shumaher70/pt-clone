import { useState } from 'react';
import * as S from './profile.styled';
import { Collections, Gallery } from '../../widgets/constants';

export const Profile = () => {
  const [type, setType] = useState<string>('saved');

  const handleSaveButton = () => {
    setType('saved');
  };

  const handleCreatedButton = () => {
    setType('created');
  };

  const options = type === 'created' ? <Gallery /> : <Collections />;
  return (
    <S.Wrapper>
      <S.UserImage width={100} height={100} path="/general/noAvatar.png" />
      <S.Name>John doe</S.Name>
      <S.UserName>@johndoe</S.UserName>
      <S.FollowingCount>10 followers - 5 following</S.FollowingCount>
      <S.Interactions>
        <S.ShareImage path="/general/share.svg" />
        <S.Buttons>
          <S.ButtonMessage>Message</S.ButtonMessage>
          <S.ButtonFollow>Follow</S.ButtonFollow>
        </S.Buttons>
        <S.MoreImage path="/general/more.svg" />
      </S.Interactions>
      <S.Options>
        <S.CreatedButton onClick={handleCreatedButton} type={type}>
          Created
        </S.CreatedButton>
        <S.SavedButton onClick={handleSaveButton} type={type}>
          Saved
        </S.SavedButton>
      </S.Options>
      {options}
    </S.Wrapper>
  );
};
