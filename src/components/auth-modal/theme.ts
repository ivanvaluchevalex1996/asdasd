import styled, { keyframes } from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';
import { Button } from '@/domains/common/ui/button';

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 42px;
  background-color: ${COLORS.WHITE};
  border-radius: 32px;
  width: 450px;
  height: 302px;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s ease;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 343px;
    height: 275px;
    padding: 24px;
  }
`;

export const ModalTitle = styled.h2`
  text-align: center;
  color: ${COLORS.TEXT_DARK};
  line-height: 32px;
  font-size: 28px;
  font-weight: 700;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background-color: #0000000a;
  color: #00000099;
  font-size: 26px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.CARD_ACTIVE};
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    top: 12px;
    right: 12px;
  }
`;

export const ModalButtonContainer = styled.div`
  position: relative;
`;

export const ModalInput = styled.input<{ error: string }>`
  position: absolute;
  bottom: 74px;
  height: 46px;
  width: 100%;
  padding: 0 16px;
  font-size: 17px;
  border: ${({ error }) => (error ? `2px solid ${COLORS.ERROR_COLOR}` : 'none')};
  border-radius: 10px;
  outline: none;
  background-color: #0000000f;
  color: ${COLORS.TEXT_DARK};

  &::placeholder {
    color: #00000075;
  }
`;

export const ModalErrorMessage = styled.p<{ $visible: boolean }>`
  position: absolute;
  bottom: 55px;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  color: ${COLORS.ERROR_COLOR};
  font-size: 14px;
  min-height: 0;
`;

export const ModalSubmitButton = styled(Button)`
  margin-top: 24px;
  @media (min-width: ${BREAKPOINTS.tablet}) {
  }
`;
