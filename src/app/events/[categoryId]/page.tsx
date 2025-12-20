import { Metadata } from 'next';
import { eventsData } from '../../../data/events';
import ExploreDataDashboard, { ExploreCategoryData } from '../../../components/explore/exploreDataDashboard';

interface Props {
  params: Promise<{
    categoryId: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const category = eventsData.find((cat) => cat.id === categoryId);

  if (!category) {
    return {
      title: 'Category Not Found | Prof. (Dr.) Manish K. Verma',
      description: 'The requested events category could not be found.',
    };
  }

  const baseUrl = 'https://manishkverma.in';

  return {
    title: `${category.title} | Prof. (Dr.) Manish K. Verma`,
    description: `${category.description} View ${category.events.length} events organized or coordinated by Prof. (Dr.) Manish K. Verma.`,
    keywords: [category.title, 'events', 'conferences', 'workshops', 'Prof. (Dr.) Manish K. Verma', 'academic events'],
    openGraph: {
      title: category.title,
      description: category.description,
      url: `${baseUrl}/events/${categoryId}`,
      type: 'website',
      siteName: 'Prof. (Dr.) Manish K. Verma',
    },
    twitter: {
      card: 'summary_large_image',
      title: category.title,
      description: category.description,
    },
  };
}

export default async function EventsExplore({ params }: Props) {
  const { categoryId } = await params;
  const category = eventsData.find((cat) => cat.id === categoryId);

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
    items: category.events,
  };

  return <ExploreDataDashboard data={dashboardData} />;
}
