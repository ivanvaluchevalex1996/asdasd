import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const CountriesListContainer = styled.div`
  border-radius: 12px;
  padding: 12px;
  margin-top: 16px;
  background-color: ${COLORS.WHITE};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    border-radius: 16px;
    padding: 16px;
    margin-top: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: ${COLORS.TEXT_DARK};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 24px;
    margin: 0 0 16px 0;
  }
`;

export const CountryCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0 12px 0;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;

  &:hover {
    background-color: ${COLORS.CARD_HOVER};
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.tablet}) {
    &:hover {
      margin: 0 -8px;
      padding: 10px 8px 12px 8px;
    }
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    background-color: ${COLORS.CARD_BACKGROUND};
    gap: 12px;
    padding: 10px 16px;

    &:hover {
      background-color: ${COLORS.CARD_HOVER};
    }
  }
`;

// background-color: ${COLORS.CARD_HOVER};
export const CountryFlag = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountryName = styled.div`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: ${COLORS.TEXT_DARK};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 16px;
  }
`;

export const OperatorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

export const OperatorName = styled.div`
  font-size: 13px;
  color: ${COLORS.TEXT_MEDIUM};
  line-height: 1.4;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 14px;
  }
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 24px 16px;
  color: ${COLORS.TEXT_MEDIUM};
  font-size: 15px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 40px;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  padding: 24px 16px;
  color: ${COLORS.ERROR_COLOR};
  font-size: 15px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 40px;
    font-size: 16px;
  }
`;
