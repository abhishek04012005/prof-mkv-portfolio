import Logo from "../../public/assets/logo.png"
import ProfessorImage from "../../public/assets/professor.png"
import type { StaticImageData } from "next/image"

interface PersonalInfo {
    firstName: string;
    lastName: string;
    middleInitial: string;
    title: string;
    designation: string;
    department: string;
    university: string;
    email: string;
    phone: string;
    whatsapp: string;
}

interface ImageFormat {
    small: string;
    medium: string;
    large: string;
    thumbnail: string;
}

interface ImageConfig {
    url: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
}

interface ProfileImageWithFormats extends ImageConfig {
    formats: ImageFormat;
}

interface ProfileImages {
    logo: ImageConfig;
    profilePhoto: ProfileImageWithFormats;
    coverImage: ImageConfig;
}

interface BioInfo {
    shortBio: string;
    longBio: string;
    funFact: string;
}

interface EducationEntry {
    degree: string;
    field: string;
    university: string;
    year: number;
    specialization?: string;
}

interface ExperienceEntry {
    position: string;
    institution: string;
    startYear: number;
    endYear: number | null;
    isCurrent: boolean;
    description: string;
}

interface SocialMediaAccount {
    id: string;
    url: string;
    icon: string;
    label: string;
    username?: string;
    address?: string;
}

interface SocialMediaLinks {
    orcid: SocialMediaAccount;
    googleScholar: SocialMediaAccount;
    linkedin: SocialMediaAccount;
    twitter: SocialMediaAccount;
    github: SocialMediaAccount;
    researchGate: SocialMediaAccount;
    email: Omit<SocialMediaAccount, 'username'> & { address: string };
}

interface SkillCategory {
    category: string;
    skills: string[];
}

interface AwardEntry {
    title: string;
    organization: string;
    year: number;
    description: string;
}

interface PublicationStats {
    filter(arg0: (pub: any) => any): unknown;
    presentations: number;
    articles: number;
    totalPublications: number;
    experience: number;
    journalPapers: number;
    conferencePapers: number;
    hIndex: number;
    citations: number;
    researchProjects: number;
}

interface Course {
    code: string;
    title: string;
    level: 'Undergraduate' | 'Postgraduate' | 'Research';
    semester: 'Odd' | 'Even' | 'Both';
}

interface TeachingInfo {
    currentCourses: Course[];
    supervisions: {
        phd: number;
        mtech: number;
        btech: number;
    };
}

interface AdministrativeRole {
    position: string;
    duration: string;
    organization: string;
}

interface OfficeHour {
    day: string;
    startTime: string;
    endTime: string;
}

interface OfficeLocation {
    building: string;
    room: string;
    floor: number;
    address: string;
    campus: string;
    officeHours: OfficeHour[];
}

interface Resources {
    cv: string;
    researchProfile: string;
    universityProfile: string;
    labWebsite: string;
    personalWebsite: string;
}

interface Metadata {
    createdAt: string;
    updatedAt: string;
    version: string;
    status: 'active' | 'inactive' | 'archived';
}

interface ProfessorDetailsType {
    personalInfo: PersonalInfo;
    profileImages: ProfileImages;
    bio: BioInfo;
    education: EducationEntry[];
    experience: ExperienceEntry[];
    socialMedia: SocialMediaLinks;
    expertise: SkillCategory[];
    researchInterests: string[];
    awards: AwardEntry[];
    publicationStats: PublicationStats;
    teaching: TeachingInfo;
    administrativeRoles: AdministrativeRole[];
    officeLocation: OfficeLocation;
    resources: Resources;
    metadata: Metadata;
}

// ============================================
// DATA
// ============================================

