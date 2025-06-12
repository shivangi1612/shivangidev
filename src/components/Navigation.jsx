import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  LayoutGrid,
  Sun,
  Moon
} from 'lucide-react';

const Navigation = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.4, 0.5, 0.6] }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: LayoutGrid, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden sm:block fixed top-4 left-1/4 -translate-x-1/2 z-50"
      >
        <div className="bg-background/80 backdrop-blur-sm border rounded-full px-8 py-4 shadow-lg ">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === item.label.toLowerCase()
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className="fixed bottom-6 right-4 z-50 p-2 rounded-full text-background shadow-lg transition-colors"
      >
        {isDark ? (
          <Sun size={26} className="text-yellow-400" />
        ) : (
          <Moon size={26} className="text-gray-400" />
        )}
      </motion.button>
    </>
  );
};

export default Navigation;
