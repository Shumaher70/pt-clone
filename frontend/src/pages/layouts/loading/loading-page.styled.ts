import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Spinner = styled.img`
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
