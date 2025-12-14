import { Metadata } from 'next';
import { researchData } from '../../../data/research';
import ExploreDataDashboard, { ExploreCategoryData } from '../../../components/explore/exploreDataDashboard';

interface Props {
  params: {
    categoryId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = params;
  const category = researchData.find((cat) => cat.id === categoryId);

  if (!category) {
    return {
      title: 'Category Not Found | Prof. Manish K. Verma',
      description: 'The requested research category could not be found.',
    };
  }

  const categoryNames: Record<string, string> = {
    'research-projects-completed': 'Completed Research Projects by Prof. Manish K. Verma',
    'research-projects-ongoing': 'Ongoing Research Projects by Prof. Manish K. Verma',
    'research-interests': 'Research Interests and Areas of Expertise',
    'research-outputs': 'Research Outputs and Publications',
  };

  const categoryDescriptions: Record<string, string> = {
    'research-projects-completed': `Browse ${category.research.length} completed research projects by Prof. Manish K. Verma on sociology, environment, education, and sustainable development.`,
    'research-projects-ongoing': `Explore ${category.research.length} ongoing research initiatives by Prof. Manish K. Verma in sociology and social research.`,
    'research-interests': `Discover ${category.research.length} research areas and domains of expertise of Prof. Manish K. Verma in sociology and social sciences.`,
    'research-outputs': `Browse ${category.research.length} research publications, articles and documented research deliverables by Prof. Manish K. Verma.`,
  };

  const baseUrl = 'https://prof-manish-k-verma.com';
  const categoryKeywords: Record<string, string[]> = {
    'research-projects-completed': ['research projects', 'completed projects', 'sociology', 'development research', 'Prof. Manish K. Verma'],
    'research-projects-ongoing': ['ongoing research', 'research initiatives', 'sociology', 'social research', 'Prof. Manish K. Verma'],
    'research-interests': ['research interests', 'sociology', 'expertise', 'social sciences', 'Prof. Manish K. Verma'],
    'research-outputs': ['research outputs', 'publications', 'research findings', 'sociology', 'Prof. Manish K. Verma'],
  };

  return {
    title: categoryNames[categoryId] || `${category.title} | Prof. Manish K. Verma`,
    description: categoryDescriptions[categoryId] || category.description,
    keywords: categoryKeywords[categoryId] || [category.title, 'Prof. Manish K. Verma', 'research'],
    openGraph: {
      title: categoryNames[categoryId] || category.title,
      description: categoryDescriptions[categoryId] || category.description,
      url: `${baseUrl}/research/${categoryId}`,
      type: 'website',
      siteName: 'Prof. Manish K. Verma',
    },
    twitter: {
      card: 'summary_large_image',
      title: categoryNames[categoryId] || category.title,
      description: categoryDescriptions[categoryId] || category.description,
    },
  };
}

export default function ResearchExplore({ params }: Props) {
  const { categoryId } = params;
  const category = researchData.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Category Not Found</h1>
        <p>The category you are looking for does not exist.</p>
      </div>
    );
  }

  const dashboardData: ExploreCategoryData = {
    id: category.id,
    title: category.title,
    description: category.description,
    items: category.research,
  };

  return <ExploreDataDashboard data={dashboardData} />;
}