export const professorDetails: ProfessorDetailsType = {
    // Personal Information
    personalInfo: {
        firstName: 'Manish',
        lastName: 'Verma',
        middleInitial: 'K',
        title: 'Prof.',
        designation: 'Professor of Sociology',
        department: 'Department of Computer Science & Engineering',
        university: 'Your University Name',
        email: 'manish.verma@university.edu',
        phone: '+91-9876543210',
        whatsapp: '+91-9876543210',
    },

    // Profile Images
    profileImages: {
        logo: {
            url: Logo,
            alt: 'Prof. Manish K. Verma Logo',
            width: 48,
            height: 48,
        },
        profilePhoto: {
            url: ProfessorImage,
            alt: 'Prof. Manish K. Verma',
            width: 400,
            height: 500,
            formats: {
                small: '/images/profile/professor-photo-small.jpg',
                medium: '/images/profile/professor-photo-medium.jpg',
                large: '/images/profile/professor-photo-large.jpg',
                thumbnail: '/images/profile/professor-photo-thumbnail.jpg',
            },
        },
        coverImage: {
            url: '/images/cover/professor-cover.jpg',
            alt: 'Professor Cover Image',
            width: 1920,
            height: 600,
        },
    },

    // Professional Summary
        bio: {
            shortBio:
                "Currently serves as Dean, Ambedkar School of Social Sciences and Dean, School of Vocational & Futuristic Studies, as well as Professor and Head, Department of Sociology at Babasaheb Bhimrao Ambedkar University, Lucknow. \nHe is a Council Member of the Indian Council of Social Science Research (ICSSR), Ministry of Education, Government of India (2024–2026). His prior administrative roles include Chief Vigilance Officer, Controller of Examinations, and leadership positions within the Indian Sociological Society, where he served as Secretary (2022–2023) and Managing Committee Member (2017–2022).",
            longBio:
                'Prof. Manish K. Verma is a renowned academician with over 20 years of experience in teaching and research. He has contributed significantly to the field of Computer Science through innovative research, published papers in prestigious journals, and mentorship of numerous students. His research interests include AI, ML, Cloud Computing, and Software Architecture.',
            funFact: 'When not teaching or researching, Prof. Verma enjoys reading tech blogs and contributing to open-source projects.',
        },

    // Education & Qualifications
    education: [
        {
            degree: 'Ph.D.',
            field: 'Computer Science',
            university: 'Indian Institute of Technology (IIT)',
            year: 2010,
            specialization: 'Artificial Intelligence',
        },
        {
            degree: 'M.Tech',
            field: 'Computer Science & Engineering',
            university: 'Indian Institute of Technology (IIT)',
            year: 2007,
            specialization: 'Software Engineering',
        },
        {
            degree: 'B.Tech',
            field: 'Computer Science & Engineering',
            university: 'Delhi University',
            year: 2005,
        },
    ],

    // Experience
    experience: [
        {
            position: 'Professor',
            institution: 'Your University Name',
            startYear: 2018,
            endYear: null,
            isCurrent: true,
            description: 'Leading research initiatives and teaching advanced courses',
        },
        {
            position: 'Associate Professor',
            institution: 'Your University Name',
            startYear: 2015,
            endYear: 2018,
            isCurrent: false,
            description: 'Developed curriculum and mentored PhD students',
        },
        {
            position: 'Assistant Professor',
            institution: 'Your University Name',
            startYear: 2012,
            endYear: 2015,
            isCurrent: false,
            description: 'Established research lab and published groundbreaking papers',
        },
    ],

    // Social Media Accounts
    socialMedia: {
        orcid: {
            id: '0000-0002-1234-5678',
            url: 'https://orcid.org/0000-0002-1234-5678',
            icon: '🎓',
            label: 'ORCID',
            username: 'Manish-Verma',
        },
        googleScholar: {
            id: 'qwerty1234567',
            url: 'https://scholar.google.com/citations?user=qwerty1234567',
            icon: '📖',
            label: 'Google Scholar',
            username: 'Manish Verma',
        },
        linkedin: {
            id: 'manish-verma-12345',
            url: 'https://www.linkedin.com/in/manish-verma-12345/',
            icon: '💼',
            label: 'LinkedIn',
            username: 'manish-verma',
        },
        twitter: {
            id: 'prof_manish_verma',
            url: 'https://twitter.com/prof_manish_verma',
            icon: '𝕏',
            label: 'Twitter/X',
            username: '@prof_manish_verma',
        },
        github: {
            id: 'prof-manish-verma',
            url: 'https://github.com/prof-manish-verma',
            icon: '🐙',
            label: 'GitHub',
            username: 'prof-manish-verma',
        },
        researchGate: {
            id: 'Manish_Verma123',
            url: 'https://www.researchgate.net/profile/Manish_Verma123',
            icon: '🔬',
            label: 'ResearchGate',
            username: 'Manish_Verma',
        },
        email: {
            id: 'manish.verma@university.edu',
            address: 'manish.verma@university.edu',
            url: 'mailto:manish.verma@university.edu',
            icon: '✉️',
            label: 'Email',
        },
    },

    // Areas of Expertise
    expertise: [
        {
            category: 'Artificial Intelligence',
            skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
        },
        {
            category: 'Software Engineering',
            skills: ['Software Architecture', 'Design Patterns', 'Agile Methodology', 'Cloud Computing'],
        },
        {
            category: 'Data Science',
            skills: ['Data Analysis', 'Data Mining', 'Big Data', 'Predictive Analytics'],
        },
        {
            category: 'Programming',
            skills: ['Python', 'Java', 'C++', 'JavaScript', 'SQL'],
        },
    ],

    // Research Interests
    researchInterests: [
        'Machine Learning and Deep Learning',
        'Artificial Intelligence Applications',
        'Cloud Computing and Distributed Systems',
        'Software Architecture and Design',
        'Natural Language Processing',
        'IoT and Edge Computing',
    ],

    // Awards & Recognition
    awards: [
        {
            title: 'Best Researcher Award',
            organization: 'National Academy of Sciences',
            year: 2022,
            description: 'For outstanding contributions to AI research',
        },
        {
            title: 'Excellence in Teaching Award',
            organization: 'Your University Name',
            year: 2021,
            description: 'For exceptional teaching and student mentorship',
        },
        {
            title: 'Research Grant Award',
            organization: 'Department of Science and Technology',
            year: 2020,
            description: 'For innovative research project on AI applications',
        },
    ],

    // Publications Count
    publicationStats: {
        presentations: 270,
        articles: 50,
        totalPublications: 13,
        experience: 25,
        journalPapers: 85,
        conferencePapers: 65,
        hIndex: 28,
        citations: 2500,
        researchProjects: 15,
        filter: function (arg0: (pub: any) => any): unknown {
            throw new Error("Function not implemented.");
        }
    },

    // Teaching Information
    teaching: {
        currentCourses: [
            {
                code: 'CS501',
                title: 'Advanced Artificial Intelligence',
                level: 'Postgraduate',
                semester: 'Odd',
            },
            {
                code: 'CS301',
                title: 'Software Engineering',
                level: 'Undergraduate',
                semester: 'Even',
            },
            {
                code: 'CS401',
                title: 'Machine Learning',
                level: 'Postgraduate',
                semester: 'Both',
            },
        ],
        supervisions: {
            phd: 8,
            mtech: 15,
            btech: 25,
        },
    },

    // Administrative Roles
    administrativeRoles: [
        {
            position: 'Head of Department',
            duration: '2020-Present',
            organization: 'Your University Name',
        },
        {
            position: 'Coordinator, AI Research Lab',
            duration: '2018-Present',
            organization: 'Your University Name',
        },
        {
            position: 'Member, Academic Council',
            duration: '2019-Present',
            organization: 'Your University Name',
        },
    ],

    // Office Location
    officeLocation: {
        building: 'Computer Science Building',
        room: '405A',
        floor: 4,
        address: 'Your University Name, City, State - PIN',
        campus: 'Main Campus',
        officeHours: [
            {
                day: 'Monday',
                startTime: '10:00 AM',
                endTime: '12:00 PM',
            },
            {
                day: 'Wednesday',
                startTime: '2:00 PM',
                endTime: '4:00 PM',
            },
            {
                day: 'Friday',
                startTime: '10:00 AM',
                endTime: '12:00 PM',
            },
        ],
    },

    // Links & Resources
    resources: {
        cv: '/data/CV.pdf',
        researchProfile: 'https://scholar.google.com/citations?user=qwerty1234567',
        universityProfile: 'https://university.edu/faculty/manish-verma',
        labWebsite: 'https://ailab.university.edu',
        personalWebsite: 'https://manishverma.com',
    },

    // Metadata
    metadata: {
        createdAt: '2024-01-01',
        updatedAt: new Date().toISOString(),
        version: '1.0.0',
        status: 'active',
    },
};

