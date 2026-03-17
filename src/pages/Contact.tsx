import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import innerPageHeader from '@/assets/inner-page-header.png';
import section6Bg from '@/assets/section-6-bg.png';

const Contact: React.FC = () => {
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
                Let's start a <span className="text-accent">conversation.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Have questions about Seamless? We're here to help you find the right solution for your organization.
              </p>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ScrollAnimateWrapper animation="fade-up">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're exploring Seamless for the first time or have specific questions about implementation, our team is ready to help.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@seamless.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimateWrapper>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <ScrollAnimateWrapper animation="fade-up">
                  <div className="text-center py-16 bg-card rounded-3xl border border-border/50">
                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      Message sent!
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Thank you for reaching out. We'll respond within one business day.
                    </p>
                  </div>
                </ScrollAnimateWrapper>
              ) : (
                <ScrollAnimateWrapper animation="fade-up" delay={100}>
                  <div className="bg-card rounded-3xl p-8 md:p-10 shadow-lg border border-border/50">
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
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          required 
                          placeholder="john@organization.org"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization</Label>
                        <Input 
                          id="organization" 
                          placeholder="Your Association"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input 
                          id="subject" 
                          required
                          placeholder="How can we help?"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea 
                          id="message" 
                          required
                          placeholder="Tell us more about your needs..."
                          className="min-h-[150px] rounded-xl resize-none"
                        />
                      </div>
                      
                      <button 
                        type="submit"
                        className="btn-cta w-full flex items-center justify-center gap-2 group"
                      >
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </div>
                </ScrollAnimateWrapper>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
