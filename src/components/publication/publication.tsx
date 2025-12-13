'use client';

import CardPreview from '../../custom/card/card';
import { publicationData } from '../../data/publication';
import { professorDetails } from '../../data/professorDetails';
import {
  AutoStories as BooksIcon,
  EditNote as EditIcon,
  Article as ArticleIcon,
  RateReview as ReviewIcon,
} from '@mui/icons-material';

// Publication-specific icons
const publicationIcons = {
  'books-published': <BooksIcon />,
  'books-edited': <EditIcon />,
  'articles': <ArticleIcon />,
  'book-reviews': <ReviewIcon />,
};

// Transform publication data to match CardCategory format
const transformedPublicationData = publicationData.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  icon: category.icon,
  cards: category.publications.map((pub) => ({
    id: pub.id,
    title: pub.title,
    year: pub.year,
  })),
}));

export default function PublicationPage() {
  const handleExplore = (categoryId: string) => {
    console.log('Explore publication category:', categoryId);
    // Add navigation logic here
    // router.push(`/publications/${categoryId}`);
  };

  return (
    <CardPreview
      data={transformedPublicationData}
      stats={professorDetails.publicationStats}
      heading="Publications"
      subheading="Selected works and research output"
      iconMap={publicationIcons}
      onExplore={handleExplore}
    />
  );
}