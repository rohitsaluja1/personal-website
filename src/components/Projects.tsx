
import React, { useEffect, useRef, useState } from 'react';
import Button from './shared/Button';
import { ArrowUpRight } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Modern E-commerce Platform',
    description: 'A responsive e-commerce solution with seamless checkout experience and intuitive product filtering.',
    tags: ['UI/UX', 'React', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzM4Mjk4OQ&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Interactive dashboard for visualizing complex financial data with real-time updates and customizable views.',
    tags: ['Dashboard', 'Data Visualization', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzM4Mjk4OQ&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Health & Fitness App',
    description: 'Mobile application for tracking workouts, nutrition, and personal health metrics with a focus on user experience.',
    tags: ['Mobile', 'React Native', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NzM4Mjk4OQ&ixlib=rb-4.0.3&q=80&w=1080',
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
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
      id="projects" 
      className="section-padding bg-secondary/50 relative"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 animate-fade-up section-title">
            Selected Projects
          </h2>
          <p className="animate-on-scroll opacity-0 animate-fade-up delay-1 section-subtitle mx-auto">
            Explore a collection of my recent work showcasing my design and development capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`animate-on-scroll opacity-0 animate-scale-in delay-${index + 1} group`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="bg-white h-full rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-secondary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="ghost" 
                      className="group/button p-0 h-auto font-medium flex items-center gap-1 text-primary"
                    >
                      View Project 
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="animate-on-scroll opacity-0 animate-fade-up delay-5 text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
