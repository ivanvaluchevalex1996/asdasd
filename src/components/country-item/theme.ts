import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const CountryCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background-color: ${COLORS.CARD_BACKGROUND};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
  min-height: 56px;

  &:hover {
    background-color: ${COLORS.CARD_HOVER};
  }

  &:active {
    background-color: ${COLORS.CARD_ACTIVE};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    gap: 12px;
    padding: 12px;
    border-radius: 12px;
    min-height: 60px;
  }
`;

export const CountryFlag = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 48px;
    height: 36px;

    img {
      border-radius: 6px;
    }
  }
`;

export const CountryName = styled.h3`
  margin: 0;
  color: ${COLORS.TEXT_DARK};
  font-size: 15px;
  font-weight: 600;
  line-height: 1.25;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 16px;
  }
`;

export const CountryPrice = styled.p`
  margin: 2px 0 0 0;
  color: ${COLORS.TEXT_MEDIUM};
  font-size: 13px;
  line-height: 1.2;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 4px 0 0 0;
    font-size: 14px;
  }
`;

export const CountryInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ChevronIcon = styled.span`
  flex-shrink: 0;
  color: ${COLORS.TEXT_LIGHT};
  font-size: 20px;
  font-weight: 300;
  line-height: 1;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 24px;
  }
`;
