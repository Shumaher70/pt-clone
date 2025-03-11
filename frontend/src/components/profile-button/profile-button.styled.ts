import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 475px) {
    display: none;
  }
`;

export const ButtonImg = styled.img`
  height: 36px;
  width: 36px;
  border: 100%;
  object-fit: cover;
`;

export const ButtonArrowIcon = styled.img`
  cursor: pointer;
  height: 16px;
  width: 16px;
`;

export const ButtonLink = styled.a`
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  border-radius: 16px;

  &:hover {
    background-color: #f1f1f1;
  }

  @media (max-width: 475px) {
    display: none;
  }
`;

export const ButtonOptions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  right: 0;
  top: 120%;
  padding: 16px 0px;
  border-radius: 8px;
  background-color: white;
  z-index: 999;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const ButtonOption = styled.div`
  cursor: pointer;
  padding: 8px 0px;
  width: 80px;
  text-align: center;
  &:hover {
    background-color: #f1f1f1;
  }
`;
