import styled from "styled-components";
import { COLORS } from "@/constants/COLORS";

export const CountryCard = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${COLORS.CARD_BACKGROUND};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${COLORS.CARD_HOVER};
  }

  &:active {
    background-color: ${COLORS.CARD_ACTIVE};
  }
`;

export const CountryFlag = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const CountryName = styled.h3`
  margin: 0;
  color: ${COLORS.TEXT_DARK};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
`;

export const CountryPrice = styled.p`
  margin: 4px 0 0 0;
  color: ${COLORS.TEXT_MEDIUM};
  font-size: 14px;
  line-height: 1.2;
`;

export const CountryInfo = styled.div`
  flex: 1;
`;

export const ChevronIcon = styled.span`
  flex-shrink: 0;
  color: ${COLORS.TEXT_LIGHT};
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
`;
