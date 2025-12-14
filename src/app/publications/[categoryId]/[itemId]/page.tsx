import React from 'react';
import { Metadata } from 'next';
import { publicationData } from '../../../../data/publication';
import ItemDetail from '../../../../components/detail/itemDetail';

interface Props {
  params: Promise<{
    categoryId: string;
    itemId: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId, itemId } = await params;
  const category = publicationData.find((cat) => cat.id === categoryId);
  const item = category?.publications.find((pub) => pub.id === itemId);

  if (!category || !item) {
    return {
      title: 'Publication Not Found | Prof. Manish K. Verma',
      description: 'The requested publication could not be found.',
    };
  }

  const baseUrl = 'https://prof-manish-k-verma.com';
  const abstract = item.abstract || item.title;
  const keywords = item.keywords || [item.title, 'Prof. Manish K. Verma'];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: item.title,
    author: {
      '@type': 'Person',
      name: item.authors || 'Prof. Manish K. Verma',
    },
    datePublished: `${item.year}-01-01`,
    description: abstract,
    keywords: keywords.join(', '),
    ...(item.journal && { journal: item.journal }),
    ...(item.publisher && { publisher: item.publisher }),
    ...(item.doi && { identifier: item.doi }),
  };

  return {
    title: `${item.title} | Prof. Manish K. Verma`,
    description: abstract.substring(0, 160),
    keywords: [...keywords, category.title],
    openGraph: {
      title: item.title,
      description: abstract.substring(0, 160),
      url: `${baseUrl}/publications/${categoryId}/${itemId}`,
      type: 'article',
      siteName: 'Prof. Manish K. Verma',
      publishedTime: `${item.year}-01-01`,
    },
    twitter: {
      card: 'summary_large_image',
      title: item.title,
      description: abstract.substring(0, 160),
    },
  };
}

export default async function PublicationDetail({ params }: Props) {
  const { categoryId, itemId } = await params;
  const category = publicationData.find((cat) => cat.id === categoryId);
  const item = category?.publications.find((pub) => pub.id === itemId);

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
    />
  );
}
