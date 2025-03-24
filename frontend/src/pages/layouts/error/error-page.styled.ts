import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-weight: normal;
  font-size: 6vw;
`;

export const ButtonBack = styled(Link)`
  background-color: black;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.8;
  }
`;
