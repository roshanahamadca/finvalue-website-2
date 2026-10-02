export type Service = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  highlights: string[];
  clientNeeds: string[];
  scope: string[];
  deliverables: string[];
  clientInput: string[];
  icon: any;
};

import { BadgeDollarSign, BriefcaseBusiness, ClipboardCheck, FileText, Landmark, ShieldCheck, TrendingUp } from 'lucide-react';

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

const serviceDetails = {
  'accounting-bookkeeping': {
    clientNeeds: ['Reliable bookkeeping and recorded transactions', 'Clear monthly or periodic reporting', 'Better visibility into cash flow and performance'],
    scope: ['Recording and classification of financial transactions', 'Bank and ledger review support', 'Management reporting preparation'],
    deliverables: ['Bookkeeping summaries', 'Financial statement support packages', 'Management reporting templates'],
    clientInput: ['Bank and accounting records', 'Supporting source documents', 'Reporting timelines and business context']
  },
  'tax-tin-support': {
    clientNeeds: ['Tax filing readiness', 'TIN-related documentation support', 'Clarity on compliance obligations'],
    scope: ['Review of records and documentation', 'TIN process support guidance', 'Compliance and filing preparation assistance'],
    deliverables: ['Document checklist', 'Tax support notes', 'Filing preparation materials'],
    clientInput: ['Tax documents and financial records', 'Identification and registration information', 'Relevant prior filings or correspondence']
  },
  'audit-assurance-support': {
    clientNeeds: ['Audit preparatory support', 'Evidence organisation', 'Improved documentation readiness'],
    scope: ['Preparation for audit or review engagements', 'Document gap analysis', 'Control and process readiness support'],
    deliverables: ['Audit readiness checklists', 'Evidence request tracking', 'Management action log'],
    clientInput: ['Ledger copies and source documents', 'Prior audit or review correspondence', 'Process descriptions and controls overview']
  },
  'internal-audit-risk-controls': {
    clientNeeds: ['Improved governance and internal control oversight', 'Risk awareness and process review', 'Actionable recommendations for improvement'],
    scope: ['Risk identification and assessment', 'Control design and walkthrough support', 'Operational review and remediation planning'],
    deliverables: ['Risk register', 'Control framework observations', 'Actionable recommendations report'],
    clientInput: ['Process documentation', 'Risk areas of concern', 'Relevant policies and operating procedures']
  },
  'financial-advisory': {
    clientNeeds: ['Better strategic and operational decision-making', 'Scenario and performance analysis', 'Funding or investment evaluation'],
    scope: ['Financial performance analysis', 'Cash flow and planning review', 'Decision-support modelling'],
    deliverables: ['Summary analysis notes', 'Scenario comparisons', 'Decision support recommendations'],
    clientInput: ['Historical financial records', 'Business plans or forecasts', 'Assumptions and strategic goals']
  },
  'business-consulting': {
    clientNeeds: ['Process and growth challenges', 'Operational uncertainty', 'Planning for sustainable development'],
    scope: ['Business review and diagnostic work', 'Process improvement planning', 'Strategy and decision support'],
    deliverables: ['Business review summary', 'Action plan', 'Implementation recommendations'],
    clientInput: ['Operational background', 'Key challenges and objectives', 'Available performance indicators']
  },
  'management-reporting-bi': {
    clientNeeds: ['Timelier and more useful management insight', 'Performance monitoring', 'Improved reporting consistency'],
    scope: ['Management reporting design', 'Performance indicator selection', 'Business intelligence support'],
    deliverables: ['Management dashboard outline', 'Performance reporting pack', 'Insight and trend summary'],
    clientInput: ['Available data sources', 'Key KPIs and reporting cadence', 'Current reporting practices']
  }
} as const;

export const services: Service[] = [
  {
    slug: 'accounting-bookkeeping',
    category: 'Accounting & Bookkeeping',
    title: 'Accounting & Bookkeeping',
    summary: 'Structured financial recording and reporting support that helps individuals and organisations maintain accurate and useful financial information.',
    highlights: ['Bookkeeping support', 'Financial record review', 'Management reporting insights'],
    ...serviceDetails['accounting-bookkeeping'],
    icon: FileText,
  },
  {
    slug: 'tax-tin-support',
    category: 'Tax & TIN Support',
    title: 'Tax & TIN Support',
    summary: 'Practical support in understanding tax obligations, documentation arrangements and compliance readiness.',
    highlights: ['TIN-related support', 'Record preparation', 'Compliance reviews'],
    ...serviceDetails['tax-tin-support'],
    icon: Landmark,
  },
  {
    slug: 'audit-assurance-support',
    category: 'Audit & Assurance Support',
    title: 'Audit & Assurance Support',
    summary: 'Support for internal preparation, evidence organisation and process readiness for audit and assurance engagements.',
    highlights: ['Preparedness review', 'Documentation support', 'Process coordination'],
    ...serviceDetails['audit-assurance-support'],
    icon: ClipboardCheck,
  },
  {
    slug: 'internal-audit-risk-controls',
    category: 'Internal Audit, Risk & Internal Controls',
    title: 'Internal Audit, Risk & Internal Controls',
    summary: 'Structured review of control environments, governance processes and areas of operational or reporting risk.',
    highlights: ['Risk assessment', 'Control review', 'Actionable recommendations'],
    ...serviceDetails['internal-audit-risk-controls'],
    icon: ShieldCheck,
  },
  {
    slug: 'financial-advisory',
    category: 'Financial Advisory',
    title: 'Financial Advisory',
    summary: 'Focused analysis and guidance to help clients assess financial performance, planning assumptions and decision choices.',
    highlights: ['Scenario analysis', 'Cash flow support', 'Decision support'],
    ...serviceDetails['financial-advisory'],
    icon: BadgeDollarSign,
  },
  {
    slug: 'business-consulting',
    category: 'Business Consulting',
    title: 'Business Consulting',
    summary: 'Support for operational improvement, strategy alignment and organisational decisions that influence sustainable performance.',
    highlights: ['Business review', 'Process improvement', 'Growth planning'],
    ...serviceDetails['business-consulting'],
    icon: BriefcaseBusiness,
  },
  {
    slug: 'management-reporting-bi',
    category: 'Management Reporting & Business Intelligence',
    title: 'Management Reporting & Business Intelligence',
    summary: 'Support in turning financial and operational information into clear management reporting and decision-useful analysis.',
    highlights: ['Dashboards', 'Performance tracking', 'Management insight'],
    ...serviceDetails['management-reporting-bi'],
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
