
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section 
      id="about" 
      className="section-padding bg-white relative"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="animate-on-scroll opacity-0 animate-fade-up section-title">
              About Me
            </h2>
            <p className="animate-on-scroll opacity-0 animate-fade-up delay-1 section-subtitle mb-6">
              I'm a passionate designer and developer with a keen eye for detail and a commitment to crafting beautiful, functional digital experiences.
            </p>
            <p className="animate-on-scroll opacity-0 animate-fade-up delay-2 text-muted-foreground mb-6">
              With over 5 years of experience in the industry, I've worked with clients ranging from startups to established enterprises, helping them achieve their goals through thoughtful design and clean code.
            </p>
            <p className="animate-on-scroll opacity-0 animate-fade-up delay-3 text-muted-foreground mb-6">
              My approach combines aesthetic sensibility with technical knowledge to create products that not only look good but perform exceptionally well.
            </p>
            
            <div className="animate-on-scroll opacity-0 animate-fade-up delay-4 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="animate-on-scroll opacity-0 animate-scale-in relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzM4Mjk4OQ&ixlib=rb-4.0.3&q=80&w=1080" 
                alt="Profile" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-secondary rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
