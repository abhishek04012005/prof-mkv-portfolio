import React from 'react';
import { Metadata } from 'next';
import { supervisionData } from '../../../../data/supervision';
import ItemDetail from '../../../../components/detail/itemDetail';

interface Props {
  params: Promise<{
    categoryId: string;
    itemId: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId, itemId } = await params;
  const category = supervisionData.find((cat) => cat.id === categoryId);
  const item = category?.supervision.find((sup) => sup.id === itemId);

  if (!category || !item) {
    return {
      title: 'Supervision Item Not Found | Prof. Manish K. Verma',
      description: 'The requested supervision item could not be found.',
    };
  }

  const baseUrl = 'https://prof-manish-k-verma.com';
  const itemName = (item as any).studentName || (item as any).name || (item as any).title || 'Supervision Item';
  const researchArea = (item as any).researchArea || (item as any).keywords?.join(', ') || '';
  
  return {
    title: `${itemName} | Prof. Manish K. Verma Supervision`,
    description: `${itemName} supervised by Prof. Manish K. Verma. Research area: ${researchArea}`,
    keywords: [itemName, 'supervision', category.title, 'Prof. Manish K. Verma', researchArea].filter(Boolean),
    openGraph: {
      title: `${itemName} | Supervised by Prof. Manish K. Verma`,
      description: `Research supervision details for ${itemName} under Prof. Manish K. Verma`,
      url: `${baseUrl}/supervision/${categoryId}/${itemId}`,
      type: 'website',
      siteName: 'Prof. Manish K. Verma',
    },
    twitter: {
      card: 'summary',
      title: itemName,
      description: `Supervised by Prof. Manish K. Verma in ${category.title}`,
    },
  };
}

export default async function SupervisionItemDetail({ params }: Props) {
  const { categoryId, itemId } = await params;
  const category = supervisionData.find((cat) => cat.id === categoryId);
  const item = category?.supervision.find((sup) => sup.id === itemId);

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
