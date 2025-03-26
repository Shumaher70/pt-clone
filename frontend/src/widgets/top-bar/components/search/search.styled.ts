import styled from 'styled-components';
import { Image } from '../../../../components/constants';

export const Wrapper = styled.form`
  flex: 1;
  background-color: #f1f1f1;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
`;

export const Img = styled(Image)``;
