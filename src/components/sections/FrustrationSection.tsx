import React from 'react';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import section2Bg from '@/assets/section-2-bg.png';

const FrustrationSection: React.FC = () => {
  return (
    <section 
      className="section-white bg-cover bg-right md:bg-left bg-no-repeat"
      style={{ backgroundImage: `url(${section2Bg})` }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-end min-h-[80vh]">
          {/* Content - positioned on the right */}
          <div className="text-center lg:text-left max-w-xl lg:ml-auto">
            <ScrollAnimateWrapper animation="fade-right" delay={100}>
              <h2 className="heading-section text-foreground mb-6">
                The <span className="text-primary">frustration</span><br />
                is definitely <span className="text-primary">real!</span>
              </h2>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-right" delay={200}>
              <p className="text-body text-muted-foreground mb-6">
                Most AMS platforms ask you to choose.<br />
                Powerful backend or a modern website.<br />
                Membership or events. Structure or flexibility.
              </p>
            </ScrollAnimateWrapper>

            <ScrollAnimateWrapper animation="fade-right" delay={300}>
              <p className="text-body text-foreground font-medium">
                That tension shows up everywhere — in your tools,<br />
                your workflows, and your member experience.
              </p>
            </ScrollAnimateWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrustrationSection;
