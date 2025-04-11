
import React, { useEffect, useRef, useState } from 'react';
import PresentationSlide from './PresentationSlide';
import NavigationControls from './NavigationControls';
import PositionIndicator from './PositionIndicator';
import ImageSelector from './ImageSelector';
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
    customZoom,
    setCustomZoom,
    viewPosition
  } = usePresentationContext();

  // Custom zoom controls
  const handleZoomIn = () => {
    setCustomZoom(Math.min(customZoom + 0.2, 3));
  };

  const handleZoomOut = () => {
    setCustomZoom(Math.max(customZoom - 0.2, 0.5));
  };

  // Handle image selection (in a real app, this would modify the slides)
  const handleSelectImage = (imageUrl: string) => {
    console.log("Selected image:", imageUrl);
    // This would add the image to the current slide in a real implementation
    alert(`Image selected: ${imageUrl}\n\nIn a full implementation, this would add the image to the current slide.`);
  };

  // Apply transform to the container based on current slide's viewPosition
  useEffect(() => {
    if (containerRef.current && viewPosition) {
      const scale = viewPosition.scale * customZoom;
      containerRef.current.style.transform = `
        translate(${viewPosition.x}px, ${viewPosition.y}px) 
        scale(${scale})
        ${viewPosition.rotation ? `rotate(${viewPosition.rotation}deg)` : ''}
      `;
    }
  }, [viewPosition, customZoom]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          goToNextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          goToPrevSlide();
          break;
        case 'Home':
          resetPresentation();
          break;
        case '+':
          handleZoomIn();
          break;
        case '-':
          handleZoomOut();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToNextSlide, goToPrevSlide, resetPresentation]);

  return (
    <div className="presentation-wrapper bg-presentation-light">
      <div 
        ref={containerRef}
        className="presentation-container w-full h-full"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transition: 'transform 1s ease',
          transformOrigin: 'center center'
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
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        canPrev={canGoPrev}
        canNext={canGoNext}
      />
      
      <PositionIndicator />
      <ImageSelector onSelectImage={handleSelectImage} />
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
