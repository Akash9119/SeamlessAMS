import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollAnimateWrapper from "@/components/ScrollAnimateWrapper";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Users, Calendar, GraduationCap, Globe, BarChart3, HeadphonesIcon, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import innerPageHeader from "@/assets/inner-page-header.png";
import section6Bg from "@/assets/section-6-bg.png";

const pricingTiers = [
  { revenue: "Under $250K", price: "$750" },
  { revenue: "$250K – $500K", price: "$950" },
  { revenue: "$500K – $1M", price: "$1,250" },
  { revenue: "$1M – $2M", price: "$1,650" },
  { revenue: "$2M – $3.5M", price: "$2,250" },
  { revenue: "$3.5M – $5M", price: "$2,950" },
  { revenue: "$5M – $7.5M", price: "$3,650" },
  { revenue: "$7.5M+", price: "Custom" },
];

const includedFeatures = [
  { title: "Membership lifecycle management", icon: Users, description: "From onboarding to renewal" },
  { title: "Member-aware events & registrations", icon: Calendar, description: "Pricing that recognizes members" },
  { title: "Learning, CEUs & credentials", icon: GraduationCap, description: "Professional development built-in" },
  { title: "Website integrations", icon: Globe, description: "WordPress, Wix, Webflow" },
  { title: "Reporting, APIs & Single Sign-On", icon: BarChart3, description: "Connect and analyze everything" },
  { title: "Ongoing updates & support", icon: HeadphonesIcon, description: "We're with you for the long haul" },
];

const implementationTiers = [
  { name: "Core Implementation", price: "$7,500" },
  { name: "Advanced Migration & Integrations", price: "$12,000–$18,000" },
  { name: "Enterprise / Multi-System", price: "$20,000+" },
];

