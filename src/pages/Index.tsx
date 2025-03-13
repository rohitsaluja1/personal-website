
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BlogHome from '@/components/BlogHome';
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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <BlogHome />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
