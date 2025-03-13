
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add visible class to elements when they enter the viewport
    const addVisible = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        if (element.classList.contains('visible')) return;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initial check
    addVisible();
    
    // Add scroll event listener
    window.addEventListener('scroll', addVisible);
    
    return () => {
      window.removeEventListener('scroll', addVisible);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
