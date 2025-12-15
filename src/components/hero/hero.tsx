'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { professorDetails, getPublicationStats, getCurrentExperience, getTotalExperience } from '@/data/professorDetails';
import styles from './hero.module.css';

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const { firstName, lastName, designation, middleInitial, title } = professorDetails.personalInfo;
    const { shortBio } = professorDetails.bio;
    const { profilePhoto } = professorDetails.profileImages;
    const publicationStats = getPublicationStats();
    const totalExperience = getTotalExperience();
    const currentExperience = getCurrentExperience();
    
    // Use data from professorDetails
    const presentations = publicationStats.presentations;
    const articles = publicationStats.articles;
    const experience = totalExperience;
    const totalPublications = publicationStats.totalPublications;

    return (
        <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.container}>
                {/* Left Content */}
                <div className={styles.content}>

                    {/* Main Heading */}
                    <h1 className={styles.heading}>
                        <span className={styles.firstName}>{title} {firstName}</span>
                        <span className={styles.lastName}>{middleInitial}. {lastName}</span>
                    </h1>

                    {/* Designation */}
                    <p className={styles.designation}>{designation}</p>

                    {/* Bio */}
                    <p className={styles.bio}>{shortBio}</p>

                    {/* Stats */}
                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{presentations}+</div>
                            <div className={styles.statLabel}>Presentations</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{articles}+</div>
                            <div className={styles.statLabel}>Articles</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{experience}+</div>
                            <div className={styles.statLabel}>Experience</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{totalPublications}+</div>
                            <div className={styles.statLabel}>Publications</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className={styles.ctaButtons}>
                        <Link href="/research" className={styles.primaryBtn}>
                            <span>Know More</span>
                            <span className={styles.btnIcon}>→</span>
                        </Link>
                        {/* <a href={`mailto:${email}`} className={styles.secondaryBtn}>
              <span className={styles.btnIcon}>✉️</span>
              <span>Get in Touch</span>
            </a> */}
                    </div>

                    {/* Contact Info */}
                    {/* <div className={styles.contactInfo}>
            <p className={styles.contactLabel}>Connect:</p>
            <div className={styles.contactLinks}>
              <a href={`mailto:${email}`} className={styles.contactLink} title="Email">
                {email}
              </a>
              <span className={styles.contactDivider}>•</span>
              <a href={`tel:${phone}`} className={styles.contactLink} title="Phone">
                {phone}
              </a>
            </div>
          </div> */}
                </div>

                {/* Right Image */}
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={profilePhoto.url}
                            alt={profilePhoto.alt}
                            width={profilePhoto.width}
                            height={profilePhoto.height}
                            priority
                            className={styles.profileImage}
                        />
                    </div>

                    {/* Floating Cards */}
                    {/* <div className={`${styles.floatingCard} ${styles.cardOne}`}>
            <div className={styles.cardIcon}>🚀</div>
            <div className={styles.cardText}>Research Innovator</div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardTwo}`}>
            <div className={styles.cardIcon}>📚</div>
            <div className={styles.cardText}>Dedicated Mentor</div>
          </div>

          <div className={`${styles.floatingCard} ${styles.cardThree}`}>
            <div className={styles.cardIcon}>🌟</div>
            <div className={styles.cardText}>Industry Expert</div>
          </div> */}

                    {/* Decorative Elements */}
                    <div className={styles.decorativeBlob}></div>
                    <div className={styles.decorativeBlobTwo}></div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <div className={styles.scrollDot}></div>
                <p className={styles.scrollText}>Scroll to explore</p>
            </div>
        </section>
    );
}