
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
        position: { x: 50, y: 40, scale: 1, zIndex: 20 },
        style: { color: '#4285F4', fontSize: '3rem', fontWeight: 'bold' }
      },
      {
        id: 'subtitle-1',
        type: 'text',
        content: 'Using Reveal.js with custom zoom functionality',
        position: { x: 50, y: 55, scale: 1, zIndex: 15 },
        style: { color: '#7B68EE', fontSize: '1.5rem' }
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
      }
    ]
  }
];
