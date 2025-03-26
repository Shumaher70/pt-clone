import { useValidateSearchInput } from './hooks/use-validate-search-input';
import * as S from './search.styled';

export const Search = () => {
  const { handleSubmit } = useValidateSearchInput();

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Img path="/general/search.svg" alt="search icon" />
      <S.Input type="text" name="search" placeholder="Search" />
    </S.Wrapper>
  );
};
