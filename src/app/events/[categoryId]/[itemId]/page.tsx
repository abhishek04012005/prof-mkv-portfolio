import React from 'react';
import { Metadata } from 'next';
import { eventsData } from '../../../../data/events';
import ItemDetail from '../../../../components/detail/itemDetail';

interface Props {
  params: Promise<{
    categoryId: string;
    itemId: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId, itemId } = await params;
  const category = eventsData.find((cat) => cat.id === categoryId);
  const item = category?.events.find((evt) => evt.id === itemId);

  if (!category || !item) {
    return {
      title: 'Event Not Found | Prof. (Dr.) Manish K. Verma',
      description: 'The requested event could not be found.',
    };
  }

  const baseUrl = 'https://manishkverma.in';
  const eventTitle = (item as any).title || (item as any).name || 'Event';
  
  return {
    title: `${eventTitle} | Prof. (Dr.) Manish K. Verma`,
    description: `${eventTitle} - View details about this event organized or coordinated by Prof. (Dr.) Manish K. Verma.`,
    keywords: [eventTitle, 'event', category.title, 'Prof. (Dr.) Manish K. Verma', 'conference', 'workshop'],
    openGraph: {
      title: eventTitle,
      description: `Event: ${eventTitle}`,
      url: `${baseUrl}/events/${categoryId}/${itemId}`,
      type: 'website',
      siteName: 'Prof. (Dr.) Manish K. Verma',
    },
    twitter: {
      card: 'summary',
      title: eventTitle,
      description: `Learn more about ${eventTitle}`,
    },
  };
}

export default async function EventItemDetail({ params }: Props) {
  const { categoryId, itemId } = await params;
  const category = eventsData.find((cat) => cat.id === categoryId);
  const item = category?.events.find((evt) => evt.id === itemId);

  if (!category || !item) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
        flexDirection: 'column',
        gap: '20px',
      }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2rem' }}>Item Not Found</h1>
        <p style={{ color: '#7f8c8d', fontSize: '1rem' }}>The item you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <ItemDetail
      item={item}
      categoryTitle={category.title}
      categoryId={categoryId}
    />
  );
}
