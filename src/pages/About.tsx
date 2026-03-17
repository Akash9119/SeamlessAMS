import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import innerPageHeader from '@/assets/inner-page-header.png';
import section6Bg from '@/assets/section-6-bg.png';
import { 
  Infinity, 
  Database, 
  RefreshCw,
  Users,
  Clock,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

const values = [
  {
    icon: <Infinity className="w-6 h-6" />,
    title: 'Seamless',
    description: 'We design for continuity. Members and staff shouldn\'t feel handoffs, workarounds, or system boundaries. When experiences flow naturally, trust follows.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Unified',
    description: 'We believe in one source of truth. Membership data, pricing, access, events, and learning belong in a single system — managed once and reflected everywhere without duplication or syncing.',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Adaptive',
    description: 'Associations evolve. Platforms should too. Seamless is built to adapt as technologies, websites, and member expectations change — without forcing redesigns, migrations, or disruption.',
  },
];

const benefits = [
  {
    icon: <Clock className="w-5 h-5" />,
    text: 'Staff spend less time managing tools',
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Members spend less time navigating processes',
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    text: 'Organizations gain clarity instead of complexity',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${innerPageHeader})` }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 tracking-tight">
                Built for Membership —{' '}
                <span className="text-accent">Not Compromise</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
                Seamless was created to solve a problem most associations quietly live with every day: 
                <span className="text-white font-medium"> systems that work, but don't work together.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/request-demo" className="btn-cta">
                  Request a Demo
                </Link>
                <Link 
                  to="/pricing" 
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50 flex items-center justify-center gap-2"
                >
                  See How Pricing Works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Intro Section - Enhanced */}
      <section className="py-28 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            {/* Problem Statement - Centered, Full Width */}
            <ScrollAnimateWrapper animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For years, AMS platforms have forced organizations into trade-offs — powerful backends paired with 
                  outdated websites, modern design layered on top of disconnected data, membership separated from 
                  events and learning.
                </p>
                <p className="text-lg text-foreground font-medium mt-4">
                  The result is complexity behind the scenes and friction for members.
                </p>
              </div>
            </ScrollAnimateWrapper>
            
            {/* Belief Statement - Full Width Box */}
            <ScrollAnimateWrapper animation="fade-up" delay={150}>
              <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary to-secondary w-full">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
                  <p className="text-2xl md:text-3xl font-display text-white leading-tight">
                    We believe associations deserve better.
                  </p>
                  <Link to="/features" className="flex items-center gap-3 flex-shrink-0 group">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">That's why we built Seamless</span>
                  </Link>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Our Approach Section - Enhanced */}
      <section className="py-28 bg-muted/30 relative overflow-hidden">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <ScrollAnimateWrapper animation="fade-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
                  Membership is a relationship,{' '}
                  <span className="text-primary">not a record.</span>
                </h2>
              </div>
            </ScrollAnimateWrapper>
            
            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ScrollAnimateWrapper animation="fade-up" delay={100}>
                <div className="p-8 rounded-2xl bg-background border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">Built on a simple idea</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Seamless is a modern, unified AMS platform built around a simple idea: membership is a relationship, not a record. Everything we build starts there.
                  </p>
                </div>
              </ScrollAnimateWrapper>
              
              <ScrollAnimateWrapper animation="fade-up" delay={200}>
                <div className="p-8 rounded-2xl bg-background border border-border/50 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display text-foreground mb-3">A single, cohesive system</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Instead of assembling disconnected modules, Seamless provides a single system that supports the full member lifecycle — and reflects that information instantly across modern websites.
                  </p>
                </div>
              </ScrollAnimateWrapper>
            </div>
            
            {/* Quote Block */}
            <ScrollAnimateWrapper animation="fade-up" delay={300}>
              <div className="text-center mx-auto">
                <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-6" />
                <p className="text-xl md:text-2xl font-display text-foreground italic leading-relaxed whitespace-nowrap">
                  The technology stays in the background. The experience feels continuous.
                </p>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="heading-section text-foreground mb-4">
                What Guides Us
              </h2>
            </div>
          </ScrollAnimateWrapper>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ScrollAnimateWrapper
                  key={value.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    
                    <div className="relative h-full bg-card border border-border/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground mb-6 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      
                      <h3 className="font-display text-2xl text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section 
        className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section6Bg})` }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimateWrapper animation="fade-up">
              <h2 className="heading-section text-foreground mb-8">
                Why It Matters
              </h2>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-up" delay={100}>
              <p className="text-body text-muted-foreground text-lg mb-8">
                When systems are unified:
              </p>
            </ScrollAnimateWrapper>
            
            <div className="space-y-4 mb-12">
              {benefits.map((benefit, index) => (
                <ScrollAnimateWrapper
                  key={index}
                  animation="fade-up"
                  delay={150 + index * 50}
                >
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <p className="text-foreground font-medium">{benefit.text}</p>
                  </div>
                </ScrollAnimateWrapper>
              ))}
            </div>
            
            <ScrollAnimateWrapper animation="fade-up" delay={300}>
              <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
                <p className="text-xl font-display text-foreground text-center">
                  The best AMS is one members rarely think about — because it simply works.
                </p>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Built for What Comes Next */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimateWrapper animation="fade-up">
              <h2 className="heading-section text-foreground mb-8">
                Built for What Comes Next
              </h2>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-up" delay={100}>
              <p className="text-body text-muted-foreground text-lg leading-relaxed mb-8">
                Seamless is intentionally designed for modern organizations that care about longevity 
                as much as functionality. Whether you're running WordPress, Wix, Webflow, or whatever 
                comes next, Seamless is built to support change without starting over.
              </p>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-up" delay={150}>
              <div className="text-center max-w-lg mx-auto mb-12">
                <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-6" />
                <p className="text-foreground italic">
                  This isn't software designed for yesterday's associations.<br />
                  It's infrastructure for the future of membership.
                </p>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/70 tracking-widest uppercase text-sm mb-4">
                Seamless
              </p>
              <h2 className="heading-section text-primary-foreground mb-6">
                A modern, unified AMS platform built for now — and what's to come.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Link to="/request-demo" className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/30 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
