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
        designation: 'Professor & Head, Department of Sociology',
        department: 'Department of Sociology',
        university: 'Babasaheb Bhimrao Ambedkar University',
        email: 'contact@manishkverma.in',
        phone: '+91-9198277999',
        whatsapp: '+91-9198277999',
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
                "Dean, Ambedkar School of Social Sciences & Dean, School of Vocational & Futuristic Studies; Professor & Head, Department of Sociology at Babasaheb Bhimrao Ambedkar University, Lucknow. Council Member, Indian Council of Social Science Research (ICSSR), Ministry of Education, Government of India (2024-2026); Former Chief Vigilance Officer; Former Controller of Examinations; Former Secretary, Indian Sociological Society (2022-2023); Former Managing Committee Member, Indian Sociological Society (2017-2022).",
            longBio:
                'Prof. Manish K. Verma is a distinguished academic with over 26 years of teaching experience in Sociology. He has served in multiple prestigious administrative roles including Dean of two major schools at BBAU, Head of Department, Controller of Examinations, and Chief Vigilance Officer. A Council Member of ICSSR under the Ministry of Education, Government of India, he has contributed significantly to academic and social science research through publications, research projects, and mentorship of numerous doctoral and postgraduate students.',
            funFact: 'With deep expertise in Sociology and social sciences, Prof. Verma has been instrumental in shaping academic policy and institutional governance at both national and university levels.',
        },

    // Education & Qualifications
    education: [
        {
            degree: 'Ph.D.',
            field: 'Sociology',
            university: 'Jawaharlal Nehru University',
            year: 2002,
            specialization: 'Sociology',
        },
        {
            degree: 'M.Phil',
            field: 'Sociology',
            university: 'Jawaharlal Nehru University',
            year: 1995,
        },
        {
            degree: 'Post-Graduation (PG)',
            field: 'Sociology',
            university: 'Jawaharlal Nehru University',
            year: 1993,
        },
    ],

    // Experience
    experience: [
        {
            position: 'Dean, School of Vocational & Futuristic Studies',
            institution: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
            startYear: 2022,
            endYear: null,
            isCurrent: true,
            description: 'Leading the School of Vocational & Futuristic Studies (2 years 4 months)',
        },
        {
            position: 'Dean, Ambedkar School of Social Sciences',
            institution: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
            startYear: 2020,
            endYear: null,
            isCurrent: true,
            description: 'Dean of Ambedkar School of Social Sciences (2 years 7 months)',
        },
        {
            position: 'Professor & Head, Department of Sociology',
            institution: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
            startYear: 2019,
            endYear: null,
            isCurrent: true,
            description: 'Head of Department of Sociology (5 years 2 months)',
        },
        {
            position: 'Controller of Examinations',
            institution: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
            startYear: 2021,
            endYear: 2024,
            isCurrent: false,
            description: 'Controller of Examinations (3 years 5 months)',
        },
        {
            position: 'Chief Vigilance Officer',
            institution: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
            startYear: 2016,
            endYear: 2021,
            isCurrent: false,
            description: 'Chief Vigilance Officer',
        },
        {
            position: 'Professor of Sociology',
            institution: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
            startYear: 2013,
            endYear: null,
            isCurrent: true,
            description: 'Teaching and Research - 11 years 10 months as Professor',
        },
    ],

    // Social Media Accounts
    socialMedia: {
        orcid: {
            id: '0000-0001-5555-6666',
            url: 'https://orcid.org/0000-0001-5555-6666',
            icon: '🎓',
            label: 'ORCID',
            username: 'Manish-K-Verma',
        },
        googleScholar: {
            id: 'scholar-mkv-verma',
            url: 'https://scholar.google.com/citations?user=scholar-mkv-verma',
            icon: '📖',
            label: 'Google Scholar',
            username: 'Manish K. Verma',
        },
        linkedin: {
            id: 'manish-k-verma-sociology',
            url: 'https://www.linkedin.com/in/manish-k-verma-sociology/',
            icon: '💼',
            label: 'LinkedIn',
            username: 'manish-k-verma',
        },
        twitter: {
            id: 'prof_mkv_sociology',
            url: 'https://twitter.com/prof_mkv_sociology',
            icon: '𝕏',
            label: 'Twitter/X',
            username: '@prof_mkv_sociology',
        },
        github: {
            id: 'prof-mkv-verma',
            url: 'https://github.com/prof-mkv-verma',
            icon: '🐙',
            label: 'GitHub',
            username: 'prof-mkv-verma',
        },
        researchGate: {
            id: 'Manish_K_Verma_Sociology',
            url: 'https://www.researchgate.net/profile/Manish_K_Verma_Sociology',
            icon: '🔬',
            label: 'ResearchGate',
            username: 'Manish_K_Verma',
        },
        email: {
            id: 'mkvbbau@gmail.com',
            address: 'mkvbbau@gmail.com',
            url: 'mailto:mkvbbau@gmail.com',
            icon: '✉️',
            label: 'Email',
        },
    },

    // Areas of Expertise
    expertise: [
        {
            category: 'Sociology',
            skills: ['Social Research', 'Qualitative Analysis', 'Survey Design', 'Social Theory'],
        },
        {
            category: 'Academic Administration',
            skills: ['Dean Management', 'Academic Policy', 'University Governance', 'Student Affairs'],
        },
        {
            category: 'Educational Leadership',
            skills: ['Curriculum Design', 'Faculty Development', 'Institutional Strategy', 'Quality Assurance'],
        },
        {
            category: 'Research & Mentorship',
            skills: ['PhD Supervision', 'Postgraduate Teaching', 'Research Projects', 'Publication'],
        },
    ],

    // Research Interests
    researchInterests: [
        'Social Stratification and Inequality',
        'Institutional Sociology',
        'Academic Excellence',
        'Social Science Research',
        'Educational Development',
        'Governance and Policy',
    ],

    // Awards & Recognition
    awards: [
        {
            title: 'Council Member, ICSSR',
            organization: 'Ministry of Education, Government of India',
            year: 2024,
            description: 'Member of Indian Council of Social Science Research (2024-2026)',
        },
        {
            title: 'Dean, Ambedkar School of Social Sciences',
            organization: 'Babasaheb Bhimrao Ambedkar University',
            year: 2020,
            description: 'Leading the Ambedkar School of Social Sciences',
        },
        {
            title: 'Secretary, Indian Sociological Society',
            organization: 'Indian Sociological Society',
            year: 2022,
            description: 'Secretary of Indian Sociological Society (2022-2023)',
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
                code: 'SOC501',
                title: 'Contemporary Social Theory',
                level: 'Postgraduate',
                semester: 'Odd',
            },
            {
                code: 'SOC301',
                title: 'Sociology of Education',
                level: 'Undergraduate',
                semester: 'Even',
            },
            {
                code: 'SOC401',
                title: 'Research Methods in Sociology',
                level: 'Postgraduate',
                semester: 'Both',
            },
        ],
        supervisions: {
            phd: 8,
            mtech: 0,
            btech: 0,
        },
    },

    // Administrative Roles
    administrativeRoles: [
        {
            position: 'Dean, Ambedkar School of Social Sciences',
            duration: '2020-Present',
            organization: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
        },
        {
            position: 'Dean, School of Vocational & Futuristic Studies',
            duration: '2022-Present',
            organization: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
        },
        {
            position: 'Head, Department of Sociology',
            duration: '2019-Present',
            organization: 'Babasaheb Bhimrao Ambedkar University, Lucknow',
        },
        {
            position: 'Council Member, ICSSR',
            duration: '2024-2026',
            organization: 'Ministry of Education, Government of India',
        },
        {
            position: 'Secretary, Indian Sociological Society',
            duration: '2022-2023',
            organization: 'Indian Sociological Society, New Delhi',
        },
    ],

    // Office Location
    officeLocation: {
        building: 'Department of Sociology',
        room: '405A',
        floor: 4,
        address: 'Babasaheb Bhimrao Ambedkar University, Vidya Vihar, Raibareli Road, Lucknow – 226025 (U.P.), India',
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
        researchProfile: 'https://bbau.ac.in/faculty/manish-verma',
        universityProfile: 'https://bbau.ac.in/faculty/manish-verma',
        labWebsite: 'https://bbau.ac.in/department/sociology',
        personalWebsite: 'https://manishverma-sociology.com',
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