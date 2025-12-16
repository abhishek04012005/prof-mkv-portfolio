'use client';

import { useState } from 'react';
import Image from 'next/image';
import { professorDetails, getEducationSorted, getExperienceSorted, getExpertiseWithSkills, getTotalExperience } from '@/data/professorDetails';
import styles from './about.module.css';
import aboutImage from '../../../public/assets/about.png';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

type TabType = 'overview' | 'education' | 'experience' | 'expertise';

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const { department, university } = professorDetails.personalInfo;
  const { longBio, funFact } = professorDetails.bio;
  const { profilePhoto } = professorDetails.profileImages;
  const education = getEducationSorted();
  const experience = getExperienceSorted();
  const expertise = getExpertiseWithSkills();
  
  // Get stats from professor details
  const totalExperience = getTotalExperience();
  const totalPhDSupervisions = professorDetails.teaching.supervisions.phd;
  const totalResearchProjects = professorDetails.publicationStats.researchProjects;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: PersonIcon },
    { id: 'education', label: 'Education', icon: SchoolIcon },
    { id: 'experience', label: 'Experience', icon: WorkIcon },
  ] as const;

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <p className={styles.sectionSubtitle}>
            A dedicated academic with passion for research and student mentorship
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left - Image & Quick Info */}
          <div className={styles.leftColumn}>
            {/* Profile Image */}
            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={aboutImage}
                  alt={profilePhoto.alt}
                  width={profilePhoto.width}
                  height={profilePhoto.height}
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>

          {/* Right - Tabs & Content */}
          <div className={styles.rightColumn}>
            {/* Tab Navigation */}
            <div className={styles.tabNav}>
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    aria-selected={activeTab === tab.id}
                    role="tab"
                  >
                    <IconComponent className={styles.tabIcon} />
                    <span className={styles.tabLabel}>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className={styles.tabContent}>
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className={styles.tabPane}>
                  <div className={styles.biographySection}>
                    <p className={styles.bioDepartment}>{department}, {university}</p>
                    <div className={styles.bioContent}>
                      <p className={styles.bioText}>{longBio}</p>

                      <div className={styles.bioHighlight}>
                        <p className={styles.bioHighlightText}>
                          <LightbulbIcon className={styles.highlightIcon} />
                          {funFact}
                        </p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    {/* <div className={styles.statsGrid}>
                      <div className={styles.statCard}>
                        <div className={styles.statNumber}>{totalExperience}+</div>
                        <div className={styles.statName}>Years Experience</div>
                      </div>
                      <div className={styles.statCard}>
                        <div className={styles.statNumber}>{totalPhDSupervisions}+</div>
                        <div className={styles.statName}>PhD Supervisions</div>
                      </div>
                      <div className={styles.statCard}>
                        <div className={styles.statNumber}>{totalResearchProjects}+</div>
                        <div className={styles.statName}>Research Projects</div>
                      </div>
                    </div> */}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === 'education' && (
                <div className={styles.tabPane}>
                  <div className={styles.timelineSection}>
                    {education.map((edu, index) => (
                      <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineHeader}>
                            <h4 className={styles.timelineTitle}>{edu.degree}</h4>
                            <span className={styles.timelineYear}>{edu.year}</span>
                          </div>
                          <p className={styles.timelineUniversity}>{edu.university}</p>
                          <p className={styles.timelineField}>{edu.field}</p>
                          {/* {edu.specialization && (
                            <div className={styles.specializationBadge}>
                              Specialization: {edu.specialization}
                            </div>
                          )} */}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === 'experience' && (
                <div className={styles.tabPane}>
                  <div className={styles.timelineSection}>
                    {experience.map((exp, index) => (
                      <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                          <div className={styles.timelineHeader}>
                            <h4 className={styles.timelineTitle}>{exp.position}</h4>
                            <span className={styles.timelineYear}>
                              {exp.startYear}
                              {exp.endYear ? ` - ${exp.endYear}` : ' - Present'}
                            </span>
                          </div>
                          <p className={styles.timelineUniversity}>{exp.institution}</p>
                          <p className={styles.timelineDescription}>{exp.description}</p>
                          {exp.isCurrent && (
                            <div className={styles.currentBadge}>Currently here</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Expertise Tab */}
              {activeTab === 'expertise' && (
                <div className={styles.tabPane}>
                  <div className={styles.expertiseSection}>
                    {expertise.map((exp, index) => (
                      <div key={index} className={styles.expertiseCategory}>
                        <h4 className={styles.expertiseTitle}>{exp.category}</h4>
                        <div className={styles.skillsList}>
                          {exp.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className={styles.skillItem}>
                              <CheckCircleIcon className={styles.skillIcon} />
                              <span className={styles.skillName}>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}