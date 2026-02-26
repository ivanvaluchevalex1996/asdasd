import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const StyledBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.PRIMARY_BUTTON};
  padding: 0 16px;
  width: 100%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 14px 0;
  }
`;

export const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${COLORS.WHITE};
  letter-spacing: -0.02em;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 20px;
  }
`;

export const AuthButton = styled.button<{ $isLoggedIn: boolean }>`
  background-color: ${({ $isLoggedIn }) =>
    $isLoggedIn ? COLORS.DANGER_COLOR : COLORS.PRIMARY_BUTTON};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  margin-left: 12px;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background-color: ${({ $isLoggedIn }) =>
      $isLoggedIn ? COLORS.DANGER_HOVER : COLORS.PRIMARY_BUTTON_HOVER};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 8px 16px;
    margin-left: 16px;
    font-size: 14px;
  }
`;

export const LanguageSelect = styled.select`
  margin-right: 12px;
  padding: 6px 10px;
  font-size: 13px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.2);
  color: ${COLORS.WHITE};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin-right: 16px;
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
`;
