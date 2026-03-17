import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import innerPageHeader from '@/assets/inner-page-header.png';
import section6Bg from '@/assets/section-6-bg.png';

const faqData = [
  {
    question: "Who is Seamless built for?",
    answer: "Seamless is built for associations, nonprofits, and member-driven organizations that have outgrown disconnected tools and rigid systems. It's designed for organizations that value long-term member relationships, operational clarity, and the freedom to evolve without disruption."
  },
  {
    question: "How is Seamless different from other AMS platforms?",
    answer: "Most AMS platforms force trade-offs: a powerful backend paired with a rigid website, or a flexible website layered on top of fragmented data. Seamless is built on a different assumption — membership, engagement, and design should work together quietly and continuously, not compete."
  },
  {
    question: "Is Seamless membership-first or event-focused?",
    answer: "Seamless is membership-first by design. Events, learning, certifications, and commerce are fully supported, but they're built on top of a unified member lifecycle. Members don't experience systems — they experience continuity."
  },
  {
    question: 'What does "Unified" actually mean?',
    answer: "Unified means one system, one database, and one source of truth. Membership data, pricing, permissions, events, learning, and credentials are managed once and reflected everywhere — across your backend and your website — without syncing issues or duplication."
  },
  {
    question: "Can Seamless work with our existing website?",
    answer: "Yes. Seamless integrates cleanly with modern websites and can also power fully unified digital experiences. Your backend remains stable while your website evolves — no forced redesigns or replatforming required."
  },
  {
    question: "Is Seamless customizable?",
    answer: "Seamless is configurable without being brittle. You can adapt membership models, workflows, pricing, and engagement experiences without custom development that creates long-term technical debt."
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is based on your organization's annual revenue, allowing costs to scale fairly as you grow. All subscriptions include the full platform — no feature gating or surprise add-ons."
  },
  {
    question: "Why is onboarding required?",
    answer: "Onboarding ensures Seamless is implemented correctly from day one. We help unify data, configure membership models, align workflows, and set your organization up for long-term success — not just launch day."
  },
  {
    question: "How long does implementation take?",
    answer: "Most organizations complete implementation within 8–12 weeks, depending on complexity, data migration needs, and organizational readiness."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All customers receive U.S.-based support, individualized onboarding, and ongoing assistance from people who understand associations. Support is treated as a partnership, not a ticket queue."
  },
  {
    question: "Is Seamless secure?",
    answer: "Yes. Seamless follows modern security best practices to protect member data and organizational systems. Security, reliability, and data integrity are foundational to the platform."
  },
  {
    question: "What happens as our organization evolves?",
    answer: "Seamless is designed to adapt as your organization grows. New programs, revenue models, and digital experiences can be added without forced migrations, redesigns, or system replacements."
  },
  {
    question: "What's the best next step?",
    answer: "The best next step is a conversation. We'll talk through where your organization is today, where it's headed, and whether Seamless is the right fit."
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${innerPageHeader})` }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6">
                Understanding Seamless <span className="text-accent">starts here.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
                Clear answers to common questions about Seamless, our approach, and how we support modern associations.
              </p>
              <Link to="/request-demo" className="btn-cta">
                Request a Demo
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-20 md:py-28 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section6Bg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <ScrollAnimateWrapper animation="fade-up">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 px-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're here to help. Let's start a conversation about your organization's needs.
              </p>
              <button className="btn-cta">
                Contact Us
              </button>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
