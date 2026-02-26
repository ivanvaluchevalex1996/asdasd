import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;

  @media (min-width: ${BREAKPOINTS.desktop}) {
    max-width: 1200px;
  }
`;

export const CountriesListContainer = styled.div`
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 12px;
  margin-top: 16px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    border-radius: 16px;
    padding: 16px;
    margin-top: 20px;
  }
`;

export const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const ShowMoreButton = styled.button`
  display: block;
  margin: 24px auto;
  padding: 12px 24px;
  background-color: ${COLORS.PRIMARY_BUTTON};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 24px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 280px;

  &:hover {
    background-color: ${COLORS.PRIMARY_BUTTON_HOVER};
  }

  &:disabled {
    background-color: ${COLORS.DISABLED_COLOR};
    cursor: not-allowed;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 30px auto;
    padding: 12px 30px;
    font-size: 16px;
    width: auto;
    max-width: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 2px solid ${COLORS.BORDER_COLOR};
  border-radius: 10px;
  font-size: 16px;
  margin: 14px 0 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: ${COLORS.PRIMARY_BUTTON};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    max-width: 500px;
    padding: 12px 16px;
    margin: 16px 0 20px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 4px 0;
  color: ${COLORS.TEXT_DARK};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 24px;
    margin: 0 0 8px 0;
  }
`;

export const LoadingText = styled.p`
  margin: 16px 0;
  color: ${COLORS.TEXT_MEDIUM};
  font-size: 15px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 20px 0;
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.p`
  text-align: center;
  padding: 32px 16px;
  color: ${COLORS.ERROR_COLOR};
  font-size: 15px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    padding: 40px;
    font-size: 16px;
  }
`;
