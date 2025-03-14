
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { Toggle } from '@/components/ui/toggle';

// Define an interface for the navigation links
interface NavLink {
  name: string;
  href: string;
  external?: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks: NavLink[] = [
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'py-3 backdrop-blur-lg bg-background/90 shadow-sm border-b border-border/50' : 'py-4 bg-transparent'
    )}>
      <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
        <a href="#home" className="text-xl font-semibold tracking-tight flex items-center gap-2">
          Rohit Saluja
          <Toggle 
            onClick={toggleTheme} 
            className="ml-2 p-0 h-auto data-[state=on]:bg-transparent" 
            size="sm"
            pressed={theme === 'light'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} className="text-yellow-400" /> : <Sun size={18} className="text-yellow-400" />}
          </Toggle>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="nav-item text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
