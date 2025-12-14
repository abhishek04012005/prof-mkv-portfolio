'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';
import {
  PhotoCamera as PhotoCameraIcon,
  Event as EventsIcon,
  Science as ScienceIcon,
  Mic as MicIcon,
  Group as GroupIcon,
  EmojiEvents as AwardsIcon,
  Search as SearchIcon,
  Star as StarIcon,
  Collections as CollectionsIcon,
  PeopleAlt as PeopleAltIcon,
  TouchApp as TouchAppIcon,
  SearchOutlined as SearchOutlinedIcon,
  PushPin as PushPinIcon,
  Keyboard as KeyboardIcon,
} from '@mui/icons-material';

type FilterType = 'all' | 'events' | 'research' | 'conferences' | 'team' | 'awards';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'events' | 'research' | 'conferences' | 'team' | 'awards';
  title: string;
  description?: string;
  date?: string;
  location?: string;
  tags?: string[];
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: '/images/gallery/conference-keynote-2024.jpg',
      alt: 'Keynote presentation at ICBD 2024',
      category: 'conferences',
      title: 'Keynote Presentation - ICBD 2024',
      description: 'Delivering keynote on "Real-Time Data Processing in Distributed Systems" at IEEE International Conference on Big Data.',
      date: 'Dec 2, 2024',
      location: 'Boston, MA',
      tags: ['keynote', 'big data', 'distributed systems'],
    },
    {
      id: '2',
      src: '/images/gallery/research-lab-team.jpg',
      alt: 'Research lab team collaboration',
      category: 'research',
      title: 'Research Lab Team',
      description: 'Collaborative research environment with dedicated team members working on cloud computing optimization projects.',
      date: 'Oct 15, 2024',
      location: 'Lab 401, IIT',
      tags: ['research', 'collaboration', 'team'],
    },
    {
      id: '3',
      src: '/images/gallery/phd-graduation-ceremony.jpg',
      alt: 'PhD student graduation celebration',
      category: 'events',
      title: 'PhD Graduation Ceremony',
      description: 'Celebrating the successful completion of doctoral studies with mentees and department faculty.',
      date: 'Jun 10, 2024',
      location: 'IIT Convocation Hall',
      tags: ['graduation', 'celebration', 'mentoring'],
    },
    {
      id: '4',
      src: '/images/gallery/best-teacher-award.jpg',
      alt: 'Best Teacher Award 2024',
      category: 'awards',
      title: 'Best Teacher Award 2024',
      description: 'Received the prestigious Best Teacher Award for excellence in education and mentorship.',
      date: 'Mar 15, 2024',
      location: 'IIT Main Campus',
      tags: ['award', 'recognition', 'teaching'],
    },
    {
      id: '5',
      src: '/images/gallery/research-presentation.jpg',
      alt: 'Research findings presentation',
      category: 'research',
      title: 'Research Presentation',
      description: 'Presenting groundbreaking findings on blockchain-based smart contracts to research community.',
      date: 'Sep 20, 2024',
      location: 'Conference Room A',
      tags: ['research', 'blockchain', 'presentation'],
    },
    {
      id: '6',
      src: '/images/gallery/international-workshop.jpg',
      alt: 'International workshop facilitation',
      category: 'conferences',
      title: 'International Workshop on IoT Security',
      description: 'Facilitating interactive workshop session on IoT security challenges and solutions.',
      date: 'Aug 12, 2024',
      location: 'Virtual',
      tags: ['workshop', 'iot', 'security'],
    },
    {
      id: '7',
      src: '/images/gallery/team-collaboration.jpg',
      alt: 'Team working on research project',
      category: 'team',
      title: 'Team Collaboration Session',
      description: 'Collaborative discussion with research team on project milestones and objectives.',
      date: 'Nov 5, 2024',
      location: 'Lab 401',
      tags: ['teamwork', 'collaboration', 'research'],
    },
    {
      id: '8',
      src: '/images/gallery/conference-panel-discussion.jpg',
      alt: 'Panel discussion at international conference',
      category: 'conferences',
      title: 'Panel Discussion - Future of AI',
      description: 'Participating in panel discussion on "Future of AI in Cloud Computing" with industry experts.',
      date: 'Jun 18, 2025',
      location: 'Singapore',
      tags: ['panel', 'ai', 'cloud computing'],
    },
    {
      id: '9',
      src: '/images/gallery/mentee-success.jpg',
      alt: 'Mentee research achievement celebration',
      category: 'events',
      title: 'Mentee Research Achievement',
      description: 'Celebrating successful publication of mentee research in top-tier journal.',
      date: 'Jul 22, 2024',
      location: 'Lab 401',
      tags: ['mentoring', 'achievement', 'publication'],
    },
    {
      id: '10',
      src: '/images/gallery/innovation-award.jpg',
      alt: 'Innovation in Technology Award',
      category: 'awards',
      title: 'Innovation in Technology Award',
      description: 'Recognition for innovative contributions to cloud infrastructure optimization research.',
      date: 'Apr 10, 2024',
      location: 'National Award Ceremony',
      tags: ['award', 'innovation', 'recognition'],
    },
    {
      id: '11',
      src: '/images/gallery/research-lab-setup.jpg',
      alt: 'State-of-the-art research lab',
      category: 'research',
      title: 'Research Lab Setup',
      description: 'Modern research laboratory equipped with high-performance computing infrastructure.',
      date: 'Jan 15, 2024',
      location: 'Lab 401, IIT',
      tags: ['lab', 'infrastructure', 'computing'],
    },
    {
      id: '12',
      src: '/images/gallery/hackathon-mentoring.jpg',
      alt: 'Mentoring students at hackathon',
      category: 'events',
      title: 'Hackathon Mentoring',
      description: 'Providing guidance to students participating in national coding hackathon.',
      date: 'Oct 8, 2024',
      location: 'Tech Park Campus',
      tags: ['mentoring', 'hackathon', 'students'],
    },
  ];

  const filters: { id: FilterType; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'All Photos', icon: PhotoCameraIcon },
    { id: 'events', label: 'Events', icon: EventsIcon },
    { id: 'research', label: 'Research', icon: ScienceIcon },
    { id: 'conferences', label: 'Conferences', icon: MicIcon },
    { id: 'team', label: 'Team', icon: GroupIcon },
    { id: 'awards', label: 'Awards', icon: AwardsIcon },
  ];

  // Calculate stats
  const stats = {
    totalImages: galleryImages.length,
    events: galleryImages.filter((img) => img.category === 'events').length,
    research: galleryImages.filter((img) => img.category === 'research').length,
    conferences: galleryImages.filter((img) => img.category === 'conferences').length,
  };

  // Filter images
  const filteredImages = galleryImages.filter((image) => {
    const matchesFilter = activeFilter === 'all' || image.category === activeFilter;
    const matchesSearch =
      searchTerm === '' ||
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (image.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ?? false);

    return matchesFilter && matchesSearch;
  });

  // Sort images by date (newest first)
  const sortedImages = [...filteredImages].sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Photo Gallery</h2>
          <p className={styles.sectionSubtitle}>
            Moments from research, conferences, events, and achievements
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left - Quick Stats */}
          <div className={styles.leftColumn}>
            {/* Stats Card */}
            <div className={styles.statsCard}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><PhotoCameraIcon className={styles.statIconComponent} /></div>
                <div className={styles.statContent}>
                  <p className={styles.statLabel}>Total Photos</p>
                  <p className={styles.statValue}>{stats.totalImages}</p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}><EventsIcon className={styles.statIconComponent} /></div>
                <div className={styles.statContent}>
                  <p className={styles.statLabel}>Events</p>
                  <p className={styles.statValue}>{stats.events}</p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}><ScienceIcon className={styles.statIconComponent} /></div>
                <div className={styles.statContent}>
                  <p className={styles.statLabel}>Research</p>
                  <p className={styles.statValue}>{stats.research}</p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}><MicIcon className={styles.statIconComponent} /></div>
                <div className={styles.statContent}>
                  <p className={styles.statLabel}>Conferences</p>
                  <p className={styles.statValue}>{stats.conferences}</p>
                </div>
              </div>
            </div>

            {/* Gallery Info Card */}
            <div className={styles.infoCard}>
              <h4 className={styles.cardTitle}>Gallery Highlights</h4>
              <div className={styles.highlightsList}>
                <div className={styles.highlightItem}>
                  <StarIcon className={styles.highlightIconComponent} />
                  <span className={styles.highlightText}>Professional Moments</span>
                </div>
                <div className={styles.highlightItem}>
                  <CollectionsIcon className={styles.highlightIconComponent} />
                  <span className={styles.highlightText}>High-Quality Images</span>
                </div>
                <div className={styles.highlightItem}>
                  <AwardsIcon className={styles.highlightIconComponent} />
                  <span className={styles.highlightText}>Award Recognition</span>
                </div>
                <div className={styles.highlightItem}>
                  <PeopleAltIcon className={styles.highlightIconComponent} />
                  <span className={styles.highlightText}>Team Collaborations</span>
                </div>
              </div>
            </div>

            {/* Gallery Tips Card */}
            <div className={styles.tipsCard}>
              <h4 className={styles.cardTitle}>Gallery Features</h4>
              <ul className={styles.tipsList}>
                <li className={styles.tipItem}>
                  <TouchAppIcon className={styles.tipIconComponent} />
                  <span>Click on any image to view details</span>
                </li>
                <li className={styles.tipItem}>
                  <SearchOutlinedIcon className={styles.tipIconComponent} />
                  <span>Use search to find specific moments</span>
                </li>
                <li className={styles.tipItem}>
                  <PushPinIcon className={styles.tipIconComponent} />
                  <span>Filter by category or date</span>
                </li>
                <li className={styles.tipItem}>
                  <KeyboardIcon className={styles.tipIconComponent} />
                  <span>View full details in modal</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Gallery Grid */}
          <div className={styles.rightColumn}>
            {/* Search Bar */}
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search gallery by title, location, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
                aria-label="Search gallery"
              />
              <SearchIcon className={styles.searchIconComponent} />
            </div>

            {/* Tab Navigation */}
            <div className={styles.tabNav}>
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    className={`${styles.tabBtn} ${activeFilter === filter.id ? styles.active : ''}`}
                    onClick={() => setActiveFilter(filter.id)}
                    aria-selected={activeFilter === filter.id}
                  >
                    <IconComponent className={styles.tabIcon} />
                    <span className={styles.tabLabel}>{filter.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Results Count */}
            <div className={styles.resultsInfo}>
              <span className={styles.resultCount}>{sortedImages.length}</span>
              <span className={styles.resultText}>
                {sortedImages.length === 1 ? 'photo' : 'photos'} found
              </span>
            </div>

            {/* Gallery Grid */}
            <div className={styles.galleryGrid}>
              {sortedImages.length > 0 ? (
                sortedImages.map((image) => (
                  <div
                    key={image.id}
                    className={styles.galleryItem}
                    onClick={() => setSelectedImage(image)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${image.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedImage(image);
                      }
                    }}
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={styles.image}
                        sizes="(max-width: 640px) 100vw,
                               (max-width: 1023px) 50vw,
                               33vw"
                      />
                      <div className={styles.imageOverlay}>
                        <div className={styles.overlayContent}>
                          <div className={styles.categoryBadge}>
                            {image.category === 'events' && (
                              <>
                                <EventsIcon className={styles.badgeIcon} />
                                <span>Events</span>
                              </>
                            )}
                            {image.category === 'research' && (
                              <>
                                <ScienceIcon className={styles.badgeIcon} />
                                <span>Research</span>
                              </>
                            )}
                            {image.category === 'conferences' && (
                              <>
                                <MicIcon className={styles.badgeIcon} />
                                <span>Conference</span>
                              </>
                            )}
                            {image.category === 'team' && (
                              <>
                                <GroupIcon className={styles.badgeIcon} />
                                <span>Team</span>
                              </>
                            )}
                            {image.category === 'awards' && (
                              <>
                                <AwardsIcon className={styles.badgeIcon} />
                                <span>Awards</span>
                              </>
                            )}
                          </div>
                          <h3 className={styles.imageTitle}>{image.title}</h3>
                          <p className={styles.imageHint}>Click to view details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <PhotoCameraIcon className={styles.emptyIconComponent} />
                  <h3 className={styles.emptyTitle}>No photos found</h3>
                  <p className={styles.emptyMessage}>
                    Try adjusting your search or filter criteria
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal - Image Details */}
        {selectedImage && (
          <div className={styles.modal} onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true">
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Modal Body */}
              <div className={styles.modalBody}>
                {/* Image Section */}
                <div className={styles.modalImageSection}>
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={600}
                    height={400}
                    className={styles.modalImage}
                    priority
                  />
                </div>

                {/* Details Section */}
                <div className={styles.modalDetails}>
                  {/* Category Badge */}
                  <div
                    className={`${styles.detailCategoryBadge} ${
                      styles[`badge-${selectedImage.category}`]
                    }`}
                  >
                    {selectedImage.category === 'events' && '🎉 Events'}
                    {selectedImage.category === 'research' && '🔬 Research'}
                    {selectedImage.category === 'conferences' && '🎤 Conferences'}
                    {selectedImage.category === 'team' && '👥 Team'}
                    {selectedImage.category === 'awards' && '🏆 Awards'}
                  </div>

                  {/* Title */}
                  <h2 className={styles.modalTitle}>{selectedImage.title}</h2>

                  {/* Description */}
                  {selectedImage.description && (
                    <div className={styles.detailSection}>
                      <h4 className={styles.detailLabel}>Description</h4>
                      <p className={styles.detailText}>{selectedImage.description}</p>
                    </div>
                  )}

                  {/* Meta Information */}
                  <div className={styles.metaGrid}>
                    {selectedImage.date && (
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>📅</span>
                        <div>
                          <p className={styles.metaLabel}>Date</p>
                          <p className={styles.metaValue}>{selectedImage.date}</p>
                        </div>
                      </div>
                    )}
                    {selectedImage.location && (
                      <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>📍</span>
                        <div>
                          <p className={styles.metaLabel}>Location</p>
                          <p className={styles.metaValue}>{selectedImage.location}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  {selectedImage.tags && selectedImage.tags.length > 0 && (
                    <div className={styles.detailSection}>
                      <h4 className={styles.detailLabel}>Tags</h4>
                      <div className={styles.tagsList}>
                        {selectedImage.tags.map((tag, idx) => (
                          <span key={idx} className={styles.tag}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className={styles.modalActions}>
                    <button
                      className={styles.navBtn}
                      onClick={() => {
                        const currentIdx = sortedImages.findIndex((img) => img.id === selectedImage.id);
                        if (currentIdx > 0) {
                          setSelectedImage(sortedImages[currentIdx - 1]);
                        }
                      }}
                      disabled={sortedImages.findIndex((img) => img.id === selectedImage.id) === 0}
                      aria-label="View previous image"
                    >
                      ← Previous
                    </button>
                    <button
                      className={styles.closeModalBtn}
                      onClick={() => setSelectedImage(null)}
                      aria-label="Close modal"
                    >
                      Close
                    </button>
                    <button
                      className={styles.navBtn}
                      onClick={() => {
                        const currentIdx = sortedImages.findIndex((img) => img.id === selectedImage.id);
                        if (currentIdx < sortedImages.length - 1) {
                          setSelectedImage(sortedImages[currentIdx + 1]);
                        }
                      }}
                      disabled={
                        sortedImages.findIndex((img) => img.id === selectedImage.id) ===
                        sortedImages.length - 1
                      }
                      aria-label="View next image"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}