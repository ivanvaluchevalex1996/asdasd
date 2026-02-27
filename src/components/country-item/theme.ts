import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const CountryFlag = styled.div`
  width: 40px;
  height: 30px;

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
  white-space: nowrap;
  max-width: 230px;
  overflow: hidden;

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