const faqs = [
  {
    question: "Why is pricing based on annual revenue?",
    answer:
      "Annual organizational revenue is a transparent, publicly available metric that reflects the true scale and complexity of your operations. It ensures pricing is fair and proportional — without arbitrary feature gates or usage limits.",
  },
  {
    question: "Do features change by pricing tier?",
    answer:
      "No. Every Seamless subscription includes the full platform. There are no modules to unlock, no premium tiers, and no feature negotiations. You get everything from day one.",
  },
  {
    question: "What happens if our revenue changes?",
    answer:
      "Pricing adjusts at renewal to reflect your organization's growth. There are no mid-term disruptions, surprise fees, or forced migrations. Seamless scales with you.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "Seamless subscriptions are billed annually. We believe in earning your trust year over year through transparency, reliability, and ongoing value — not lock-in.",
  },
  {
    question: "Does Seamless support modern websites?",
    answer:
      "Yes. Seamless integrates directly with WordPress, Wix, and Webflow, allowing you to maintain a modern web presence while running your membership operations from a unified backend.",
  },
  {
    question: "What support is included?",
    answer:
      "Professional onboarding and ongoing support are included at every subscription level. Our team is committed to helping you succeed — not upselling you on support packages.",
  },
];

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState(3); // Default to $1M-$2M tier
  const currentTier = pricingTiers[selectedTier];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${innerPageHeader})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollAnimateWrapper animation="fade-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-6 tracking-tight">
                Transparent pricing, designed to <span className="text-accent">scale with you.</span>
              </h1>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-up" delay={100}>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">
                Seamless pricing is based on annual organizational revenue — a
                clear, public indicator of scale.
              </p>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-up" delay={150}>
              <div className="flex justify-center">
                <Link to="/request-demo" className="btn-cta">
                  Request a Demo
                </Link>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Seamless Platform Subscription
              </h2>
              <p className="text-xl text-muted-foreground">
                Billed annually. Full platform included at every level.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fade-up" delay={100}>
            <div className="max-w-2xl mx-auto">
              {/* Price Display */}
              <div className="text-center mb-12">
                <div className="text-6xl md:text-7xl font-display font-bold text-primary mb-2">
                  {currentTier.price}
                  {currentTier.price !== "Custom" && (
                    <span className="text-2xl font-normal text-muted-foreground ml-2">
                      / month
                    </span>
                  )}
                </div>
                <div className="text-xl text-foreground">
                  {currentTier.revenue} annual revenue
                </div>
              </div>

              {/* Slider */}
              <div className="px-4 mb-8">
                <Slider
                  value={[selectedTier]}
                  onValueChange={(value) => setSelectedTier(value[0])}
                  max={pricingTiers.length - 1}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-4 text-sm text-muted-foreground">
                  <span>Under $250K</span>
                  <span>$7.5M+</span>
                </div>
              </div>

              {/* Tier indicators */}
              <div className="flex justify-center gap-2 mb-12">
                {pricingTiers.map((tier, index) => (
                  <button
                    key={tier.revenue}
                    onClick={() => setSelectedTier(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      selectedTier === index 
                        ? 'bg-primary scale-125' 
                        : 'bg-border hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Select ${tier.revenue} tier`}
                  />
                ))}
              </div>

              <div className="text-center">
                <Link to="/request-demo" className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:bg-primary/90 hover:shadow-xl flex items-center justify-center gap-2 mx-auto">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-sm text-muted-foreground mt-4">
                  or{" "}
                  <a href="#" className="text-primary hover:underline">
                    Talk with Our Team
                  </a>
                </p>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* What's Included Section */}
      <section 
        className="py-24 md:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${section6Bg})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                What every Seamless subscription includes
              </h2>
              <p className="text-lg text-muted-foreground">
                Full platform access at every tier
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {includedFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <ScrollAnimateWrapper
                    key={feature.title}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <div className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollAnimateWrapper>
                );
              })}
            </div>

            <ScrollAnimateWrapper animation="fade-up" delay={600}>
              <div className="text-center">
                <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-background border border-border/50">
                  <span className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    No modules
                  </span>
                  <span className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    No feature gates
                  </span>
                  <span className="flex items-center gap-2 text-foreground">
                    <Check className="w-5 h-5 text-primary" />
                    No surprises
                  </span>
                </div>
              </div>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Implementation & Onboarding
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Onboarding is a structured implementation process designed to unify data, workflows, and digital experiences — not a quick setup.
                </p>
              </div>

              <div className="space-y-1 mb-8">
                {implementationTiers.map((tier, index) => (
                  <ScrollAnimateWrapper
                    key={tier.name}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <div className="flex items-center justify-between py-5 px-6 border-b border-border/50">
                      <span className="text-lg text-foreground">
                        {tier.name}
                      </span>
                      <span className="text-xl font-display font-bold text-primary">
                        {tier.price}
                      </span>
                    </div>
                  </ScrollAnimateWrapper>
                ))}
              </div>

              <ScrollAnimateWrapper animation="fade-up" delay={300}>
                <p className="text-center text-muted-foreground text-lg">
                  We don't rush onboarding. We get it right.
                </p>
              </ScrollAnimateWrapper>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-display text-foreground leading-relaxed mb-8">
                "Moving to Seamless gave us clarity we didn't know we were
                missing. Our team spends less time managing systems and more
                time serving members."
              </blockquote>
              <p className="text-muted-foreground">
                — Operations Director, Professional Association
              </p>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollAnimateWrapper>

          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <ScrollAnimateWrapper
                  key={faq.question}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30"
                  >
                    <AccordionTrigger className="py-6 text-left text-lg font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </ScrollAnimateWrapper>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
                Built for organizations that plan to grow.
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Seamless is designed to support membership organizations over
                time — without forcing replatforming or renegotiation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/request-demo" className="group px-8 py-4 bg-white text-primary rounded-full font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-xl flex items-center justify-center gap-2">
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="px-8 py-4 border border-white/30 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/50">
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

export default Pricing;
