import React, { ReactNode } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface ScrollAnimateWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
  threshold?: number;
}

const ScrollAnimateWrapper: React.FC<ScrollAnimateWrapperProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold });

  const animationClasses = {
    'fade-up': 'scroll-animate',
    'fade-left': 'scroll-animate-left',
    'fade-right': 'scroll-animate-right',
    scale: 'scroll-animate-scale',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`${animationClasses[animation]} ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimateWrapper;
