import React from 'react';
import { Metadata } from 'next';
import { researchData } from '../../../../data/research';
import ItemDetail from '../../../../components/detail/itemDetail';

interface Props {
  params: {
    categoryId: string;
    itemId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId, itemId } = params;
  const category = researchData.find((cat) => cat.id === categoryId);
  const item = category?.research.find((res) => res.id === itemId);

  if (!category || !item) {
    return {
      title: 'Research Item Not Found | Prof. Manish K. Verma',
      description: 'The requested research item could not be found.',
    };
  }

  const baseUrl = 'https://prof-manish-k-verma.com';
  const description = item.abstract || item.description || item.title;
  const keywords = item.keywords || [item.title, 'Prof. Manish K. Verma', 'research'];

  return {
    title: `${item.title} | Prof. Manish K. Verma`,
    description: description.substring(0, 160),
    keywords: [...keywords, category.title],
    openGraph: {
      title: item.title,
      description: description.substring(0, 160),
      url: `${baseUrl}/research/${categoryId}/${itemId}`,
      type: 'article',
      siteName: 'Prof. Manish K. Verma',
      publishedTime: `${item.year}-01-01`,
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: description.substring(0, 160),
    },
  };
}

export default function ResearchItemDetail({ params }: Props) {
  const { categoryId, itemId } = params;
  const category = researchData.find((cat) => cat.id === categoryId);
  const item = category?.research.find((res) => res.id === itemId);

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
      onBack={() => {}}
    />
  );
}
