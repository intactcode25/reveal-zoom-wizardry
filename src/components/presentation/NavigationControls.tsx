
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

type NavigationControlsProps = {
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  canPrev: boolean;
  canNext: boolean;
};

const NavigationControls: React.FC<NavigationControlsProps> = ({
  onPrev,
  onNext,
  onReset,
  canPrev,
  canNext,
}) => {
  return (
    <div className="fixed bottom-6 right-6 flex gap-2 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        disabled={!canPrev}
        className="bg-white/80 hover:bg-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onReset}
        className="bg-white/80 hover:bg-white"
      >
        <Home className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        disabled={!canNext}
        className="bg-white/80 hover:bg-white"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default NavigationControls;
