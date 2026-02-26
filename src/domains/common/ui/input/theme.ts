import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';

export const Input = styled.input<{ $error?: string }>`
  height: 46px;
  width: 100%;
  padding: 0 16px;
  font-size: 17px;
  border: ${({ $error }) => ($error ? `2px solid ${COLORS.ERROR_COLOR}` : 'none')};
  border-radius: 10px;
  outline: none;
  background-color: #0000000f;
  color: ${COLORS.TEXT_DARK};
  box-sizing: border-box;

  &::placeholder {
    color: #00000075;
  }
`;
