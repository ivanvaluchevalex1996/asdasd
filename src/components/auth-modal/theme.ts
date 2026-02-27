import styled, { keyframes } from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';
import { Button } from '@/domains/common/ui/button';
import { Input } from '@/domains/common/ui/input';

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
  z-index: 1;
`;

export const ModalContent = styled.div<{ isClosing: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 42px;
  background-color: ${COLORS.WHITE};
  border-radius: 32px;
  font-size: 28px;
  width: 450px;
  height: 302px;
  position: relative;
  animation: ${({ isClosing }) => (isClosing ? slideOut : slideIn)} 0.3s ease;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 343px;
    height: 276px;
    padding: 24px 24px 34px 24px;
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

export const ModalInputWrapper = styled.div`
  position: absolute;
  bottom: 74px;
  left: 0;
  right: 0;
  width: 100%;
`;

export const ModalInput = styled(Input)``;

export const ModalErrorMessage = styled.p<{ $visible: boolean }>`
  position: absolute;
  bottom: 55px;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  color: ${COLORS.ERROR_COLOR};
  font-size: 14px;
  min-height: 0;
`;

export const ModalSubmitButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
`;
