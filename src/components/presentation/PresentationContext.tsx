
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Slide, Position, initialSlides } from '@/utils/revealUtils';

type PresentationContextType = {
  slides: Slide[];
  currentSlideIndex: number;
  currentSlide: Slide;
  goToSlide: (index: number) => void;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  resetPresentation: () => void;
  canGoNext: boolean;
  canGoPrev: boolean;
  customZoom: number;
  setCustomZoom: (zoom: number) => void;
  viewPosition: Position;
};

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

export const usePresentationContext = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentationContext must be used within a PresentationProvider');
  }
  return context;
};

type PresentationProviderProps = {
  children: React.ReactNode;
};

export const PresentationProvider: React.FC<PresentationProviderProps> = ({ children }) => {
  const [slides] = useState<Slide[]>(initialSlides);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [customZoom, setCustomZoom] = useState(1);
  const [viewPosition, setViewPosition] = useState<Position>({ x: 0, y: 0, scale: 1 });
  
  const currentSlide = slides[currentSlideIndex];
  const canGoNext = currentSlideIndex < slides.length - 1;
  const canGoPrev = currentSlideIndex > 0;

  useEffect(() => {
    if (currentSlide) {
      setViewPosition(currentSlide.viewPosition);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlideIndex(index);
    }
  };

  const goToNextSlide = () => {
    if (canGoNext) {
      goToSlide(currentSlideIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (canGoPrev) {
      goToSlide(currentSlideIndex - 1);
    }
  };

  const resetPresentation = () => {
    goToSlide(0);
    setCustomZoom(1);
  };

  return (
    <PresentationContext.Provider
      value={{
        slides,
        currentSlideIndex,
        currentSlide,
        goToSlide,
        goToNextSlide,
        goToPrevSlide,
        resetPresentation,
        canGoNext,
        canGoPrev,
        customZoom,
        setCustomZoom,
        viewPosition,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};
