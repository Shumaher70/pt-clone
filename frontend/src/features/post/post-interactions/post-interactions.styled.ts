import styled from 'styled-components';
import { Image } from '../../../components/constants';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
`;

export const SaveButton = styled.button`
  background-color: #e50829;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 16px;
  font-weight: bold;
`;

export const Icon = styled(Image)``;
