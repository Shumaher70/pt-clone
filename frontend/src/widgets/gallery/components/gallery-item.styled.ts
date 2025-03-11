import styled from 'styled-components';

import { IGalleryItemWrapper } from '../types';

export const GalleryItemWrapper = styled.div<IGalleryItemWrapper>`
  display: flex;
  grid-row-end: span ${(props) => Math.ceil(props.height / 100)};
`;

export const GalleryItemImage = styled.img`
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
`;
