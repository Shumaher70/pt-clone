import styled from 'styled-components';
import { Image } from '../../components/constants';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;

  @media (max-width: 1746px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 1509px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1272px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1035px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 798px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Collection = styled.div`
  margin-bottom: 32px;
  cursor: pointer;
`;

export const CollectionImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CollectionName = styled.h1`
  font-weight: 500;
  font-size: 16px;
`;

export const Pins = styled.span`
  color: gray;
  font-style: 13px;
`;
