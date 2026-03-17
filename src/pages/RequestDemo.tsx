import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle } from 'lucide-react';
import innerPageHeader from '@/assets/inner-page-header.png';

const RequestDemo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                See Seamless <span className="text-accent">in action.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Schedule a personalized demo and discover how Seamless can transform your member experience.
              </p>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <ScrollAnimateWrapper animation="fade-up">
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    Thank you for your interest!
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We've received your request and will be in touch within one business day to schedule your demo.
                  </p>
                </div>
              </ScrollAnimateWrapper>
            ) : (
              <ScrollAnimateWrapper animation="fade-up">
                <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border/50">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
                    Request your demo
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll reach out to schedule a time that works for you.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input 
                          id="firstName" 
                          required 
                          placeholder="John"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          required 
                          placeholder="Smith"
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="john@organization.org"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input 
                        id="organization" 
                        required 
                        placeholder="Your Association"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="title">Job Title</Label>
                      <Input 
                        id="title" 
                        placeholder="Executive Director"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">What would you like to see in the demo?</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your current challenges or specific features you'd like to explore..."
                        className="min-h-[120px] rounded-xl resize-none"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="btn-cta w-full flex items-center justify-center gap-2 group"
                    >
                      Request Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </ScrollAnimateWrapper>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDemo;
