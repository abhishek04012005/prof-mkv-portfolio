'use client';

import { useParams } from 'next/navigation';
import { eventsData } from '../../../data/events';
import ExploreDataDashboard, { ExploreCategoryData } from '../../../components/explore/exploreDataDashboard';

export default function EventsExplore() {
  const params = useParams();
  const categoryId = params.categoryId as string;

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
