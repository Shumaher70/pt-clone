import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { IItemWrapper } from '../types';

export const ItemImage = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
`;

export const SLink = styled(Link)`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 16px;
`;

export const SaveButton = styled.button`
  display: none;
  position: absolute;
  background-color: #e50829;
  color: white;
  border-radius: 24px;
  padding: 12px 16px;
  font-weight: 500;
  cursor: pointer;
  width: max-content;
  top: 16px;
  right: 16px;
  border: none;
`;

export const OverlayIcons = styled.div`
  display: none;
  gap: 8px;
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 100%;
  background-color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Img = styled.img`
  height: 20px;
  width: 20px;
`;

export const ItemWrapper = styled.div<IItemWrapper>`
  position: relative;
  display: flex;
  grid-row-end: span ${(props) => Math.ceil(props.height / 100)};

  &:hover ${SaveButton}, &:hover ${SLink} {
    display: block;
  }

  &:hover ${OverlayIcons} {
    display: flex;
  }
`;
