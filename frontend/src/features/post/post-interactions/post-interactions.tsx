import * as S from './post-interactions.styled';

export const PostInteractions = () => {
  return (
    <S.Wrapper>
      <S.Icons>
        <S.Icon path="/general/react.svg" alt="react icon" />
        123
        <S.Icon path="/general/share.svg" alt="share icon" />
        <S.Icon path="/general/more.svg" alt="more icon" />
      </S.Icons>
      <S.SaveButton>Save</S.SaveButton>
    </S.Wrapper>
  );
};
