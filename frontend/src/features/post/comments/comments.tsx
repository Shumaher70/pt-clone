import EmojiPicker from 'emoji-picker-react';

import * as S from './comments.styled';
import { useState } from 'react';

export const Comments = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleEmojiVisibility = () => {
    setOpen((p) => !p);
  };

  return (
    <S.Wrapper>
      <S.List>
        <S.Count> 5 comments</S.Count>
        <S.Comment>
          <S.UserAvatar path="/general/noAvatar.png" alt="avatar" />
          <S.Content>
            <S.UserName>John Doe</S.UserName>
            <S.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nulla
              doloremque sequi cumque molestiae
            </S.Text>
            <S.Timestamp>1h</S.Timestamp>
          </S.Content>
        </S.Comment>
      </S.List>
      <S.Form>
        <S.Input type="text" placeholder="Add a comment" />
        <S.Emoji>
          <div onClick={handleEmojiVisibility}>😊</div>
          {open && (
            <S.EmojiPickerContainer>
              <EmojiPicker />
            </S.EmojiPickerContainer>
          )}
        </S.Emoji>
      </S.Form>
    </S.Wrapper>
  );
};
