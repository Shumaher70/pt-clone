import styled from 'styled-components';

import { Image } from '../../components/constants';
import { IOptionButton } from '../types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const UserImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 500;
`;

export const UserName = styled.span`
  font-weight: 300;
  color: gray;
`;

export const FollowingCount = styled.div`
  font-weight: 500;
`;

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const ShareImage = styled(Image)``;

export const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonMessage = styled.button`
  border: none;
  padding: 16px;
  border-radius: 32px;
  font-weight: bold;
  cursor: pointer;
`;

export const ButtonFollow = styled(ButtonMessage)`
  background-color: #e50829;
  color: white;
  &:hover {
    background-color: #c1011e;
  }
`;

export const MoreImage = styled(Image)``;

export const Options = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const CreatedButton = styled.span<IOptionButton>`
  cursor: pointer;
  padding: 8px 0;
  border-bottom: ${(props) =>
    props.type === 'created' ? '3px solid black' : 'none'};
  &:hover {
    color: gray;
  }
`;

export const SavedButton = styled(CreatedButton)`
  border-bottom: ${(props) =>
    props.type === 'saved' ? '3px solid black' : 'none'};
`;
