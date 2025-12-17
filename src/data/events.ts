export interface EventItem {
  id: string;
  title: string;
  eventName?: string;
  organizerName?: string;
  year?: number;
  startYear?: number;
  endYear?: number;
  startDate?: string;
  endDate?: string;
  start_date?: string;
  end_date?: string;
  status?: 'completed' | 'ongoing' | 'planned';
  eventType?: string;
  event_type?: string;
  location?: string;
  venue?: string;
  institution?: string;
  department?: string;
  audience?: string;
  participantCount?: number;
  abstract?: string;
  description?: string;
  theme?: string;
  keywords?: string[];
  outcomes?: string[];
  speakers?: string[];
  topics?: string[];
  url?: string;
  downloadUrl?: string;
  doi?: string;
  role?: string;
  sponsorship?: string;
  organized_by?: string;
  notes?: string;
  [key: string]: string | number | string[] | boolean | undefined | null;
}

export interface EventCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  events: EventItem[];
}

export const eventsData: EventCategory[] = [

  {
    id: 'workshops',
    title: 'Workshops',
    icon: '🛠️',
    description: 'Workshops and training programs organized',
    events: [
      {
        id: 'workshop-1',
        title: 'Advanced Python Programming Workshop',
        eventName: 'Python Workshop 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-03-15',
        endDate: '2024-03-17',
        status: 'completed',
        eventType: 'Technical Workshop',
        location: 'XYZ University',
        institution: 'XYZ University',
        audience: 'Students, Developers, Engineers',
        participantCount: 80,
        abstract: 'Three-day intensive workshop on advanced Python programming covering object-oriented design, data structures, and practical coding practices.',
        description: 'Three-day intensive workshop on advanced Python programming covering object-oriented design, data structures, and practical coding practices.',
        keywords: ['Python', 'Programming', 'OOP', 'Data Structures', 'Best Practices'],
        topics: [
          'Object-Oriented Programming',
          'Design Patterns in Python',
          'Data Structures and Algorithms',
          'Testing and Debugging',
          'Performance Optimization',
        ],
        speakers: [
          'Prof. Manish K. Verma',
          'Python Expert from Industry',
        ],
        outcomes: [
          'Trained 80 participants',
          'Provided coding assignments',
          'Issued certificates',
          'Created open-source training materials',
        ],
        url: 'https://example.com/python-workshop-2024',
      },
      {
        id: 'workshop-2',
        title: 'Machine Learning Hands-On Workshop',
        eventName: 'ML Workshop 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-02-10',
        endDate: '2024-02-12',
        status: 'completed',
        eventType: 'Technical Workshop',
        location: 'XYZ University',
        institution: 'XYZ University',
        audience: 'Students, Researchers, Data Scientists',
        participantCount: 100,
        abstract: 'Practical workshop on machine learning algorithms with hands-on projects using TensorFlow and scikit-learn.',
        description: 'Practical workshop on machine learning algorithms with hands-on projects using TensorFlow and scikit-learn.',
        keywords: ['Machine Learning', 'TensorFlow', 'scikit-learn', 'Data Science', 'Python'],
        topics: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Feature Engineering',
          'Model Evaluation',
          'Hyperparameter Tuning',
          'Practical ML Projects',
        ],
        speakers: [
          'Prof. Manish K. Verma',
          'Dr. Amit Singh',
          'ML Engineer from Leading Tech Company',
        ],
        outcomes: [
          'Trained 100 participants',
          'Built 5 ML projects from scratch',
          'Hands-on with real datasets',
          'Certification provided',
        ],
        url: 'https://example.com/ml-workshop-2024',
      },
      {
        id: 'workshop-3',
        title: 'DevOps and CI/CD Pipeline Workshop',
        eventName: 'DevOps Workshop 2023',
        organizerName: 'Prof. Manish K. Verma',
        year: 2023,
        startDate: '2023-11-20',
        endDate: '2023-11-22',
        status: 'completed',
        eventType: 'Technical Workshop',
        location: 'XYZ University',
        institution: 'XYZ University',
        audience: 'Software Engineers, DevOps Practitioners',
        participantCount: 75,
        abstract: 'Workshop on DevOps practices, CI/CD pipelines, containerization, and deployment automation.',
        description: 'Workshop on DevOps practices, CI/CD pipelines, containerization, and deployment automation.',
        keywords: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Automation'],
        topics: [
          'DevOps Principles',
          'CI/CD Pipeline Design',
          'Docker Containerization',
          'Kubernetes Orchestration',
          'Infrastructure as Code',
          'Monitoring and Logging',
        ],
        speakers: [
          'Prof. Manish K. Verma',
          'DevOps Architect from Enterprise',
        ],
        outcomes: [
          'Trained 75 engineers',
          'Built complete CI/CD pipeline',
          'Container deployment practice',
          'Industry-standard tools covered',
        ],
      },
      {
        id: 'workshop-4',
        title: 'Blockchain Development Workshop',
        eventName: 'Blockchain Workshop 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-04-05',
        endDate: '2024-04-07',
        status: 'completed',
        eventType: 'Technical Workshop',
        location: 'XYZ University',
        institution: 'XYZ University',
        audience: 'Developers, Researchers, Entrepreneurs',
        participantCount: 90,
        abstract: 'Practical workshop on blockchain technology, smart contracts, and decentralized applications development.',
        description: 'Practical workshop on blockchain technology, smart contracts, and decentralized applications development.',
        keywords: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Solidity', 'DApps'],
        topics: [
          'Blockchain Fundamentals',
          'Cryptography Basics',
          'Smart Contract Development',
          'Ethereum Platform',
          'Solidity Programming',
          'DApp Development',
        ],
        speakers: [
          'Prof. Manish K. Verma',
          'Blockchain Developer from Startup',
        ],
        outcomes: [
          'Trained 90 participants',
          'Deployed smart contracts',
          'Built working DApp',
          'Certificates issued',
        ],
      },
    ],
  },
  {
    id: 'lectures',
    title: 'Lectures',
    icon: '🎤',
    description: 'Guest lectures and special lectures delivered',
    events: [
      {
        id: 'lecture-1',
        title: 'Future of Cloud Computing',
        eventName: 'Guest Lecture Series 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-03-20',
        status: 'completed',
        eventType: 'Guest Lecture',
        location: 'XYZ University',
        institution: 'XYZ University',
        department: 'Department of Computer Science',
        audience: 'Students, Faculty, Researchers',
        participantCount: 150,
        abstract: 'Keynote lecture on emerging trends in cloud computing, serverless architectures, and edge computing.',
        description: 'Keynote lecture on emerging trends in cloud computing, serverless architectures, and edge computing.',
        keywords: ['Cloud Computing', 'Serverless', 'Edge Computing', 'Future Trends'],
        topics: [
          'Serverless Architecture',
          'Multi-cloud Strategies',
          'Cost Optimization',
          'Security in Cloud',
          'Future Predictions',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Presented to 150+ audience',
          'Interactive Q&A session',
          'Video recorded and published',
          'Inspired student projects',
        ],
      },
      {
        id: 'lecture-2',
        title: 'AI Ethics and Responsible AI',
        eventName: 'Special Lecture 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-02-15',
        status: 'completed',
        eventType: 'Special Lecture',
        location: 'XYZ University',
        institution: 'XYZ University',
        audience: 'Students, Faculty',
        participantCount: 200,
        abstract: 'Comprehensive lecture on ethics in AI, bias in machine learning, and responsible AI development practices.',
        description: 'Comprehensive lecture on ethics in AI, bias in machine learning, and responsible AI development practices.',
        keywords: ['AI Ethics', 'Responsible AI', 'Bias', 'Fairness'],
        topics: [
          'Ethical AI Frameworks',
          'Bias Detection and Mitigation',
          'Fairness in ML',
          'Privacy Concerns',
          'Regulatory Compliance',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Engaged 200 participants',
          'Sparked important discussions',
          'Published lecture notes',
          'Influenced institutional policies',
        ],
      },
      {
        id: 'lecture-3',
        title: 'Industry 4.0 and Smart Manufacturing',
        eventName: 'Invited Lecture 2023',
        organizerName: 'Prof. Manish K. Verma',
        year: 2023,
        startDate: '2023-09-22',
        status: 'completed',
        eventType: 'Invited Lecture',
        location: 'IIIT Delhi',
        institution: 'IIIT Delhi',
        audience: 'Students, Researchers, Industry Professionals',
        participantCount: 120,
        abstract: 'Lecture on Industry 4.0, IoT integration, AI in manufacturing, and smart factory concepts.',
        description: 'Lecture on Industry 4.0, IoT integration, AI in manufacturing, and smart factory concepts.',
        keywords: ['Industry 4.0', 'IoT', 'Manufacturing', 'Smart Factory'],
        topics: [
          'Industry 4.0 Concepts',
          'IoT in Manufacturing',
          'Predictive Maintenance',
          'Data Analytics',
          'Automation Systems',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Presented at premier institute',
          'Attracted 120 attendees',
          'Facilitated industry connections',
        ],
      },
      {
        id: 'lecture-4',
        title: 'Cybersecurity Challenges and Solutions',
        eventName: 'Security Talk 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-01-25',
        status: 'completed',
        eventType: 'Lecture',
        location: 'XYZ University',
        institution: 'XYZ University',
        audience: 'IT Professionals, Students, Managers',
        participantCount: 180,
        abstract: 'Lecture on current cybersecurity threats, defense mechanisms, and best practices for organizations.',
        description: 'Lecture on current cybersecurity threats, defense mechanisms, and best practices for organizations.',
        keywords: ['Cybersecurity', 'Threats', 'Defense', 'Best Practices'],
        topics: [
          'Current Security Threats',
          'Zero Trust Architecture',
          'Incident Response',
          'Security Compliance',
          'Employee Training',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Educated 180 professionals',
          'Provided security recommendations',
          'Published white paper',
        ],
      },
    ],
  },
  {
    id: 'presentations',
    title: 'Presentations',
    icon: '📊',
    description: 'Conference and seminar presentations delivered',
    events: [
      {
        id: 'pres-1',
        title: 'Federated Learning: Privacy-First ML at Scale',
        eventName: 'International Conference on Machine Learning 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-07-15',
        status: 'completed',
        eventType: 'Conference Presentation',
        location: 'Vienna, Austria',
        institution: 'ICML 2024',
        audience: 'AI Researchers, ML Scientists',
        abstract: 'Presentation on federated learning frameworks for privacy-preserving machine learning in distributed environments.',
        description: 'Presentation on federated learning frameworks for privacy-preserving machine learning in distributed environments.',
        keywords: ['Federated Learning', 'Privacy', 'Machine Learning', 'Distributed Systems'],
        topics: [
          'Federated Learning Basics',
          'Privacy Preservation Techniques',
          'Communication Efficiency',
          'Model Aggregation Strategies',
          'Real-world Applications',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Presented at top-tier conference',
          'Received positive reviews',
          'Generated research leads',
          'Published in proceedings',
        ],
        url: 'https://example.com/icml-2024-presentation',
      },
      {
        id: 'pres-2',
        title: 'Cloud Architecture Patterns for Scalability',
        eventName: 'International Conference on Cloud Computing 2023',
        organizerName: 'Prof. Manish K. Verma',
        year: 2023,
        startDate: '2023-06-10',
        status: 'completed',
        eventType: 'Conference Presentation',
        location: 'San Francisco, USA',
        institution: 'CloudConf 2023',
        audience: 'Cloud Architects, Software Engineers',
        abstract: 'Technical presentation on cloud architecture patterns, best practices, and implementation strategies.',
        description: 'Technical presentation on cloud architecture patterns, best practices, and implementation strategies.',
        keywords: ['Cloud Architecture', 'Microservices', 'Patterns', 'Scalability'],
        topics: [
          'Architectural Patterns',
          'Microservices Design',
          'Load Balancing',
          'Fault Tolerance',
          'Cost Optimization',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Keynote presentation',
          'Well-attended session',
          'Published paper in proceedings',
        ],
      },
      {
        id: 'pres-3',
        title: 'IoT Security: Challenges and Solutions',
        eventName: 'IoT World Conference 2024',
        organizerName: 'Prof. Manish K. Verma',
        year: 2024,
        startDate: '2024-05-22',
        status: 'completed',
        eventType: 'Seminar Presentation',
        location: 'Berlin, Germany',
        institution: 'IoT World 2024',
        audience: 'IoT Professionals, Engineers',
        abstract: 'Presentation addressing security challenges in IoT systems and proposing comprehensive solutions.',
        description: 'Presentation addressing security challenges in IoT systems and proposing comprehensive solutions.',
        keywords: ['IoT', 'Security', 'Challenges', 'Solutions'],
        topics: [
          'IoT Security Threats',
          'Device Authentication',
          'Data Encryption',
          'Network Security',
          'Best Practices',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Presented to IoT professionals',
          'Discussed emerging threats',
          'Published security guidelines',
        ],
      },
      {
        id: 'pres-4',
        title: 'Blockchain Applications in Supply Chain',
        eventName: 'Supply Chain Management Conference 2023',
        organizerName: 'Prof. Manish K. Verma',
        year: 2023,
        startDate: '2023-10-18',
        status: 'completed',
        eventType: 'Conference Presentation',
        location: 'Singapore',
        institution: 'SCM Conference 2023',
        audience: 'Supply Chain Managers, IT Directors',
        abstract: 'Presentation on blockchain technology applications for transparent and secure supply chain management.',
        description: 'Presentation on blockchain technology applications for transparent and secure supply chain management.',
        keywords: ['Blockchain', 'Supply Chain', 'Transparency', 'Trust'],
        topics: [
          'Blockchain Basics for Supply Chain',
          'Smart Contracts',
          'Transparency Benefits',
          'Implementation Case Studies',
          'ROI Analysis',
        ],
        speakers: ['Prof. Manish K. Verma'],
        outcomes: [
          'Engaged supply chain professionals',
          'Generated business leads',
          'Published case studies',
        ],
      },
    ],
  },
{
  "id": "organized-events",
  "title": "Organized Events",
  "icon": "Event",
  "description": "Seminars, conferences, workshops, capacity-building programs, and university events organized or coordinated.",
  "events": [
    {
      "id": "national-seminar-nep2020-sdgs-2023",
      "title": "National Seminar: National Education Policy 2020, SDGs and Nation Building",
      "event_type": "National Seminar",
      "theme": "National Education Policy 2020, Sustainable Development Goals and Nation Building: Perspectives, Issues, Concerns and Challenges",
      "start_date": "2023-11-03",
      "end_date": "2023-11-04",
      "venue": "Department of Sociology, Babasaheb Bhimrao Ambedkar University",
      "location": "Lucknow, Uttar Pradesh, India",
      "organized_by": "Department of Sociology, Babasaheb Bhimrao Ambedkar University",
      "role": "Organizer",
      "audience": "Academics; Faculty; Researchers; Postgraduate students; Policy practitioners",
      "keywords": [
        "NEP 2020",
        "Sustainable Development Goals",
        "Nation Building",
        "Higher Education"
      ],
      "status": "completed"
    },
    {
      "id": "icssr-capacity-environment-2018",
      "title": "ICSSR Sponsored Capacity Building Program: Environment and Sustainable Development",
      "event_type": "Capacity Building Program",
      "theme": "Environment and Sustainable Development",
      "start_date": "2018-11-27",
      "end_date": "2018-12-08",
      "venue": "Department of Sociology, Babasaheb Bhimrao Ambedkar University",
      "location": "Lucknow, Uttar Pradesh, India",
      "organized_by": "Department of Sociology, Babasaheb Bhimrao Ambedkar University",
      "sponsorship": "Indian Council of Social Science Research (ICSSR)",
      "role": "Organizer",
      "audience": "University faculty; Early-career researchers",
      "keywords": [
        "Capacity Building",
        "Environment",
        "Sustainable Development",
        "Faculty Development"
      ],
      "status": "completed",
      "notes": "Two-week faculty development programme"
    },
    {
      "id": "international-seminar-globalisation-environment-2016",
      "title": "International Seminar: Globalisation, Environment and Social Justice",
      "event_type": "International Seminar",
      "theme": "Globalisation, Environment and Social Justice: Perspectives, Issues and Concerns",
      "start_date": "2016-02-15",
      "end_date": "2016-02-16",
      "venue": "Department of Sociology, Babasaheb Bhimrao Ambedkar University",
      "location": "Lucknow, Uttar Pradesh, India",
      "organized_by": "Department of Sociology, Babasaheb Bhimrao Ambedkar University",
      "role": "Organizer",
      "audience": "Scholars; International and national researchers; Postgraduate students",
      "keywords": [
        "Globalisation",
        "Environment",
        "Social Justice",
        "International Seminar"
      ],
      "status": "completed"
    },
    {
      "id": "university-annual-sports-2014",
      "title": "University Annual Sports-2014",
      "event_type": "University Event",
      "theme": "Annual Sports",
      "start_date": "2014-03-12",
      "end_date": "2014-03-13",
      "venue": "Babasaheb Bhimrao Ambedkar Central University",
      "location": "Lucknow, Uttar Pradesh, India",
      "organized_by": "University Sports Committee",
      "role": "Organizer",
      "audience": "Students; University staff",
      "keywords": [
        "Sports",
        "University Event",
        "Student Activities"
      ],
      "status": "completed",
      "notes": "University annual sports meet"
    },
    {
      "id": "ucl-2015-university-cricket-league",
      "title": "University Cricket League Tournament (UCL 2015)",
      "event_type": "State Level Tournament",
      "theme": "University Cricket League Tournament",
      "start_date": "2015-03-10",
      "end_date": "2015-03-13",
      "venue": "Babasaheb Bhimrao Ambedkar Central University",
      "location": "Lucknow, Uttar Pradesh, India",
      "organized_by": "University Sports Committee",
      "role": "Organizer",
      "audience": "Students; University teams; State-level participants",
      "keywords": [
        "Cricket",
        "Tournament",
        "University Sports",
        "UCL 2015"
      ],
      "status": "completed",
      "notes": "State-level university cricket league"
    },
    {
      "id": "all-india-sociological-conference-48th-2023",
      "title": "48th All India Sociological Conference",
      "event_type": "National Conference",
      "theme": "Crisis of the 21st Century and the Way Forward",
      "start_date": "2023-12-28",
      "end_date": "2023-12-30",
      "venue": "Vellore Institute of Technology (VIT)",
      "location": "Vellore, Tamil Nadu, India",
      "organized_by": "Vellore Institute of Technology (VIT) in collaboration with Indian Sociological Society (ISS)",
      "role": "Collaborator",
      "audience": "Sociologists; Researchers; Policy makers; Graduate students",
      "keywords": [
        "Sociology",
        "Crisis",
        "National Conference",
        "ISS"
      ],
      "status": "completed",
      "notes": "48th All India Sociological Conference"
    },
    {
      "id": "young-researcher-workshop-vit-2023",
      "title": "Young Researcher’s Workshop (VIT)",
      "event_type": "Workshop",
      "theme": "Young Researcher’s Workshop",
      "start_date": "2023-12-26",
      "end_date": "2023-12-27",
      "venue": "Vellore Institute of Technology (VIT)",
      "location": "Vellore, Tamil Nadu, India",
      "organized_by": "Vellore Institute of Technology (VIT) in collaboration with Indian Sociological Society (ISS)",
      "role": "Collaborator",
      "audience": "Early-career researchers; PhD scholars; Postgraduate students",
      "keywords": [
        "Young Researchers",
        "Workshop",
        "Research Skills",
        "ISS"
      ],
      "status": "completed"
    },
    {
      "id": "midterm-iss-international-conference-regions-2023",
      "title": "Mid-Term ISS International Conference: Sociology Of and In Regions",
      "event_type": "International Conference",
      "theme": "Sociology Of and In Regions: Pedagogy, Practices and Possibilities",
      "start_date": "2023-04-28",
      "end_date": "2023-04-30",
      "venue": "Department of Sociology (Centennial Celebration)",
      "location": "Lucknow, Uttar Pradesh, India",
      "organized_by": "Department of Sociology in collaboration with Indian Sociological Society (ISS), E.F.C.S., Lucknow and G.I.D.S., Lucknow",
      "role": "Collaborator",
      "audience": "Academics; Regional sociologists; Graduate students",
      "keywords": [
        "Regional Sociology",
        "Pedagogy",
        "International Conference",
        "ISS"
      ],
      "status": "completed",
      "notes": "Centennial celebration event"
    },
    {
      "id": "all-india-sociological-conference-47th-2022",
      "title": "47th All India Sociological Conference",
      "event_type": "National Conference",
      "theme": "Hundred Years of Sociology in India: Exploring Trajectories for the Future",
      "start_date": "2022-12-20",
      "end_date": "2022-12-22",
      "venue": "University of Science and Technology Meghalaya (USTM)",
      "location": "Meghalaya, India",
      "organized_by": "University of Science and Technology Meghalaya (USTM) in collaboration with Indian Sociological Society (ISS)",
      "role": "Collaborator",
      "audience": "Sociologists; Researchers; Students",
      "keywords": [
        "History of Sociology",
        "Future Trajectories",
        "National Conference",
        "ISS"
      ],
      "status": "completed",
      "notes": "47th All India Sociological Conference"
    },
    {
      "id": "young-researcher-workshop-iit-guwahati-2022",
      "title": "Young Researcher’s Workshop (IIT Guwahati)",
      "event_type": "Workshop",
      "theme": "Young Researcher’s Workshop",
      "start_date": "2022-12-18",
      "end_date": "2022-12-19",
      "venue": "Indian Institute of Technology, Guwahati",
      "location": "Guwahati, Assam, India",
      "organized_by": "IIT Guwahati in collaboration with Indian Sociological Society (ISS)",
      "role": "Collaborator",
      "audience": "Early-career researchers; PhD scholars; Postgraduate students",
      "keywords": [
        "Young Researchers",
        "Workshop",
        "Research Training",
        "ISS"
      ],
      "status": "completed"
    },
    {
      "id": "midterm-iss-society-culture-kashmir-2022",
      "title": "Mid-Term ISS International Conference: Society, Culture and Social Change",
      "event_type": "International Conference",
      "theme": "Society, Culture and Social Change: Kashmir and Beyond",
      "start_date": "2022-09-06",
      "end_date": "2022-09-07",
      "venue": "Islamic University of Science and Technology (IUST)",
      "location": "Awantipora, Kashmir, India",
      "organized_by": "Islamic University of Science and Technology (IUST) in collaboration with Indian Sociological Society (ISS)",
      "role": "Collaborator",
      "audience": "Academics; Regional experts; Graduate students",
      "keywords": [
        "Society",
        "Culture",
        "Social Change",
        "Kashmir"
      ],
      "status": "completed"
    }
  ]
}

];

