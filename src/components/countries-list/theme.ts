import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';
import { Input } from '@/domains/common/ui/input';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 720px;
  padding: 0px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 0 8px;
  }
`;

export const TextStyled = styled.p`
  margin-left: 0px;
`;

export const ContentContainer = styled.div`
  padding: 24px;
  border-radius: 12px;
  background-color: ${COLORS.WHITE};

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 16px;
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

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 14px 0 16px;
`;

export const SearchIconWrapper = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const SearchInput = styled(Input)`
  padding-left: 44px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  // margin: 0 auto;
  // padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  display: inline-block;
  text-align: center;
  width: 95%;
  padding: 20px 0 20px;
  color: ${COLORS.TEXT_DARK};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 28px;
    width: 70%;
    // margin: 20px auto 32px;
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
