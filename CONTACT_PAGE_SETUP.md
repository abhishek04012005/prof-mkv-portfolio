# Contact Page - Setup & Implementation Guide

## Overview

The contact page has been completely redesigned with a modern, attractive, and mobile-friendly interface. It includes Supabase integration for storing contact messages in a database.

## Features

### UI/UX Enhancements
- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Responsive Layout**: Mobile-first design that works beautifully on all screen sizes
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Accessibility**: Proper ARIA labels, reduced motion support, and dark mode compatibility
- **Real-time Validation**: Field-level validation with immediate error feedback
- **Visual Feedback**: Status messages for loading, success, and error states

### Form Features
- **Input Validation**:
  - Name: Minimum 2 characters
  - Email: Valid email format
  - Subject: Minimum 3 characters
  - Message: Minimum 10 characters, maximum 1000 characters
  
- **Field-Level Error Messages**: Contextual error display for each field
- **Character Counter**: Shows message length (e.g., "250 / 1000")
- **Focus States**: Animated labels and visual feedback on focus
- **Touch-Friendly**: Large click targets and proper spacing for mobile devices

### Data Storage
- **Supabase Integration**: All contact messages are stored in Supabase database
- **Fallback Support**: Form works without Supabase configuration (logs to console)
- **Error Handling**: Graceful error messages if submission fails

## Supabase Setup Instructions

### 1. Create Supabase Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sign up or log in to your account
3. Click "New Project" and create a new project
4. Choose your region and enter a database password
5. Wait for the project to be created

### 2. Create Contact Messages Table

In your Supabase project:

1. Go to **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy and paste this SQL:

```sql
CREATE TABLE contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on created_at for better query performance
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert
CREATE POLICY "Allow anonymous insert" 
  ON contact_messages 
  FOR INSERT 
  WITH CHECK (true);

-- Allow authenticated users to read all messages
CREATE POLICY "Allow authenticated read" 
  ON contact_messages 
  FOR SELECT 
  TO authenticated 
  USING (true);
```

4. Click **Run** to execute the SQL

### 3. Get API Keys

1. Go to **Settings** → **API** in the left sidebar
2. Copy your **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
3. Copy your **anon public** key (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 4. Configure Environment Variables

1. In your project root, copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

2. Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

3. Replace with your actual values (remove "your_supabase_url_here" placeholder)

### 5. Test the Integration

1. Run the development server:
```bash
npm run dev
```

2. Navigate to the contact page
3. Fill out the form with test data
4. Click "Send Message"
5. Check your Supabase database to verify the message was saved

## Component Structure

### contact.tsx
Main contact form component with:
- Form state management
- Validation logic
- Supabase integration
- Error handling
- UI rendering

### contact.module.css
Styling with:
- Responsive grid layout
- Animation definitions
- Mobile breakpoints
- Dark mode support
- Accessibility improvements

### Supabase Utility (src/utils/supabase.ts)
- Supabase client initialization
- Form submission function
- Error handling and fallbacks
- TypeScript interfaces

## Customization

### Update Contact Information

In `contact.tsx`, modify the `contactItems` array:

```typescript
const contactItems = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'your-email@example.com',  // Change this
    href: 'mailto:your-email@example.com',
    color: 'email',
  },
  // ... other contact items
];
```

### Change Form Validation Rules

In `contact.tsx`, update the `validateForm` function:

```typescript
// Example: Allow names with just 1 character
errors.name = 'Name is required';
} else if (formData.name.trim().length < 1) {  // Change minimum length
  errors.name = 'Name must be at least 1 character';
}
```

### Customize Styling

Edit `contact.module.css` to change:
- Colors (uses CSS variables like `var(--color-primary)`)
- Spacing and padding
- Animation timings
- Breakpoints for responsive design

## Mobile Responsiveness

The contact page is fully responsive with breakpoints at:
- **640px**: Small mobile devices
- **768px**: Tablets
- **1024px**: Large tablets and small desktops
- **1200px+**: Desktop

Key responsive changes:
- Single column layout on mobile (from 2-column on desktop)
- Smaller font sizes and padding on mobile
- Touch-friendly button sizes
- Optimized spacing for small screens

## Animations & Interactions

### Key Animations:
- **float**: Decorative background elements float up and down
- **fadeInDown**: Header fades in from top
- **fadeInUp**: Form fades in from bottom
- **pulse**: Header badge pulses with a glow effect
- **spin**: Loading spinner animation
- **shake**: Error message animation
- **slideDown**: Status message slide animation

### Interactive Elements:
- Hover effects on contact cards
- Icon rotation and scaling on hover
- Label animation on focus/fill
- Button ripple effect on click
- Arrow icon animation on hover

## Accessibility Features

- ARIA labels on all interactive elements
- Proper semantic HTML structure
- Focus states for keyboard navigation
- Error messages with icons
- Reduced motion support for users with vestibular disorders
- High contrast ratio for text readability
- Dark mode support

## Error Handling

### Form Validation Errors
- Real-time field-level validation
- Clear error messages for each field
- Red border on error fields
- Shake animation to draw attention

### Submission Errors
- Try-catch block for Supabase errors
- User-friendly error message
- Auto-dismiss after 5 seconds
- Option to manually close

### Fallback Support
If Supabase is not configured:
- Form still works
- Messages are logged to console
- User sees success message
- Useful for testing without database

## Security Considerations

### Current Setup
- Anonymous insert enabled (anyone can submit)
- No authentication required
- Messages stored with timestamp

### For Production
Consider adding:
- CAPTCHA verification to prevent spam
- Rate limiting on submissions
- Email verification
- Admin authentication for reading messages
- CORS configuration
- Input sanitization

## Troubleshooting

### Form not submitting?
1. Check browser console for errors
2. Verify Supabase environment variables are set
3. Check Supabase project is active
4. Ensure database table exists
5. Check RLS policies allow inserts

### Messages not showing in database?
1. Verify table was created correctly
2. Check RLS policies (should allow inserts)
3. Confirm credentials are correct
4. Try submitting again and check for errors

### Styling issues on mobile?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check viewport meta tag in layout
3. Verify CSS media queries are working
4. Test in Chrome DevTools mobile view

## Performance Optimization

The contact page includes:
- CSS animations using GPU-accelerated properties
- Debounced validation
- Minimal re-renders using React hooks
- Lazy loading of animations
- Optimized mobile viewport

## Browser Support

Works on:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements:
- File upload support
- Email notification to admin
- Message templates/quick replies
- Multi-language support
- Integration with email service (SendGrid, Mailgun)
- AI-powered spam detection
- Message thread management
- Admin dashboard for viewing messages

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Supabase documentation: https://supabase.com/docs
3. Check Next.js documentation: https://nextjs.org/docs
4. Review component code comments

---

Last Updated: December 14, 2025
