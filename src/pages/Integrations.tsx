import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import innerPageHeader from '@/assets/inner-page-header.png';
import section6Bg from '@/assets/section-6-bg.png';
import { getThemeAssetUrl } from '@/lib/themeAsset';
import { ArrowRight, BookOpen, Code, FileText, Lightbulb, PlayCircle, Wrench, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '40%', label: 'Month-over-Month Growth' },
  { value: '50K+', label: 'Successful Events' },
  { value: '24', label: 'Response Time (Hours)' },
];

const documentationCards = [
  {
    title: 'Getting Started',
    description: 'Learn the basics and set up your first integration in minutes.',
    icon: BookOpen,
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation with code examples and endpoints.',
    icon: Code,
  },
  {
    title: 'Integration Guides',
    description: 'Step-by-step guides for connecting your favorite tools.',
    icon: FileText,
  },
  {
    title: 'Best Practices',
    description: 'Tips and strategies for optimizing your workflow.',
    icon: Lightbulb,
  },
  {
    title: 'Video Tutorials',
    description: 'Watch our video series to master every feature of Seamless.',
    icon: PlayCircle,
  },
  {
    title: 'Developer Tools',
    description: 'SDKs, webhooks, and developer resources for custom integrations.',
    icon: Wrench,
  },
];

const integrationCategories = [
  {
    title: 'Accounting',
    description: 'Remove risk, improve accuracy, and save staff time while maintaining impeccable books.',
    tools: ['QuickBooks', 'Stripe', 'QuickBooks Payments'],
  },
  {
    title: 'Analytics & Reporting',
    description: 'Make more effective business decisions with advanced data analytics.',
    tools: ['Google Analytics'],
  },
  {
    title: 'Automation & Productivity',
    description: 'Connect your member data to automate workflows and keep data synchronized.',
    tools: ['Asana', 'Dropbox', 'Excel', 'Google Calendar', 'Google Drive', 'Slack', 'Trello', 'Zapier', 'Salesforce', 'Microsoft Teams'],
  },
  {
    title: 'Online Community',
    description: 'Connect with your members and help them connect with one another.',
    tools: ['Breezio', 'Forj', 'Higher Logic Thrive', 'Sengii'],
  },
  {
    title: 'Event Management',
    description: 'Augment native event management with specialized event platforms.',
    tools: ['Cvent', 'CrowdCompass', 'eShow', 'Fielddrive', 'Map Dynamics', 'MobileUp', 'Showcare', 'Streampoint'],
  },
  {
    title: 'Learning Management',
    description: 'Take your educational programs online with a full-featured LMS.',
    tools: ['BlueSky eLearn', 'Brightspace', 'Docebo', 'LearnUpon', 'MapleLMS', 'Oasis LMS'],
  },
  {
    title: 'Marketing & Communications',
    description: 'Create authentic two-way communication with your members at scale.',
    tools: ['Mailchimp', 'Constant Contact', 'HubSpot', 'SendGrid', 'Gmail', 'Office 365', 'SurveyMonkey', 'Vimeo', 'YouTube', 'WordPress'],
  },
  {
    title: 'Video Conferencing',
    description: 'Gather your members virtually for education, networking, or governance meetings.',
    tools: ['Zoom', 'Webex', 'GoToWebinar'],
  },
];

const Integrations: React.FC = () => {
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
                Seamless Management, <span className="text-accent">Successful Events</span>
              </h1>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-up" delay={100}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
                Connect Seamless with the tools you already use to create a unified management ecosystem.
              </p>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl flex items-center justify-center gap-2">
                  Explore Integrations
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  View Documentation
                </button>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Connect with Leading Software Section */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimateWrapper animation="fade-right">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
                  Connect with Leading Software{' '}
                  <span className="text-gradient">Effortlessly</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Seamless links with top-tier software providers through powerful APIs and seamless integrations.
                </p>
                <p className="text-muted-foreground">
                  The result? A platform that combines the ease of an all-in-one solution with the flexibility to leverage the best tools for every task — giving you efficiency without compromise.
                </p>
              </div>
            </ScrollAnimateWrapper>
            
            <ScrollAnimateWrapper animation="fade-left" delay={100}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
                <video 
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="relative rounded-2xl shadow-2xl border border-border/50"
                >
                  <source src={getThemeAssetUrl("videos/product-demo.mp4")} type="video/mp4" />
                </video>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollAnimateWrapper key={stat.label} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section 
        className="py-28 md:py-36 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section6Bg})` }}
      >
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-accent/10 text-accent mb-6">
                Integration Tools
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
                Comprehensive Documentation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Everything you need to integrate, customize, and optimize your management platform.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {documentationCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <ScrollAnimateWrapper key={card.title} animation="fade-up" delay={index * 75}>
                  <div className="group p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-display text-foreground mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                    <button className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 group/link">
                      Learn More
                      <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </ScrollAnimateWrapper>
              );
            })}
          </div>

          <ScrollAnimateWrapper animation="fade-up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <button className="btn-outline">
                View Full Documentation
              </button>
              <button className="btn-cta">
                Contact Support
              </button>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                Featured Integrations
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
                Expand Your Ecosystem
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Building successful organizations requires a connected workflow where data flows freely between your favorite tools.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fade-up">
            <Accordion type="single" collapsible defaultValue="item-0" className="max-w-5xl mx-auto space-y-4">
              {integrationCategories.map((category, index) => (
                <AccordionItem 
                  key={category.title} 
                  value={`item-${index}`}
                  className="rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-border/30 px-8 data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <div className="text-left">
                      <h3 className="text-2xl font-display text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground text-sm mt-1 font-normal">{category.description}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8">
                    <div className="flex flex-wrap gap-3 pt-2">
                      {category.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-4 py-2 rounded-full bg-background border border-border/50 text-sm text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors cursor-pointer"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground mb-8">
                Ready to connect your ecosystem?
              </h2>
              
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12">
                Our integrations enable seamless data flow between platforms, eliminating manual work and ensuring your information stays synchronized across all your essential business tools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/request-demo" className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Request a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 border-2 border-white/30 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-white/10 hover:border-white/50">
                  Contact Sales
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

export default Integrations;
