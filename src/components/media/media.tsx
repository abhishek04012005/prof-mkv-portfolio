'use client';

import CardPreview from '../../custom/card/card';
import { mediaData } from '../../data/media';
import {
  MenuBook as BooksIcon,
  AutoStories as EditedIcon,
  Article as ArticleIcon,
  FolderOpen as ProjectIcon,
  Event as EventIcon,
  Slideshow as PresentationIcon,
} from '@mui/icons-material';

// Media-specific icons mapping
const mediaIcons = {
  'books-media': <BooksIcon />,
  'edited-volumes': <EditedIcon />,
  'articles-media': <ArticleIcon />,
  'projects-media': <ProjectIcon />,
  'events-media': <EventIcon />,
  'presentations-media': <PresentationIcon />,
};

// Transform media data to match CardCategory format
const transformedMediaData = mediaData.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  icon: category.icon,
  cards: category.items.map((item) => ({
    id: item.id,
    title: item.title,
    year: item.year,
  })),
}));

export default function MediaPage() {
  // Calculate media statistics
  const totalItems = mediaData.reduce((sum, cat) => sum + cat.items.length, 0);
  const totalCitations = mediaData.reduce(
    (sum, cat) =>
      sum +
      cat.items.reduce((itemSum, item) => itemSum + (item.citations || 0), 0),
    0
  );

  const handleExplore = (categoryId: string) => {
    console.log('Explore media category:', categoryId);
    // Navigation is handled by CardPreview component
  };

  return (
    <CardPreview
      data={transformedMediaData}
      stats={{
        totalPublications: totalItems,
        citations: totalCitations,
        hIndex: 0,
        completedProjects: 0,
        ongoingProjects: 0,
      }}
      heading="Media & Publications"
      subheading="Books, articles, events, projects and presentations"
      iconMap={mediaIcons}
      onExplore={handleExplore}
      routePrefix="media"
    />
  );
}