// ============================================
// UTILITY FUNCTIONS WITH STRICT TYPING
// ============================================

/**
 * Get all social media links excluding email
 * @returns Array of social media accounts
 */
export const getSocialMediaLinks = (): Array<SocialMediaAccount & { key: string }> => {
    const socialMediaEntries = Object.entries(professorDetails.socialMedia) as Array<
        [keyof SocialMediaLinks, SocialMediaAccount]
    >;

    return socialMediaEntries
        .filter(([key]) => key !== 'email')
        .map(([key, value]) => ({
            key,
            ...value,
        }));
};

/**
 * Get expertise areas only
 * @returns Array of expertise category names
 */
export const getExpertiseAreas = (): string[] => {
    return professorDetails.expertise.map((area: SkillCategory) => area.category);
};

/**
 * Get expertise with skills
 * @returns Array of expertise objects with skills
 */
export const getExpertiseWithSkills = (): SkillCategory[] => {
    return professorDetails.expertise;
};

/**
 * Get current courses
 * @returns Array of current courses
 */
export const getCurrentCourses = (): Course[] => {
    return professorDetails.teaching.currentCourses;
};

/**
 * Get publication statistics
 * @returns Publication stats object
 */
export const getPublicationStats = (): PublicationStats => {
    return professorDetails.publicationStats;
};

