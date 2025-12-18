import { Metadata } from 'next';
import Gallery from '@/components/gallery/gallery';

export const metadata: Metadata = {
  title: 'Gallery | Prof. Manish K. Verma',
  description: 'Photo gallery showcasing professional moments, research activities, conferences, team collaborations, and awards from Prof. Manish K. Verma\'s academic journey.',
  keywords: ['Gallery', 'Photos', 'Events', 'Research', 'Conferences', 'Team', 'Awards'],
  openGraph: {
    title: 'Gallery | Prof. Manish K. Verma',
    description: 'Photo gallery of professional moments and academic achievements',
    type: 'website',
    url: 'https://prof-manish-k-verma.com/gallery',
  },
};

export default function GalleryPage() {
  return <Gallery />;
}
