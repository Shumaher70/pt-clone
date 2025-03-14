import styled from 'styled-components';

export const Wrapper = styled.div`
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

export const PublishButton = styled.button`
  background-color: #e50829;
  color: white;
  font-weight: 500;
  border: none;
  outline: none;
  padding: 16px;
  border-radius: 32px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #c1011e;
  }
`;
