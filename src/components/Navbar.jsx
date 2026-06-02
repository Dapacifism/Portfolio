import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FolderGit2, Briefcase, Mail, Cpu } from 'lucide-react';

const GithubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Console', href: '#terminal', icon: <Terminal className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <FolderGit2 className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#030305]/80 backdrop-blur-md border-b border-[#1E293B]/70 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo / Console Prompt */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#06B6D4]" />
            <a href="#" className="font-mono font-bold text-lg tracking-wider text-[#F8FAFC] hover:text-[#06B6D4] transition-colors duration-200">
              <span className="text-[#06B6D4]">E:\</span>AMBIDA_
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 font-mono text-sm font-medium text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200 cursor-pointer"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4 border-l border-[#1E293B] pl-6">
            <a 
              href="https://github.com/Dapacifism" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200 cursor-pointer"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/earl-lawrence-ambida-b823043a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#94A3B8] hover:text-[#06B6D4] hover:bg-[#0B0F19] focus:outline-none transition-colors duration-200 cursor-pointer"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-[#0A0D16] border-b border-[#1E293B]/70 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-md font-mono text-base font-medium text-[#94A3B8] hover:text-[#06B6D4] hover:bg-[#0F172A] transition-colors duration-200 cursor-pointer"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 px-3 py-3 border-t border-[#1E293B] mt-2">
            <a 
              href="https://github.com/Dapacifism" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/earl-lawrence-ambida-b823043a7/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#94A3B8] hover:text-[#06B6D4] transition-colors duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
