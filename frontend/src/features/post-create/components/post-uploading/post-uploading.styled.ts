import styled from 'styled-components';
import { Image } from '../../../../components/constants';

export const Wrapper = styled.div`
  position: relative;
  height: 573px;
  width: 375px;
  padding: 16px;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #dddddddd;
  border-radius: 32px;
  font-size: 18px;
  cursor: pointer;

  @media (max-width: 1104px) {
    width: 584px;
  }

  @media (max-width: 765px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const UploadImage = styled(Image)``;

export const UploadDescription = styled.span``;

export const Info = styled.div`
  position: absolute;
  bottom: 32px;
  font-size: 13px;
  text-align: center;
  text-align: gray;
`;
