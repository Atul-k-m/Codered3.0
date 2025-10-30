import CircularGallery from './CircularGallery';

const LOCAL_ITEMS = [
  { image: '/gallery/1.jpg', text: '' },
  { image: '/gallery/2.jpg', text: '' },
  { image: '/gallery/3.jpg', text: '' },
  { image: '/gallery/4.JPG', text: '' },
  { image: '/gallery/5.JPG', text: '' },
  { image: '/gallery/6.JPG', text: '' },
  { image: '/gallery/7.jpg', text: '' },
  { image: '/gallery/8.jpg', text: '' },
  { image: '/gallery/11.JPG', text: '' },
  { image: '/gallery/12.JPG', text: '' },
  { image: '/gallery/13.JPG', text: '' },
  { image: '/gallery/14.JPG', text: '' },
  { image: '/gallery/15.JPG', text: '' },
  { image: '/gallery/16.JPG', text: '' },
  { image: '/gallery/17.jpg', text: '' },
  { image: '/gallery/18.jpg', text: '' },
];

export default function GalleryNew() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} items={LOCAL_ITEMS} />
    </div>
  );
}


