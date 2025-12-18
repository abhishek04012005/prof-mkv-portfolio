import { Metadata } from 'next';
import { supervisionData } from '../../../data/supervision';
import ExploreDataDashboard, { ExploreCategoryData } from '../../../components/explore/exploreDataDashboard';

interface Props {
  params: Promise<{
    categoryId: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const category = supervisionData.find((cat) => cat.id === categoryId);

  if (!category) {
    return {
      title: 'Category Not Found | Prof. (Dr.) Manish K. Verma',
      description: 'The requested supervision category could not be found.',
    };
  }

  const categoryNames: Record<string, string> = {
    'phd-supervision': 'PhD Student Supervision by Prof. (Dr.) Manish K. Verma',
    'mphil-supervision': 'MPhil Student Supervision by Prof. (Dr.) Manish K. Verma',
    'pg-dissertation-supervision': 'Postgraduate Dissertation Supervision by Prof. (Dr.) Manish K. Verma',
    'pg-professional-development': 'Postgraduate Professional Development Programs',
    'organizing-roles': 'Academic and Professional Organizing Roles',
    'session-chairing': 'Conference Session Chairing and Academic Leadership',
  };

  const categoryDescriptions: Record<string, string> = {
    'phd-supervision': `Prof. (Dr.) Manish K. Verma has supervised ${category.supervision.length} PhD students on research topics including sociology, environment, and sustainable development.`,
    'mphil-supervision': `Prof. (Dr.) Manish K. Verma has supervised ${category.supervision.length} MPhil students in advanced social research and academic studies.`,
    'pg-dissertation-supervision': `Supervised ${category.supervision.length} postgraduate dissertations across various social science disciplines.`,
    'pg-professional-development': `Facilitated professional development programs for ${category.supervision.length} postgraduate students and early-career researchers.`,
    'organizing-roles': `Prof. (Dr.) Manish K. Verma has held ${category.supervision.length} organizational and academic leadership positions.`,
    'session-chairing': `Chaired ${category.supervision.length} academic conference sessions and research presentations.`,
  };

  const baseUrl = 'https://prof-manish-k-verma.com';
  const categoryKeywords: Record<string, string[]> = {
    'phd-supervision': ['PhD supervision', 'doctoral research', 'sociology', 'supervision', 'Prof. (Dr.) Manish K. Verma'],
    'mphil-supervision': ['MPhil supervision', 'postgraduate research', 'social research', 'Prof. (Dr.) Manish K. Verma'],
    'pg-dissertation-supervision': ['dissertation supervision', 'postgraduate', 'research mentorship', 'Prof. (Dr.) Manish K. Verma'],
    'pg-professional-development': ['professional development', 'postgraduate training', 'academic development', 'Prof. (Dr.) Manish K. Verma'],
    'organizing-roles': ['academic leadership', 'organizing roles', 'professional roles', 'Prof. (Dr.) Manish K. Verma'],
    'session-chairing': ['session chairing', 'conference', 'academic leadership', 'Prof. (Dr.) Manish K. Verma'],
  };

  return {
    title: categoryNames[categoryId] || `${category.title} | Prof. (Dr.) Manish K. Verma`,
    description: categoryDescriptions[categoryId] || category.description,
    keywords: categoryKeywords[categoryId] || [category.title, 'Prof. (Dr.) Manish K. Verma', 'supervision'],
    openGraph: {
      title: categoryNames[categoryId] || category.title,
      description: categoryDescriptions[categoryId] || category.description,
      url: `${baseUrl}/supervision/${categoryId}`,
      type: 'website',
      siteName: 'Prof. (Dr.) Manish K. Verma',
    },
    twitter: {
      card: 'summary_large_image',
      title: categoryNames[categoryId] || category.title,
      description: categoryDescriptions[categoryId] || category.description,
    },
  };
}

export default async function SupervisionExplore({ params }: Props) {
  const { categoryId } = await params;
  const category = supervisionData.find((cat) => cat.id === categoryId);

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
    items: category.supervision,
  };

  return <ExploreDataDashboard data={dashboardData} />;
}
