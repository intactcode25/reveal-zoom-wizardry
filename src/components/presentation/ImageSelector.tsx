
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sampleImages } from '@/utils/revealUtils';

type ImageSelectorProps = {
  onSelectImage: (imageUrl: string) => void;
};

const ImageSelector: React.FC<ImageSelectorProps> = ({ onSelectImage }) => {
  return (
    <Sheet>
      <SheetTrigger className="fixed right-4 top-4 bg-white/80 p-2 rounded shadow-md z-50 flex items-center text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        Add Image
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Select an Image</SheetTitle>
          <SheetDescription>
            Choose from sample images or enter a URL
          </SheetDescription>
        </SheetHeader>
        
        <div className="grid gap-4 py-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Sample Images:</p>
            <div className="grid grid-cols-2 gap-2">
              {sampleImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`Sample ${index + 1}`}
                  className="w-full h-24 object-cover rounded cursor-pointer border-2 border-transparent hover:border-primary"
                  onClick={() => onSelectImage(image)}
                />
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Common Image Sizes:</p>
            <Select onValueChange={(value) => console.log(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small (200px)</SelectItem>
                <SelectItem value="medium">Medium (400px)</SelectItem>
                <SelectItem value="large">Large (600px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-2">Custom URL:</p>
            <input 
              className="w-full p-2 border rounded" 
              placeholder="Enter image URL"
              onBlur={(e) => e.target.value && onSelectImage(e.target.value)}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ImageSelector;
