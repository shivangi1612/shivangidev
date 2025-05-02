import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Joblient (EdTech Startup)',
    duration: 'February 2025 - Present',
    description: 'Worked on building and scaling frontend modules using React and deployment using AWS.',
    responsibilities: [
      'Led front-end development for user interfaces using React.',
      'Managed cloud infrastructure and deployments on AWS.'
    ],
    skills: ['React', 'Javascript', 'SCSS', 'AWS', 'Git', 'Docker', 'Postman']
  },
];

const lineVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const Experience = () => {
  const firstCircleRef = useRef(null);
  const lastCardRef = useRef(null);
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true }); // Trigger animation once

  useEffect(() => {
    if (firstCircleRef.current && lastCardRef.current && lineRef.current) {
      const firstCircleTop = firstCircleRef.current.offsetTop + firstCircleRef.current.offsetHeight / 2;
      const lastCardBottom = lastCardRef.current.offsetTop + lastCardRef.current.offsetHeight;

      lineRef.current.style.top = `${firstCircleTop}px`;
      lineRef.current.style.height = `${lastCardBottom - firstCircleTop}px`;
      lineRef.current.style.bottom = 'auto';
    }
  }, [experiences, isInView]); // Re-calculate if the view changes (though 'once' should prevent this after initial load)

  return (
    <div className="relative py-12">
      <motion.div
       ref={lineRef}
       className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300 z-0"
       variants={lineVariants}
       initial="initial"
       animate={isInView ? 'animate' : 'initial'}
    />
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="mb-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.3 }}
        >
          {/* Timeline circle */}
          <motion.div
            ref={index === 0 ? firstCircleRef : null}
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mb-4 z-20 shadow-lg"
            style={{ zIndex: 20 }}
          >
            <span className="text-lg font-semibold">{index + 1}</span>
          </motion.div>

          {/* Experience card */}
          <div
            ref={index === experiences.length - 1 ? lastCardRef : null}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full z-20 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
          >
            <h4 className="text-xl font-semibold text-primary">{exp.title}</h4>
            <p className="text-muted-foreground mb-2 text-sm">{exp.company}</p>
            <p className="text-sm text-muted-foreground">{exp.duration}</p>
            <p className="mt-2 text-muted-foreground text-sm">{exp.description}</p>

            <ul className="mt-4 list-disc pl-6 space-y-2">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="text-muted-foreground text-sm">{task}</li>
              ))}
            </ul>
            {exp.skills && exp.skills.length > 0 && (
             <div className="mt-4 flex flex-wrap gap-2">
               {exp.skills.map((skill, idx) => (
                <span
                 key={idx}
                 className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                 {skill}
                </span>
              ))}
             </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;