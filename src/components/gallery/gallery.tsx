'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';
import { Close as CloseIcon } from '@mui/icons-material';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Sample gallery images
  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: '/images/gallery/conference-keynote-2024.jpg',
      alt: 'Keynote presentation at ICBD 2024',
      title: 'Keynote Presentation - ICBD 2024',
    },
    {
      id: '2',
      src: '/images/gallery/research-lab-team.jpg',
      alt: 'Research lab team collaboration',
      title: 'Research Lab Team',
    },
    {
      id: '3',
      src: '/images/gallery/phd-graduation-ceremony.jpg',
      alt: 'PhD student graduation celebration',
      title: 'PhD Graduation Ceremony',
    },
    {
      id: '4',
      src: '/images/gallery/best-teacher-award.jpg',
      alt: 'Best Teacher Award 2024',
      title: 'Best Teacher Award 2024',
    },
  ];

  return (
    <section className={styles.gallery}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Photo Gallery</h2>
          <p className={styles.sectionSubtitle}>
            Professional moments and achievements
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(image)}
              role="button"
              tabIndex={0}
              aria-label={`View ${image.title}`}
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay}>
                  <h3 className={styles.imageTitle}>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
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
                <CloseIcon />
              </button>

              {/* Modal Image */}
              <div className={styles.modalImageSection}>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={500}
                  className={styles.modalImage}
                  priority
                />
              </div>

              {/* Modal Title */}
              <div className={styles.modalInfo}>
                <h2 className={styles.modalTitle}>{selectedImage.title}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}