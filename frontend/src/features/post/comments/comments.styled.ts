import styled from 'styled-components';
import { Image } from '../../../components/constants';

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
`;

export const List = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
`;

export const Count = styled.span``;

export const Comment = styled.div`
  display: flex;
  gap: 16px;
`;

export const UserAvatar = styled(Image)`
  height: 32px;
  width: 32px;
  border-radius: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserName = styled.span`
  font-weight: 500;
  font-style: 14px;
`;

export const Text = styled.p`
  font-style: 14px;
`;

export const Timestamp = styled.span`
  font-style: 12px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 32px;
  background-color: #f1f1f1;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

export const Emoji = styled.div`
  cursor: pointer;
  font-size: 20px;
  position: relative;
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 50px;
`;
