import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Spinner = styled.img`
  width: 26px;
  height: 26px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
