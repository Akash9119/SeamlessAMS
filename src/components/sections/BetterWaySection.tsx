import React from 'react';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import section3Bg from '@/assets/section-3-bg.png';

const BetterWaySection: React.FC = () => {
  return (
    <section
      className="section-purple bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${section3Bg})` }}
    >
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <ScrollAnimateWrapper animation="scale">
          <h2 className="heading-section text-primary-foreground mb-6 leading-tight">
            There Has to<br />
            Be a Better Way.
          </h2>
        </ScrollAnimateWrapper>

        <ScrollAnimateWrapper animation="fade-up" delay={150}>
          <p className="text-body text-primary-foreground/80 mb-4 max-w-xl mx-auto">
            Membership, engagement, and design shouldn't<br />
            compete. They should work together.
          </p>
        </ScrollAnimateWrapper>

        <ScrollAnimateWrapper animation="fade-up" delay={300}>
          <p className="text-lg md:text-xl font-display text-primary-foreground">
            Quietly. Continuously. Seamless.
          </p>
        </ScrollAnimateWrapper>
      </div>
    </section>
  );
};

export default BetterWaySection;
