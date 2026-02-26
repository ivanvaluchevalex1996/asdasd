import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 720px;
  padding: 32px 0 24px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 24px 0 20px;
    margin-left: 0;
    margin-right: 0;
    max-width: none;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 16px 0;
  padding: 0 8px;
  color: ${COLORS.TEXT_DARK};
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 24px;
    margin-bottom: 20px;
    padding: 0;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 -8px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    margin: 0;
  }
`;

export const SliderTrack = styled.div<{ $isDragging?: boolean }>`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  cursor: ${(p) => (p.$isDragging ? 'grabbing' : 'grab')};
  user-select: none;
  padding: 4px 8px 16px;
  margin: -4px -8px -16px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: ${COLORS.CARD_BACKGROUND};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.BORDER_COLOR};
    border-radius: 3px;
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    gap: 16px;
    padding: 4px 0 16px;
    margin: -4px 0 -16px;
  }
`;

export const SlideCard = styled.div`
  flex-shrink: 0;
  width: 280px;
  scroll-snap-align: start;
  background: ${COLORS.WHITE};
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  border: 1px solid ${COLORS.BORDER_COLOR};

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 300px;
    padding: 20px;
  }
`;

export const SlideCardTitle = styled.h3`
  margin: 0 0 12px 0;
  color: ${COLORS.TEXT_DARK};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    font-size: 17px;
    margin-bottom: 16px;
  }
`;

export const SlideCardPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  background: ${COLORS.CARD_BACKGROUND};
  border-radius: 8px;
`;
