import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
  grid-auto-rows: 10px;

  @media (max-width: 1746px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1509px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1272px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1035px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 798px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const WrapperSpinner = styled.div`
  padding: 20px 0;
`;
