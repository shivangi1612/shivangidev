import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const sections = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < sections.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setIsComplete(true);
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, sections.length, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black text-green-400 font-mono flex items-center justify-center p-4 z-50"
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg p-4 sm:p-6 rounded-lg bg-zinc-900 border border-primary shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <p className="ml-4 text-xs sm:text-sm text-zinc-400">Portfolio.jsx</p>
        </div>

        {/* Terminal Body */}
        <div className="text-xs sm:text-sm space-y-1 leading-relaxed">
          {sections.map((section, index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, x: -10 }}
              animate={index <= currentIndex ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              {index <= currentIndex && (
                <>
                  <span className="text-accent">$</span>{' '}
                  <span>Loading </span>
                  <span className="text-white">{section}</span>
                  <span className="text-accent">...</span>
                  {index < currentIndex && (
                    <span className="text-green-500 ml-2">Done!</span>
                  )}
                </>
              )}
            </motion.div>
          ))}
          {!isComplete && (
            <div className="animate-pulse text-accent text-xs sm:text-sm">
              $ <span className="animate-blink">|</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
