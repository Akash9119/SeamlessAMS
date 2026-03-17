import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getThemeAssetUrl } from '@/lib/themeAsset';

interface SlideContent {
  word: string;
  pronunciation: string;
  definition: string;
}

const slides: SlideContent[] = [
  {
    word: 'Seamless',
    pronunciation: "[seem-lis] / 'sēm lis /",
    definition: 'Smoothly continuous or uniform in quality; combined in an inconspicuous way.',
  },
  {
    word: 'Unified',
    pronunciation: "[yoo-nuh-fahyd] / 'yü nə fīd /",
    definition: 'Made or joined into a single entity; brought together as one cohesive whole.',
  },
  {
    word: 'Adaptive',
    pronunciation: "[uh-dap-tiv] / ə 'dap tiv /",
    definition: 'Able to adjust to new conditions; designed to respond to changing requirements.',
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="section-hero">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={getThemeAssetUrl("videos/hero-bg.mov")} type="video/quicktime" />
      </video>

      {/* Overlay */}
      <div className="video-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Animated content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <h1 className="heading-hero text-primary-foreground mb-4">
            {slide.word}
          </h1>
          
          <p className="text-primary-foreground/80 text-lg md:text-xl font-body italic mb-2">
            {slide.pronunciation}
          </p>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-primary-foreground mb-6 leading-tight">
            {slide.definition}
          </h2>
        </div>
        
        <div className="w-24 h-px bg-primary-foreground/40 mx-auto mb-6" />
        
        {/* Constant tagline */}
        <p className="text-body text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          A modern, unified AMS Platform built for now and what's to come.
        </p>
        
        <Link to="/request-demo" className="btn-cta">
          Request a Demo
        </Link>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary-foreground w-6'
                  : 'bg-primary-foreground/40 hover:bg-primary-foreground/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
