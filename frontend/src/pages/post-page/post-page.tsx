import { Comments, PostInteractions } from '../../features/constants';
import * as S from './post-page.styled';

const PostPage = () => {
  return (
    <S.Wrapper>
      <div>array</div>
      <S.Container>
        <S.ContainerImg>
          <S.Img path="/pins/pin1.jpeg" alt="img" width={736} />
        </S.ContainerImg>
        <S.Details>
          <PostInteractions />
          <S.UserLink to="/john">
            <S.UserAvatar path="/general/noAvatar.png" alt="noAvatar" />
            <S.UserName>John Doe</S.UserName>
          </S.UserLink>
          <Comments />
        </S.Details>
      </S.Container>
    </S.Wrapper>
  );
};
export default PostPage;
