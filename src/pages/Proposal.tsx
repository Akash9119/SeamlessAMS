import React from 'react';
import ProposalHeader from '@/components/ProposalHeader';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import logoWhite from '@/assets/logo-white.png';

import section6Bg from '@/assets/section-6-bg.png';
import seamlessBgContentGray from '@/assets/seamless-bg-content-gray.png';
import seamlessBgContent from '@/assets/seamless-bg-content.png';
import section2Bg from '@/assets/section-2-bg.png';
import section5Bg from '@/assets/section-5-bg.png';
import { getThemeAssetUrl } from '@/lib/themeAsset';
import {
  Layers,
  Database,
  RefreshCw,
  Users,
  Calendar,
  GraduationCap,
  CreditCard,
  ShoppingBag,
  Calculator,
  FileCheck,
  Copy,
  KeyRound,
  CheckCircle2,
  ArrowRight,
  Globe,
} from 'lucide-react';

const Proposal: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProposalHeader />

      {/* ─── HERO / OVERVIEW ─────────────────────────────────────────────── */}
      <section
        id="overview"
        className="relative pt-40 pb-32 min-h-[70vh] flex items-center bg-black"
        style={{ overflow: 'hidden', position: 'relative' }}
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            zIndex: 0
          }}
        >
          <source src={getThemeAssetUrl("videos/hero-bg.mov")} type="video/quicktime" />
          <source src={getThemeAssetUrl("videos/hero-bg.mp4")} type="video/mp4" />
        </video>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimateWrapper animation="fade-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mb-6">
                Prepared March 12, 2026 · Justin Watson
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-6 tracking-tight leading-tight">
                Proposal for Web Design, Development<br />
                &amp; Seamless AMS Integration
              </h1>
            </ScrollAnimateWrapper>
            <ScrollAnimateWrapper animation="fade-up" delay={150}>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                To: Janie Ritter and Team<br />
                <span className="text-white/70 text-lg">Minnesota Safety Council &amp; South Dakota Safety Council</span>
              </p>
            </ScrollAnimateWrapper>
            <ScrollAnimateWrapper animation="fade-up" delay={250}>
              <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
                This proposal outlines a plan for developing new websites and migrating both the Minnesota and South Dakota Safety Councils to the Seamless AMS platform — replacing your current iMIS system with a fiscally responsible, integrated solution.
              </p>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* ─── CLIENT MEMBERSHIP OVERVIEW TABLE ──────────────────────────── */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Section 1
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
                Client &amp; Combined Membership Overview
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                This project is structured to serve both the Minnesota and South Dakota Safety Councils, leveraging a combined approach for development and pricing.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fade-up" delay={100}>
            <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border/50 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Organization</th>
                    <th className="px-6 py-4 text-left font-semibold">Website</th>
                    <th className="px-6 py-4 text-right font-semibold">Member Companies</th>
                    <th className="px-6 py-4 text-right font-semibold">Linked Members</th>
                    <th className="px-6 py-4 text-right font-semibold">Employees</th>
                    <th className="px-6 py-4 text-right font-semibold">Individuals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">Minnesota Safety Council (MN)</td>
                    <td className="px-6 py-4 text-muted-foreground">mnsc.org</td>
                    <td className="px-6 py-4 text-right text-foreground">899</td>
                    <td className="px-6 py-4 text-right text-foreground">2,820</td>
                    <td className="px-6 py-4 text-right text-foreground">58,601</td>
                    <td className="px-6 py-4 text-right text-foreground">10,432</td>
                  </tr>
                  <tr className="bg-muted/20 border-b border-border/30 hover:bg-muted/40 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">South Dakota Safety Council (SD)</td>
                    <td className="px-6 py-4 text-muted-foreground">sdsc.org</td>
                    <td className="px-6 py-4 text-right text-foreground">242</td>
                    <td className="px-6 py-4 text-right text-foreground">245</td>
                    <td className="px-6 py-4 text-right text-foreground">7,091</td>
                    <td className="px-6 py-4 text-right text-foreground">N/A</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-primary/5 to-secondary/5">
                    <td className="px-6 py-4 font-bold text-foreground">TOTALS</td>
                    <td className="px-6 py-4" />
                    <td className="px-6 py-4 text-right font-bold text-primary">1,141</td>
                    <td className="px-6 py-4 text-right font-bold text-primary">3,065</td>
                    <td className="px-6 py-4 text-right font-bold text-primary">65,692</td>
                    <td className="px-6 py-4 text-right font-bold text-primary">10,432</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* ─── AMS SYSTEM INTEGRATION ─────────────────────────────────────── */}
      <section
        id="ams-system"
        className="py-28 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${seamlessBgContentGray})` }}
      >
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Section 2
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
                Seamless AMS System Integration
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                Seamless AMS is a modern, unified association management system offering unlimited users and features, fully integrated with WordPress websites. Defined by three core pillars — seamless, unified, and adaptive — it eliminates the tension between a powerful backend and a modern website.
              </p>
            </div>
          </ScrollAnimateWrapper>

          {/* Three Pillars */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Layers,
                title: 'Seamless',
                descriptor: 'Continuity across the entire member journey.',
                copy: 'The member journey — joining, renewal, events, and engagement — feels intentional and connected, not purely transactional.',
              },
              {
                icon: Database,
                title: 'Unified',
                descriptor: 'One source of truth powering every experience.',
                copy: 'Seamless AMS acts as a single source of truth, connecting the member portal, learning management, and backend operations — eliminating the need to juggle multiple systems.',
              },
              {
                icon: RefreshCw,
                title: 'Adaptive',
                descriptor: 'Designed to evolve without disruption.',
                copy: "The platform's adaptive architecture allows for growth and innovation without requiring costly migrations — built for now and what's to come.",
              },
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <ScrollAnimateWrapper key={pillar.title} animation="fade-up" delay={i * 100}>
                  <div className="group h-full p-8 md:p-10 rounded-2xl bg-background border border-border/50 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-display text-foreground mb-2">{pillar.title}</h3>
                      <p className="text-primary font-medium mb-4 text-sm">{pillar.descriptor}</p>
                      <p className="text-muted-foreground leading-relaxed text-sm">{pillar.copy}</p>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>

          {/* Key Capabilities */}
          <ScrollAnimateWrapper animation="fade-up">
            <h3 className="text-2xl md:text-3xl font-display text-foreground text-center mb-10">
              Key System Capabilities
            </h3>
          </ScrollAnimateWrapper>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: 'Platform Integration',
                desc: 'Seamless integration with your new WordPress websites. Updates made in the AMS automatically sync instantly to the customer-facing website.',
              },
              {
                icon: Users,
                title: 'Core Management',
                desc: 'Comprehensive membership management, event registration, Learning Management System (LMS), reporting, and payment processing — all in one platform.',
              },
              {
                icon: Calendar,
                title: 'Membership & Events',
                desc: 'Create different membership levels, organization structures, and manage events with customizable pricing options, promo codes, and member-only access.',
              },
              {
                icon: GraduationCap,
                title: 'AI-Powered Reporting',
                desc: 'An upcoming AI-powered reporting system will allow users to generate customized reports using large language models — without complex query writing.',
              },
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <ScrollAnimateWrapper key={cap.title} animation="fade-up" delay={i * 75}>
                  <div className="group h-full p-7 rounded-2xl bg-background border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-md flex gap-5">
                    <div className="flex-shrink-0 w-13 h-13 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display text-foreground mb-2">{cap.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WEB DESIGN & DEVELOPMENT ───────────────────────────────────── */}
      <section
        id="web-design"
        className="py-28 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/3" />
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Section 3
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
                Web Design &amp; Development
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Delivered by <strong className="text-foreground">AS Creative Services</strong> — a boutique web design firm specialized in non-profits and associations.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: 'Specialization & Expertise',
                copy: 'UI/UX design, custom web development, mobile applications, and digital strategy — with deep expertise in AI agents, Large Language Models, and CRM/AMS systems.',
              },
              {
                title: 'Partnership Approach',
                copy: "Positioned as long-term partners providing 'white glove' support. Direct access to our principals eliminates middlemen, ensuring faster and more precise decision-making.",
              },
              {
                title: 'AI-Powered Process',
                copy: 'Our development process is powered by AI to enhance collaboration, with flexible architecture and real-time wireframing that actively reduces rework.',
              },
            ].map((item, i) => (
              <ScrollAnimateWrapper key={item.title} animation="fade-up" delay={i * 100}>
                <div className="p-8 rounded-2xl bg-muted/40 border border-border/30 h-full hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.copy}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          {/* Project Goal */}
          <ScrollAnimateWrapper animation="scale">
            <div className="max-w-4xl mx-auto rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-10">
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-6 text-center">
                Project Goal &amp; Functionality
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Goal
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Build modern, functional websites for both the MN and SD Safety Councils that fully leverage the Seamless AMS integration with WordPress.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    Functionality
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Members will seamlessly edit profiles and manage events through the customer-facing system — with updates reflecting instantly across platforms. Features include required fields, customization capabilities, and potential for SMS notifications.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* ─── KEY REQUIREMENTS ───────────────────────────────────────────── */}
      <section
        id="requirements"
        className="py-28 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${seamlessBgContent})` }}
      >
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Section 4
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
                Addressing Key Functional Requirements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Every requirement raised during the demonstration — addressed directly.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                icon: CreditCard,
                title: 'Payment Methods',
                desc: 'Credit card payments are the primary focus, with support for ACH and check payments also possible.',
              },
              {
                icon: ShoppingBag,
                title: 'Product Sales',
                desc: 'Full merchandise/product sales support — including individual items like first aid workbooks added directly to the system.',
              },
              {
                icon: Calculator,
                title: 'Accounting Integration',
                desc: 'Integration with accounting systems via GL account mapping. Details will be provided following necessary research to ensure a smooth, non-cumbersome experience.',
              },
              {
                icon: FileCheck,
                title: 'Sales Tax Handling',
                desc: 'Clear information for sales tax handling on events and products will be provided following the required research phase.',
              },
              {
                icon: Copy,
                title: 'Record Deduplication',
                desc: 'A deduplication feature is planned for the near future. We will use data sanitization scripts before migration to address any existing duplicate data.',
              },
              {
                icon: KeyRound,
                title: 'User Registration & Login',
                desc: 'Solutions for duplicate account handling — including search for existing company accounts and password reset — will be implemented to support supervisor-assigned training.',
              },
            ].map((req, i) => {
              const Icon = req.icon;
              return (
                <ScrollAnimateWrapper key={req.title} animation="fade-up" delay={i * 75}>
                  <div className="group h-full p-7 rounded-2xl bg-background border border-border/30 hover:border-primary/20 hover:shadow-md transition-all duration-300 flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="h-full">
                      <h4 className="font-display text-lg text-foreground mb-2">{req.title}</h4>
                      <p className="h-full text-muted-foreground text-sm leading-relaxed">{req.desc}</p>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>

          {/* Closing note */}
          <ScrollAnimateWrapper animation="fade-up" delay={200}>
            <div className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-background border border-accent/20 text-center">
              <p className="text-foreground text-lg leading-relaxed">
                We look forward to partnering with you to transition from your current systems to a flexible, modern solution with Seamless AMS.
              </p>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* ─── PRICING ────────────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="py-28 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white border border-white/30 mb-6">
                Section 5
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-4">
                Pricing &amp; Investment Summary
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                A combined approach delivers significant savings for both councils.
              </p>
            </div>
          </ScrollAnimateWrapper>

          {/* Pricing Table */}
          <ScrollAnimateWrapper animation="scale" delay={100}>
            <div className="max-w-4xl mx-auto overflow-x-auto rounded-2xl border border-white/20 shadow-2xl mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white/20 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Service / Cost Item</th>
                    <th className="px-6 py-4 text-right font-semibold">Full Cost</th>
                    <th className="px-6 py-4 text-right font-semibold">50% Discount</th>
                    <th className="px-6 py-4 text-right font-semibold text-accent">Discounted Cost</th>
                    <th className="px-6 py-4 text-right font-semibold">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white/5 border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Seamless AMS Fee (MN Safety Council)</td>
                    <td className="px-6 py-4 text-right text-white/70 line-through">$2,950/mo</td>
                    <td className="px-6 py-4 text-right text-white/70">$1,475/month</td>
                    <td className="px-6 py-4 text-right font-bold text-accent">$1,475/month</td>
                    <td className="px-6 py-4 text-right text-white/70">Monthly</td>
                  </tr>
                  <tr className="bg-white/10 border-b border-white/10 hover:bg-white/15 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Seamless AMS Fee (SD Safety Council)</td>
                    <td className="px-6 py-4 text-right text-white/70 line-through">$1,250/mo</td>
                    <td className="px-6 py-4 text-right text-white/70">$625/month</td>
                    <td className="px-6 py-4 text-right font-bold text-accent">$625/month</td>
                    <td className="px-6 py-4 text-right text-white/70">Monthly</td>
                  </tr>
                  <tr className="bg-white/5 border-b border-white/10 hover:bg-white/10 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">Data Sanitization &amp; Website Redesign</td>
                    <td className="px-6 py-4 text-right text-white/70 line-through">$45,000</td>
                    <td className="px-6 py-4 text-right text-white/70">$22,500</td>
                    <td className="px-6 py-4 text-right font-bold text-accent">$22,500</td>
                    <td className="px-6 py-4 text-right text-white/70">One-Time</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-white/20">
                    <td className="px-6 py-5 font-bold text-white text-base" colSpan={3}>
                      TOTAL MONTHLY ONGOING INVESTMENT
                    </td>
                    <td className="px-6 py-5 text-right font-bold text-2xl text-accent" colSpan={2}>
                      $2,100/mo
                    </td>
                  </tr>
                  <tr className="bg-white/10">
                    <td className="px-6 py-5 font-bold text-white text-base" colSpan={3}>
                      TOTAL ONE-TIME PROJECT FEE
                    </td>
                    <td className="px-6 py-5 text-right font-bold text-2xl text-accent" colSpan={2}>
                      $22,500
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </ScrollAnimateWrapper>

          {/* Savings Highlight Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Monthly AMS Savings', value: '$2,100/mo', sub: '50% discount applied' },
              { label: 'One-Time Project Fee', value: '$22,500', sub: 'Includes data sanitization & redesign' },
              { label: 'Total Year-1 Investment', value: '$47,700', sub: '$22,500 + ($2,100 × 12)' },
            ].map((card, i) => (
              <ScrollAnimateWrapper key={card.label} animation="fade-up" delay={i * 100}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center hover:bg-white/15 transition-colors">
                  <p className="text-white/60 text-sm mb-2">{card.label}</p>
                  <p className="text-3xl font-display text-white mb-1">{card.value}</p>
                  <p className="text-white/50 text-xs">{card.sub}</p>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>

          {/* CTA */}
          <ScrollAnimateWrapper animation="fade-up" delay={200}>
            <div className="text-center">
              <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto">
                Ready to modernize your membership management? Let's get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:justin@ascreativeservices.com"
                  className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Accept This Proposal
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="mailto:justin@ascreativeservices.com"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50"
                >
                  Ask a Question
                </a>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#3d3652] text-background py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <img src={logoWhite} alt="Seamless" className="h-10 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                A modern, unified AMS Platform built for now and what's to come.
              </p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm mb-1">Prepared by Justin Watson</p>
              <p className="text-white/60 text-sm">AS Creative Services</p>
              <p className="text-white/60 text-sm">March 12, 2026</p>
            </div>
          </div>
          <div className="border-t border-muted-foreground/20 mt-10 pt-8">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Seamless AMS. Proposal prepared for Janie Ritter and Team, Minnesota &amp; South Dakota Safety Councils. All figures subject to final agreement.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Proposal;
