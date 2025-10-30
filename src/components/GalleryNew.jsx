import CircularGallery from './CircularGallery';

const LOCAL_ITEMS = [
  { image: '/gallery/1.jpg', text: '1' },
  { image: '/gallery/2.jpg', text: '2' },
  { image: '/gallery/3.jpg', text: '3' },
  { image: '/gallery/4.JPG', text: '4' },
  { image: '/gallery/5.JPG', text: '5' },
  { image: '/gallery/6.JPG', text: '6' },
  { image: '/gallery/7.jpg', text: '7' },
  { image: '/gallery/8.jpg', text: '8' },
  { image: '/gallery/11.JPG', text: '11' },
  { image: '/gallery/12.JPG', text: '12' },
  { image: '/gallery/13.JPG', text: '13' },
  { image: '/gallery/14.JPG', text: '14' },
  { image: '/gallery/15.JPG', text: '15' },
  { image: '/gallery/16.JPG', text: '16' },
  { image: '/gallery/17.jpg', text: '17' },
  { image: '/gallery/18.jpg', text: '18' },
];

export default function GalleryNew() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} items={LOCAL_ITEMS} />
    </div>
  );
}


