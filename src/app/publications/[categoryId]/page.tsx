import { Metadata } from 'next';
import { publicationData } from '../../../data/publication';
import ExploreDataDashboard, { ExploreCategoryData } from '../../../components/explore/exploreDataDashboard';

interface Props {
  params: {
    categoryId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = params;
  const category = publicationData.find((cat) => cat.id === categoryId);

  if (!category) {
    return {
      title: 'Category Not Found | Prof. Manish K. Verma',
      description: 'The requested publication category could not be found.',
    };
  }

  const categoryNames: Record<string, string> = {
    'books-published': 'Books Published by Prof. Manish K. Verma',
    'books-edited': 'Books Edited and Peer-Reviewed by Prof. Manish K. Verma',
    'articles': 'Research Articles and Book Chapters by Prof. Manish K. Verma',
    'book-reviews': 'Book Reviews by Prof. Manish K. Verma',
  };

  const categoryDescriptions: Record<string, string> = {
    'books-published': `Browse ${category.publications.length} authored and edited books by Prof. Manish K. Verma covering sociology, environment, education, and sustainable development.`,
    'books-edited': `Explore ${category.publications.length} edited volumes and peer-reviewed textbooks by Prof. Manish K. Verma on social sciences and development studies.`,
    'articles': `Read ${category.publications.length} research articles, book chapters and course materials by Prof. Manish K. Verma on sociology and social development.`,
    'book-reviews': `Browse ${category.publications.length} professional book reviews by Prof. Manish K. Verma on sociology, development, and related topics.`,
  };

  const baseUrl = 'https://prof-manish-k-verma.com';
  const categoryKeywords: Record<string, string[]> = {
    'books-published': ['books', 'authored books', 'sociology', 'education', 'sustainable development', 'Prof. Manish K. Verma'],
    'books-edited': ['edited books', 'textbooks', 'sociology', 'social sciences', 'peer review', 'Prof. Manish K. Verma'],
    'articles': ['research articles', 'journal articles', 'book chapters', 'sociology', 'social research', 'Prof. Manish K. Verma'],
    'book-reviews': ['book reviews', 'sociology', 'development studies', 'academic reviews', 'Prof. Manish K. Verma'],
  };

  return {
    title: categoryNames[categoryId] || `${category.title} | Prof. Manish K. Verma`,
    description: categoryDescriptions[categoryId] || category.description,
    keywords: categoryKeywords[categoryId] || [category.title, 'Prof. Manish K. Verma', 'sociology'],
    openGraph: {
      title: categoryNames[categoryId] || category.title,
      description: categoryDescriptions[categoryId] || category.description,
      url: `${baseUrl}/publications/${categoryId}`,
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

export default function PublicationExplore({ params }: Props) {
  const { categoryId } = params;
  const category = publicationData.find((cat) => cat.id === categoryId);

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
    items: category.publications,
  };

  return <ExploreDataDashboard data={dashboardData} />;
}
