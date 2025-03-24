import * as S from './error-page.styled';

const ErrorPage = () => {
  return (
    <S.Wrapper>
      <S.Title>Page not fount 404.</S.Title>
      <S.ButtonBack to="/">To home</S.ButtonBack>
    </S.Wrapper>
  );
};
export default ErrorPage;
