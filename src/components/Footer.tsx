
import React from 'react';
import { Mail, Github, X, GraduationCap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const socialLinks = [
    { icon: Mail, href: 'mailto:salujarohit@outlook.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: X, href: 'https://x.com/imrohitsaluja', label: 'X (Twitter)' },
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=JjI4prgAAAAJ&hl=en',
      icon: GraduationCap
    },
  ];

  return (
    <footer className={`${theme === 'light' ? 'bg-[#f1f1f1]' : 'bg-[#1a1a1a]'} py-8`}>
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center mb-8">
          <div 
            className={`
              quote-box
              ${theme === 'light' 
                ? 'bg-gray-100/90 shadow-sm border border-gray-200/50' 
                : 'bg-[#252525]/90 border border-gray-800/50 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.3)]'
              } 
              px-8 py-6 rounded-lg max-w-xl text-center
            `}
          >
            <p className={`text-base md:text-lg ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} italic`}>
              "<span className="font-semibold">Any sufficiently advanced technology</span> is indistinguishable from <span className="font-semibold">Magic</span>"
              <span className={`block mt-2 text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                — Arthur C. Clarke
              </span>
            </p>
          </div>
        </div>
        
        <div className="flex justify-end items-center">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a 
              key={label}
              href={href} 
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={`${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-foreground/80 hover:text-foreground'} transition-colors ml-6`}
            >
              {Icon && <Icon size={20} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
