import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const lines = [
    { prompt: '$', command: 'whoami', output: 'Shivangi Singh - Frontend Developer | CS Undergrad' },
    { prompt: '$', command: 'cat about.txt', output: `I'm currently based in Bengaluru, India where I build the web.` },
    { prompt: '$', command: 'cat interests.txt', output: `Exploring new tech, contributing to open source, writing clean code, and helping the dev community.` },
    { prompt: '$', command: 'exit', output: 'Goodbye 👋' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-accent/10 text-purple-400 font-mono rounded-lg p-6 border border-purple-700 shadow-xl max-w-2xl mx-auto"
    >
      {lines.map((line, index) => (
        <div key={index} className="mb-4">
          <div className="flex gap-2">
            <span className="text-purple-600">{line.prompt}</span>
            <span>{line.command}</span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.4 }}
            className="pl-6 mt-1 text-purple-300"
          >
            {line.output}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default About;
