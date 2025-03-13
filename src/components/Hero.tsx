
import React, { useEffect, useRef } from 'react';
import Button from './shared/Button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/30 pointer-events-none" />
      
      <div className="container px-6 py-32 md:py-48 relative z-10 opacity-0 transition-opacity duration-1000">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-secondary text-sm font-medium animate-fade-up opacity-0 delay-1">
            <span>UI Designer & Frontend Developer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-up opacity-0 delay-2">
            Creating exceptional digital experiences
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up opacity-0 delay-3">
            I craft clean, functional interfaces and engaging user experiences that help brands connect with their audience.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up opacity-0 delay-4">
            <Button variant="primary" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-fade-in opacity-0 delay-5">
          <a 
            href="#about" 
            className="flex flex-col items-center text-sm"
            aria-label="Scroll to About section"
          >
            <span className="mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-pulse-soft" />
          </a>
        </div>
      </div>
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
    </section>
  );
};

export default Hero;
