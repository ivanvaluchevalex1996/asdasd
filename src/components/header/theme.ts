import styled from "styled-components";
import { COLORS } from "@/constants/COLORS";

export const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${COLORS.PRIMARY_BUTTON};
`;

export const AuthButton = styled.button<{ $isLoggedIn: boolean }>`
  background-color: ${({ $isLoggedIn }) => ($isLoggedIn ? COLORS.DANGER_COLOR : COLORS.PRIMARY_BUTTON)};
  color: ${COLORS.WHITE};
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: ${({ $isLoggedIn }) => ($isLoggedIn ? COLORS.DANGER_HOVER : COLORS.PRIMARY_BUTTON_HOVER)};
  }
`;

export const LanguageSelect = styled.select`
  margin-right: 1rem;
  padding: 0.5rem;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
`;
