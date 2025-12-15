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
  volume_issue?: string;
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
  [key: string]: string | number | string[] | boolean | undefined;
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
    "icon": "Progress",
    "description": "Active research initiatives currently in progress (extracted from the provided document)",
    "research": []
  }
  ,
  {
    "id": "research-interests",
    "title": "Research Interests / Areas",
    "icon": "Lightbulb",
    "description": "Key research areas and focus domains drawn from Prof. Manish K. Verma's bio-data",
    "research": [
      {
        "id": "environmental-sociology",
        "title": "Environmental Sociology",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "abstract": "Sociological study of environment-society interactions, environmental change, and policy responses.",
        "description": "Examines how social structures, institutions, and processes shape environmental outcomes and how environmental change affects communities, with emphasis on policy, governance, and social justice.",
        "keywords": [
          "Environmental Sociology",
          "Environmental Change",
          "Policy",
          "Governance",
          "Social Impact"
        ]
      },
      {
        "id": "sustainable-development",
        "title": "Sustainable Development",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "abstract": "Research on sustainable development frameworks, SDG integration, and education-policy linkages.",
        "description": "Focuses on aligning national and local policies with Sustainable Development Goals, assessing implementation challenges, and exploring education's role in sustainable nation-building.",
        "keywords": [
          "Sustainable Development",
          "SDGs",
          "Policy Integration",
          "Education and Sustainability",
          "Implementation"
        ]
      },
      {
        "id": "national-education-policy-and-nep-studies",
        "title": "National Education Policy and NEP Studies",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "abstract": "Analysis of NEP 2020 implications for curriculum, pedagogy, and nation-building.",
        "description": "Investigates historical moorings, contemporary discourse, curriculum reform, and the role of higher education in achieving NEP objectives and sustainable development.",
        "keywords": [
          "NEP 2020",
          "Curriculum",
          "Higher Education Reform",
          "Policy Analysis",
          "Nation Building"
        ]
      },
      {
        "id": "globalization-environment-and-social-justice",
        "title": "Globalization, Environment and Social Justice",
        "authors": "Prof. Manish K. Verma",
        "year": 2019,
        "abstract": "Explores intersections of globalization processes with environmental outcomes and equity.",
        "description": "Studies how global economic and social processes influence environmental degradation, resource distribution, and social justice, with emphasis on vulnerable populations.",
        "keywords": [
          "Globalization",
          "Environmental Justice",
          "Equity",
          "Policy",
          "Vulnerable Groups"
        ]
      },
      {
        "id": "peri-urban-studies",
        "title": "Peri-Urban Studies",
        "authors": "Prof. Manish K. Verma",
        "year": 2017,
        "abstract": "Sociological investigation of peri-urban environments, urbanization pressures, and livelihoods.",
        "description": "Focus on peri-urban ecological and social matrices, land-use change, service delivery, and the socio-economic impacts of urban expansion on fringe communities.",
        "keywords": [
          "Peri-Urban",
          "Urbanization",
          "Land Use",
          "Livelihoods",
          "Service Delivery"
        ]
      },
      {
        "id": "development-induced-displacement-and-resettlement",
        "title": "Development Induced Displacement and Resettlement",
        "authors": "Prof. Manish K. Verma",
        "year": 2004,
        "abstract": "Empirical and policy-oriented research on displacement, resettlement, and rehabilitation.",
        "description": "Analyzes socio-economic consequences of development projects on displaced populations, policy gaps, and strategies for inclusive resettlement and rights protection.",
        "keywords": [
          "Displacement",
          "Resettlement",
          "Rehabilitation",
          "Policy Analysis",
          "Human Rights"
        ]
      },
      {
        "id": "gender-studies-and-transgender-inclusion",
        "title": "Gender Studies and Transgender Inclusion",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "abstract": "Research on gendered experiences, third gender practices, and social inclusion policies.",
        "description": "Investigates lived experiences of women and transgender communities, access to resources, social exclusion, and policy interventions for inclusion and equity.",
        "keywords": [
          "Gender Studies",
          "Transgender Inclusion",
          "Social Exclusion",
          "Lived Experience",
          "Policy"
        ]
      },
      {
        "id": "urban-sanitation-and-public-health",
        "title": "Urban Sanitation and Public Health",
        "authors": "Prof. Manish K. Verma",
        "year": 2019,
        "abstract": "Studies sanitation policy, faecal sludge management, and urban public health challenges.",
        "description": "Evaluates sanitation status, policy frameworks, infrastructure needs, and public health implications in urban and peri-urban contexts.",
        "keywords": [
          "Sanitation",
          "Public Health",
          "Faecal Sludge Management",
          "Urban Policy",
          "Infrastructure"
        ]
      },
      {
        "id": "water-scarcity-and-human-security",
        "title": "Water Scarcity and Human Security",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "abstract": "Examines links between water scarcity, human security, and regional vulnerabilities.",
        "description": "Case studies on water conflicts, resource governance, and the socio-economic impacts of scarcity on communities, especially in Bundelkhand and similar regions.",
        "keywords": [
          "Water Scarcity",
          "Human Security",
          "Resource Governance",
          "Bundelkhand",
          "Conflict"
        ]
      },
      {
        "id": "research-methods-and-higher-education-reforms",
        "title": "Research Methods and Higher Education Reforms",
        "authors": "Prof. Manish K. Verma",
        "year": 2024,
        "abstract": "Capacity building in research methodology and pedagogy for higher education.",
        "description": "Focus on training, curriculum development, research ethics, and faculty development programs to strengthen research quality and teaching in social sciences.",
        "keywords": [
          "Research Methods",
          "Faculty Development",
          "Pedagogy",
          "Research Ethics",
          "Capacity Building"
        ]
      }
    ]
  }
  ,
  {
    "id": "research-outputs",
    "title": "Research Outputs",
    "icon": "AssignmentTurnedIn",
    "description": "Publications, chapters, articles and other documented research deliverables extracted from the CV",
    "research": [
      {
        "id": "religious-practices-of-the-third-gender-in-lucknow-city-of-uttar-pradesh-india",
        "title": "Religious Practices of the Third Gender in Lucknow City of Uttar Pradesh, India",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "The Eastern Anthropologists, Lucknow",
        "volume_issue": "78: 1-2",
        "doi": "",
        "url": "",
        "abstract": "Article examining religious practices of third gender communities in Lucknow.",
        "keywords": ["Third Gender", "Religious Practices", "Lucknow", "Gender Studies"],
        "citations": 0
      },
      {
        "id": "new-education-policy-sustainable-development-and-nation-building-historical-moorings-contemporary-discourse-and-future-prospects",
        "title": "New Education Policy, Sustainable Development and Nation Building: Historical Moorings, Contemporary Discourse and Future Prospects",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Chapter in New Education Policy, Sustainable Development and Nation Building: Perspectives, Issues and Challenges (Routledge)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter linking NEP 2020 with sustainable development and nation-building frameworks.",
        "keywords": ["NEP 2020", "Sustainable Development", "Education Policy", "Nation Building"],
        "citations": 0
      },
      {
        "id": "education-and-sustainable-development-challenges-opportunities-and-future-prospects-chapter",
        "title": "Education and Sustainable Development: Challenges, Opportunities and Future Prospects",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Chapter in Education and Sustainable Development: Challenges, Opportunities & Future Prospects (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter discussing intersections between education policy and sustainable development goals.",
        "keywords": ["Education", "Sustainable Development", "Policy", "Opportunities"],
        "citations": 0
      },
      {
        "id": "transforming-india-towards-nation-building-through-the-lens-of-national-education-policy-and-sustainable-development-goals",
        "title": "Transforming India towards Nation Building: Through the Lens of National Education Policy and Sustainable Development Goals",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Chapter in National Education Policy and Sustainable Development Goals (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter analyzing how NEP and SDGs can jointly contribute to nation-building.",
        "keywords": ["NEP 2020", "SDGs", "Nation Building", "Policy Integration"],
        "citations": 0
      },
      {
        "id": "a-roadmap-for-inclusive-development-nep-2020-sdgs-and-policy-integration",
        "title": "A Roadmap for Inclusive Development: National Education Policy (2020), Sustainable Development Goals and Policy Integration",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Chapter in A Roadmap for Inclusive Development (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter proposing pathways for integrating NEP 2020 with SDG targets for inclusive development.",
        "keywords": ["Inclusive Development", "NEP 2020", "SDG Integration", "Policy Roadmap"],
        "citations": 0
      },
      {
        "id": "nai-shikhsha-niti-evam-bharat-ka-samaveshi-vikas-sambhavnain-chunautiyan-evam-navinikaran",
        "title": "Nai Shikhsha Niti Evam Bharat Ka Samaveshi Vikas: Sambhavnain, Chunautiyan Evam Navinikaran",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Chapter in Nai Shikhsha Niti Evam Bharat Ka Samaveshi Vikas (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Hindi-language chapter on NEP and inclusive development challenges and innovations.",
        "keywords": ["NEP", "Inclusive Development", "Hindi", "Policy Challenges"],
        "citations": 0
      },
      {
        "id": "the-dynamics-of-clean-fuel-usage-in-peri-urban-areas-of-uttar-pradesh-womens-perspectives",
        "title": "The Dynamics of Clean Fuel Usage in Peri-urban Areas of Uttar Pradesh: Women's Perspectives",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Indian Journal of Gender Studies (Sage Publications)",
        "volume_issue": "03.04.2025",
        "doi": "https://doi.org/10.1177/09715215251323878",
        "url": "https://doi.org/10.1177/09715215251323878",
        "abstract": "Empirical article exploring women's experiences and perspectives on clean fuel adoption in peri-urban Uttar Pradesh.",
        "keywords": ["Clean Fuel", "LPG", "Women", "Peri-Urban", "Energy Policy"],
        "citations": 0
      },
      {
        "id": "education-and-sustainable-development-challenges-opportunities-and-future-prospects-duplicate-entry",
        "title": "Education and Sustainable Development: Challenges, Opportunities & Future Prospects (duplicate listing)",
        "authors": "Prof. Manish K. Verma",
        "year": 2025,
        "journal": "Rawat Publications (chapter/book)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Duplicate listing of chapter/book on education and sustainable development.",
        "keywords": ["Education", "Sustainable Development"],
        "citations": 0
      },
      {
        "id": "sociology-of-india-need-for-indigenisation-of-sociology-for-india",
        "title": "Sociology of India: Need for Indigenisation of Sociology for India",
        "authors": "Prof. Manish K. Verma",
        "year": 2020,
        "journal": "Paper in NEP 2020: Insights for Curriculum and Content in Sociology (Research India Press)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Paper arguing for indigenising sociological theory and curriculum in the Indian context.",
        "keywords": ["Indigenisation", "Sociology Curriculum", "NEP 2020"],
        "citations": 0
      },
      {
        "id": "issues-and-concerns-of-elderly-women-in-india-a-sociological-analysis",
        "title": "Issues and Concerns of Elderly Women in India: A Sociological Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2024,
        "journal": "Gyanshauryam, International Scientific Referred Research Journal",
        "volume_issue": "Issue 3, Vol. 7, May-June 2024",
        "doi": "",
        "url": "",
        "abstract": "Sociological analysis of challenges faced by elderly women in India.",
        "keywords": ["Elderly Women", "Aging", "Social Issues", "India"],
        "citations": 0
      },
      {
        "id": "fuelling-women-lives-with-lpg-a-sociological-study-of-fuel-use-pattern-amidst-policy-intervention-in-peri-urban-areas-of-uttar-pradesh",
        "title": "Fuelling Women Lives with LPG: A Sociological Study of Fuel Use Pattern Amidst Policy Intervention in Peri-Urban Areas of Uttar Pradesh",
        "authors": "Prof. Manish K. Verma",
        "year": 2024,
        "journal": "Chapter in Sustainability: Science, Policy and Practice in India (Springer Nature)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter examining LPG adoption and its social impacts on women in peri-urban UP.",
        "keywords": ["LPG", "Women", "Peri-Urban", "Policy Intervention"],
        "citations": 0
      },
      {
        "id": "economic-inclusion-of-transgender-community",
        "title": "Economic Inclusion of Transgender Community",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal": "Journal Shodh Disha, Bijnor, U.P.",
        "volume_issue": "Issue 62/6, April-June 2023",
        "doi": "",
        "url": "",
        "abstract": "Article on economic inclusion and challenges faced by transgender communities.",
        "keywords": ["Transgender", "Economic Inclusion", "Social Policy"],
        "citations": 0
      },
      {
        "id": "women-an-explorations-of-womens-coping-mechanism",
        "title": "Women: An Explorations of Women's Coping Mechanism",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal": "Journal Shodh Disha, Bijnor, U.P.",
        "volume_issue": "Issue 62/6, April-June 2023",
        "doi": "",
        "url": "",
        "abstract": "Study exploring coping strategies used by women in varied social contexts.",
        "keywords": ["Women", "Coping Mechanisms", "Gender Studies"],
        "citations": 0
      },
      {
        "id": "the-prevalence-of-elderly-abuse-in-india-a-sociological-analysis",
        "title": "The Prevalence of Elderly Abuse in India: A Sociological Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal": "Journal Shodh Disha, Bijnor, U.P.",
        "volume_issue": "Issue 62/6, April-June 2023",
        "doi": "",
        "url": "",
        "abstract": "Article analyzing prevalence, forms and social determinants of elder abuse in India.",
        "keywords": ["Elder Abuse", "Aging", "Sociology"],
        "citations": 0
      },
      {
        "id": "environmental-change-and-forced-displacement-understanding-the-phenomenon-through-sociological-lenses",
        "title": "Environmental Change and Forced Displacement: Understanding the Phenomenon Through Sociological Lenses",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal": "Madhya Pradesh Journal of Social Sciences",
        "volume_issue": "Vol. 28, No. 5, May 2023",
        "doi": "",
        "url": "",
        "abstract": "Paper linking environmental change to forced displacement using sociological frameworks.",
        "keywords": ["Environmental Change", "Forced Displacement", "Human Security"],
        "citations": 0
      },
      {
        "id": "work-from-home-and-associated-cyber-vulnerabilities-in-metropolitan-cities",
        "title": "Work from Home and Associated Cyber Vulnerabilities in Metropolitan Cities",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal": "Journal Shodhsamhita, Nagpur",
        "volume_issue": "Vol. X, Issue 5(1), Jan-June 2023",
        "doi": "",
        "url": "",
        "abstract": "Article examining cyber vulnerabilities emerging from work-from-home arrangements in metros.",
        "keywords": ["Work from Home", "Cybersecurity", "Metropolitan Cities"],
        "citations": 0
      },
      {
        "id": "mapping-environmental-sociology-in-india",
        "title": "Mapping Environmental Sociology in India",
        "authors": "Prof. Manish K. Verma",
        "year": 2023,
        "journal": "Journal Shodh Disha, Bijnor, U.P.",
        "volume_issue": "Issue 61/4, Jan-March 2023",
        "doi": "",
        "url": "",
        "abstract": "Survey-style article mapping themes, trends and scholars in environmental sociology in India.",
        "keywords": ["Environmental Sociology", "India", "Research Mapping"],
        "citations": 0
      },
      {
        "id": "foreword-cancer-pandemic-charting-social-alleways",
        "title": "Foreword, Cancer Pandemic: Charting Social Alleways",
        "authors": "Prof. Manish K. Verma",
        "year": 2022,
        "journal": "Foreword in Cancer Pandemic: Charting Social Alleways (Samasamayik Prokashan)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Foreword to an edited volume on social dimensions of cancer pandemic.",
        "keywords": ["Foreword", "Cancer", "Social Dimensions"],
        "citations": 0
      },
      {
        "id": "socio-cultural-environment-reproductive-health-and-surrogacy-a-sociological-analysis",
        "title": "Socio-cultural Environment, Reproductive Health and Surrogacy: A Sociological Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2022,
        "journal": "Chapter in Surrogacy: A Socio-cultural and Legal Perspective in India (Aryan Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter analyzing socio-cultural factors affecting reproductive health and surrogacy in India.",
        "keywords": ["Surrogacy", "Reproductive Health", "Socio-cultural Analysis"],
        "citations": 0
      },
      {
        "id": "introduction-environment-and-sustainable-development-perspectives-and-issues",
        "title": "Introduction, Environment and Sustainable Development: Perspectives and Issues",
        "authors": "Prof. Manish K. Verma",
        "year": 2022,
        "journal": "Introduction chapter in edited volume (Routledge)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Introductory chapter framing themes for the edited volume on environment and sustainable development.",
        "keywords": ["Introduction", "Environment", "Sustainable Development"],
        "citations": 0
      },
      {
        "id": "examining-inter-linkages-between-water-scarcity-and-human-security-bundelkhand-case-study",
        "title": "Examining Inter-linkages between Water Scarcity and Human Security: A Case Study of Bundelkhand Region of Uttar Pradesh, India",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "journal": "Chapter in Water Conflicts and Resistance (Routledge)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Case study exploring water scarcity and human security in Bundelkhand.",
        "keywords": ["Water Scarcity", "Human Security", "Bundelkhand"],
        "citations": 0
      },
      {
        "id": "social-structure-and-change-among-tribals-in-india",
        "title": "Social Structure and Change Among Tribals in India",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "journal": "International Journal Shodh Sarita, Lucknow",
        "volume_issue": "Vol 8, Issue 29, Jan-March 2021",
        "doi": "",
        "url": "",
        "abstract": "Article on social structure and processes of change among tribal communities in India.",
        "keywords": ["Tribal Studies", "Social Change", "India"],
        "citations": 0
      },
      {
        "id": "introduction-environment-development-and-sustainability-in-india-perspectives-issues-and-alternatives",
        "title": "Introduction, Environment, Development and Sustainability in India: Perspectives, Issues and Alternatives",
        "authors": "Prof. Manish K. Verma",
        "year": 2021,
        "journal": "Introduction chapter in Springer Nature edited volume",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Introductory chapter framing environment-development-sustainability debates in India.",
        "keywords": ["Environment", "Development", "Sustainability", "India"],
        "citations": 0
      },
      {
        "id": "impact-of-poverty-and-exclusion-an-empirical-analysis",
        "title": "Impact of Poverty and Exclusion: An Empirical Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2020,
        "journal": "Chapter in The Routledge Handbook of Inequality, Exclusion and Stigma in India (Routledge)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Empirical chapter analyzing poverty and exclusion in selected Indian contexts.",
        "keywords": ["Poverty", "Exclusion", "Empirical Analysis"],
        "citations": 0
      },
      {
        "id": "introduction-globalization-environment-and-social-justice-perspectives-issues-and-concerns",
        "title": "Introduction, Globalization, Environment and Social Justice: Perspectives, Issues and Concerns",
        "authors": "Prof. Manish K. Verma",
        "year": 2019,
        "journal": "Introduction chapter in Routledge edited volume",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Introductory framing of globalization, environment and social justice themes.",
        "keywords": ["Globalization", "Environment", "Social Justice"],
        "citations": 0
      },
      {
        "id": "urban-sanitation-in-uttar-pradesh-status-policy-perspective-and-need-for-a-faecal-sludge-management",
        "title": "Urban Sanitation in Uttar Pradesh: Status, Policy, Perspective and Need for a Faecal Sludge Management",
        "authors": "Prof. Manish K. Verma",
        "year": 2019,
        "journal": "Social Science and Development Policy, Lucknow",
        "volume_issue": "Vol. 5, No. 1, Jan-June 2019",
        "doi": "",
        "url": "",
        "abstract": "Article assessing urban sanitation status and advocating faecal sludge management in UP.",
        "keywords": ["Urban Sanitation", "Faecal Sludge Management", "Uttar Pradesh"],
        "citations": 0
      },
      {
        "id": "issues-of-poverty-and-development-in-bundelkhand-region-of-uttar-pradesh-an-empirical-analysis",
        "title": "Issues of Poverty and Development in Bundelkhand Region of Uttar Pradesh: An Empirical Analysis",
        "authors": "Prof. Manish K. Verma",
        "year": 2017,
        "journal": "International Journal Research Process, Aurangabad",
        "volume_issue": "Vol 5, No. 1 & 2, 2017",
        "doi": "",
        "url": "",
        "abstract": "Empirical study on poverty and development challenges in Bundelkhand.",
        "keywords": ["Poverty", "Bundelkhand", "Development"],
        "citations": 0
      },
      {
        "id": "introduction-globalization-social-justice-and-sustainable-development-in-india",
        "title": "Introduction, Globalization, Social Justice and Sustainable Development in India",
        "authors": "Prof. Manish K. Verma",
        "year": 2017,
        "journal": "Introduction chapter in Gyan Publication House edited volume",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Introductory chapter on globalization and social justice in India.",
        "keywords": ["Globalization", "Social Justice", "India"],
        "citations": 0
      },
      {
        "id": "development-induced-displacement-sezs-and-the-state-of-farmers-in-india",
        "title": "Development Induced Displacement, SEZs and the State of Farmers in India: Some Insights from the Recent Experiences",
        "authors": "Prof. Manish K. Verma",
        "year": 2016,
        "journal": "Journal of the Human Rights Commission, India",
        "volume_issue": "Vol. 15, 2016",
        "doi": "",
        "url": "",
        "abstract": "Article exploring displacement due to SEZs and impacts on farmers' livelihoods.",
        "keywords": ["Displacement", "SEZ", "Farmers", "Human Rights"],
        "citations": 0
      },
      {
        "id": "gandhi-and-modernity-an-inquest-in-the-21st-century",
        "title": "Gandhi and Modernity: An Inquest in the 21st Century",
        "authors": "Prof. Manish K. Verma",
        "year": 2016,
        "journal": "Chapter in Gandhian Way in the Era of Globalization (Winshield Press)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter reflecting on Gandhi's relevance to modernity and globalization.",
        "keywords": ["Gandhi", "Modernity", "Globalization"],
        "citations": 0
      },
      {
        "id": "development-food-insecurity-and-health-predicaments-bundelkhand-study",
        "title": "Development, Food Insecurity and Health Predicaments: A Study of Bundelkhand Region of Uttar Pradesh",
        "authors": "Prof. Manish K. Verma",
        "year": 2016,
        "journal": "Chapter in Communities and Social Development in India (Avon Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter linking development processes with food insecurity and health in Bundelkhand.",
        "keywords": ["Food Insecurity", "Health", "Bundelkhand"],
        "citations": 0
      },
      {
        "id": "environmental-catastrophe-human-rights-and-governance-a-sociological-insight-in-the-sorrow-of-bihar",
        "title": "Environmental Catastrophe, Human Rights and Governance: A Sociological Insight in the 'Sorrow of Bihar'",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal": "International Journal Research Process, Aurangabad",
        "volume_issue": "Vol 3, No. 2, July-December 2015",
        "doi": "",
        "url": "",
        "abstract": "Article examining environmental disasters, human rights and governance in Bihar.",
        "keywords": ["Environmental Catastrophe", "Human Rights", "Bihar"],
        "citations": 0
      },
      {
        "id": "development-dilemma-the-paradoxes-of-scientific-advancement-and-ingrained-social-accountability",
        "title": "Development Dilemma: The Paradoxes of Scientific Advancement and Ingrained Social Accountability",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal": "Social Science and Development Policy, Lucknow",
        "volume_issue": "Vol. 1, No. 1, Jan-June 2015",
        "doi": "",
        "url": "",
        "abstract": "Article discussing tensions between scientific progress and social accountability.",
        "keywords": ["Development Dilemma", "Science", "Social Accountability"],
        "citations": 0
      },
      {
        "id": "development-induced-displacement-policy-information-awareness-and-tribulations",
        "title": "Development Induced Displacement: Policy, Information, Awareness and Tribulations",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal": "Chapter in Globalization and Environment: Discourse, Policies and Practices (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter on policy and informational challenges surrounding development-induced displacement.",
        "keywords": ["Displacement", "Policy", "Awareness"],
        "citations": 0
      },
      {
        "id": "introduction-globalization-and-environment-discourse-policies-and-practices",
        "title": "Introduction, Globalization and Environment: Discourse, Policies and Practices",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal": "Introduction chapter in Rawat Publications edited volume",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Introductory framing of the edited volume on globalization and environment.",
        "keywords": ["Introduction", "Globalization", "Environment"],
        "citations": 0
      },
      {
        "id": "social-exclusion-and-health-predicaments-a-study-of-bundelkhand",
        "title": "Social Exclusion and Health Predicaments: A Study of Bundelkhand",
        "authors": "Prof. Manish K. Verma",
        "year": 2015,
        "journal": "Golden Research Thoughts",
        "volume_issue": "Vol. 4, Issue 12, 12 June 2015",
        "doi": "",
        "url": "",
        "abstract": "Study on social exclusion and associated health issues in Bundelkhand.",
        "keywords": ["Social Exclusion", "Health", "Bundelkhand"],
        "citations": 0
      },
      {
        "id": "health-tradition-and-awareness-a-perspective-on-tribal-health-care-practices",
        "title": "Health, Tradition and Awareness: A Perspective on the Tribal Health Care Practices",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal": "International Journal Research Process, Aurangabad",
        "volume_issue": "Vol 2, No. 2, July-December 2014",
        "doi": "",
        "url": "",
        "abstract": "Article exploring traditional tribal health care practices and awareness.",
        "keywords": ["Tribal Health", "Traditional Practices", "Health Awareness"],
        "citations": 0
      },
      {
        "id": "environmental-health-of-the-communities-of-fringe-areas-a-study-of-lucknow-city",
        "title": "Environmental Health of the Communities of Fringe Areas: A Study of Lucknow City",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal": "Indian Streams Research Journal",
        "volume_issue": "Vol. 4, Issue 11, Dec 2014",
        "doi": "",
        "url": "",
        "abstract": "Study of environmental health conditions in fringe communities around Lucknow.",
        "keywords": ["Environmental Health", "Fringe Areas", "Lucknow"],
        "citations": 0
      },
      {
        "id": "relevance-of-gandhian-modernity-in-the-contemporary-era",
        "title": "Relevance of Gandhian Modernity in the Contemporary Era",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal": "Research Process, International Journal of Social Research Foundation",
        "volume_issue": "Vol. 2, No. 1, Jan-June 2014",
        "doi": "",
        "url": "",
        "abstract": "Article reflecting on Gandhian modernity and its contemporary relevance.",
        "keywords": ["Gandhian Modernity", "Contemporary Relevance"],
        "citations": 0
      },
      {
        "id": "food-security-existing-policies-and-challenges-with-reference-to-bundelkhand",
        "title": "Food Security: Existing Policies and Challenges with reference to Bundelkhand Region of Uttar Pradesh",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal": "Vikash International Journal of Management, Science and Technology",
        "volume_issue": "Jan-Feb 2014",
        "doi": "",
        "url": "",
        "abstract": "Article assessing food security policies and challenges in Bundelkhand.",
        "keywords": ["Food Security", "Bundelkhand", "Policy Challenges"],
        "citations": 0
      },
      {
        "id": "tribes-of-india-retrograde-development-and-state-policies",
        "title": "Tribes of India: Retrograde Development and State Policies",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal": "Chapter in Social Development in India (Bharat Book Centre)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter critiquing development policies affecting tribal communities.",
        "keywords": ["Tribes", "Development Policy", "State Policies"],
        "citations": 0
      },
      {
        "id": "modernization-of-indian-tradition-introspecting-equitable-development-paradigm",
        "title": "Modernization of Indian Tradition: Introspecting Equitable Development Paradigm",
        "authors": "Prof. Manish K. Verma",
        "year": 2014,
        "journal": "Chapter in Polity, Civil Society and Development (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter examining modernization and equitable development in Indian traditions.",
        "keywords": ["Modernization", "Equitable Development", "Indian Tradition"],
        "citations": 0
      },
      {
        "id": "policy-planning-in-development-projects-process-and-limitations",
        "title": "Policy Planning in Development Projects: Process and Limitations",
        "authors": "Prof. Manish K. Verma",
        "year": 2012,
        "journal": "Chapter in Interrogating Development (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter discussing planning processes and limitations in development projects.",
        "keywords": ["Policy Planning", "Development Projects", "Limitations"],
        "citations": 0
      },
      {
        "id": "plaguing-democracy-paradigm-for-an-alternative-political-culture",
        "title": "Plaguing Democracy: Paradigm for an Alternative Political Culture",
        "authors": "Prof. Manish K. Verma",
        "year": 2010,
        "journal": "Chapter in Quest for Participatory Democracy (Rawat Publications)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Chapter proposing alternative paradigms for participatory political culture.",
        "keywords": ["Democracy", "Political Culture", "Participatory"],
        "citations": 0
      },
      {
        "id": "social-structure-and-social-problems-theory-and-interrelations-course-material",
        "title": "Social Structure and Social Problems: Theory and Interrelations (Course material)",
        "authors": "Prof. Manish K. Verma",
        "year": 2008,
        "journal": "Course material for Vardhman Mahavir Kota Open University",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Course material covering theory and interrelations between social structure and social problems.",
        "keywords": ["Course Material", "Social Structure", "Social Problems"],
        "citations": 0
      },
      {
        "id": "social-action-meaning-definition-and-theories-course-material",
        "title": "Social Action: Meaning, Definition and Theories (Course material)",
        "authors": "Prof. Manish K. Verma",
        "year": 2008,
        "journal": "Course material for Vardhman Mahavir Kota Open University",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Course material on social action concepts and theoretical perspectives.",
        "keywords": ["Course Material", "Social Action", "Theories"],
        "citations": 0
      },
      {
        "id": "social-structure-and-function-course-material",
        "title": "Social Structure & Function (Course material)",
        "authors": "Prof. Manish K. Verma",
        "year": 2008,
        "journal": "Course material for Vardhman Mahavir Kota Open University",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Course material addressing social structure and its functions.",
        "keywords": ["Course Material", "Social Structure", "Function"],
        "citations": 0
      },
      {
        "id": "rethinking-modernity-a-sociological-engagement-with-gandhi",
        "title": "Rethinking Modernity: A Sociological Engagement with Gandhi",
        "authors": "Prof. Manish K. Verma",
        "year": 2007,
        "journal": "Gandhi Marg, Gandhi Peace Foundation",
        "volume_issue": "Apr-June 2007",
        "doi": "",
        "url": "",
        "abstract": "Article engaging Gandhi's ideas in sociological debates on modernity.",
        "keywords": ["Gandhi", "Modernity", "Sociology"],
        "citations": 0
      },
      {
        "id": "do-we-really-need-development-some-empirical-probing",
        "title": "Do We Really Need Development: Some Empirical Probing",
        "authors": "Prof. Manish K. Verma",
        "year": 2007,
        "journal": "Chapter in edited volume (R.K. Saxena, Agra)",
        "volume_issue": "",
        "doi": "",
        "url": "",
        "abstract": "Empirical probing into the assumptions and consequences of development.",
        "keywords": ["Development", "Empirical Study", "Critical Inquiry"],
        "citations": 0
      },
      {
        "id": "social-cost-of-development-deconstructing-some-hidden-realities",
        "title": "Social Cost of Development: Deconstructing Some Hidden Realities",
        "authors": "Prof. Manish K. Verma",
        "year": 2005,
        "journal": "SHODHAK, Jaipur",
        "volume_issue": "May-Aug 2005",
        "doi": "",
        "url": "",
        "abstract": "Article deconstructing social costs associated with development projects.",
        "keywords": ["Social Cost", "Development", "Critical Analysis"],
        "citations": 0
      },
      {
        "id": "development-induced-displacement-a-socio-economic-study-of-thermal-power-projects",
        "title": "Development Induced Displacement: A Socio-Economic Study of Thermal Power Projects",
        "authors": "Prof. Manish K. Verma",
        "year": 2004,
        "journal": "Man in India Journal",
        "volume_issue": "July-Dec 2004",
        "doi": "",
        "url": "",
        "abstract": "Socio-economic study of displacement caused by thermal power projects.",
        "keywords": ["Displacement", "Thermal Power", "Socio-Economic Study"],
        "citations": 0
      }
    ]
  },
];