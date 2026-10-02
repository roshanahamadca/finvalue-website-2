# FINVALUE ADVISORY Website

A modern financial advisory website built with Next.js, TypeScript and Tailwind CSS.

## Overview

This project is designed to present FINVALUE ADVISORY as a credible professional advisory practice with a premium, responsive web presence for individuals, entrepreneurs, SMEs and organisations.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a local environment file:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the local site at:
   ```text
   http://localhost:3000
   ```

## Production build

```bash
npm run build
npm run start
```

## Contact form integration

The contact form is prepared for a secure third-party form endpoint. Add your endpoint to `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

If no form endpoint is configured, the form shows a clear informational status instead of a false success message.

## Deployment

This project is ready for deployment on Vercel:

1. Import the repository into Vercel.
2. Configure the environment variables as needed.
3. Deploy the project from the main branch.

## Pre-launch checklist

- Confirm final logo asset and brand approvals
- Review all page content and legal disclaimers
- Confirm contact details and service descriptions
- Verify privacy and terms pages
- Configure form endpoint securely
- Test responsive layouts across mobile, tablet and desktop
- Validate all internal links and navigation
- Confirm sitemap, robots and metadata output
- Review SEO and Open Graph content
- Check accessibility and keyboard usability

## Repository notes

- `app/` includes all pages and routing
- `components/` includes shared UI and form logic
- `lib/site-data.ts` stores navigational and service content
- `public/` includes static logo assets
