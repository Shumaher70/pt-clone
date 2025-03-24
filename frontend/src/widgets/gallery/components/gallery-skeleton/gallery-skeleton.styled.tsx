import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    background-color: #d3d3d3;
  }
  50% {
    background-color: #a9a9a9;
  }
  0% {
    background-color: #d3d3d3; 
  }
`;

export const Item = styled.div<{ height: number }>`
  display: flex;
  grid-row-end: span ${(props) => Math.ceil(props.height / 100)};
  border-radius: 16px;
  animation: ${blinkAnimation} 3s infinite linear;
  background-color: #d3d3d3;
`;
