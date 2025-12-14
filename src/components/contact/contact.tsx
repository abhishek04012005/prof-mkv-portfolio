'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Lightbulb as LightbulbIcon,
  Bolt as BoltIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus({
      type: 'loading',
      message: 'Sending your message...',
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 4000);
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  const contactItems = [
    {
      icon: MailIcon,
      label: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
      color: 'email',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+91 (0) 1234-567890',
      href: 'tel:+91-1234567890',
      color: 'phone',
    },
    {
      icon: LocationIcon,
      label: 'Location',
      value: 'Lab 401, IIT Delhi',
      href: '#',
      color: 'location',
    },
    {
      icon: ScheduleIcon,
      label: 'Office Hours',
      value: 'Mon - Fri, 10 AM - 5 PM IST',
      href: '#',
      color: 'hours',
    },
  ];

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Decorative Background Elements */}
        <div className={styles.bgDecor1}></div>
        <div className={styles.bgDecor2}></div>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>Get In Touch</div>
          <h2 className={styles.title}>Let's Connect & Collaborate</h2>
          <p className={styles.subtitle}>
            Have a question or proposal? I'd love to hear from you. Reach out anytime!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={styles.grid}>
          {/* Left - Contact Info */}
          <div className={styles.leftColumn}>
            <div className={styles.infoContainer}>
              <h3 className={styles.sectionTitle}>Quick Contact</h3>

              <div className={styles.infoGrid}>
                {contactItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      className={`${styles.infoCard} ${styles[`color-${item.color}`]}`}
                    >
                      <div className={styles.iconWrapper}>
                        <IconComponent className={styles.iconComponent} />
                      </div>
                      <div className={styles.infoContent}>
                        <p className={styles.infoLabel}>{item.label}</p>
                        <p className={styles.infoValue}>{item.value}</p>
                      </div>
                      <div className={styles.arrowIcon}><ArrowForwardIcon className={styles.arrowIconComponent} /></div>
                    </a>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className={styles.additionalInfo}>
                <div className={styles.infoBox}>
                  <div className={styles.boxIcon}><LightbulbIcon className={styles.boxIconComponent} /></div>
                  <div>
                    <h4 className={styles.boxTitle}>Best Time to Reach</h4>
                    <p className={styles.boxText}>2 PM - 4 PM IST for calls</p>
                  </div>
                </div>
                <div className={styles.infoBox}>
                  <div className={styles.boxIcon}><BoltIcon className={styles.boxIconComponent} /></div>
                  <div>
                    <h4 className={styles.boxTitle}>Response Time</h4>
                    <p className={styles.boxText}>1-2 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={styles.rightColumn}>
            <div className={styles.formWrapper}>
              <h3 className={styles.sectionTitle}>Send Me a Message</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name */}
                <div
                  className={`${styles.formGroup} ${
                    focusedField === 'name' ? styles.focused : ''
                  } ${formData.name ? styles.filled : ''}`}
                >
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <label htmlFor="name" className={styles.label}>
                    Your Name
                  </label>
                  <div className={styles.inputBorder}></div>
                </div>

                {/* Email */}
                <div
                  className={`${styles.formGroup} ${
                    focusedField === 'email' ? styles.focused : ''
                  } ${formData.email ? styles.filled : ''}`}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <label htmlFor="email" className={styles.label}>
                    Email Address
                  </label>
                  <div className={styles.inputBorder}></div>
                </div>

                {/* Subject */}
                <div
                  className={`${styles.formGroup} ${
                    focusedField === 'subject' ? styles.focused : ''
                  } ${formData.subject ? styles.filled : ''}`}
                >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    required
                    className={styles.input}
                  />
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <div className={styles.inputBorder}></div>
                </div>

                {/* Message */}
                <div
                  className={`${styles.formGroup} ${styles.messageGroup} ${
                    focusedField === 'message' ? styles.focused : ''
                  } ${formData.message ? styles.filled : ''}`}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder=" "
                    rows={5}
                    required
                    className={styles.input}
                  />
                  <label htmlFor="message" className={styles.label}>
                    Your Message
                  </label>
                  <div className={styles.inputBorder}></div>
                </div>

                {/* Character Count */}
                {formData.message && (
                  <div className={styles.charCount}>
                    {formData.message.length} / 1000 characters
                  </div>
                )}

                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <div
                    className={`${styles.statusMessage} ${styles[`status-${formStatus.type}`]}`}
                    role="alert"
                  >
                    <span className={styles.statusIcon}>
                      {formStatus.type === 'loading' && '⏳'}
                      {formStatus.type === 'success' && '✅'}
                      {formStatus.type === 'error' && '❌'}
                    </span>
                    <span className={styles.statusText}>{formStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={formStatus.type === 'loading'}
                >
                  <span className={styles.btnText}>
                    {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className={styles.btnIcon}>
                    {formStatus.type === 'loading' ? '⏳' : '✉️'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}