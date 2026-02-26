import styled from "styled-components";
import { COLORS } from "@/constants/COLORS";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const CountriesListContainer = styled.div`
  background-color: ${COLORS.WHITE};
  border-radius: 16px;
  padding: 16px;
  margin-top: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: ${COLORS.TEXT_DARK};
`;

export const CountryCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${COLORS.WHITE};
  border-radius: 12px;
  margin-bottom: 12px;
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

export const CountryName = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.TEXT_DARK};
`;

export const OperatorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
`;

export const OperatorName = styled.div`
  font-size: 14px;
  color: ${COLORS.TEXT_MEDIUM};
  line-height: 1.4;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 40px;
  color: ${COLORS.TEXT_MEDIUM};
`;

export const ErrorMessage = styled.p`
  text-align: center;
  padding: 40px;
  color: ${COLORS.ERROR_COLOR};
`;
