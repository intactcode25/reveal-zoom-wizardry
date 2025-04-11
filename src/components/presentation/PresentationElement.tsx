
import React from 'react';
import { SlideElement } from '@/utils/revealUtils';
import { cn } from '@/lib/utils';

type PresentationElementProps = {
  element: SlideElement;
  className?: string;
};

/**
 * Simplified PresentationElement component that renders slide content
 */
const PresentationElement: React.FC<PresentationElementProps> = ({ 
  element, 
  className 
}) => {
  const { type, content, position, style = {} } = element;
  
  // Basic positioning styles
  const elementStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transform: `scale(${position.scale})`,
    ...style as React.CSSProperties
  };

  // Simple content renderer based on element type
  const renderContent = () => {
    switch (type) {
      case 'header':
        return <h2 className="text-center">{content}</h2>;
      case 'text':
        return <p className="text-center">{content}</p>;
      case 'image':
        return <img src={content} alt="Slide image" loading="lazy" />;
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
