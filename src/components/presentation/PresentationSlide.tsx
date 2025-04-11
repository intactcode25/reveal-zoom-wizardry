
import React from 'react';
import { Slide } from '@/utils/revealUtils';
import PresentationElement from './PresentationElement';

type PresentationSlideProps = {
  slide: Slide;
  isActive: boolean;
};

const PresentationSlide: React.FC<PresentationSlideProps> = ({ 
  slide, 
  isActive 
}) => {
  return (
    <div 
      className="reveal-slide w-full h-full" 
      data-slide-id={slide.id}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: isActive ? 10 : 1,
        opacity: isActive ? 1 : 0.5,
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
