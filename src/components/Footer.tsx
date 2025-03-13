
import React from 'react';
import { Mail, Github, Twitter, CircleUser } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: 'mailto:salujarohit@outlook.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://x.com/imrohitsaluja', label: 'X (Twitter)' },
    { icon: CircleUser, href: 'https://scholar.google.com/citations?user=JjI4prgAAAAJ&hl=en', label: 'Google Scholar' }
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
