import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const StyledBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 17px 16px;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 10px 16px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 30px;
    width: 102.84;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    img {
      height: 30px;
    }
  }
`;

export const AuthButton = styled.button<{ $isLoggedIn: boolean }>`
  background-color: ${({ $isLoggedIn }) =>
    $isLoggedIn ? COLORS.DANGER_COLOR : COLORS.PRIMARY_BUTTON};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 15px;
  padding: 15px 24px;
  cursor: pointer;
  margin-left: 24px;
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: ${({ $isLoggedIn }) =>
      $isLoggedIn ? COLORS.DANGER_HOVER : COLORS.PRIMARY_BUTTON_HOVER};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 15px 32px;
    margin-left: 24px;
    font-size: 17px;
  }
`;

export const LanguageSelect = styled.select`
  padding: 8px 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  // background: transparent;
  color: ${COLORS.TEXT_DARK};
  font-weight: 600;
  border-radius: 0;
  // transition: background-color 0.2s, border-radius 0.2s;

  &:focus {
    outline: none;
  }

  &:hover {
    border-radius: 15px;
    background-color: #e0e0e0;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
`;
