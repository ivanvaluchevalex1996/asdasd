import styled, { keyframes } from "styled-components";
import { COLORS } from "@/constants/COLORS";

// Анимация для появления модалки
export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Анимация для исчезновения модалки
export const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${COLORS.OVERLAY_BACKGROUND};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div<{ isClosing: boolean }>`
  background-color: ${COLORS.WHITE};
  max-width: 400px;
  width: 90%;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s ease;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 0.5rem 0;
  color: ${COLORS.TEXT_DARK};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ModalSubtitle = styled.p`
  margin: 0 0 1.5rem 0;
  color: ${COLORS.TEXT_MEDIUM};
  font-size: 0.9rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${COLORS.TEXT_LIGHT};

  &:hover {
    color: ${COLORS.TEXT_DARK};
  }
`;

export const Input = styled.input<{ error: string }>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ error }) => (error ? COLORS.ERROR_COLOR : COLORS.BORDER_COLOR)};
  border-radius: 10px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  outline: none;

  &:focus {
    border-color: ${({ error }) => (error ? COLORS.ERROR_COLOR : COLORS.PRIMARY_BUTTON)};
  }
`;

export const ErrorMessage = styled.p`
  color: ${COLORS.ERROR_COLOR};
  font-size: 0.85rem;
  margin: 0 0 1rem 0;
  min-height: 1.2rem;
`;

export const ContinueButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ disabled }) => (disabled ? COLORS.DISABLED_COLOR : COLORS.PRIMARY_BUTTON)};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? COLORS.DISABLED_COLOR : COLORS.PRIMARY_BUTTON_HOVER)};
  }
`;
