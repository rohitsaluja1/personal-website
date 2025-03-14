
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
    <footer className={`${theme === 'light' ? 'bg-[#f1f1f1]' : 'bg-[#1a1a1a]'} py-6`}>
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-b border-gray-700/20 pb-4 mb-4">
          <p className={`text-xs italic text-center ${theme === 'light' ? 'text-gray-500' : 'text-gray-600'}`}>
            "Any sufficiently advanced technology is indistinguishable from Magic"
          </p>
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
