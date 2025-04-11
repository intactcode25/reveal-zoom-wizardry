
import React, { useEffect, useRef } from 'react';
import PresentationSlide from './PresentationSlide';
import NavigationControls from './NavigationControls';
import { PresentationProvider, usePresentationContext } from './PresentationContext';

const PresentationContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    slides,
    currentSlideIndex,
    goToNextSlide,
    goToPrevSlide,
    resetPresentation,
    canGoNext,
    canGoPrev,
    viewPosition,
  } = usePresentationContext();

  // Apply transform to the container based on current slide's viewPosition
  useEffect(() => {
    if (containerRef.current && viewPosition) {
      containerRef.current.style.transform = `
        translate(${viewPosition.x}px, ${viewPosition.y}px) 
        scale(${viewPosition.scale})
      `;
    }
  }, [viewPosition]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextSlide();
      if (e.key === 'ArrowLeft') goToPrevSlide();
      if (e.key === 'Home') resetPresentation();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide, resetPresentation]);

  return (
    <div className="presentation-wrapper bg-gray-100">
      <div 
        ref={containerRef}
        className="presentation-container"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transition: 'transform 0.8s ease',
        }}
      >
        {slides.map((slide, index) => (
          <PresentationSlide 
            key={slide.id}
            slide={slide}
            isActive={index === currentSlideIndex}
          />
        ))}
      </div>

      <NavigationControls
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        onReset={resetPresentation}
        onZoomIn={() => {}}
        onZoomOut={() => {}}
        canPrev={canGoPrev}
        canNext={canNext}
      />
    </div>
  );
};

const ZoomPresentation: React.FC = () => {
  return (
    <PresentationProvider>
      <PresentationContent />
    </PresentationProvider>
  );
};

export default ZoomPresentation;
