
import React from 'react';
import { Slide } from '@/utils/revealUtils';
import PresentationElement from './PresentationElement';

type PresentationSlideProps = {
  slide: Slide;
  isActive: boolean;
};

/**
 * Simplified PresentationSlide component
 */
const PresentationSlide: React.FC<PresentationSlideProps> = ({ 
  slide, 
  isActive 
}) => {
  return (
    <div 
      className="reveal-slide" 
      data-slide-id={slide.id}
      style={{ 
        position: 'absolute',
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      {slide.elements.map((element) => (
        <PresentationElement 
          key={element.id} 
          element={element} 
        />
      ))}
    </div>
  );
};

export default PresentationSlide;
