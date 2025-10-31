import CircularGallery from './CircularGallery';

const LOCAL_ITEMS = [
  { image: '/gallery/1.webp', text: '' },
  { image: '/gallery/2.webp', text: '' },
  { image: '/gallery/3.webp', text: '' },
  { image: '/gallery/4.webp', text: '' },
  { image: '/gallery/5.webp', text: '' },
  { image: '/gallery/6.webp', text: '' },
  { image: '/gallery/7.webp', text: '' },
  { image: '/gallery/8.webp', text: '' },
  { image: '/gallery/11.webp', text: '' },
  { image: '/gallery/12.webp', text: '' },
  { image: '/gallery/13.webp', text: '' },
  { image: '/gallery/14.webp', text: '' },
  { image: '/gallery/15.webp', text: '' },
  { image: '/gallery/16.webp', text: '' },
  { image: '/gallery/17.webp', text: '' },
  { image: '/gallery/18.webp', text: '' },
];

export default function GalleryNew() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} items={LOCAL_ITEMS} />
    </div>
  );
}


