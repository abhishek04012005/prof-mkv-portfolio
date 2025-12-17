'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  professorDetails,
  getExperienceSorted,
  getEducationSorted,
  getAwardsSorted,
  getSocialMediaLinks,
  getExpertiseWithSkills,
  getPublicationStats,
} from '@/data/professorDetails';
import styles from './know-more.module.css';
import {
  School as EducationIcon,
  Work as WorkIcon,
  EmojiEvents as AwardIcon,
  CodeOff as SkillIcon,
  BarChart as StatsIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from '@mui/icons-material';

export default function KnowMorePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'education' | 'expertise' | 'publications' | 'contact'>('overview');

  const { personalInfo, bio } = professorDetails;
  const { profilePhoto } = professorDetails.profileImages;
  const experience = getExperienceSorted();
  const education = getEducationSorted();
  const awards = getAwardsSorted();
  const skills = getExpertiseWithSkills();
  const socialLinks = getSocialMediaLinks();
  const pubStats = getPublicationStats();

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.profileCard}>
            <div className={styles.profileImageWrapper}>
              <Image
                src={profilePhoto.url}
                alt={profilePhoto.alt}
                width={250}
                height={300}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>
                {personalInfo.title} {personalInfo.firstName} {personalInfo.middleInitial}. {personalInfo.lastName}
              </h1>
              <p className={styles.designation}>{personalInfo.designation}</p>
              <p className={styles.department}>{personalInfo.department}</p>
              <p className={styles.university}>{personalInfo.university}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className={styles.tabNavigation}>
        <nav className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
              onClick={() => setActiveTab(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className={styles.contentArea}>
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professional Overview</h2>
            <p className={styles.bio}>{bio.longBio}</p>

            {/* Stats Grid */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <WorkIcon />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{pubStats.experience}+</div>
                  <div className={styles.statLabel}>Years of Experience</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <StatsIcon />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{pubStats.totalPublications}</div>
                  <div className={styles.statLabel}>Publications</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <SkillIcon />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{pubStats.presentations}+</div>
                  <div className={styles.statLabel}>Presentations</div>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <AwardIcon />
                </div>
                <div className={styles.statContent}>
                  <div className={styles.statValue}>{pubStats.citations}+</div>
                  <div className={styles.statLabel}>Citations</div>
                </div>
              </div>
            </div>

            {/* Research Interests */}
            <div className={styles.interestsSection}>
              <h3 className={styles.subsectionTitle}>Research Interests</h3>
              <div className={styles.interestsList}>
                {professorDetails.researchInterests.map((interest, index) => (
                  <div key={index} className={styles.interestBadge}>
                    {interest}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professional Experience</h2>
            <div className={styles.timeline}>
              {experience.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <WorkIcon />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{exp.position}</h3>
                    <p className={styles.timelineSubtitle}>{exp.institution}</p>
                    <p className={styles.timelinePeriod}>
                      {exp.startYear} - {exp.endYear ? exp.endYear : 'Present'}
                      {exp.isCurrent && <span className={styles.currentBadge}>Current</span>}
                    </p>
                    <p className={styles.timelineDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education & Qualifications</h2>
            <div className={styles.timeline}>
              {education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineMarker}>
                    <EducationIcon />
                  </div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{edu.degree}</h3>
                    <p className={styles.timelineSubtitle}>{edu.field} • {edu.university}</p>
                    <p className={styles.timelinePeriod}>{edu.year}</p>
                    {edu.specialization && (
                      <p className={styles.timelineDescription}>
                        <strong>Specialization:</strong> {edu.specialization}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Expertise Tab */}
        {activeTab === 'expertise' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
            <div className={styles.expertiseGrid}>
              {skills.map((skillGroup, index) => (
                <div key={index} className={styles.expertiseCard}>
                  <h3 className={styles.expertiseCategoryTitle}>{skillGroup.category}</h3>
                  <div className={styles.skillsList}>
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Publications Tab */}
        {activeTab === 'publications' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Publication & Research Statistics</h2>
            <div className={styles.publicationsGrid}>
              <div className={styles.pubCard}>
                <div className={styles.pubIcon}>📚</div>
                <div className={styles.pubLabel}>Journal Papers</div>
                <div className={styles.pubValue}>{pubStats.journalPapers}</div>
              </div>

              <div className={styles.pubCard}>
                <div className={styles.pubIcon}>🎤</div>
                <div className={styles.pubLabel}>Conference Papers</div>
                <div className={styles.pubValue}>{pubStats.conferencePapers}</div>
              </div>

              <div className={styles.pubCard}>
                <div className={styles.pubIcon}>📈</div>
                <div className={styles.pubLabel}>H-Index</div>
                <div className={styles.pubValue}>{pubStats.hIndex}</div>
              </div>

              <div className={styles.pubCard}>
                <div className={styles.pubIcon}>🔗</div>
                <div className={styles.pubLabel}>Research Projects</div>
                <div className={styles.pubValue}>{pubStats.researchProjects}</div>
              </div>
            </div>

            {/* Awards Section */}
            <div className={styles.awardsSection}>
              <h3 className={styles.subsectionTitle}>Awards & Recognition</h3>
              <div className={styles.awardsList}>
                {awards.map((award, index) => (
                  <div key={index} className={styles.awardCard}>
                    <div className={styles.awardIcon}>
                      <AwardIcon />
                    </div>
                    <div className={styles.awardContent}>
                      <h4 className={styles.awardTitle}>{award.title}</h4>
                      <p className={styles.awardOrganization}>{award.organization}</p>
                      <p className={styles.awardYear}>{award.year}</p>
                      <p className={styles.awardDescription}>{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Get in Touch</h2>

            {/* Contact Information */}
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <EmailIcon />
                </div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Email</h3>
                  <a href={`mailto:${personalInfo.email}`} className={styles.contactValue}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>
                  <PhoneIcon />
                </div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Phone</h3>
                  <a href={`tel:${personalInfo.phone}`} className={styles.contactValue}>
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📍</div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>Office</h3>
                  <p className={styles.contactValue}>
                    {professorDetails.officeLocation.building}, Room {professorDetails.officeLocation.room}
                  </p>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>🏢</div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactLabel}>University</h3>
                  <p className={styles.contactValue}>{personalInfo.university}</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.subsectionTitle}>Connect on Social Media</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={link.label}
                  >
                    <span className={styles.socialIcon}>{link.icon}</span>
                    <span className={styles.socialLabel}>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className={styles.officeHoursSection}>
              <h3 className={styles.subsectionTitle}>Office Hours</h3>
              <div className={styles.officeHoursList}>
                {professorDetails.officeLocation.officeHours.map((hour, index) => (
                  <div key={index} className={styles.officeHourItem}>
                    <span className={styles.day}>{hour.day}</span>
                    <span className={styles.time}>
                      {hour.startTime} - {hour.endTime}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className={styles.ctaSection}>
              <Link href="/contact" className={styles.ctaButton}>
                Send a Message
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
