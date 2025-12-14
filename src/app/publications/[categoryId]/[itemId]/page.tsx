'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { publicationData } from '../../../../data/publication';
import ItemDetail from '../../../../components/detail/itemDetail';

export default function PublicationDetail() {
  const router = useRouter();
  const params = useParams();
  const categoryId = params.categoryId as string;
  const itemId = params.itemId as string;

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
        <button
          onClick={() => router.back()}
          style={{
            padding: '10px 20px',
            background: '#1a5490',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '600',
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <ItemDetail
      item={item}
      categoryTitle={category.title}
      onBack={() => router.back()}
    />
  );
}
