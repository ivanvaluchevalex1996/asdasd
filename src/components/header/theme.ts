import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const StyledBlock = styled.header`
  display: flex;
  justify-content: center;
  // align-items: center;
  background-color: #ffffff;
  padding: 17px 16px;
  // width: 100%;
  // flex-shrink:0;
  // background-color:red;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 10px 16px;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background-color:green;
  width: 100%;
  max-width: 1030px;
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

export const AuthButtonWrapper = styled.div`
  margin-left: 24px;
`;

export const LanguageSelect = styled.select`
  padding: 8px 12px;
  font-size: 12px;
  border: none;
  cursor: pointer;
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

export const CustomDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  font-family: Inter;
  background: transparent;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background: ${COLORS.CARD_HOVER};
  }
`;

export const DropdownMenu = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 6px 0;
  list-style: none;
  background: ${COLORS.WHITE};
  border-radius: 8px;
  min-width: 120px;
  box-shadow:
    0 -4px 6px -1px rgba(0, 0, 0, 0.1),
    0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  z-index: 10;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    min-width: 250px;
  }
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px 12px 16px;
  cursor: pointer;
  font-size: 12px;
  color: ${COLORS.TEXT_DARK};

  &:hover {
    background: ${COLORS.CARD_HOVER};
  }

  img {
    flex-shrink: 0;
  }
`;
