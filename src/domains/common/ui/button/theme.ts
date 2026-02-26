import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

type TStyledButtonProps = {
  $variant: 'primary' | 'danger';
  $fullWidth?: boolean;
  $centered?: boolean;
};

export const StyledButton = styled.button<TStyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0;
  user-select: none;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ $variant }) =>
    $variant === 'danger' ? COLORS.DANGER_COLOR : COLORS.PRIMARY_BUTTON};

  width: ${({ $fullWidth, $centered }) => ($fullWidth ? '100%' : $centered ? '100%' : '99px')};
  margin: ${({ $centered }) => ($centered ? '0 auto' : '0')};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'danger' ? COLORS.DANGER_HOVER : COLORS.PRIMARY_BUTTON_HOVER};
  }

  &:disabled {
    background-color: ${COLORS.DISABLED_COLOR};
    cursor: not-allowed;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: ${({ $fullWidth, $centered }) => ($fullWidth ? '100%' : $centered ? 'auto' : '115px')};
    max-width: ${({ $centered }) => ($centered ? 'none' : 'none')};
  }
`;
