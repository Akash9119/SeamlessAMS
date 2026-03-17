import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FrustrationSection from '@/components/sections/FrustrationSection';
import BetterWaySection from '@/components/sections/BetterWaySection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import MembershipSection from '@/components/sections/MembershipSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FrustrationSection />
        <BetterWaySection />
        <FeaturesSection />
        <MembershipSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
