export interface Publication {
  id: string;
  title: string;
  authors?: string;
  year: number;
  publisher?: string;
  journal?: string;
  journal_or_book?: string;
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
  type?: string;
  // Book Review specific fields
  reviewer?: string;
  bookTitle?: string;
  bookAuthors?: string;
  bookPublisher?: string;
  bookYear?: number;
  // Book specific fields
  image?: string;
  buyUrl?: string;
  [key: string]: string | number | string[] | boolean | undefined;
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
    icon: 'MenuBook',
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
        image: '/assets/book-published/book1.png',
        buyUrl: 'https://www.routledge.com/New-Education-Policy-Sustainable-Development-and-Nation-Building-Perspectives-Issues-and-Challenges/Verma/p/book/9781032996417',
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
        image: '/assets/book-published/book2.png',
        buyUrl: 'https://www.amazon.com/dp/8131614328/ref=olp-opf-redir?aod=1&condition=new',
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
        image: '/assets/book-published/book3.png',
        buyUrl: 'https://www.directtextbook.com/isbn/9788131614600-roadmap-for-inclusive-development',
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
        image: '/assets/book-published/book5.png',
        buyUrl: 'https://www.directtextbook.com/isbn/9788131614716-national-education-policy-and-sustainable-development-goals',
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
        image: '/assets/book-published/book6.png',
        buyUrl: 'https://www.campusbooks.com/search/9788131614716?buysellrent=buy&popup',
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
        image: '/assets/book-published/book7.png',
        buyUrl: 'https://isbnsearch.org/isbn/9789813362482',
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
        image: '/assets/book-published/book8.png',
        buyUrl: 'https://www.amazon.com/dp/1138363774/ref=olp-opf-redir?aod=1&condition=new',
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
        image: '/assets/book-published/book9.png',
        buyUrl: 'https://www.directtextbook.com/isbn/9788121214155-globalisation-social-justice-and-sustainable-development-in-india',
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
        image: '/assets/book-published/book11.png',
        buyUrl: 'https://www.alibris.com/cart.view?siteID=aG0YMzso4D0-G7C79OMQ11GmxzhwEhwrMg',
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
    "id": "books-edited",
    "title": "Books Edited",
    "icon": "AutoStories",
    "description": "Edited volumes, peer‑reviewed textbooks and translated works",
    "publications": [
      {
        "id": "book-edit-1",
        "title": "Sociological Theories",
        "authors": "Edited/Peer Reviewed by Prof. Manish K. Verma",
        "year": 2013,
        "publisher": "Vikas Publishing House Pvt. Ltd., Noida",
        "isbn": "978-93-259-6446-4",
        "abstract": "A peer‑reviewed textbook prepared for Sikkim Manipal University covering classical and contemporary sociological theories for undergraduate and postgraduate curricula.",
        "keywords": ["Sociological Theory", "Classical Theory", "Contemporary Theory", "Curriculum"],
        "citations": 0
      },
      {
        "id": "book-edit-2",
        "title": "Social Demography",
        "authors": "Edited/Peer Reviewed by Prof. Manish K. Verma",
        "year": 2013,
        "publisher": "Vikas Publishing House Pvt. Ltd., Noida",
        "isbn": "978-93-259-6826-4",
        "abstract": "Course material and edited volume on population studies and demographic methods prepared for Sikkim Manipal University.",
        "keywords": ["Demography", "Population Studies", "Quantitative Methods"],
        "citations": 0
      },
      {
        "id": "book-edit-3",
        "title": "Political Sociology",
        "authors": "Edited/Peer Reviewed by Prof. Manish K. Verma",
        "year": 2013,
        "publisher": "Vikas Publishing House Pvt. Ltd., Noida",
        "isbn": "978-93-5119-164-3",
        "abstract": "An edited textbook addressing state, power, political institutions and social movements for university courses.",
        "keywords": ["Political Sociology", "State and Society", "Social Movements"],
        "citations": 0
      },
      {
        "id": "book-edit-4",
        "title": "Social Movements in India",
        "authors": "Edited/Peer Reviewed by Prof. Manish K. Verma",
        "year": 2013,
        "publisher": "Vikas Publishing House Pvt. Ltd., Noida",
        "isbn": "978-93-259-6029-9",
        "abstract": "A collection of essays and readings on the history, forms and impacts of social movements in India, compiled for higher education use.",
        "keywords": ["Social Movements", "Collective Action", "Indian Society"],
        "citations": 0
      },
      {
        "id": "book-edit-5",
        "title": "Social Change and Social Problems in India",
        "authors": "Edited/Peer Reviewed by Prof. Manish K. Verma",
        "year": 2006,
        "publisher": "Board of Secondary Education, Rajasthan, Ajmer",
        "abstract": "Edited course material addressing social change, development challenges and social problems tailored for secondary education syllabi.",
        "keywords": ["Social Change", "Social Problems", "Education", "Curriculum"],
        "citations": 0
      }
    ]
  },
  {
    "id": "articles",
    "title": "Articles",
    "icon": "Article",
    "description": "Journal articles, book chapters and course material extracted from the provided document",
    "publications": [
      {
        "id": "religious-practices-of-the-third-gender-in-lucknow-city-of-uttar-radesh",
        "title": "Religious Practices of the Third Gender in Lucknow City of Uttar Pradesh, India",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "The Eastern Anthropologists",
        "volume": "78",
        "issue": "1-2",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Third Gender",
          "Religious Practices",
          "Lucknow",
          "Gender Studies"
        ],
        "citations": 0
      },
      {
        "id": "new-education-policy-sustainable-development-and-nation-building-historical-moorings-contemporary-discourse-and-future-prospects",
        "title": "New Education Policy, Sustainable Development and Nation Building: Historical Moorings, Contemporary Discourse and Future Prospects",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Chapter in New Education Policy, Sustainable Development and Nation Building: Perspectives, Issues and Challenges (Routledge, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-1032996417",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "NEP 2020",
          "Sustainable Development",
          "Nation Building"
        ],
        "citations": 0
      },
      {
        "id": "education-and-sustainable-development-challenges-opportunities-and-future-prospects",
        "title": "Education and Sustainable Development: Challenges, Opportunities and Future Prospects",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Chapter in Education and Sustainable Development: Challenges, Opportunities & Future Prospects (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-1432-7",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Education",
          "Sustainable Development",
          "Policy"
        ],
        "citations": 0
      },
      {
        "id": "transforming-india-towards-nation-building-through-the-lens-of-national-education-policy-and-sustainable-development-goals",
        "title": "Transforming India towards Nation Building: Through the Lens of National Education Policy and Sustainable Development Goals",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Chapter in National Education Policy and Sustainable Development Goals (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-1471-6",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "NEP 2020",
          "SDGs",
          "Nation Building"
        ],
        "citations": 0
      },
      {
        "id": "a-roadmap-for-inclusive-development-national-education-policy-2020-sustainable-development-goals-and-policy-integration",
        "title": "A Roadmap for Inclusive Development: National Education Policy (2020), Sustainable Development Goals and Policy Integration",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Chapter in A Roadmap for Inclusive Development: National Education Policy (2020), Sustainable Development Goals and Policy Integration (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-1460-0",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Inclusive Development",
          "NEP 2020",
          "Policy Integration"
        ],
        "citations": 0
      },
      {
        "id": "nai-shikhsha-niti-evam-bharat-ka-samaveshi-vikas-sambhavnain-chunautiyan-evam-navinikaran",
        "title": "Nai Shikhsha Niti Evam Bharat Ka Samaveshi Vikas: Sambhavnain, Chunautiyan Evam Navinikaran",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Chapter in Nai Shikhsha Niti Evam Bharat Ka Samaveshi Vikas: Sambhavnain, Chunautiyan Evam Navinikaran (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-1468-6",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "NEP",
          "Inclusive Development",
          "Hindi"
        ],
        "citations": 0
      },
      {
        "id": "the-dynamics-of-clean-fuel-usage-in-peri-urban-areas-of-uttar-pradesh-womens-perspectives",
        "title": "The Dynamics of Clean Fuel Usage in Peri-urban Areas of Uttar Pradesh: Women's Perspectives",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Indian Journal of Gender Studies (Sage Publications)",
        "volume": "",
        "issue": "03.04.2025",
        "pages": "",
        "doi": "10.1177/09715215251323878",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Clean Fuel",
          "LPG",
          "Peri-urban",
          "Women"
        ],
        "citations": 0
      },
      {
        "id": "education-and-sustainable-development-challenges-opportunities-and-future-prospects-duplicate",
        "title": "Education and Sustainable Development: Challenges, Opportunities & Future Prospects",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal_or_book": "Chapter in Education and Sustainable Development: Challenges, Opportunities & Future Prospects (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-1432-7",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Education",
          "Sustainable Development"
        ],
        "citations": 0
      },
      {
        "id": "sociology-of-india-need-for-indigenisation-of-sociology-for-india",
        "title": "Sociology of India: Need for Indigenisation of Sociology for India",
        "authors": "Prof. Manish K. Verma",
        "year": 0,
        "journal_or_book": "Paper in NEP 2020: Insights for Curriculum and Content in Sociology (Vidya Bharti Uchcha Siksha Sansthan, Research India Press)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-971796-4-8",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter / Paper",
        "abstract": "",
        "keywords": [
          "Indigenisation",
          "Sociology",
          "Curriculum"
        ],
        "citations": 0
      },
      {
        "id": "issues-and-concerns-of-elderly-women-in-india-a-sociological-analysis",
        "title": "Issues and Concerns of Elderly Women in India: A Sociological Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2024,
        "journal_or_book": "Gyanshauryam, International Scientific Referred Research Journal",
        "volume": "Vol. 7",
        "issue": "Issue 3 (May-June 2024)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Elderly Women",
          "Ageing",
          "Sociology"
        ],
        "citations": 0
      },
      {
        "id": "fuelling-women-lives-with-lpg-a-sociological-study-of-fuel-use-pattern-amidst-policy-intervention-in-peri-urban-areas-of-uttar-pradesh",
        "title": "Fuelling Women Lives with LPG: A Sociological Study of Fuel Use Pattern Amidst Policy Intervention in Peri-Urban Areas of Uttar Pradesh",
        "authors": "Prof. Manish K. Verma",
        "year": 2024,
        "journal_or_book": "Chapter in Sustainability: Science, Policy and Practice in India - Challenges & Opportunities (Springer Nature, eds. Venkatesh Dutta & Priyanka Ghosh)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-3-031-50134-0",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "LPG",
          "Peri-urban",
          "Policy Intervention"
        ],
        "citations": 0
      },
      {
        "id": "economic-inclusion-of-transgender-community",
        "title": "Economic Inclusion of Transgender Community",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal_or_book": "Journal Shodh Disha, Bijnor, U.P.",
        "volume": "",
        "issue": "Issue 62/6 (Apr-Jun 2023)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Transgender",
          "Economic Inclusion"
        ],
        "citations": 0
      },
      {
        "id": "women-an-explorations-of-womens-coping-mechanism",
        "title": "Women: An Explorations of Women's Coping Mechanism",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal_or_book": "Journal Shodh Disha, Bijnor, U.P.",
        "volume": "",
        "issue": "Issue 62/6 (Apr-Jun 2023)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Women",
          "Coping Mechanisms"
        ],
        "citations": 0
      },
      {
        "id": "the-prevalence-of-elderly-abuse-in-india-a-sociological-analysis",
        "title": "The Prevalence of Elderly Abuse in India: A Sociological Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal_or_book": "Journal Shodh Disha, Bijnor, U.P.",
        "volume": "",
        "issue": "Issue 62/6 (Apr-Jun 2023)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Elderly Abuse",
          "Sociology"
        ],
        "citations": 0
      },
      {
        "id": "environmental-change-and-forced-displacement-understanding-the-phenomenon-through-sociological-lenses",
        "title": "Environmental Change and Forced Displacement: Understanding the Phenomenon Through Sociological Lenses",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal_or_book": "Madhya Pradesh Journal of Social Sciences (MP Institute of Social Science Research, Ujjain)",
        "volume": "Vol No. 28",
        "issue": "No. 5 (May 2023)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Environmental Change",
          "Forced Displacement"
        ],
        "citations": 0
      },
      {
        "id": "work-from-home-and-associated-cyber-vulnerabilities-in-metropolitan-cities",
        "title": "Work from Home and Associated Cyber Vulnerabilities in Metropolitan Cities",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal_or_book": "Journal Shodhsamhita, Nagpur, Maharashtra",
        "volume": "Vol X",
        "issue": "Issue 5(1) (Jan-Jun 2023)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Work from Home",
          "Cybersecurity",
          "Metropolitan"
        ],
        "citations": 0
      },
      {
        "id": "mapping-environmental-sociology-in-india",
        "title": "Mapping Environmental Sociology in India",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal_or_book": "Journal Shodh Disha, Bijnor, U.P.",
        "volume": "",
        "issue": "Issue 61/4 (Jan-Mar 2023)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Environmental Sociology",
          "Mapping"
        ],
        "citations": 0
      },
      {
        "id": "foreword-cancer-pandemic-charting-social-alleways",
        "title": "Foreword (Cancer Pandemic: Charting Social Alleways)",
        "authors": "Prof. Manish K. Verma",
        "year": 2022,
        "journal_or_book": "Foreword in Cancer Pandemic: Charting Social Alleways (Sourav Madhur Dey, ed.; Samasamayik Prokashan)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-93-85406-24-9",
        "url": "",
        "pdfUrl": "",
        "type": "Foreword / Chapter",
        "abstract": "",
        "keywords": [
          "Foreword",
          "Cancer Pandemic"
        ],
        "citations": 0
      },
      {
        "id": "socio-cultural-environment-reproductive-health-and-surrogacy-a-sociological-analysis",
        "title": "Socio-cultural Environment, Reproductive Health and Surrogacy: A Sociological Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2022,
        "journal_or_book": "Chapter in Surrogacy: A Socio-cultural and Legal Perspective in India (Prashant Tripathi, ed.; Aryan Publications)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "93-94049-10-9",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Surrogacy",
          "Reproductive Health",
          "Sociology"
        ],
        "citations": 0
      },
      {
        "id": "introduction-environment-and-sustainable-development-perspectives-and-issues",
        "title": "Introduction (Environment and Sustainable Development: Perspectives and Issues)",
        "authors": "Prof. Manish K. Verma",
        "year": 2022,
        "journal_or_book": "Introduction chapter in Environment and Sustainable Development: Perspectives and Issues (Routledge, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-0-367-54182-8",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter / Introduction",
        "abstract": "",
        "keywords": [
          "Environment",
          "Sustainable Development",
          "Introduction"
        ],
        "citations": 0
      },
      {
        "id": "examining-inter-linkages-between-water-scarcity-and-human-security-a-case-study-of-bundelkhand-region-of-uttar-pradesh-india",
        "title": "Examining Inter-linkages between Water Scarcity and Human Security: A Case Study of Bundelkhand Region of Uttar Pradesh, India",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "journal_or_book": "Chapter in Water Conflicts and Resistance: Issues and Challenges in South Asia (Routledge, ed. Venkatesh Dutta)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "9780367367299",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Water Scarcity",
          "Human Security",
          "Bundelkhand"
        ],
        "citations": 0
      },
      {
        "id": "social-structure-and-change-among-tribals-in-india",
        "title": "Social Structure and Change Among Tribals in India",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "journal_or_book": "International Journal Shodh Sarita, Lucknow, U.P.",
        "volume": "",
        "issue": "Vol 8, Issue 29 (Jan-Mar 2021)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Tribal Studies",
          "Social Change"
        ],
        "citations": 0
      },
      {
        "id": "introduction-environment-development-and-sustainability-in-india-perspectives-issues-and-alternatives",
        "title": "Introduction (Environment, Development and Sustainability in India: Perspectives, Issues and Alternatives)",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "journal_or_book": "Introduction chapter in Environment, Development and Sustainability in India (Springer Nature, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-981-33-6248-2",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter / Introduction",
        "abstract": "",
        "keywords": [
          "Environment",
          "Development",
          "Introduction"
        ],
        "citations": 0
      },
      {
        "id": "impact-of-poverty-and-exclusion-an-empirical-analysis",
        "title": "Impact of Poverty and Exclusion: An Empirical Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2020,
        "journal_or_book": "Chapter in The Routledge Handbook of Inequality, Exclusion and Stigma in India (Routledge, eds. NMP Verma & Alpana Shrivastava)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-0-367-70710-1",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Poverty",
          "Exclusion",
          "Empirical Analysis"
        ],
        "citations": 0
      },
      {
        "id": "introduction-globalization-environment-and-social-justice-perspectives-issues-and-concerns",
        "title": "Introduction (Globalization, Environment and Social Justice: Perspectives, Issues and Concerns)",
        "authors": "Prof. Manish K. Verma",
        "year": 2019,
        "journal_or_book": "Introduction chapter in Globalization, Environment and Social Justice (Routledge, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-1-138-36377-9",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter / Introduction",
        "abstract": "",
        "keywords": [
          "Globalization",
          "Environment",
          "Social Justice"
        ],
        "citations": 0
      },
      {
        "id": "urban-sanitation-in-uttar-pradesh-status-policy-perspective-and-need-for-a-faecal-sludge-management",
        "title": "Urban Sanitation in Uttar Pradesh: Status, Policy, Perspective and Need for a Faecal Sludge Management",
        "authors": "Prof. Manish K. Verma",
        "year": 2019,
        "journal_or_book": "Social Science and Development Policy (International Journal), Lucknow",
        "volume": "Vol. 5",
        "issue": "No. 1 (Jan-Jun 2019)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Urban Sanitation",
          "Faecal Sludge Management",
          "Uttar Pradesh"
        ],
        "citations": 0
      },
      {
        "id": "issues-of-poverty-and-development-in-bundelkhand-region-of-uttar-pradesh-an-empirical-analysis",
        "title": "Issues of Poverty and Development in Bundelkhand Region of Uttar Pradesh: An Empirical Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2017,
        "journal_or_book": "International Journal Research Process, Aurangabad, Maharashtra",
        "volume": "",
        "issue": "Vol 5, No. 1 & 2 (2017)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Poverty",
          "Bundelkhand",
          "Development"
        ],
        "citations": 0
      },
      {
        "id": "introduction-globalization-social-justice-and-sustainable-development-in-india",
        "title": "Introduction (Globalization, Social Justice and Sustainable Development in India)",
        "authors": "Prof. Manish K. Verma",
        "year": 2017,
        "journal_or_book": "Introduction chapter in Globalization, Social Justice and Sustainable Development in India (Gyan Publication House, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-212-1415-5",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter / Introduction",
        "abstract": "",
        "keywords": [
          "Globalization",
          "Social Justice"
        ],
        "citations": 0
      },
      {
        "id": "development-induced-displacement-sezs-and-the-state-of-farmers-in-india-some-insights-from-the-recent-experiences",
        "title": "Development Induced Displacement, SEZs and the State of Farmers in India: Some Insights from the recent Experiences",
        "authors": "Prof. Manish K. Verma",
        "year": 2016,
        "journal_or_book": "Journal of the Human Rights Commission, India",
        "volume": "",
        "issue": "Vol. 15 (2016)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Displacement",
          "SEZs",
          "Farmers",
          "Human Rights"
        ],
        "citations": 0
      },
      {
        "id": "gandhi-and-modernity-an-inquest-in-the-21st-century",
        "title": "Gandhi and Modernity: An Inquest in the 21st Century",
        "authors": "Prof. Manish K. Verma",
        "year": 2016,
        "journal_or_book": "Chapter in Gandhian Way in the Era of Globalization (Prof. Anand Kumar, ed.; Winshield Press)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-930703-2-1",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Gandhi",
          "Modernity"
        ],
        "citations": 0
      },
      {
        "id": "development-food-insecurity-and-health-predicaments-a-study-of-bundelkhand-region-of-uttar-pradesh",
        "title": "Development, Food Insecurity and Health Predicaments: A Study of Bundelkhand Region of Uttar Pradesh",
        "authors": "Prof. Manish K. Verma",
        "year": 2016,
        "journal_or_book": "Chapter in Communities and Social Development in India (Rabindra Garada, ed.; Avon Publications)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-93-8183-970-6",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Food Insecurity",
          "Bundelkhand",
          "Health"
        ],
        "citations": 0
      },
      {
        "id": "environmental-catastrophe-human-rights-and-governance-a-sociological-insight-in-the-sorrow-of-bihar",
        "title": "Environmental Catastrophe, Human Rights and Governance: A Sociological Insight in the 'Sorrow of Bihar'",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal_or_book": "International Journal Research Process, Aurangabad, Maharashtra",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Environmental Catastrophe",
          "Human Rights",
          "Governance",
          "Bihar"
        ],
        "citations": 0
      },
      {
        "id": "development-dilemma-the-paradoxes-of-scientific-advancement-and-ingrained-social-accountability",
        "title": "Development Dilemma: The Paradoxes of Scientific Advancement and Ingrained Social Accountability",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal_or_book": "Social Science and Development Policy (International Journal), Lucknow",
        "volume": "Vol. 1",
        "issue": "No. 1 (Jan-Jun 2015)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Development Dilemma",
          "Science",
          "Social Accountability"
        ],
        "citations": 0
      },
      {
        "id": "development-induced-displacement-policy-information-awareness-and-tribulations",
        "title": "Development Induced Displacement: Policy, Information, Awareness and Tribulations",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal_or_book": "Chapter in Globalization and Environment: Discourse, Policies and Practices (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-0709-1",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Displacement",
          "Policy",
          "Awareness"
        ],
        "citations": 0
      },
      {
        "id": "introduction-globalization-and-environment-discourse-policies-and-practices",
        "title": "Introduction (Globalization and Environment: Discourse, Policies and Practices)",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal_or_book": "Introduction chapter in Globalization and Environment: Discourse, Policies and Practices (Rawat Publications, ed. Manish K. Verma)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-0709-1",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter / Introduction",
        "abstract": "",
        "keywords": [
          "Globalization",
          "Environment"
        ],
        "citations": 0
      },
      {
        "id": "social-exclusion-and-health-predicaments-a-study-of-bundelkhand",
        "title": "Social Exclusion and Health Predicaments: A Study of Bundelkhand",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal_or_book": "Golden Research Thoughts (International Multidisciplinary Journal), Solapur",
        "volume": "",
        "issue": "Vol. 4, Issue 12 (12 June 2015)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Social Exclusion",
          "Health",
          "Bundelkhand"
        ],
        "citations": 0
      },
      {
        "id": "health-tradition-and-awareness-a-perspective-on-the-tribal-health-care-practices",
        "title": "Health, Tradition and Awareness: A Perspective on the Tribal Health Care Practices",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal_or_book": "International Journal Research Process, Aurangabad, Maharashtra",
        "volume": "",
        "issue": "Vol 2, No. 2 (July-Dec 2014)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Tribal Health",
          "Tradition",
          "Healthcare Practices"
        ],
        "citations": 0
      },
      {
        "id": "environmental-health-of-the-communities-of-fringe-areas-a-study-of-lucknow-city",
        "title": "Environmental Health of the Communities of Fringe Areas: A Study of Lucknow City",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal_or_book": "Indian Streams Research Journal (International Multidisciplinary Research Journal)",
        "volume": "",
        "issue": "Vol. 4, Issue 11 (Dec 2014)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Environmental Health",
          "Fringe Areas",
          "Lucknow"
        ],
        "citations": 0
      },
      {
        "id": "relevance-of-gandhian-modernity-in-the-contemporary-era",
        "title": "Relevance of Gandhian Modernity in the Contemporary Era",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal_or_book": "Research Process, International Journal of Social Research Foundation, Aurangabad",
        "volume": "",
        "issue": "Vol. 2, No. 1 (Jan-Jun 2014)",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Gandhian Modernity",
          "Contemporary Era"
        ],
        "citations": 0
      },
      {
        "id": "food-security-existing-policies-and-challenges-with-reference-to-bundelkhand-region-of-uttar-pradesh",
        "title": "Food Security: Existing Policies and Challenges with reference to Bundelkhand Region of Uttar Pradesh",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal_or_book": "Vikash International Journal of Management, Science and Technology, Delhi",
        "volume": "",
        "issue": "Jan-Feb 2014",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Food Security",
          "Bundelkhand",
          "Policy"
        ],
        "citations": 0
      },
      {
        "id": "tribes-of-india-retrograde-development-and-state-policies",
        "title": "Tribes of India: Retrograde Development and State Policies",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal_or_book": "Chapter in Social Development in India (Manvendra Pratap Singh, ed.; Bharat Book Centre)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-7678-223-4",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Tribes",
          "Development",
          "State Policies"
        ],
        "citations": 0
      },
      {
        "id": "modernization-of-indian-tradition-introspecting-equitable-development-paradigm",
        "title": "Modernization of Indian Tradition: Introspecting Equitable Development Paradigm",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal_or_book": "Chapter in Polity, Civil Society and Development (I. P. Modi, ed.; Rawat Publications)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-0642-1",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Modernization",
          "Tradition",
          "Equitable Development"
        ],
        "citations": 0
      },
      {
        "id": "policy-planning-in-development-projects-process-and-limitations",
        "title": "Policy Planning in Development Projects: Process and Limitations",
        "authors": "Prof. Manish K. Verma",
        "year": 2012,
        "journal_or_book": "Chapter in Interrogating Development (Prof. Vishwajit Ghosh, ed.; Rawat Publications)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "978-81-316-0476-2",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Policy Planning",
          "Development Projects"
        ],
        "citations": 0
      },
      {
        "id": "plaguing-democracy-paradigm-for-an-alternative-political-culture",
        "title": "Plaguing Democracy: Paradigm for an Alternative Political Culture",
        "authors": "Prof. Manish K. Verma",
        "year": 2010,
        "journal_or_book": "Chapter in Quest for Participatory Democracy (Prof. Anand Kumar & Dr. Manish Tiwari, eds.; Rawat Publications)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "81-316-0330-X",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Democracy",
          "Political Culture",
          "Participatory Democracy"
        ],
        "citations": 0
      },
      {
        "id": "social-structure-and-social-problems-theory-and-interrelations",
        "title": "Social Structure and Social Problems: Theory and Interrelations",
        "authors": "Prof. Manish K. Verma",
        "year": 2008,
        "journal_or_book": "Course material for Vardhman Mahavir Kota Open University, Kota",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Course material",
        "abstract": "",
        "keywords": [
          "Social Structure",
          "Social Problems",
          "Course Material"
        ],
        "citations": 0
      },
      {
        "id": "social-action-meaning-definition-and-theories",
        "title": "Social Action: Meaning, Definition and Theories",
        "authors": "Prof. Manish K. Verma",
        "year": 2008,
        "journal_or_book": "Course material for Vardhman Mahavir Kota Open University, Kota",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Course material",
        "abstract": "",
        "keywords": [
          "Social Action",
          "Theories",
          "Course Material"
        ],
        "citations": 0
      },
      {
        "id": "social-structure-and-function",
        "title": "Social Structure & Function",
        "authors": "Prof. Manish K. Verma",
        "year": 2008,
        "journal_or_book": "Course material for Vardhman Mahavir Kota Open University, Kota",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Course material",
        "abstract": "",
        "keywords": [
          "Social Structure",
          "Function",
          "Course Material"
        ],
        "citations": 0
      },
      {
        "id": "rethinking-modernity-a-sociological-engagement-with-gandhi",
        "title": "Rethinking Modernity: A Sociological Engagement with Gandhi",
        "authors": "Prof. Manish K. Verma",
        "year": 2007,
        "journal_or_book": "Gandhi Marg, Gandhi Peace Foundation, Delhi",
        "volume": "",
        "issue": "Apr-Jun 2007",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Gandhi",
          "Modernity",
          "Sociology"
        ],
        "citations": 0
      },
      {
        "id": "do-we-really-need-development-some-empirical-probing",
        "title": "Do We Really Need Development: Some Empirical Probing",
        "authors": "Prof. Manish K. Verma",
        "year": 2007,
        "journal_or_book": "Chapter in edited volume published from Agra (R.K. Saxena, ed.)",
        "volume": "",
        "issue": "",
        "pages": "",
        "doi": "",
        "isbn": "81-88805-67-X",
        "url": "",
        "pdfUrl": "",
        "type": "Book chapter",
        "abstract": "",
        "keywords": [
          "Development",
          "Empirical Study"
        ],
        "citations": 0
      },
      {
        "id": "social-cost-of-development-deconstructing-some-hidden-realities",
        "title": "Social Cost of Development: Deconstructing Some Hidden Realities",
        "authors": "Prof. Manish K. Verma",
        "year": 2005,
        "journal_or_book": "SHODHAK (journal), Malviya Nagar, Jaipur",
        "volume": "",
        "issue": "May-Aug 2005",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Social Cost",
          "Development"
        ],
        "citations": 0
      },
      {
        "id": "development-induced-displacement-a-socio-economic-study-of-thermal-power-projects",
        "title": "Development Induced Displacement: A Socio-Economic Study of Thermal Power Projects",
        "authors": "Prof. Manish K. Verma",
        "year": 2004,
        "journal_or_book": "Man in India Journal, Church Road, Ranchi (Jharkhand)",
        "volume": "",
        "issue": "July-Dec 2004",
        "pages": "",
        "doi": "",
        "isbn": "",
        "url": "",
        "pdfUrl": "",
        "type": "Article",
        "abstract": "",
        "keywords": [
          "Development Induced Displacement",
          "Thermal Power Projects",
          "Socio-Economic Study"
        ],
        "citations": 0
      }
    ]
  } ,
  {
  "id": "book-reviews",
  "title": "Book Reviews",
  "icon": "Star",
  "description": "Professional book reviews extracted from the provided document",
  "publications": [
    {
      "id": "review-betwixt-development-and-discontent-dalit-adivasis-on-the-south-eastern-margins-of-uttar-pradesh",
      "title": "Review: \"Betwixt Development and Discontent: Dalit Adivasis on the South-Eastern Margins of Uttar Pradesh\" by Lalta Prasad",
      "reviewer": "Prof. Manish K. Verma",
      "year": 2020,
      "journal": "Sociological Bulletin",
      "volume": "Vol 69",
      "issue": "Issue 3 (Nov-Dec 2020)",
      "pages": "",
      "bookTitle": "Betwixt Development and Discontent: Dalit Adivasis on the South-Eastern Margins of Uttar Pradesh",
      "bookAuthors": "Lalta Prasad",
      "bookPublisher": "Concept Publishing Company Pvt. Ltd., Delhi",
      "bookYear": 2017,
      "doi": "",
      "url": "",
      "abstract": "",
      "keywords": [
        "Dalit",
        "Adivasis",
        "Development",
        "Social Exclusion",
        "Rural Studies"
      ],
      "citations": 0
    },
    {
      "id": "review-living-with-violence-anthropology-of-events-and-everyday-life",
      "title": "Review: \"Living with Violence: Anthropology of Events and Everyday Life\" edited by Roma Chatterji and Deepak Mehta",
      "reviewer": "Prof. Manish K. Verma",
      "year": 2012,
      "journal": "International Sociology Review of Books (ISRB)",
      "volume": "27",
      "issue": "5 (Sept 2012)",
      "pages": "635-637",
      "bookTitle": "Living with Violence: Anthropology of Events and Everyday Life",
      "bookAuthors": "Roma Chatterji; Deepak Mehta (eds.)",
      "bookPublisher": "Routledge Taylor & Francis Group, New Delhi",
      "bookYear": 2007,
      "doi": "",
      "url": "",
      "abstract": "",
      "keywords": [
        "Violence",
        "Anthropology",
        "Everyday Life",
        "Ethnography"
      ],
      "citations": 0
    },
    {
      "id": "review-beyond-relocation-the-imperative-of-sustainable-resettlement",
      "title": "Review: \"Beyond Relocation: The Imperative of Sustainable Resettlement\" edited by Renu Modi",
      "reviewer": "Prof. Manish K. Verma",
      "year": 2010,
      "journal": "Sociological Bulletin",
      "volume": "Vol. 59",
      "issue": "No. 3 (Sept-Dec 2010)",
      "pages": "",
      "bookTitle": "Beyond Relocation: The Imperative of Sustainable Resettlement",
      "bookAuthors": "Renu Modi (ed.)",
      "bookPublisher": "SAGE Publications India, New Delhi",
      "bookYear": 2009,
      "doi": "",
      "url": "",
      "abstract": "",
      "keywords": [
        "Resettlement",
        "Displacement",
        "Sustainable Development",
        "Policy"
      ],
      "citations": 0
    }
  ]
}

];