import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import innerPageHeader from '@/assets/inner-page-header.png';
import section6Bg from '@/assets/section-6-bg.png';
import { getThemeAssetUrl } from '@/lib/themeAsset';
import { ArrowRight, Layers, Database, RefreshCw, Users, Calendar, GraduationCap, Globe } from 'lucide-react';

const pillars = [
  {
    title: 'Seamless',
    descriptor: 'Continuity across the entire member journey.',
    copy: 'Membership should feel continuous — not transactional. From joining and renewal to events, learning, and ongoing engagement, every interaction flows naturally. Members don\'t experience systems. They experience continuity.',
    icon: Layers,
  },
  {
    title: 'Unified',
    descriptor: 'One source of truth powering every experience.',
    copy: 'A single backend connects your website, member portal, events, and learning. No syncing. No duplication. No conflicting data. Your public website reflects the same system that powers your operations — instantly and accurately.',
    icon: Database,
  },
  {
    title: 'Adaptive',
    descriptor: 'Designed to evolve without disruption.',
    copy: 'Your organization will change. Your platform should change with you. Seamless supports modern websites today and whatever comes next — without forcing migrations, redesigns, or starting over.',
    icon: RefreshCw,
  },
];

const capabilities = [
  {
    title: 'Membership Lifecycle',
    impact: 'Support the complete member journey from a single, unified record.',
    points: [
      'Flexible membership tiers and structures',
      'Automated renewals and lifecycle communications',
      'Profile management with role-based access',
    ],
    icon: Users,
  },
  {
    title: 'Events & Registrations',
    impact: 'Events that recognize and reward membership.',
    points: [
      'Member-aware pricing and early access',
      'Seamless registration tied to member records',
      'Attendance tracking that informs engagement',
    ],
    icon: Calendar,
  },
  {
    title: 'Learning, CEUs & Credentials',
    impact: 'Professional development connected to membership.',
    points: [
      'Progress and completion tied to member profiles',
      'Certification and credential management',
      'CEU tracking with automated reporting',
    ],
    icon: GraduationCap,
  },
  {
    title: 'Website Integration',
    impact: 'Design freedom with backend unity.',
    points: [
      'Works with WordPress, Wix, Webflow, and more',
      'Member data powers every page without syncing',
      'Modern design, unified operations',
    ],
    icon: Globe,
  },
];

const Features: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative pt-40 pb-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${innerPageHeader})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimateWrapper animation="fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 tracking-tight">
                Capabilities <span className="text-accent">that work together.</span>
              </h1>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-up" delay={100}>
              <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
                Built around membership. Unified from backend to frontend.
              </p>
            </ScrollAnimateWrapper>
            
            
            <ScrollAnimateWrapper animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl flex items-center justify-center gap-2">
                  See Seamless in Action
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  Learn How It Works
                </button>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Philosophy Intro */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-light">
                Associations don't need more features.
                <span className="block mt-2 text-gradient font-bold">They need systems that don't fight each other.</span>
              </p>
              
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        {/* Background Image - same as testimonials */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${section6Bg})` }}
        />
        
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Foundation
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground">
                Three principles. One platform.
              </h2>
            </div>
          </ScrollAnimateWrapper>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <ScrollAnimateWrapper
                  key={pillar.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="group relative h-full">
                    {/* Card */}
                    <div className="relative h-full p-8 md:p-10 rounded-2xl bg-background border border-border/50 shadow-sm transition-all duration-500 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1">
                      {/* Gradient accent on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-display text-foreground mb-3">
                          {pillar.title}
                        </h3>
                        
                        <p className="text-primary font-medium mb-4">
                          {pillar.descriptor}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {pillar.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
                Everything membership needs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Every capability supports the membership relationship — not the other way around.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <ScrollAnimateWrapper
                  key={capability.title}
                  animation="fade-up"
                  delay={index * 75}
                >
                  <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start gap-5">
                      {/* Icon container */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-display text-foreground mb-2">
                          {capability.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">
                          {capability.impact}
                        </p>
                        
                        <ul className="space-y-2.5">
                          {capability.points.map((point, pIndex) => (
                            <li key={pIndex} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>
        </div>
      </section>


      {/* Product Video Section */}
      <section 
        className="py-28 md:py-36 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section6Bg})` }}
      >
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimateWrapper animation="fade-up">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                  See It In Action
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
                  Membership, without friction.
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  A unified system that removes barriers across the entire member lifecycle — 
                  from backend to frontend.
                </p>
              </div>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="scale" delay={100}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Video container */}
                <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full"
                  >
                    <source src={getThemeAssetUrl("videos/features-product.mp4")} type="video/mp4" />
                  </video>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground mb-8">
                Built for organizations that care about members.
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12">
                Long-term stability. Clarity over clutter. Technology that earns trust 
                by staying out of the way. Seamless is infrastructure for organizations 
                that think in decades, not quarters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/request-demo" className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/integrations" className="px-8 py-4 border-2 border-white/30 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  Explore Integrations
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

export default Features;
