
export type Position = {
  x: number;
  y: number;
  scale: number;
  rotation?: number;
  zIndex?: number;
};

export type SlideElement = {
  id: string;
  type: 'header' | 'text' | 'image' | 'shape';
  content: string;
  position: Position;
  style?: Record<string, string | number>;
};

export type Slide = {
  id: string;
  title: string;
  elements: SlideElement[];
  viewPosition: Position;
};

// Sample images from Unsplash (these are placeholders that can be used in slides)
export const sampleImages = [
  'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80'
];

export const initialSlides: Slide[] = [
  {
    id: 'slide-1',
    title: 'Welcome',
    viewPosition: { x: 0, y: 0, scale: 1, zIndex: 10 },
    elements: [
      {
        id: 'title-1',
        type: 'header',
        content: 'Interactive Zoom Presentation',
        position: { x: 50, y: 30, scale: 1, zIndex: 20 },
        style: { color: '#4285F4', fontSize: '3rem', fontWeight: 'bold' }
      },
      {
        id: 'subtitle-1',
        type: 'text',
        content: 'Using Reveal.js with custom zoom functionality',
        position: { x: 50, y: 45, scale: 1, zIndex: 15 },
        style: { color: '#7B68EE', fontSize: '1.5rem' }
      },
      {
        id: 'image-1',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
        position: { x: 50, y: 70, scale: 1, zIndex: 10 },
        style: { width: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }
      }
    ]
  },
  {
    id: 'slide-2',
    title: 'Feature 1',
    viewPosition: { x: -200, y: -150, scale: 1.5, zIndex: 5 },
    elements: [
      {
        id: 'title-2',
        type: 'header',
        content: 'Custom Zoom Positions',
        position: { x: 30, y: 30, scale: 1, zIndex: 25 },
        style: { color: '#20B2AA', fontSize: '2rem', fontWeight: 'bold' }
      },
      {
        id: 'text-2',
        type: 'text',
        content: 'Define specific positions along X and Y axes',
        position: { x: 30, y: 45, scale: 1, zIndex: 20 },
        style: { color: '#333', fontSize: '1.2rem' }
      },
      {
        id: 'shape-1',
        type: 'shape',
        content: 'circle',
        position: { x: 75, y: 65, scale: 1, zIndex: 15 },
        style: { backgroundColor: '#FF69B4', width: '100px', height: '100px', borderRadius: '50%' }
      },
      {
        id: 'image-2',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
        position: { x: 30, y: 70, scale: 1, zIndex: 10 },
        style: { width: '300px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }
      }
    ]
  },
  {
    id: 'slide-3',
    title: 'Feature 2',
    viewPosition: { x: 200, y: 150, scale: 1.8, zIndex: 5 },
    elements: [
      {
        id: 'title-3',
        type: 'header',
        content: 'Z-Index Control',
        position: { x: 60, y: 20, scale: 1, zIndex: 25 },
        style: { color: '#FFA500', fontSize: '2rem', fontWeight: 'bold' }
      },
      {
        id: 'text-3',
        type: 'text',
        content: 'Layer elements with precision',
        position: { x: 60, y: 35, scale: 1, zIndex: 20 },
        style: { color: '#333', fontSize: '1.2rem' }
      },
      {
        id: 'shape-2',
        type: 'shape',
        content: 'rectangle',
        position: { x: 70, y: 55, scale: 1, zIndex: 10 },
        style: { backgroundColor: '#4285F4', width: '150px', height: '100px' }
      },
      {
        id: 'shape-3',
        type: 'shape',
        content: 'triangle',
        position: { x: 80, y: 60, scale: 1, zIndex: 15 },
        style: { width: '0', height: '0', borderLeft: '50px solid transparent', borderRight: '50px solid transparent', borderBottom: '100px solid #7B68EE' }
      },
      {
        id: 'image-3',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
        position: { x: 20, y: 60, scale: 1, zIndex: 5 },
        style: { width: '250px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }
      }
    ]
  },
  {
    id: 'slide-4',
    title: 'Overview',
    viewPosition: { x: 0, y: 0, scale: 0.5, zIndex: 1 },
    elements: [
      {
        id: 'title-4',
        type: 'header',
        content: 'Full Presentation Overview',
        position: { x: 50, y: 10, scale: 1, zIndex: 25 },
        style: { color: '#1A202C', fontSize: '2rem', fontWeight: 'bold' }
      },
      {
        id: 'text-4',
        type: 'text',
        content: 'Zoom out to see the whole picture',
        position: { x: 50, y: 20, scale: 1, zIndex: 20 },
        style: { color: '#333', fontSize: '1.2rem' }
      },
      {
        id: 'image-4',
        type: 'image',
        content: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
        position: { x: 50, y: 50, scale: 1, zIndex: 5 },
        style: { width: '500px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }
      }
    ]
  }
];
