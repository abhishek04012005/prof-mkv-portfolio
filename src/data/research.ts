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
    id: 'research-projects-completed',
    title: 'Research Projects Completed',
    icon: '✅',
    description: 'Major and minor research projects successfully completed',
    research: [
      {
        id: 'proj-completed-1',
        title: 'IoT-Based Smart City Infrastructure',
        authors: 'Prof. Manish K. Verma',
        year: 2023,
        startYear: 2020,
        endYear: 2023,
        status: 'completed',
        fundingAgency: 'Department of Science and Technology (DST)',
        fundingAmount: '₹25 Lakhs',
        coInvestigators: ['Dr. Priya Sharma', 'Dr. Rajesh Kumar'],
        doi: '10.1234/iot-smartcity-2023',
        url: 'https://example.com/iot-smartcity',
        abstract: 'Development of IoT framework for smart city applications including traffic management, energy optimization, and environmental monitoring.',
        description: 'Development of IoT framework for smart city applications including traffic management, energy optimization, and environmental monitoring.',
        keywords: ['IoT', 'Smart City', 'Embedded Systems', 'Cloud Computing'],
        citations: 42,
        outcomes: [
          'Developed IoT platform with 100+ sensor integration',
          'Published 5 research papers in peer-reviewed journals',
          'Patents filed: 2',
          'Deployment in 3 city municipalities',
        ],
      },
      {
        id: 'proj-completed-2',
        title: 'Machine Learning for Predictive Maintenance',
        authors: 'Prof. Manish K. Verma, Dr. Amit Singh',
        year: 2022,
        startYear: 2019,
        endYear: 2022,
        status: 'completed',
        fundingAgency: 'Ministry of Electronics and IT',
        fundingAmount: '₹18 Lakhs',
        coInvestigators: ['Prof. Vijay Patel'],
        doi: '10.1234/ml-maintenance-2022',
        url: 'https://example.com/ml-predictive-maintenance',
        abstract: 'Research on applying ML algorithms for predictive maintenance in industrial systems to reduce downtime and maintenance costs.',
        description: 'Research on applying ML algorithms for predictive maintenance in industrial systems to reduce downtime and maintenance costs.',
        keywords: ['Machine Learning', 'Predictive Maintenance', 'Industrial IoT', 'Deep Learning'],
        citations: 38,
        outcomes: [
          'Developed ML models with 92% accuracy',
          'Published 4 journal papers',
          'Industry collaboration with 2 manufacturing firms',
          'Open-source framework released',
        ],
      },
      {
        id: 'proj-completed-3',
        title: 'Cloud-Native Microservices Architecture',
        authors: 'Prof. Manish K. Verma, Dr. Neha Gupta',
        year: 2023,
        startYear: 2021,
        endYear: 2023,
        status: 'completed',
        fundingAgency: 'University Research Fund',
        fundingAmount: '₹12 Lakhs',
        doi: '10.1234/cloud-microservices-2023',
        url: 'https://example.com/cloud-microservices',
        abstract: 'Design and implementation of cloud-native architecture patterns for scalable enterprise applications.',
        description: 'Design and implementation of cloud-native architecture patterns for scalable enterprise applications.',
        keywords: ['Cloud Computing', 'Microservices', 'Kubernetes', 'DevOps'],
        citations: 35,
        outcomes: [
          'Designed 8 microservices reference architectures',
          'Published architecture patterns guide',
          '3 industry workshops conducted',
          'Training materials developed for 500+ engineers',
        ],
      },
      {
        id: 'proj-completed-4',
        title: 'Blockchain for Supply Chain Transparency',
        authors: 'Prof. Manish K. Verma, Dr. Kavya Sharma',
        year: 2022,
        startYear: 2020,
        endYear: 2022,
        status: 'completed',
        fundingAgency: 'Ministry of Commerce & Industry',
        fundingAmount: '₹22 Lakhs',
        coInvestigators: ['Prof. Arun Mehta'],
        doi: '10.1234/blockchain-supply-chain-2022',
        url: 'https://example.com/blockchain-supply-chain',
        abstract: 'Implementation of blockchain technology for transparent and secure supply chain management systems.',
        description: 'Implementation of blockchain technology for transparent and secure supply chain management systems.',
        keywords: ['Blockchain', 'Supply Chain', 'Cryptography', 'Distributed Ledger'],
        citations: 28,
        outcomes: [
          'Developed blockchain solution for logistics',
          'Pilot deployment with 5 companies',
          'Published 3 conference papers',
          '1 patent granted',
        ],
      },
    ],
  },
  {
    id: 'research-projects-ongoing',
    title: 'Ongoing Projects',
    icon: '🔄',
    description: 'Active research initiatives currently in progress',
    research: [
      {
        id: 'proj-ongoing-1',
        title: 'Federated Learning for Privacy-Preserving Machine Learning',
        authors: 'Prof. Manish K. Verma, Dr. Kavya Mishra',
        year: 2024,
        startYear: 2023,
        status: 'ongoing',
        fundingAgency: 'Science and Engineering Research Board (SERB)',
        fundingAmount: '₹30 Lakhs',
        coInvestigators: ['Dr. Arjun Nair', 'Prof. Sameer Patil'],
        url: 'https://example.com/federated-learning',
        abstract: 'Developing federated learning frameworks that enable ML model training across distributed data sources while maintaining data privacy.',
        description: 'Developing federated learning frameworks that enable ML model training across distributed data sources while maintaining data privacy.',
        keywords: ['Federated Learning', 'Privacy', 'Machine Learning', 'Distributed Systems', 'Cryptography'],
        citations: 12,
        outcomes: [
          'Framework prototype developed',
          '2 papers submitted to top-tier conferences',
          'Collaboration with 2 tech companies',
          'Patent application in progress',
        ],
      },
      {
        id: 'proj-ongoing-2',
        title: 'Quantum-Classical Hybrid Computing for Optimization',
        authors: 'Prof. Manish K. Verma, Dr. Ravi Sharma',
        year: 2024,
        startYear: 2024,
        status: 'ongoing',
        fundingAgency: 'Department of Science and Technology',
        fundingAmount: '₹35 Lakhs',
        coInvestigators: ['Prof. Anil Verma'],
        url: 'https://example.com/quantum-hybrid',
        abstract: 'Research on hybrid quantum-classical algorithms for solving complex optimization problems in logistics and finance.',
        description: 'Research on hybrid quantum-classical algorithms for solving complex optimization problems in logistics and finance.',
        keywords: ['Quantum Computing', 'Optimization', 'Hybrid Algorithms', 'Finance', 'Logistics'],
        citations: 5,
        outcomes: [
          'Hybrid algorithm framework developed',
          '1 paper published, 2 under review',
          'Quantum simulator platform created',
        ],
      },
      {
        id: 'proj-ongoing-3',
        title: 'AI-Driven Autonomous Systems for Smart Manufacturing',
        authors: 'Prof. Manish K. Verma, Dr. Vikram Singh',
        year: 2024,
        startYear: 2023,
        status: 'ongoing',
        fundingAgency: 'Department of Heavy Industries',
        fundingAmount: '₹40 Lakhs',
        coInvestigators: ['Dr. Priya Gupta', 'Prof. Rajesh Nair'],
        url: 'https://example.com/ai-manufacturing',
        abstract: 'Development of AI and robotics solutions for autonomous manufacturing and Industry 4.0 applications.',
        description: 'Development of AI and robotics solutions for autonomous manufacturing and Industry 4.0 applications.',
        keywords: ['AI', 'Robotics', 'Manufacturing', 'Industry 4.0', 'Autonomous Systems'],
        citations: 8,
        outcomes: [
          'Prototype system developed',
          'Collaboration with 3 manufacturing units',
          '3 papers published, 2 under review',
          'Seeking industry partnerships',
        ],
      },
    ],
  },
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