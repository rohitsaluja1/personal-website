
import React, { useEffect, useRef } from 'react';
import Button from './shared/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
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
      id="contact" 
      className="section-padding bg-white relative"
      ref={sectionRef}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="animate-on-scroll opacity-0 animate-fade-up section-title">
              Get In Touch
            </h2>
            <p className="animate-on-scroll opacity-0 animate-fade-up delay-1 section-subtitle mb-8">
              Have a project in mind or want to explore collaboration opportunities? I'd love to hear from you.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="animate-on-scroll opacity-0 animate-fade-up delay-2 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 animate-fade-up delay-3 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Phone</h3>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 animate-fade-up delay-4 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Location</h3>
                  <p className="font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 animate-scale-in delay-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="input-field"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input-field !h-auto resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
