export interface ResearchItem {
  id: string;
  title: string;
  authors: string;
  year: number;
  startYear?: number;
  endYear?: number;
  fundingAgency?: string;
  fundingAmount?: string;
  status?: 'completed' | 'ongoing' | 'planned';
  journal?: string;
  publisher?: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  downloadUrl?: string;
  pdfUrl?: string;
  abstract?: string;
  description?: string;
  keywords?: string[];
  citations?: number;
  outcomes?: string[];
  coInvestigators?: string[];
}

export interface ResearchCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  research: ResearchItem[];
}

export const researchData: ResearchCategory[] = [
  {
    "id": "research-projects-completed",
    "title": "Research Projects Completed",
    "icon": "CheckCircle",
    "description": "Major and minor research projects successfully completed (extracted from the provided document)",
    "research": [
      {
        "id": "social-ecological-and-environmental-matrix-in-rural-urban-interface-a-sociological-study-of-peri-urban-lucknow",
        "title": "Social, Ecological and Environmental Matrix in Rural-Urban Interface: A Sociological Study of Peri-Urban Lucknow",
        "authors": "Prof. Manish K. Verma",
        "year": 2010,
        "startYear": 2010,
        "endYear": 2010,
        "status": "completed",
        "fundingAgency": "University Grants Commission (UGC), Delhi",
        "fundingAmount": "₹6,57,200",
        "coInvestigators": [],
        "doi": "",
        "url": "",
        "abstract": "A sociological study examining the social, ecological and environmental dynamics at the rural–urban interface in peri-urban Lucknow.",
        "description": "Major research project studying social, ecological and environmental matrix in the rural-urban interface of peri-urban Lucknow; sponsored by UGC, Delhi; project completed and grant disbursed on 24 Dec 2010.",
        "keywords": [
          "Rural-Urban Interface",
          "Peri-Urban",
          "Environmental Sociology",
          "Social Ecology",
          "Lucknow"
        ],
        "citations": 0,
        "outcomes": [
          "Project completed and final report submitted to UGC",
          "UGC grant: ₹6,57,200",
          "Empirical fieldwork and data collection in peri-urban Lucknow",
          "Findings used in subsequent publications and teaching material"
        ]
      },
      {
        "id": "industrial-invasion-and-consequent-changes-in-rural-ecological-and-environmental-fabric-a-sociological-study-of-singrauli-region",
        "title": "Industrial Invasion and Consequent Changes in Rural Ecological and Environmental Fabric: A Sociological Study of Singrauli Region",
        "authors": "Prof. Manish K. Verma",
        "year": 2007,
        "startYear": 2006,
        "endYear": 2007,
        "status": "completed",
        "fundingAgency": "UGC Regional Office, Bhopal",
        "fundingAmount": "₹70,000",
        "coInvestigators": [],
        "doi": "",
        "url": "",
        "abstract": "Minor research project investigating the sociological impacts of industrial expansion on rural ecological and environmental conditions in the Singrauli region.",
        "description": "Minor UGC-sponsored project (2006-07) studying ecological and environmental changes caused by industrial invasion in Singrauli; focused on social consequences for rural communities.",
        "keywords": [
          "Industrial Invasion",
          "Singrauli",
          "Rural Ecology",
          "Environmental Change",
          "Displacement"
        ],
        "citations": 0,
        "outcomes": [
          "Project completed and final report submitted to UGC Regional Office, Bhopal",
          "UGC grant: ₹70,000",
          "Field surveys and community interviews conducted in Singrauli",
          "Policy-relevant observations for regional environmental planning"
        ]
      },
      {
        "id": "sociology-of-tourism-in-india-retrospect-and-prospects",
        "title": "Sociology of Tourism in India: Retrospect and Prospects",
        "authors": "Prof. Manish K. Verma",
        "year": 2002,
        "startYear": 2001,
        "endYear": 2002,
        "status": "completed",
        "fundingAgency": "UGC Regional Office, Bhopal",
        "fundingAmount": "₹25,000",
        "coInvestigators": [],
        "doi": "",
        "url": "",
        "abstract": "Minor research project reviewing the development, patterns and future prospects of tourism in India from a sociological perspective.",
        "description": "UGC-sponsored minor project (2001-02) examining the sociology of tourism in India; focused on historical trends, social impacts and future directions.",
        "keywords": [
          "Tourism",
          "Sociology",
          "India",
          "Retrospect",
          "Prospects"
        ],
        "citations": 0,
        "outcomes": [
          "Project completed and final report submitted to UGC Regional Office, Bhopal",
          "UGC grant: ₹25,000",
          "Literature review and field case studies completed",
          "Material used for course content and subsequent publications"
        ]
      }
    ]
  },
  {
    "id": "research-projects-ongoing",
    "title": "Ongoing Projects",
    "icon": "🔄",
    "description": "Active research initiatives currently in progress (extracted from the provided document)",
    "research": [],
    "note": "No ongoing research projects were listed in the provided document. The document contains only completed research projects (three UGC-sponsored projects). If you want, I can convert those completed projects into a separate 'completed' object (or mark them as completed entries here) for consistency with your data model."
  }
  ,
  {
    id: 'research-interests',
    title: 'Research Interests / Areas',
    icon: '💡',
    description: 'Key research areas and focus domains',
    research: [
      {
        id: 'interest-1',
        title: 'Machine Learning & Artificial Intelligence',
        authors: 'Prof. Manish K. Verma',
        year: 2024,
        abstract: 'Deep learning, neural networks, reinforcement learning, and AI applications in real-world systems.',
        description: 'Deep learning, neural networks, reinforcement learning, and AI applications in real-world systems.',
        keywords: ['Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'Computer Vision', 'NLP'],
      },
      {
        id: 'interest-2',
        title: 'Cloud Computing & Distributed Systems',
        authors: 'Prof. Manish K. Verma',
        year: 2024,
        abstract: 'Cloud architecture, distributed computing, edge computing, containerization, and serverless computing.',
        description: 'Cloud architecture, distributed computing, edge computing, containerization, and serverless computing.',
        keywords: ['Cloud Architecture', 'Distributed Computing', 'Edge Computing', 'Kubernetes', 'Serverless'],
      },
      {
        id: 'interest-3',
        title: 'Internet of Things (IoT)',
        authors: 'Prof. Manish K. Verma',
        year: 2024,
        abstract: 'IoT systems design, embedded systems, sensor networks, and IoT applications in smart cities and industries.',
        description: 'IoT systems design, embedded systems, sensor networks, and IoT applications in smart cities and industries.',
        keywords: ['IoT', 'Embedded Systems', 'Sensor Networks', 'Smart Cities', 'Industrial IoT'],
      },
      {
        id: 'interest-4',
        title: 'Big Data & Analytics',
        authors: 'Prof. Manish K. Verma',
        year: 2024,
        abstract: 'Data mining, big data processing, data visualization, and analytics platforms.',
        description: 'Data mining, big data processing, data visualization, and analytics platforms.',
        keywords: ['Big Data', 'Data Mining', 'Analytics', 'Data Visualization', 'Stream Processing'],
      },
      {
        id: 'interest-5',
        title: 'Cybersecurity & Privacy',
        authors: 'Prof. Manish K. Verma',
        year: 2024,
        abstract: 'Network security, application security, cryptography, privacy-preserving techniques, and threat detection.',
        description: 'Network security, application security, cryptography, privacy-preserving techniques, and threat detection.',
        keywords: ['Cybersecurity', 'Cryptography', 'Privacy', 'Threat Detection', 'Secure Systems'],
      },
      {
        id: 'interest-6',
        title: 'Software Engineering',
        authors: 'Prof. Manish K. Verma',
        year: 2024,
        abstract: 'Software architecture, design patterns, DevOps, agile methodologies, and code quality assurance.',
        description: 'Software architecture, design patterns, DevOps, agile methodologies, and code quality assurance.',
        keywords: ['Software Architecture', 'Design Patterns', 'DevOps', 'Agile', 'Code Quality'],
      },
    ],
  },
  {
    id: 'research-outputs',
    title: 'Research Outputs',
    icon: '📦',
    description: 'Datasets, reports, software, and other research deliverables',
    research: [
      {
        id: 'output-1',
        title: 'Smart City IoT Dataset',
        authors: 'Prof. Manish K. Verma, Dr. Priya Sharma, Dr. Rajesh Kumar',
        year: 2023,
        doi: '10.5281/zenodo.12345',
        url: 'https://example.com/smartcity-dataset',
        downloadUrl: 'https://example.com/download/smartcity-dataset.zip',
        abstract: 'Comprehensive dataset containing sensor data from IoT devices deployed in smart city infrastructure including traffic, weather, and energy data.',
        keywords: ['IoT', 'Dataset', 'Smart City', 'Sensor Data', 'Open Data'],
        citations: 18,
      },
      {
        id: 'output-2',
        title: 'ML Predictive Maintenance Framework',
        authors: 'Prof. Manish K. Verma, Dr. Amit Singh',
        year: 2022,
        url: 'https://github.com/example/ml-predictive-maintenance',
        downloadUrl: 'https://pypi.org/project/ml-maintenance/',
        abstract: 'Open-source Python framework for implementing machine learning-based predictive maintenance systems.',
        keywords: ['Machine Learning', 'Predictive Maintenance', 'Python', 'Open Source'],
        citations: 24,
      },
      {
        id: 'output-3',
        title: 'Cloud Architecture Patterns Guide',
        authors: 'Prof. Manish K. Verma, Dr. Neha Gupta',
        year: 2023,
        publisher: 'Technical Publication',
        doi: '10.1234/report-2023-001',
        downloadUrl: 'https://example.com/download/cloud-patterns-guide.pdf',
        abstract: 'Comprehensive guide documenting cloud-native architecture patterns, best practices, and implementation strategies.',
        keywords: ['Cloud Architecture', 'Microservices', 'Patterns', 'Best Practices'],
        citations: 31,
      },
      {
        id: 'output-4',
        title: 'Federated Learning Framework',
        authors: 'Prof. Manish K. Verma, Dr. Kavya Mishra',
        year: 2024,
        url: 'https://github.com/example/federated-learning-framework',
        downloadUrl: 'https://github.com/example/federated-learning-framework/archive/main.zip',
        abstract: 'GitHub repository containing implementation of federated learning framework with examples and documentation.',
        keywords: ['Federated Learning', 'Privacy', 'Python', 'TensorFlow'],
        citations: 7,
      },
      {
        id: 'output-5',
        title: 'Machine Learning for Maintenance: Research Report',
        authors: 'Prof. Manish K. Verma, Dr. Amit Singh, Prof. Vijay Patel',
        year: 2022,
        publisher: 'Research Institute',
        doi: '10.1234/report-2022-003',
        downloadUrl: 'https://example.com/download/ml-maintenance-report.pdf',
        abstract: 'Detailed research report on machine learning approaches for industrial predictive maintenance systems.',
        keywords: ['Machine Learning', 'Predictive Maintenance', 'Industrial IoT'],
        citations: 14,
      },
      {
        id: 'output-6',
        title: 'IoT Sensor Network Simulation Toolkit',
        authors: 'Prof. Manish K. Verma, Dr. Priya Sharma',
        year: 2023,
        url: 'https://github.com/example/iot-simulator',
        downloadUrl: 'https://pypi.org/project/iot-simulator/',
        abstract: 'Python-based toolkit for simulating and testing IoT sensor networks and smart city applications.',
        keywords: ['IoT', 'Simulation', 'Python', 'Testing'],
        citations: 11,
      },
      {
        id: 'output-7',
        title: 'Blockchain Supply Chain Implementation Guide',
        authors: 'Prof. Manish K. Verma, Dr. Kavya Sharma',
        year: 2022,
        publisher: 'Industry Standard',
        doi: '10.1234/report-2022-005',
        downloadUrl: 'https://example.com/download/blockchain-supply-chain-guide.pdf',
        abstract: 'Step-by-step guide for implementing blockchain solutions in supply chain management.',
        keywords: ['Blockchain', 'Supply Chain', 'Implementation', 'Best Practices'],
        citations: 19,
      },
    ],
  },
];