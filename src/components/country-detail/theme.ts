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
    font-size: 20px;
    margin: 0 0 16px 0;
  }
`;

export const CountryCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    gap: 12px;
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
