'use client';

import CardPreview from '../../custom/card/card';
import { researchData } from '../../data/research';
import { professorDetails } from '../../data/professorDetails';
import {
  CheckCircle as CompletedIcon,
  Refresh as OngoingIcon,
  Lightbulb as InterestIcon,
  Inventory2 as OutputIcon,
} from '@mui/icons-material';

// Research-specific icons
const researchIcons = {
  'research-projects-completed': <CompletedIcon />,
  'research-projects-ongoing': <OngoingIcon />,
  'research-interests': <InterestIcon />,
  'research-outputs': <OutputIcon />,
};

// Transform research data to match CardCategory format
const transformedResearchData = researchData.map((category) => ({
  id: category.id,
  title: category.title,
  description: category.description,
  icon: category.icon,
  cards: category.research.map((item) => ({
    id: item.id,
    title: item.title,
    year: item.year,
  })),
}));

export default function ResearchPage() {
  const handleExplore = (categoryId: string) => {
    console.log('Explore research category:', categoryId);
    // Add navigation logic here
    // router.push(`/research/${categoryId}`);
  };

  return (
    <CardPreview
      data={transformedResearchData}
      stats={{
        completedProjects: 4,
        ongoingProjects: 3,
        citations: 145,
        totalPublications: 7,
        hIndex: 0,
      }}
      heading="Research"
      subheading="My research projects, interests, and outputs"
      iconMap={researchIcons}
      onExplore={handleExplore}
    />
  );
}