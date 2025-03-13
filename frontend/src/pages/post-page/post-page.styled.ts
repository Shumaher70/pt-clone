import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Image } from '../../components/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export const Container = styled.div`
  width: 70%;
  max-height: 820px;
  display: flex;
  border: 1px solid #e9e9e9;
  border-radius: 32px;
  overflow: hidden;

  @media (max-width: 1127px) {
    width: 100%;
    margin-right: 16px;
  }

  @media (max-width: 751px) {
    flex-direction: column;
    max-height: unset;
  }
`;

export const ContainerImg = styled.div`
  flex: 1;
  background-color: #c0a68c;
`;

export const Img = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Details = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px;
  overflow: hidden;
`;

export const UserLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserAvatar = styled(Image)`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

export const UserName = styled.span`
  font-size: 14px;
`;
