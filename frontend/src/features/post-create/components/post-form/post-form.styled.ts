import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 584px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  color: gray;
`;

export const TextArea = styled.textarea`
  font-size: 15px;
  border: 2px solid #e9e9e9;
  padding: 16px;
  border-radius: 16px;
  background-color: transparent;
  resize: none;
`;

export const Input = styled(TextArea).attrs({ as: 'input' })``;

export const Select = styled(TextArea).attrs({ as: 'select' })``;

export const Small = styled.small`
  color: #a6a6a6;
  font-size: 13px;
`;
