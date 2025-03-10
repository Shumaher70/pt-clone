import { SearchImg, SearchInput, SearchWrapper } from './search.styled';

export const Search = () => {
  return (
    <SearchWrapper>
      <SearchImg src="/general/search.svg" alt="search icon" />
      <SearchInput type="test" placeholder="Search" />
    </SearchWrapper>
  );
};
