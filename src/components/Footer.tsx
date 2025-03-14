
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
    <footer className="bg-[#111111] py-6">
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-center">
          <p className="text-gray-400 italic text-sm">
            "Any sufficiently advanced technology is indistinguishable from Magic"
          </p>
        </div>
        
        <div className="hidden">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a 
              key={label}
              href={href} 
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="transition-colors ml-6"
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
