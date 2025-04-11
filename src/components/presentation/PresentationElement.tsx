
import React from 'react';
import { SlideElement } from '@/utils/revealUtils';
import { cn } from '@/lib/utils';

type PresentationElementProps = {
  element: SlideElement;
  className?: string;
};

/**
 * PresentationElement renders different types of content (header, text, image, shape)
 * based on the element type provided in props.
 */
const PresentationElement: React.FC<PresentationElementProps> = ({ 
  element, 
  className 
}) => {
  const { type, content, position, style = {} } = element;
  
  // Apply positioning and transformation styles
  const elementStyle: React.CSSProperties = {
    position: 'absolute',
    left: `${position.x}%`,
    top: `${position.y}%`,
    transform: `scale(${position.scale}) ${position.rotation ? `rotate(${position.rotation}deg)` : ''}`,
    zIndex: position.zIndex || 1,
    ...style as React.CSSProperties
  };

  /**
   * Render appropriate content based on element type
   */
  const renderContent = () => {
    switch (type) {
      case 'header':
        // Render a heading element
        return <h2 className="m-0 p-0 text-center" style={style as React.CSSProperties}>{content}</h2>;
      
      case 'text':
        // Render a paragraph element
        return <p className="m-0 p-0 text-center" style={style as React.CSSProperties}>{content}</p>;
      
      case 'image':
        // Render an image element
        return (
          <img 
            src={content} 
            alt="Presentation image" 
            className="max-w-full transition-all duration-300 hover:shadow-lg"
            style={style as React.CSSProperties} 
            loading="lazy"
          />
        );
      
      case 'shape':
        // Render a shape (div with specific styling)
        return <div className="transition-all duration-300" style={style as React.CSSProperties}></div>;
      
      default:
        // Fallback for unknown element types
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
