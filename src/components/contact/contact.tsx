'use client';

import { useState } from 'react';
import styles from './contact.module.css';
import { submitContactForm } from '@/utils/supabase';
import { professorDetails, getOfficeHoursFormatted } from '@/data/professorDetails';
import {
  Mail as MailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Lightbulb as LightbulbIcon,
  Bolt as BoltIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Close as CloseIcon,
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

interface FieldError {
  [key: string]: string;
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
  const [fieldErrors, setFieldErrors] = useState<FieldError>({});
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set());

  // Get contact data from professorDetails
  const { email, phone, whatsapp } = professorDetails.personalInfo;
  const { building, address, officeHours } = professorDetails.officeLocation;
  
  const contactItems = [
    {
      icon: MailIcon,
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      color: 'email',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: phone,
      href: `tel:${phone}`,
      color: 'phone',
    },
    {
      icon: LocationIcon,
      label: 'Location',
      value: `${building}, BBAU Lucknow`,
      href: '#',
      color: 'location',
    },
    {
      icon: ScheduleIcon,
      label: 'Office Hours',
      value: `Mon to Sat - 10 AM to 4 PM IST`,
      href: '#',
      color: 'hours',
    },
  ];

  const validateForm = (): boolean => {
    const errors: FieldError = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touchedFields.has(name)) {
      const errors = { ...fieldErrors };
      if (name === 'name') {
        if (!value.trim()) {
          errors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters';
        } else {
          delete errors.name;
        }
      } else if (name === 'email') {
        if (!value.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address';
        } else {
          delete errors.email;
        }
      } else if (name === 'subject') {
        if (!value.trim()) {
          errors.subject = 'Subject is required';
        } else if (value.trim().length < 3) {
          errors.subject = 'Subject must be at least 3 characters';
        } else {
          delete errors.subject;
        }
      } else if (name === 'message') {
        if (!value.trim()) {
          errors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters';
        } else {
          delete errors.message;
        }
      }
      setFieldErrors(errors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouchedFields((prev) => new Set([...prev, name]));
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({
      type: 'loading',
      message: 'Sending your message...',
    });

    try {
      await submitContactForm({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      });

      setFormStatus({
        type: 'success',
        message: '✅ Message sent successfully! I\'ll get back to you within 24 hours.',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTouchedFields(new Set());
      setFieldErrors({});

      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        type: 'error',
        message: '❌ Failed to send message. Please try again or email directly.',
      });

      setTimeout(() => {
        setFormStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        {/* Decorative Background Elements */}
        <div className={styles.bgDecor1}></div>
        <div className={styles.bgDecor2}></div>
        <div className={styles.bgDecor3}></div>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>Get In Touch</div>
          <h2 className={styles.title}>Let's Connect & Collaborate</h2>
          <p className={styles.subtitle}>
            Have a question, proposal, or just want to chat? I'd love to hear from you. Reach out anytime!
          </p>
        </div>

        {/* Two Column Layout - Responsive */}
        <div className={styles.grid}>
          {/* Left - Contact Info - Mobile Friendly */}
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
                      <ArrowForwardIcon className={styles.arrowIcon} />
                    </a>
                  );
                })}
              </div>

              {/* Additional Info - Mobile Friendly Grid */}
              {/* <div className={styles.additionalInfo}>
                <div className={styles.infoBox}>
                  <LightbulbIcon className={styles.boxIcon} />
                  <div className={styles.boxContent}>
                    <h4 className={styles.boxTitle}>Best Time to Reach</h4>
                    <p className={styles.boxText}>2 PM - 4 PM IST for calls</p>
                  </div>
                </div>
                <div className={styles.infoBox}>
                  <BoltIcon className={styles.boxIcon} />
                  <div className={styles.boxContent}>
                    <h4 className={styles.boxTitle}>Response Time</h4>
                    <p className={styles.boxText}>1-2 business days</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className={styles.rightColumn}>
            <div className={styles.formWrapper}>
              <h3 className={styles.sectionTitle}>Send Me a Message</h3>
              <p className={styles.formSubtitle}>Fill out the form and I'll get back to you as soon as possible</p>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                {/* Name Field */}
                <div className={styles.formGroupWrapper}>
                  <div
                    className={`${styles.formGroup} ${
                      focusedField === 'name' ? styles.focused : ''
                    } ${formData.name ? styles.filled : ''} ${
                      fieldErrors.name && touchedFields.has('name') ? styles.error : ''
                    }`}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="name" className={styles.label}>
                      Your Name
                    </label>
                    <div className={styles.inputBorder}></div>
                  </div>
                  {fieldErrors.name && touchedFields.has('name') && (
                    <span className={styles.errorMessage}>
                      <ErrorIcon className={styles.errorIcon} />
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                {/* Email Field */}
                <div className={styles.formGroupWrapper}>
                  <div
                    className={`${styles.formGroup} ${
                      focusedField === 'email' ? styles.focused : ''
                    } ${formData.email ? styles.filled : ''} ${
                      fieldErrors.email && touchedFields.has('email') ? styles.error : ''
                    }`}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <div className={styles.inputBorder}></div>
                  </div>
                  {fieldErrors.email && touchedFields.has('email') && (
                    <span className={styles.errorMessage}>
                      <ErrorIcon className={styles.errorIcon} />
                      {fieldErrors.email}
                    </span>
                  )}
                </div>

                {/* Subject Field */}
                <div className={styles.formGroupWrapper}>
                  <div
                    className={`${styles.formGroup} ${
                      focusedField === 'subject' ? styles.focused : ''
                    } ${formData.subject ? styles.filled : ''} ${
                      fieldErrors.subject && touchedFields.has('subject') ? styles.error : ''
                    }`}
                  >
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={styles.input}
                    />
                    <label htmlFor="subject" className={styles.label}>
                      Subject
                    </label>
                    <div className={styles.inputBorder}></div>
                  </div>
                  {fieldErrors.subject && touchedFields.has('subject') && (
                    <span className={styles.errorMessage}>
                      <ErrorIcon className={styles.errorIcon} />
                      {fieldErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message Field */}
                <div className={styles.formGroupWrapper}>
                  <div
                    className={`${styles.formGroup} ${styles.messageGroup} ${
                      focusedField === 'message' ? styles.focused : ''
                    } ${formData.message ? styles.filled : ''} ${
                      fieldErrors.message && touchedFields.has('message') ? styles.error : ''
                    }`}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={handleBlur}
                      placeholder=" "
                      rows={5}
                      maxLength={1000}
                      className={styles.input}
                    />
                    <label htmlFor="message" className={styles.label}>
                      Your Message
                    </label>
                    <div className={styles.inputBorder}></div>
                  </div>
                  <div className={styles.messageFooter}>
                    {fieldErrors.message && touchedFields.has('message') && (
                      <span className={styles.errorMessage}>
                        <ErrorIcon className={styles.errorIcon} />
                        {fieldErrors.message}
                      </span>
                    )}
                    <div className={styles.charCount}>
                      {formData.message.length} / 1000
                    </div>
                  </div>
                </div>

                {/* Status Message */}
                {formStatus.type !== 'idle' && (
                  <div
                    className={`${styles.statusMessage} ${styles[`status-${formStatus.type}`]}`}
                    role="alert"
                  >
                    {formStatus.type === 'success' && <CheckCircleIcon className={styles.statusIcon} />}
                    {formStatus.type === 'error' && <ErrorIcon className={styles.statusIcon} />}
                    {formStatus.type === 'loading' && <div className={styles.spinner}></div>}
                    <span className={styles.statusText}>{formStatus.message}</span>
                    {formStatus.type !== 'loading' && (
                      <button
                        type="button"
                        className={styles.closeStatusBtn}
                        onClick={() => setFormStatus({ type: 'idle', message: '' })}
                        aria-label="Close message"
                      >
                        <CloseIcon />
                      </button>
                    )}
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
                  {formStatus.type !== 'loading' && <ArrowForwardIcon className={styles.btnIcon} />}
                  {formStatus.type === 'loading' && <div className={styles.miniSpinner}></div>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}