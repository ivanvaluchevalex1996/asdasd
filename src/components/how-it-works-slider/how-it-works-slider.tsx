import { useRef, useState, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import {
  Section,
  SectionTitle,
  SliderWrapper,
  SliderTrack,
  SlideCard,
  SlideCardTitle,
  SlideCardPlaceholder,
} from './theme';

const SLIDER_ITEMS_COUNT = 5;

export default function HowItWorksSlider() {
  const { language } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const isDraggingRef = useRef(false);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startX.current = e.clientX;
    scrollLeftStart.current = el.scrollLeft;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    const walk = (e.clientX - startX.current) * 1.2;
    el.scrollLeft = scrollLeftStart.current - walk;
  }, []);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = false;
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  return (
    <Section>
      <SectionTitle>{getTranslation(language, 'howItWorks')}</SectionTitle>
      <SliderWrapper>
        <SliderTrack
          ref={trackRef}
          $isDragging={isDragging}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {Array.from({ length: SLIDER_ITEMS_COUNT }, (_, i) => (
            <SlideCard key={i}>
              <SlideCardTitle>{getTranslation(language, 'sliderCardTitle')}</SlideCardTitle>
              <SlideCardPlaceholder />
            </SlideCard>
          ))}
        </SliderTrack>
      </SliderWrapper>
    </Section>
  );
}
