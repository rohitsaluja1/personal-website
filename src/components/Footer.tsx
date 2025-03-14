
import React from 'react';
import { Mail, Github, X } from 'lucide-react';
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
      customIcon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
            fillOpacity="0"
          />
          <path
            d="M12.3,10.2c-1.3,0-2.3,0.9-2.3,2.1c0,1.2,1,2.1,2.3,2.1c1.3,0,2.3-0.9,2.3-2.1C14.6,11.1,13.6,10.2,12.3,10.2z M12.3,13.3c-0.6,0-1-0.4-1-0.9c0-0.6,0.4-0.9,1-0.9c0.6,0,1,0.4,1,0.9C13.3,12.9,12.9,13.3,12.3,13.3z"
            fill="currentColor"
          />
          <path
            d="M12.3,7C9.7,7,7.5,9.1,7.5,11.7c0,2.6,2.2,4.7,4.8,4.7s4.8-2.1,4.8-4.7C17.1,9.1,14.9,7,12.3,7z M12.3,15.1c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4C15.7,13.6,14.2,15.1,12.3,15.1z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className={`${theme === 'light' ? 'bg-[#f1f1f1]' : 'bg-[#1a1a1a]'} py-6`}>
      <div className="container max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-b border-gray-700/30 pb-4 mb-4">
          <p className={`text-sm md:text-base ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} italic text-center font-medium`}>
            "Any sufficiently advanced technology is indistinguishable from Magic"
          </p>
        </div>
        <div className="flex justify-end items-center">
          {socialLinks.map(({ icon: Icon, href, label, customIcon }) => (
            <a 
              key={label}
              href={href} 
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={`${theme === 'light' ? 'text-gray-700 hover:text-gray-900' : 'text-foreground/80 hover:text-foreground'} transition-colors ml-6`}
            >
              {customIcon || (Icon && <Icon size={20} />)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
