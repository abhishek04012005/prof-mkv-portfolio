'use client';

import CardPreview from '../../custom/card/card';
import { supervisionData } from '../../data/supervision';
import {
  SchoolOutlined as PhDIcon,
  AutoStoriesOutlined as MPhilIcon,
  ClassOutlined as PGIcon,
  EventNoteOutlined as OrganizingIcon,
  GroupsOutlined as PanelIcon,
} from '@mui/icons-material';

// Supervision-specific icons
const supervisionIcons = {
  'phd-supervision': <PhDIcon />,
  'mphil-supervision': <MPhilIcon />,
  'pg-dissertation-supervision': <PGIcon />,
  'organizing-roles': <OrganizingIcon />,
  'session-chairing-panel': <PanelIcon />,
};

// Transform supervision data to match CardCategory format
const transformedSupervisionData = supervisionData.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  icon: category.icon,
  cards: category.supervision.map((item) => ({
    id: item.id,
    title: item.title,
    year: item.year,
  })),
}));

export default function SupervisionPage() {
  const handleExplore = (categoryId: string) => {
    console.log('Explore supervision category:', categoryId);
    // Add navigation logic here
    // router.push(`/supervision/${categoryId}`);
  };

  return (
    <CardPreview
      data={transformedSupervisionData}
      stats={{
        completedProjects: 8,
        ongoingProjects: 6,
        citations: 0,
        totalPublications: 19,
        hIndex: 0,
      }}
      heading="Supervision & Academic Leadership"
      subheading="Student guidance, conference organization, and academic leadership roles"
      iconMap={supervisionIcons}
      onExplore={handleExplore}
      routePrefix="supervision"
    />
  );
}