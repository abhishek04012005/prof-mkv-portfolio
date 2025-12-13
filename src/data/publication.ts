export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  publisher?: string;
  journal?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  pdfUrl?: string;
  abstract?: string;
  keywords?: string[];
  citations?: number;
}

export interface PublicationCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  publications: Publication[];
}

export const publicationData: PublicationCategory[] = [
  {
    id: 'books-published',
    title: 'Books Published',
    icon: '📕',
    description: 'Authored and published books',
    publications: [
      {
        id: 'book-pub-1',
        title: 'Advanced Machine Learning: Theory and Practice',
        authors: 'Prof. Manish K. Verma',
        year: 2023,
        publisher: 'Academic Press',
        doi: '10.1016/B978-0-12-345678-9.00001-0',
        url: 'https://example.com/book1',
        pdfUrl: 'https://example.com/book1.pdf',
        abstract: 'A comprehensive guide to machine learning covering foundational concepts and real-world applications.',
        keywords: ['Machine Learning', 'AI', 'Deep Learning', 'Algorithms'],
        citations: 45,
      },
      {
        id: 'book-pub-2',
        title: 'Software Engineering Best Practices',
        authors: 'Prof. Manish K. Verma, Dr. Sarah Chen',
        year: 2022,
        publisher: 'Tech Publications',
        doi: '10.1016/B978-0-12-345679-0.00001-0',
        url: 'https://example.com/book2',
        pdfUrl: 'https://example.com/book2.pdf',
        abstract: 'Industry insights and best practices for modern software engineering.',
        keywords: ['Software Engineering', 'Development', 'Design Patterns'],
        citations: 32,
      },
    ],
  },
  {
    id: 'books-edited',
    title: 'Books Edited',
    icon: '📗',
    description: 'Edited volumes and compilations',
    publications: [
      {
        id: 'book-edit-1',
        title: 'Contemporary Issues in Cloud Computing',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2023,
        publisher: 'Springer',
        doi: '10.1007/978-3-030-12345-0',
        url: 'https://example.com/edited1',
        abstract: 'A collection of research articles on current challenges in cloud computing.',
        keywords: ['Cloud Computing', 'Distributed Systems', 'Infrastructure'],
        citations: 28,
      },
      {
        id: 'book-edit-2',
        title: 'Data Science and Analytics Handbook',
        authors: 'Edited by Prof. Manish K. Verma, Dr. James Wilson',
        year: 2022,
        publisher: 'Wiley',
        doi: '10.1002/9781119-12345',
        url: 'https://example.com/edited2',
        abstract: 'Comprehensive handbook covering data science methodologies and tools.',
        keywords: ['Data Science', 'Analytics', 'Big Data'],
        citations: 35,
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles',
    icon: '📄',
    description: 'Journal and conference articles',
    publications: [
      {
        id: 'article-1',
        title: 'Optimization Techniques for Real-Time Data Processing',
        authors: 'Prof. Manish K. Verma, Dr. Lisa Kumar, Prof. Robert Smith',
        year: 2024,
        journal: 'IEEE Transactions on Software Engineering',
        volume: '50',
        issue: '3',
        pages: '234-256',
        doi: '10.1109/TSE.2024.001',
        url: 'https://ieeexplore.ieee.org',
        pdfUrl: 'https://example.com/article1.pdf',
        abstract: 'Novel optimization techniques for real-time data processing systems.',
        keywords: ['Optimization', 'Real-time Processing', 'Algorithms'],
        citations: 15,
      },
      {
        id: 'article-2',
        title: 'Machine Learning Applications in Edge Computing',
        authors: 'Prof. Manish K. Verma, Dr. Michael Zhang',
        year: 2024,
        journal: 'ACM Computing Surveys',
        volume: '57',
        issue: '2',
        pages: '1-42',
        doi: '10.1145/3699233',
        url: 'https://dl.acm.org/article',
        pdfUrl: 'https://example.com/article2.pdf',
        abstract: 'Survey of machine learning applications in edge computing environments.',
        keywords: ['Edge Computing', 'ML', 'IoT', 'Distributed Systems'],
        citations: 22,
      },
      {
        id: 'article-3',
        title: 'Cloud Architecture Patterns for Enterprise Applications',
        authors: 'Prof. Manish K. Verma, Dr. David Lee',
        year: 2023,
        journal: 'Journal of Cloud Computing',
        volume: '12',
        issue: '4',
        pages: '89-110',
        doi: '10.1186/s13677-023-12345',
        url: 'https://example.com/article3',
        pdfUrl: 'https://example.com/article3.pdf',
        abstract: 'Analysis of cloud architecture patterns for enterprise-scale applications.',
        keywords: ['Cloud Architecture', 'Enterprise Systems', 'Microservices'],
        citations: 18,
      },
    ],
  },
  {
    id: 'book-reviews',
    title: 'Book Reviews',
    icon: '⭐',
    description: 'Professional book reviews',
    publications: [
      {
        id: 'review-1',
        title: 'Review: "Designing Data-Intensive Applications" by Martin Kleppmann',
        authors: 'Prof. Manish K. Verma',
        year: 2023,
        journal: 'Journal of Software Engineering Reviews',
        doi: '10.1234/jser.2023.001',
        url: 'https://example.com/review1',
        abstract: 'Detailed review of Kleppmann\'s guide to data systems design.',
        keywords: ['Data Systems', 'Architecture', 'Review'],
        citations: 8,
      },
      {
        id: 'review-2',
        title: 'Review: "The Pragmatic Programmer" (20th Anniversary Edition)',
        authors: 'Prof. Manish K. Verma',
        year: 2022,
        journal: 'Computing Reviews',
        doi: '10.1234/cr.2022.005',
        url: 'https://example.com/review2',
        abstract: 'Critical analysis of this classic software development guide.',
        keywords: ['Software Development', 'Best Practices', 'Professional Development'],
        citations: 5,
      },
    ],
  },
];