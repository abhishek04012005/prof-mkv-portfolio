'use client';

import CardPreview from '../../custom/card/card';
import { eventsData } from '../../data/events';
import {
  Public as ISSIcon,
  Build as WorkshopIcon,
  Mic as LectureIcon,
  Slideshow as PresentationIcon,
  EmojiEvents as ChairingIcon,
} from '@mui/icons-material';

// Events-specific icons
const eventsIcons = {
  'international-summer-school': <ISSIcon />,
  'workshops': <WorkshopIcon />,
  'lectures': <LectureIcon />,
  'presentations': <PresentationIcon />,
  'chairing': <ChairingIcon />,
};

// Transform events data to match CardCategory format
const transformedEventsData = eventsData.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  icon: category.icon,
  cards: category.events.map((item) => ({
    id: item.id,
    title: item.title,
    year: item.year,
  })),
}));

export default function EventsPage() {
  const handleExplore = (categoryId: string) => {
    console.log('Explore events category:', categoryId);
    // Add navigation logic here
    // router.push(`/events/${categoryId}`);
  };

  return (
    <CardPreview
      data={transformedEventsData}
      stats={{
        completedProjects: 18,
        ongoingProjects: 2,
        citations: 0,
        totalPublications: 20,
        hIndex: 0,
      }}
      heading="Events & Outreach"
      subheading="International summer schools, workshops, lectures, presentations, and conference sessions chaired"
      iconMap={eventsIcons}
      onExplore={handleExplore}
    />
  );
}