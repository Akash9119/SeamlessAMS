import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimateWrapper from '@/components/ScrollAnimateWrapper';
import section4Bg from '@/assets/section-4-bg.png';
import { Plus } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 'seamless',
    title: 'Seamless',
    subtitle: 'Continuity across the entire member journey.',
    description:
      'Membership should feel continuous — not transactional. Seamless removes friction across the entire member journey, from joining and renewal to events, learning, and ongoing engagement. Every interaction feels connected, consistent, and intentional. Members do not experience systems. They experience continuity.',
  },
  {
    id: 'unified',
    title: 'Unified',
    subtitle: 'One source of truth powering every experience.',
    description:
      'A single platform that connects your website, member portal, events, learning, and backend operations. No more juggling multiple systems or syncing data between disconnected tools.',
  },
  {
    id: 'adaptive',
    title: 'Adaptive',
    subtitle: 'Designed to evolve without disruption.',
    description:
      'Your organization will change. Your platform should change with you. Adaptive architecture means you can grow, pivot, and innovate without costly migrations or platform overhauls.',
  },
];

const FeaturesSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('seamless');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section
      className="section-light bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${section4Bg})` }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <ScrollAnimateWrapper
              key={feature.id}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="border-b border-foreground/10 py-6">
                <button
                  onClick={() => toggleExpand(feature.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-xl text-foreground">
                      {feature.title}
                    </span>
                    <span className="text-muted-foreground">|</span>
                    <span className="text-body text-muted-foreground">
                      {feature.subtitle}
                    </span>
                  </div>
                  <Plus
                    className={`w-6 h-6 text-secondary transition-transform duration-300 ${
                      expandedId === feature.id ? 'rotate-45' : ''
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    expandedId === feature.id
                      ? 'max-h-96 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-body text-muted-foreground pl-0 md:pl-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollAnimateWrapper>
          ))}

          <ScrollAnimateWrapper animation="fade-up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link to="/request-demo" className="btn-outline">
                Request a Demo
              </Link>
              <Link to="/features" className="btn-cta">
                Explore Features
              </Link>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
