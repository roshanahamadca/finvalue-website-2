export type Service = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  highlights: string[];
  icon: any;
};

import { BadgeDollarSign, BriefcaseBusiness, Building2, ClipboardCheck, FileText, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries & Clients', href: '/industries' },
  { label: 'Insights & Research', href: '/insights' },
  { label: 'Our Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];

export const services: Service[] = [
  {
    slug: 'accounting-bookkeeping',
    category: 'Accounting & Bookkeeping',
    title: 'Accounting & Bookkeeping',
    summary: 'Structured financial recording and reporting support that helps individuals and organisations maintain accurate and useful financial information.',
    highlights: ['Bookkeeping support', 'Financial record review', 'Management reporting insights'],
    icon: FileText,
  },
  {
    slug: 'tax-tin-support',
    category: 'Tax & TIN Support',
    title: 'Tax & TIN Support',
    summary: 'Practical support in understanding tax obligations, documentation arrangements and compliance readiness.',
    highlights: ['TIN-related support', 'Record preparation', 'Compliance reviews'],
    icon: Landmark,
  },
  {
    slug: 'audit-assurance-support',
    category: 'Audit & Assurance Support',
    title: 'Audit & Assurance Support',
    summary: 'Support for internal preparation, evidence organisation and process readiness for audit and assurance engagements.',
    highlights: ['Preparedness review', 'Documentation support', 'Process coordination'],
    icon: ClipboardCheck,
  },
  {
    slug: 'internal-audit-risk-controls',
    category: 'Internal Audit, Risk & Internal Controls',
    title: 'Internal Audit, Risk & Internal Controls',
    summary: 'Structured review of control environments, governance processes and areas of operational or reporting risk.',
    highlights: ['Risk assessment', 'Control review', 'Actionable recommendations'],
    icon: ShieldCheck,
  },
  {
    slug: 'financial-advisory',
    category: 'Financial Advisory',
    title: 'Financial Advisory',
    summary: 'Focused analysis and guidance to help clients assess financial performance, planning assumptions and decision choices.',
    highlights: ['Scenario analysis', 'Cash flow support', 'Decision support'],
    icon: BadgeDollarSign,
  },
  {
    slug: 'business-consulting',
    category: 'Business Consulting',
    title: 'Business Consulting',
    summary: 'Support for operational improvement, strategy alignment and organisational decisions that influence sustainable performance.',
    highlights: ['Business review', 'Process improvement', 'Growth planning'],
    icon: BriefcaseBusiness,
  },
  {
    slug: 'management-reporting-bi',
    category: 'Management Reporting & Business Intelligence',
    title: 'Management Reporting & Business Intelligence',
    summary: 'Support in turning financial and operational information into clear management reporting and decision-useful analysis.',
    highlights: ['Dashboards', 'Performance tracking', 'Management insight'],
    icon: TrendingUp,
  }
];

export const processSteps = [
  { title: 'Understand', description: 'We begin by learning about your goals, context, operating reality and the decisions that matter most.' },
  { title: 'Analyse', description: 'We assess the financial, operational and risk information that drives the issue or opportunity.' },
  { title: 'Deliver', description: 'We provide practical recommendations, clear next steps and support where it is most valuable.' }
];

export const clientSegments = [
  'Individuals and professionals',
  'Startups',
  'Entrepreneurs',
  'SMEs',
  'Established organisations',
  'Non-profits',
  'Project stakeholders',
  'Growth-focused businesses'
];
