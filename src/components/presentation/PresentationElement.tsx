
import React from 'react';
import { SlideElement } from '@/utils/revealUtils';
import { cn } from '@/lib/utils';

type PresentationElementProps = {
  element: SlideElement;
  className?: string;
};

const PresentationElement: React.FC<PresentationElementProps> = ({ 
  element, 
  className 
}) => {
  const { type, content, position, style = {} } = element;
  
  const elementStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transform: `scale(${position.scale}) ${position.rotation ? `rotate(${position.rotation}deg)` : ''}`,
    zIndex: position.zIndex || 1,
    ...style as React.CSSProperties
  };

  const renderContent = () => {
    switch (type) {
      case 'header':
        return <h2 style={style as React.CSSProperties}>{content}</h2>;
      case 'text':
        return <p style={style as React.CSSProperties}>{content}</p>;
      case 'image':
        return <img src={content} alt="Presentation image" style={style as React.CSSProperties} />;
      case 'shape':
        return <div style={style as React.CSSProperties}></div>;
      default:
        return <div>{content}</div>;
    }
  };

  return (
    <div 
      className={cn('presentation-element', className)}
      style={elementStyle}
    >
      {renderContent()}
    </div>
  );
};

export default PresentationElement;
