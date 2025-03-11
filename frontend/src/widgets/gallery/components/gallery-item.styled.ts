import styled from 'styled-components';

import { IItemWrapper } from '../types';

export const ItemWrapper = styled.div<IItemWrapper>`
  display: flex;
  grid-row-end: span ${(props) => Math.ceil(props.height / 100)};
`;

export const ItemImage = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
`;
