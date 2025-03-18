import styled from 'styled-components';

import { Image } from '../../../components/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 32px;
  border-radius: 32px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
`;

export const Logo = styled(Image)`
  height: 36px;
  width: 36px;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-weight: 400;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 16px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #e50829;
  padding: 16px;
  border: none;
  border-radius: 32px;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`;

export const Register = styled.b``;

export const Error = styled.p`
  color: #e50829;
`;
