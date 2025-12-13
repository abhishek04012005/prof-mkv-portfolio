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
  isbn?: string;
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
    description: 'Authored and edited books',
    publications: [
      {
        id: 'book-pub-1',
        title: 'New Education Policy, Sustainable Development and Nation Building: Perspectives, Issues and Challenges',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2025,
        publisher: 'Routledge, Taylor & Francis Group, UK',
        isbn: '978-1-03-299641-7',
        abstract: 'Edited book exploring perspectives, issues, and challenges related to New Education Policy, sustainable development, and nation building.',
        keywords: ['Education Policy', 'Sustainable Development', 'Nation Building', 'Higher Education'],
      },
      {
        id: 'book-pub-2',
        title: 'Education and Sustainable Development: Challenges, Opportunities & Future Prospects',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2025,
        publisher: 'Rawat Publications, Jaipur & New Delhi',
        isbn: '978-81-316-1432-7',
        abstract: 'Comprehensive edited volume addressing challenges and opportunities in education and sustainable development.',
        keywords: ['Education', 'Sustainable Development', 'Future Prospects', 'Development'],
      },
      {
        id: 'book-pub-3',
        title: 'A Roadmap for Inclusive Development: National Education Policy (2020), Sustainable Development Goals and Policy Integration',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2025,
        publisher: 'Rawat Publications, Jaipur & New Delhi',
        isbn: '978-81-316-1460-0',
        abstract: 'Edited book providing a roadmap for inclusive development through integration of NEP 2020 and SDGs.',
        keywords: ['Inclusive Development', 'National Education Policy', 'Sustainable Development Goals', 'Policy Integration'],
      },
      {
        id: 'book-pub-4',
        title: 'Nai Shikhsha Niti Evam Bharat Ka Samaveshi Vikas: Sambhavnain, Chunautiyan Evam Navinikaran',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2025,
        publisher: 'Rawat Publications, Jaipur & New Delhi',
        isbn: '978-81-316-1468-6',
        abstract: 'Edited book in Hindi discussing New Education Policy and inclusive development in India.',
        keywords: ['Education', 'Development', 'Hindi', 'Policy'],
      },
      {
        id: 'book-pub-5',
        title: 'National Education Policy and Sustainable Development Goals',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2025,
        publisher: 'Rawat Publications, Jaipur & New Delhi',
        isbn: '978-81-316-1471-6',
        abstract: 'Edited volume examining the relationship between National Education Policy and Sustainable Development Goals.',
        keywords: ['Education Policy', 'Sustainable Development', 'SDGs', 'Development'],
      },
      {
        id: 'book-pub-6',
        title: 'Environment and Sustainable Development: Perspectives and Issues',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2022,
        publisher: 'Routledge, Taylor & Francis Group, UK',
        isbn: '978-0-367-54182-8',
        abstract: 'Edited book exploring various perspectives and issues in environment and sustainable development.',
        keywords: ['Environment', 'Sustainable Development', 'Environmental Issues', 'Perspectives'],
      },
      {
        id: 'book-pub-7',
        title: 'Environment, Development and Sustainability in India: Perspectives, Issues and Alternatives',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2021,
        publisher: 'Springer Nature, Germany/Singapore',
        isbn: '978-981-33-6248-2',
        abstract: 'Comprehensive edited volume on environmental, developmental, and sustainability issues in India.',
        keywords: ['Environment', 'Development', 'Sustainability', 'India', 'Environmental Issues'],
      },
      {
        id: 'book-pub-8',
        title: 'Globalization, Environment and Social Justice: Perspectives, Issues and Concerns',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2019,
        publisher: 'Routledge, Taylor & Francis Group, UK',
        isbn: '978-1-138-36377-9',
        abstract: 'Edited book addressing perspectives, issues, and concerns at the intersection of globalization, environment, and social justice.',
        keywords: ['Globalization', 'Environment', 'Social Justice', 'Environmental Justice'],
      },
      {
        id: 'book-pub-9',
        title: 'Globalization, Social Justice and Sustainable Development in India',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2017,
        publisher: 'Gyan Publication House, New Delhi',
        isbn: '978-81-212-1415-5',
        abstract: 'Edited volume exploring globalization, social justice, and sustainable development in the Indian context.',
        keywords: ['Globalization', 'Social Justice', 'Sustainable Development', 'India'],
      },
      {
        id: 'book-pub-10',
        title: 'Peri-Urban Environment',
        authors: 'Prof. Manish K. Verma',
        year: 2017,
        publisher: 'Windshield Press, Delhi',
        isbn: '978-81-930703-1-4',
        abstract: 'Book focusing on environmental issues and challenges in peri-urban areas.',
        keywords: ['Peri-Urban', 'Environment', 'Urban Development', 'Environmental Issues'],
      },
      {
        id: 'book-pub-11',
        title: 'Globalization and Environment: Discourse, Policies and Practices',
        authors: 'Edited by Prof. Manish K. Verma',
        year: 2015,
        publisher: 'Rawat Publications, Jaipur & New Delhi',
        isbn: '978-81-316-0709-1',
        abstract: 'Edited book examining discourse, policies, and practices related to globalization and environment.',
        keywords: ['Globalization', 'Environment', 'Environmental Policy', 'Sustainability'],
      },
      {
        id: 'book-pub-12',
        title: 'Development, Displacement and Resettlement',
        authors: 'Prof. Manish K. Verma',
        year: 2004,
        publisher: 'Rawat Publications, Jaipur & New Delhi',
        isbn: '81-7033-845-X',
        abstract: 'Book addressing issues of development, displacement, and resettlement.',
        keywords: ['Development', 'Displacement', 'Resettlement', 'Social Impact'],
      },
      {
        id: 'book-pub-13',
        title: 'Prarambhik Samajshastra',
        authors: 'Prof. Manish K. Verma',
        year: 2005,
        publisher: 'Board of Secondary Education, Rajasthan, Ajmer',
        abstract: 'Book on introductory sociology published by the Board of Secondary Education, Rajasthan.',
        keywords: ['Sociology', 'Hindi', 'Education', 'Secondary Education'],
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