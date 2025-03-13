
import React from 'react';
import { Mail, Github, Twitter, CircleUser } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: CircleUser, href: 'https://google.com', label: 'Google' }
  ];

  return (
    <footer className="bg-[#1a1a1a] text-foreground py-4">
      <div className="container flex justify-end items-center max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a 
              key={label}
              href={href} 
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