/**
 * Get full name
 * @returns Full name with title
 */
export const getFullName = (): string => {
    const { title, firstName, middleInitial, lastName } = professorDetails.personalInfo;
    return `${title} ${firstName} ${middleInitial}. ${lastName}`;
};

/**
 * Get all experience entries sorted by start year (newest first)
 * @returns Sorted experience array
 */
export const getExperienceSorted = (): ExperienceEntry[] => {
    return [...professorDetails.experience].sort((a, b) => b.startYear - a.startYear);
};

/**
 * Get current experience
 * @returns Current position entry or undefined
 */
export const getCurrentExperience = (): ExperienceEntry | undefined => {
    return professorDetails.experience.find((exp: ExperienceEntry) => exp.isCurrent);
};

/**
 * Get education sorted by year (newest first)
 * @returns Sorted education array
 */
export const getEducationSorted = (): EducationEntry[] => {
    return [...professorDetails.education].sort((a, b) => b.year - a.year);
};

/**
 * Get awards sorted by year (newest first)
 * @returns Sorted awards array
 */
export const getAwardsSorted = (): AwardEntry[] => {
    return [...professorDetails.awards].sort((a, b) => b.year - a.year);
};

/**
 * Get office hours as formatted string
 * @returns Formatted office hours string
 */
export const getOfficeHoursFormatted = (): string => {
    return professorDetails.officeLocation.officeHours
        .map((hour: OfficeHour) => `${hour.day}: ${hour.startTime} - ${hour.endTime}`)
        .join('\n');
};

/**
 * Get social media account by key
 * @param key - Social media key
 * @returns Social media account or undefined
 */
export const getSocialMediaByKey = (
    key: keyof SocialMediaLinks
): SocialMediaAccount | undefined => {
    return professorDetails.socialMedia[key];
};

/**
 * Get total years of experience
 * @returns Number of years
 */
export const getTotalExperience = (): number => {
    const currentYear = new Date().getFullYear();
    const earliestStart = Math.min(...professorDetails.experience.map((exp) => exp.startYear));
    return currentYear - earliestStart;
};

/**
 * Get education and experience timeline combined
 * @returns Combined timeline array sorted by year
 */
export const getTimeline = (): Array<{
    type: 'education' | 'experience';
    year: number;
    title: string;
    subtitle: string;
}> => {
    const eduTimeline = professorDetails.education.map((edu) => ({
        type: 'education' as const,
        year: edu.year,
        title: edu.degree,
        subtitle: `${edu.field} - ${edu.university}`,
    }));

    const expTimeline = professorDetails.experience.map((exp) => ({
        type: 'experience' as const,
        year: exp.startYear,
        title: exp.position,
        subtitle: exp.institution,
    }));

    return [...eduTimeline, ...expTimeline].sort((a, b) => b.year - a.year);
};

// ============================================
// EXPORTS
// ============================================

export type {
    PersonalInfo,
    ImageConfig,
    ImageFormat,
    ProfileImages,
    BioInfo,
    EducationEntry,
    ExperienceEntry,
    SocialMediaAccount,
    SocialMediaLinks,
    SkillCategory,
    AwardEntry,
    PublicationStats,
    Course,
    TeachingInfo,
    AdministrativeRole,
    OfficeHour,
    OfficeLocation,
    Resources,
    Metadata,
    ProfessorDetailsType,
};