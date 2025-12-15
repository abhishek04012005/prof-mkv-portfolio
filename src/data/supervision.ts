export interface SupervisionItem {
  id: string;
  title: string;
  studentName?: string;
  supervisorName?: string;
  year: number;
  startYear?: number;
  endYear?: number;
  status?: 'completed' | 'ongoing' | 'planned' | 'awarded';
  institution?: string;
  department?: string;
  specialization?: string;
  researchTopic?: string;
  abstract?: string;
  description?: string;
  keywords?: string[];
  outcomes?: string[];
  publications?: string[];
  awards?: string[];
  url?: string;
  downloadUrl?: string;
  doi?: string;
  degreeAwarded?: string;
  thesisTitle?: string;
  researchArea?: string;
  awardDate?: string;
  notes?: string;
  [key: string]: string | number | string[] | boolean | undefined;
}

export interface SupervisionCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  supervision: SupervisionItem[];
}

export const supervisionData: SupervisionCategory[] = [
  {
    "id": "phd-supervision",
    "title": "PhD Supervision",
    "icon": "SchoolOutlined",
    "description": "PhD students supervised and mentored; degrees awarded",
    "supervision": [
      {
        "id": "manisha-women-ageing-health-chapra-bihar-2025",
        "title": "Manisha Women Ageing Health Chapra Bihar 2025",
        "studentName": "Ms. Manisha",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Women, Ageing and Health: A Sociological Study of Chapra District of Bihar",
        "researchArea": "Ageing, Women's Health, Medical Sociology",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "February 2025",
        "year": 2025,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "pawan-kumar-river-bank-erosion-displacement-sharda-2023",
        "title": "Pawan Kumar River Bank Erosion Displacement Sharda 2023",
        "studentName": "Mr. Pawan Kumar",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "River Bank Erosion, Displacement and Sustainability: A Sociological Study of People Affected by River Sharda",
        "researchArea": "Environmental Sociology, Displacement, Sustainability",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "August 2023",
        "year": 2023,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "khusboo-globalization-new-tourism-wellness-yoga-2023",
        "title": "Khusboo Globalization New Tourism Wellness Yoga 2023",
        "studentName": "Dr. Khusboo",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Globalization and New Tourism: A Sociological Study of Wellness with Special Focus on Yoga",
        "researchArea": "Tourism Sociology, Wellness, Globalization, Yoga Studies",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "August 2023",
        "year": 2023,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "moni-chandra-ujjawala-yojna-health-environment-peri-urban-up-2023",
        "title": "Moni Chandra Ujjawala Yojna Health Environment Peri Urban Uttar Pradesh 2023",
        "studentName": "Dr. Moni Chandra",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Ujjawala Yojna, Health and Environment: A Sociological Study of Women of Peri-Urban Areas of Selected Cities of Uttar Pradesh",
        "researchArea": "Public Policy, Women's Health, Environmental Sociology",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "July 2023",
        "year": 2023,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "soniya-singh-sanitation-health-slums-allahabad-2022",
        "title": "Soniya Singh Sanitation Health Slums Allahabad 2022",
        "studentName": "Dr. Soniya Singh",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Issues of Sanitation and Health: A Sociological Study of Selected Slums of Allahabad City",
        "researchArea": "Urban Sociology, Sanitation, Public Health",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "May 2022",
        "year": 2022,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "arti-kureel-women-health-schemes-maternal-health-lucknow-2020",
        "title": "Arti Kureel Women Health Schemes Maternal Health Lucknow 2020",
        "studentName": "Dr. Arti Kureel",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Implementation of Women Health Related Schemes and its Impact on Maternal Health: A Sociological Study of Lucknow district",
        "researchArea": "Health Policy, Maternal Health, Program Evaluation",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "17 February 2020",
        "year": 2020,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "narendra-gupta-poverty-food-insecurity-health-bundelkhand-2017",
        "title": "Narendra Gupta Poverty Food Insecurity Health Bundelkhand 2017",
        "studentName": "Dr. Narendra Gupta",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Poverty, Food Insecurity and Health Predicaments: A Sociological Study of Selected Villages of Banda and Mahoba Districts of Bundelkhand Region of Uttar Pradesh",
        "researchArea": "Poverty Studies, Food Security, Rural Health",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "7 December 2017",
        "year": 2017,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "alka-shah-development-ecological-changes-tribal-health-up-2015",
        "title": "Alka Shah Development Ecological Changes Tribal Health Uttar Pradesh 2015",
        "studentName": "Dr. Alka Shah",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Development, Ecological Changes and Tribal Health: A Sociological Study of Selected Districts of Uttar Pradesh",
        "researchArea": "Tribal Studies, Environmental Sociology, Public Health",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "21 September 2015",
        "year": 2015,
        "status": "awarded",
        "notes": ""
      },
      {
        "id": "sandeep-kumar-rural-urban-interface-peri-urban-lucknow-2015",
        "title": "Sandeep Kumar Rural Urban Interface Peri Urban Lucknow 2015",
        "studentName": "Dr. Sandeep Kumar",
        "supervisorName": "Prof. Manish K. Verma",
        "degreeAwarded": "Ph.D.",
        "thesisTitle": "Rural Urban Interface and Formation of Peri-Urban Areas: A Sociological Study of Lucknow City",
        "researchArea": "Urban Studies, Peri-Urbanization, Rural-Urban Interface",
        "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
        "department": "Department of Sociology",
        "awardDate": "12 August 2015",
        "year": 2015,
        "status": "awarded",
        "notes": ""
      }
    ]
  }, {
  "id": "mphil-supervision",
  "title": "MPhil Supervision",
  "icon": "AutoStoriesOutlined",
  "description": "MPhil students supervised and guided; degrees awarded (extracted from provided document)",
  "supervision": [
    {
      "id": "pooja-tripathi-urbanization-deforestation-society-2022",
      "title": "Pooja Tripathi Urbanization Deforestation Society 2022",
      "studentName": "Ms. Pooja Tripathi",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Urbanization, Deforestation and Society: A Sociological Study",
      "researchArea": "Urbanization; Environmental Sociology; Deforestation",
      "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
      "department": "Department of Sociology",
      "awardDate": "15 October 2022",
      "year": 2022,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "nitu-mishra-global-warming-impact-society-2018",
      "title": "Nitu Mishra Global Warming Impact Society 2018",
      "studentName": "Ms. Nitu Mishra",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Global Warming and its Impact on Society: A Sociological Study",
      "researchArea": "Environmental Sociology; Climate Change and Society",
      "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
      "department": "Department of Sociology",
      "awardDate": "20 June 2018",
      "year": 2018,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "khusboo-patients-without-boundaries-medical-tourism-2017",
      "title": "Khusboo Patients Without Boundaries Medical Tourism 2017",
      "studentName": "Ms. Khusboo",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Patients Without Boundaries: A Sociological Inquiry into Medical Tourism in India",
      "researchArea": "Medical Sociology; Tourism Studies; Health and Mobility",
      "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
      "department": "Department of Sociology",
      "awardDate": "22 June 2017",
      "year": 2017,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "rakhi-agrawal-panchayati-raj-adhiniyam-mahila-prastithi-2008",
      "title": "Rakhi Agrawal Panchayati Raj Adhiniyam Mahila Prastithi 2008",
      "studentName": "Ms. Rakhi Agrawal",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Panchayati Raj Adhiniyam Ka Mahila Prastithi Per Prabhav",
      "researchArea": "Political Sociology; Gender and Local Governance",
      "institution": "Kota University, Kota, Rajasthan",
      "department": "Department of Sociology",
      "awardDate": "30 September 2008",
      "year": 2008,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "badrilal-meena-panchayati-raj-gramin-janjatiye-samaj-2008",
      "title": "Badrilal Meena Panchayati Raj Gramin Janjatiye Samaj 2008",
      "studentName": "Mr. Badrilal Meena",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Panchayati raj Vyawastha Ka Gramin Janjatiye Samaj Per Prabhav",
      "researchArea": "Rural Sociology; Tribal Studies; Local Governance",
      "institution": "Kota University, Kota, Rajasthan",
      "department": "Department of Sociology",
      "awardDate": "22 October 2008",
      "year": 2008,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "sulekha-kataria-adhunikikaran-vikas-mahilaon-shiksha-2008",
      "title": "Sulekha Kataria Adhunikikaran Vikas Mahilaon Shiksha 2008",
      "studentName": "Mrs. Sulekha Kataria",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Adhunikikaran, Vikas Evam Mahilaon Main Sikcha Ka Prasar",
      "researchArea": "Gender Studies; Education and Development",
      "institution": "Kota University, Kota, Rajasthan",
      "department": "Department of Sociology",
      "awardDate": "22 October 2008",
      "year": 2008,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "bhuvanesh-kumar-gramin-vikas-karyakram-samajik-vikas-2008",
      "title": "Bhuvanesh Kumar Gramin Vikas Karyakram Samajik Vikas 2008",
      "studentName": "Mr. Bhuvanesh Kumar",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "M.Phil.",
      "thesisTitle": "Gramin Vikas Karyakram Evam Samajik Vikas",
      "researchArea": "Rural Development; Social Development Programs",
      "institution": "Kota University, Kota, Rajasthan",
      "department": "Department of Sociology",
      "awardDate": "17 October 2008",
      "year": 2008,
      "status": "awarded",
      "notes": ""
    }
  ]
}, {
  "id": "pg-dissertation-supervision",
  "title": "PG Dissertation Supervision",
  "icon": "School",
  "description": "Postgraduate and post‑doctoral dissertations supervised and awarded (extracted from the provided document). Fields added where useful: researchArea, department, status, notes.",
  "supervision": [
    {
      "id": "ishdeep-kaur-bhandari-identity-exclusion-third-gender-covid19-2024",
      "title": "Ishdeep Kaur Bhandari Identity Exclusion Third Gender Covid19 2024",
      "studentName": "Dr. Ishdeep Kaur Bhandari",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "Post‑Doctorate",
      "thesisTitle": "Identity and Exclusion of Third Gender in the Age of Covid-19: A Study of Selective Cities of Uttar Pradesh",
      "researchArea": "Gender Studies; Social Exclusion; Pandemic Sociology; Urban Sociology",
      "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
      "department": "Department of Sociology",
      "awardDate": "18 April 2024",
      "year": 2024,
      "status": "awarded",
      "notes": ""
    },
    {
      "id": "amit-kumar-impact-swachh-bharat-abhiyan-ghats-temples-ganga-varanasi-2023",
      "title": "Amit Kumar Impact Swachh Bharat Abhiyan Ghats Temples Ganga Varanasi 2023",
      "studentName": "Dr. Amit Kumar",
      "supervisorName": "Prof. Manish K. Verma",
      "degreeAwarded": "Post‑Doctorate",
      "thesisTitle": "Impact of Swachh Bharat Abhiyan on the Ghats and Temples Located at the Bank of River Ganga: A Sociological Study of Selected Ghats and Temples of Varanasi City",
      "researchArea": "Environmental Sociology; Religious Spaces; Public Policy Evaluation; Urban Studies",
      "institution": "Babasaheb Bhimrao Ambedkar University, Lucknow",
      "department": "Department of Sociology",
      "awardDate": "May 2023",
      "year": 2023,
      "status": "awarded",
      "notes": ""
    }
  ]
},
  {
    id: 'organizing-roles',
    title: 'Organizing Roles',
    icon: 'EventNoteOutlined',
    description: 'Conference and workshop organization roles',
    supervision: [
      {
        id: 'org-1',
        title: 'International Conference on Cloud Computing 2024',
        year: 2024,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'XYZ University',
        researchTopic: 'Program Committee Chair',
        abstract: 'Organized and chaired the International Conference on Cloud Computing 2024 with 500+ participants from 40+ countries.',
        description: 'Organized and chaired the International Conference on Cloud Computing 2024 with 500+ participants from 40+ countries.',
        keywords: ['Conference', 'Cloud Computing', 'Program Committee', 'Organization'],
        outcomes: [
          'Successfully organized conference',
          'Attracted 300+ paper submissions',
          'Published conference proceedings',
          'Successfully completed with positive feedback',
        ],
      },
      {
        id: 'org-2',
        title: 'Workshop on IoT and Smart Cities',
        year: 2023,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'XYZ University',
        department: 'Department of Computer Science',
        researchTopic: 'Workshop Organizer and Instructor',
        abstract: 'Organized intensive workshop on IoT systems and smart city applications with 150+ participants.',
        description: 'Organized intensive workshop on IoT systems and smart city applications with 150+ participants.',
        keywords: ['Workshop', 'IoT', 'Smart Cities', 'Training'],
        outcomes: [
          'Trained 150+ engineers',
          'Developed course materials',
          'Published tutorial papers',
          'Received positive participant feedback',
        ],
      },
      {
        id: 'org-3',
        title: 'National Symposium on AI and Machine Learning',
        year: 2023,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'XYZ University',
        researchTopic: 'Co-Organizer',
        abstract: 'Co-organized national symposium on AI and Machine Learning with 250+ academic and industry participants.',
        description: 'Co-organized national symposium on AI and Machine Learning with 250+ academic and industry participants.',
        keywords: ['Symposium', 'AI', 'Machine Learning', 'National Event'],
        outcomes: [
          'Successfully organized symposium',
          'Featured keynote speakers from leading institutions',
          'Published best papers in journals',
          'Established industry-academia collaboration',
        ],
      },
      {
        id: 'org-4',
        title: 'Research Seminar Series on Blockchain',
        year: 2024,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'ongoing',
        institution: 'XYZ University',
        department: 'Department of Computer Science',
        researchTopic: 'Series Organizer',
        abstract: 'Organizing monthly research seminar series on blockchain technology and distributed systems.',
        description: 'Organizing monthly research seminar series on blockchain technology and distributed systems.',
        keywords: ['Seminar', 'Blockchain', 'Distributed Systems', 'Research'],
        outcomes: [
          '8 seminars conducted to date',
          '200+ faculty and students attending',
          'Industry expert talks arranged',
          'Ongoing with planned continuation',
        ],
      },
    ],
  },
  {
    id: 'session-chairing-panel',
    title: 'Session Chairing and Panel Supervision',
    icon: 'GroupsOutlined',
    description: 'Conference sessions chaired and panel discussions supervised',
    supervision: [
      {
        id: 'chair-1',
        title: 'Session: Machine Learning Applications',
        year: 2024,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'International Conference on AI and Computing',
        researchTopic: 'Session Chair',
        abstract: 'Chaired session on machine learning applications with 12 paper presentations from leading researchers.',
        description: 'Chaired session on machine learning applications with 12 paper presentations from leading researchers.',
        keywords: ['Session Chair', 'Machine Learning', 'Conference', 'AI'],
        outcomes: [
          'Successfully moderated 12 presentations',
          'Facilitated technical discussions',
          'Selected best paper award',
          'Published session summary',
        ],
      },
      {
        id: 'chair-2',
        title: 'Session: Cloud Architecture and Microservices',
        year: 2023,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'International Conference on Cloud Computing',
        researchTopic: 'Session Chair',
        abstract: 'Chaired technical session on cloud architecture and microservices with presentations from 10 speakers.',
        description: 'Chaired technical session on cloud architecture and microservices with presentations from 10 speakers.',
        keywords: ['Session Chair', 'Cloud Computing', 'Microservices', 'Architecture'],
        outcomes: [
          'Moderated 10 technical presentations',
          'Conducted Q&A session',
          'Networked with international researchers',
          'Session well-received by participants',
        ],
      },
      {
        id: 'chair-3',
        title: 'Panel Discussion: Future of AI in Industry',
        year: 2024,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'National Technology Summit',
        researchTopic: 'Panel Moderator',
        abstract: 'Moderated panel discussion with industry leaders on future applications and challenges of AI.',
        description: 'Moderated panel discussion with industry leaders on future applications and challenges of AI.',
        keywords: ['Panel Discussion', 'AI', 'Industry', 'Moderation'],
        outcomes: [
          'Moderated 6-member expert panel',
          'Engaged 300+ audience members',
          'Discussed industry trends and challenges',
          'Generated research collaboration leads',
        ],
      },
      {
        id: 'chair-4',
        title: 'Panel Discussion: Research Ethics and Compliance',
        year: 2023,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'University Research Symposium',
        researchTopic: 'Panel Supervisor',
        abstract: 'Supervised panel discussion on research ethics, compliance, and responsible AI development.',
        description: 'Supervised panel discussion on research ethics, compliance, and responsible AI development.',
        keywords: ['Panel', 'Ethics', 'Compliance', 'Research'],
        outcomes: [
          'Organized panel with 5 experts',
          '200+ faculty attendees',
          'Published panel proceedings',
          'Developed ethics guidelines',
        ],
      },
      {
        id: 'chair-5',
        title: 'Session: Cybersecurity and Privacy',
        year: 2024,
        supervisorName: 'Prof. Manish K. Verma',
        status: 'completed',
        institution: 'International Security Conference',
        researchTopic: 'Session Chair',
        abstract: 'Chaired technical session on cybersecurity and privacy with 8 research paper presentations.',
        description: 'Chaired technical session on cybersecurity and privacy with 8 research paper presentations.',
        keywords: ['Session Chair', 'Cybersecurity', 'Privacy', 'Security'],
        outcomes: [
          'Moderated 8 presentations',
          'Facilitated technical Q&A',
          'Identified trending research topics',
          'Invited speakers for future events',
        ],
      },
    ],
  },
];

