
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '@/contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const emailAddress = 'salujarohit@outlook.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center section-padding">
        <div className={`
          max-w-lg w-full rounded-lg p-8 md:p-12
          ${theme === 'light' 
            ? 'bg-gray-100/90 shadow-sm border border-gray-200/50' 
            : 'bg-[#252525]/90 border border-gray-800/50 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)]'
          } 
        `}>
          <h1 className="section-title text-center mb-6">Get in Touch</h1>
          
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-4">
              Have a question, proposal, or just want to say hello? Feel free to reach out via email.
            </p>
            <div className="font-medium text-lg">{emailAddress}</div>
          </div>
          
          <div className="flex justify-center">
            <Button 
              onClick={handleEmailClick}
              size="lg" 
              className="group"
            >
              <Mail className="mr-2 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
