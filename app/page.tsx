import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, ChartColumnBig, ShieldCheck } from 'lucide-react';
import { services, clientSegments, processSteps } from '@/lib/site-data';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { SectionHeading } from '@/components/section-heading';
import { ServiceCard } from '@/components/service-card';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-slate-200 bg-slate">
          <div className="container-shell grid gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div>
              <span className="section-label">Financial &amp; Business Advisory</span>
              <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">
                Clarity for your finances. Confidence for your future.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                Practical financial insight and professional support to help individuals and businesses make informed decisions, manage risk and move forward with confidence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Discuss Your Requirements
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Explore Our Services
                </Link>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="card-surface overflow-hidden p-5">
                <div className="rounded-2xl bg-navy p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-gold/80">FINVALUE</p>
                      <h2 className="mt-2 text-2xl font-semibold">Strategic clarity</h2>
                    </div>
                    <div className="rounded-full border border-white/20 bg-white/5 p-3">
                      <ChartColumnBig className="h-7 w-7 text-gold" />
                    </div>
                  </div>

                  <div className="mt-10 space-y-5">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-200">
                        <span>Operational visibility</span>
                        <span className="text-gold">88%</span>
                      </div>
                      <div className="mt-3 h-2.5 rounded-full bg-white/10">
                        <div className="h-2.5 w-[88%] rounded-full bg-gold" />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-slate-300">Risk perspective</p>
                        <p className="mt-3 text-3xl font-semibold text-white">360°</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-sm text-slate-300">Planning horizon</p>
                        <p className="mt-3 text-3xl font-semibold text-white">12 mo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Core services"
              title="Practical support for complex decisions."
              description="Whether you need day-to-day financial management support or strategic guidance, we focus on clarity, sustainability and informed action."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate py-20">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="card-surface overflow-hidden">
              <div className="bg-navy p-8 text-white">
                <p className="text-sm uppercase tracking-[0.18em] text-gold">Our approach</p>
                <h3 className="mt-4 text-3xl font-semibold">Client-focused financial thinking</h3>
                <p className="mt-4 leading-7 text-slate-200">
                  FINVALUE ADVISORY is built around practical insight, clear communication and careful analysis. We work with individuals, founders, teams and organisations to turn complexity into clear next steps.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="About FINVALUE"
                title="Professional support grounded in integrity and clarity."
                description="We combine financial discipline with business understanding so that decisions are informed, practical and aligned to long-term value."
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Why FINVALUE"
              title="Reliable guidance built around your context."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { icon: ShieldCheck, title: 'Integrity', description: 'Thoughtful, transparent advice grounded in sound financial judgement.' },
                { icon: BriefcaseBusiness, title: 'Tailored support', description: 'Solutions shaped around your regulatory, operational and growth context.' },
                { icon: ArrowRight, title: 'Clear communication', description: 'Open, practical explanations that help you act with confidence.' },
                { icon: ChartColumnBig, title: 'Analytical thinking', description: 'Structured analysis that supports better decisions and stronger controls.' }
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="card-surface p-6">
                  <div className="mb-5 inline-flex rounded-xl bg-gold/10 p-3 text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white">
          <div className="container-shell">
            <SectionHeading
              eyebrow="How we work"
              title="A simple process for better decisions."
              description="We keep the engagement practical, structured and outcome-focused."
              light
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-semibold text-gold">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-200">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Client segments"
              title="Support tailored to different stages and needs."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {clientSegments.map((segment) => (
                <div key={segment} className="card-surface p-6 text-center">
                  <p className="text-lg font-medium text-navy">{segment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate py-20">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Insights & research"
              title="Thoughtful analysis to support informed decisions."
              description="Our updates focus on practical accounting, tax, risk and business performance topics relevant to individuals and organisations."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                { title: 'Preparing for a more resilient reporting cycle', category: 'Accounting & reporting' },
                { title: 'Tax planning considerations for growing businesses', category: 'Tax information' },
                { title: 'Using financial information to steer better decisions', category: 'Business performance' }
              ].map((item) => (
                <div key={item.title} className="card-surface p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{item.category}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-navy">{item.title}</h3>
                  <Link href="/insights" className="mt-5 inline-flex items-center text-sm font-semibold text-navy hover:text-gold">
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-shell">
            <div className="rounded-[32px] bg-navy px-6 py-12 text-center text-white shadow-soft sm:px-10">
              <p className="text-sm uppercase tracking-[0.2em] text-gold">Let’s talk</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Discuss your requirements with FINVALUE ADVISORY.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
                Share your goals, challenges or operational questions and we will help you understand the best path forward.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="btn-primary">
                  Request a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
