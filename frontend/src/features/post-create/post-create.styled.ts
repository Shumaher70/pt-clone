import styled from 'styled-components';

export const Wrapper = styled.div``;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;
  margin-top: 32px;

  @media (max-width: 1104px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
  }
`;
