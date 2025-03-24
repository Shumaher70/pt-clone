import * as S from './loading-page.styled';
const LoadingPage = () => {
  return (
    <S.Wrapper>
      <S.Spinner src="/general/spinner.svg" />
    </S.Wrapper>
  );
};
export default LoadingPage;
