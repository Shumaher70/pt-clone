import styled from 'styled-components';
import { Image } from '../../components/constants';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 72px;
  top: 0;
  padding: 16px 0px;
  border-right: 1px solid #e9e9e9;
`;

export const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
`;

export const MenuIcon = styled(Link)`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Logo = styled(Image)`
  height: 24px;
  width: 24px;
`;
