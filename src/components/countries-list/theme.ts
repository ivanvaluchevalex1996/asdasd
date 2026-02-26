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

export const CountriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
`;

export const ShowMoreButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 30px;
  background-color: ${COLORS.PRIMARY_BUTTON};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${COLORS.PRIMARY_BUTTON_HOVER};
  }

  &:disabled {
    background-color: ${COLORS.DISABLED_COLOR};
    cursor: not-allowed;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border: 2px solid ${COLORS.BORDER_COLOR};
  border-radius: 10px;
  font-size: 1rem;
  margin: 20px 0;
  outline: none;
  
  &:focus {
    border-color: ${COLORS.PRIMARY_BUTTON};
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: ${COLORS.TEXT_DARK};
  font-size: 24px;
  font-weight: 600;
`;

export const LoadingText = styled.p`
  margin: 20px 0;
  color: ${COLORS.TEXT_MEDIUM};
  font-size: 16px;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  padding: 40px;
  color: ${COLORS.ERROR_COLOR};
  font-size: 16px;
`;