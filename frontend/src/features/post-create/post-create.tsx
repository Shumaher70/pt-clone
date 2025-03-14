import { PostForm, PostPublish, PostUploading } from '../constants';
import * as S from './post-create.styled';

export const PostCreate = () => {
  return (
    <S.Wrapper>
      <PostPublish />
      <S.BottomContainer>
        <PostUploading />
        <PostForm />
      </S.BottomContainer>
    </S.Wrapper>
  );
};
