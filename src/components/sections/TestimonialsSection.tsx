import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import sectionBg from '@/assets/section-6-bg.png';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "This platform has completely transformed how we manage our association. The seamless integration and intuitive design have saved us countless hours.",
    author: "Sarah Mitchell",
    title: "Executive Director",
    company: "National Healthcare Association",
    rating: 5
  },
  {
    quote: "Finally, an AMS that adapts to our needs instead of forcing us to adapt to it. The unified approach has streamlined our entire operation.",
    author: "Michael Chen",
    title: "Operations Manager",
    company: "Tech Professionals Guild",
    rating: 5
  },
  {
    quote: "The support team is incredible, and the platform itself is a game-changer. We've seen a 40% increase in member engagement since switching.",
    author: "Emily Rodriguez",
    title: "Membership Director",
    company: "Creative Industries Alliance",
    rating: 5
  },
  {
    quote: "After years of struggling with outdated systems, this modern solution has reinvigorated our team and delighted our members.",
    author: "David Thompson",
    title: "CEO",
    company: "Professional Engineers Society",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setDirection(index > currentIndex ? 'right' : 'left');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToPrev = () => {
    if (!isAnimating) {
      setDirection('left');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const goToNext = () => {
    if (!isAnimating) {
      setDirection('right');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sectionBg})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See why leading associations trust us to power their member experience
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-10 h-10 rounded-full bg-background shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-muted transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Card */}
            <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl shadow-xl border border-border/50 p-6 md:p-10">
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 md:left-10">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/30">
                  <Quote className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div 
                className={`transition-all duration-300 ease-out ${
                  isAnimating 
                    ? direction === 'right'
                      ? 'opacity-0 -translate-x-8'
                      : 'opacity-0 translate-x-8'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4 pt-3">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6 font-medium">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {currentTestimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full border-2 border-background" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">
                      {currentTestimonial.author}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {currentTestimonial.title}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-accent w-10' 
                    : 'bg-foreground/20 hover:bg-foreground/40 w-2'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
