
import React from 'react';
import { usePresentationContext } from './PresentationContext';

const PositionIndicator: React.FC = () => {
  const { currentSlideIndex, slides, viewPosition } = usePresentationContext();

  return (
    <div className="fixed top-4 left-4 bg-white/80 p-2 rounded shadow-md z-50 text-xs font-mono">
      <div>Slide: {currentSlideIndex + 1}/{slides.length}</div>
      <div>X: {viewPosition.x.toFixed(0)}</div>
      <div>Y: {viewPosition.y.toFixed(0)}</div>
      <div>Scale: {viewPosition.scale.toFixed(2)}</div>
      {viewPosition.rotation && <div>Rotation: {viewPosition.rotation}°</div>}
      <div>Z-Index: {viewPosition.zIndex || 1}</div>
    </div>
  );
};

export default PositionIndicator;
