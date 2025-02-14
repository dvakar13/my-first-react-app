// components/Header/Header.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/React-icon.svg.png';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href) => {
    // Close mobile menu
    setIsOpen(false);
    
    // Scroll to section
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.header 
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('#home')}
            className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <img src={logo} alt="Logo" style={{ height: '50px', width: 'auto' }} />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.slice(1).map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden mt-4 space-y-4"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}