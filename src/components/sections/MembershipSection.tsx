import React from 'react';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import section5Bg from '@/assets/section-5-bg.png';
import softwareScreenshot from '@/assets/software-screenshot.png';

const MembershipSection: React.FC = () => {
  return (
    <section
      className="section-gradient bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${section5Bg})` }}
    >
      {/* Top Content */}
      <div className="container mx-auto px-6 pt-[140px] pb-7 flex-shrink-0">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollAnimateWrapper animation="fade-up">
            <h2 className="heading-section text-primary-foreground mb-6">
              Membership, without friction.
            </h2>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fade-up" delay={150}>
            <p className="text-body text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              A unified system that removes barriers across the entire<br />
              member lifecycle, from backend to frontend.
            </p>
          </ScrollAnimateWrapper>

          <ScrollAnimateWrapper animation="fade-up" delay={300}>
            <button className="btn-cta">
              Explore More
            </button>
          </ScrollAnimateWrapper>
        </div>
      </div>

      {/* Screenshot aligned to bottom */}
      <div className="flex-1 flex items-end justify-center mt-auto pt-[140px]">
        <ScrollAnimateWrapper animation="scale" delay={450} className="w-full max-w-5xl mx-auto px-6">
          <div className="relative">
            <img
              src={softwareScreenshot}
              alt="Seamless Dashboard"
              className="w-full h-auto rounded-t-xl shadow-2xl"
              loading="lazy"
            />
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-2xl -z-10" />
          </div>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};

export default MembershipSection;
