import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGit, FaDocker, FaAws, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiMysql, DiHtml5, DiCss3,  } from 'react-icons/di';
import { SiRedux, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiPython, SiSass, SiFramer} from 'react-icons/si';

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={30} /> },
  { name: "React", icon: <FaReact size={30} /> },
  { name: "Nextjs", icon: <SiNextdotjs size={30} /> },
  { name: "MongoDB", icon: <DiMongodb size={30} /> },
  { name: "MySQL", icon: <DiMysql size={30} /> },
  { name: "Python", icon: <SiPython size={30} /> },
  { name: "HTML5", icon: <DiHtml5 size={30} /> },
  { name: "CSS3", icon: <DiCss3 size={30} /> },
  { name: "SCSS", icon: <SiSass size={30} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={30} /> },
  { name: "Framer Motion", icon: <SiFramer size={30} /> },
  { name: "Git", icon: <FaGit size={30} /> },
  { name: "Github", icon: <FaGithub size={30} /> },
  { name: "Docker", icon: <FaDocker size={30} /> },
  { name: "AWS", icon: <FaAws size={30} /> },
  { name: "Redux", icon: <SiRedux size={30} /> },
  { name: "TypeScript", icon: <SiTypescript size={30} /> },
];

const Skills = () => {
  return (
    <div className="relative h-40 overflow-hidden">
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute flex gap-8 whitespace-nowrap"
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-6 py-3 bg-accent/10 rounded-lg min-w-[120px]"
          >
            <span className="text-lg font-medium">{skill.name}</span>
            <div className="mt-2">{skill.icon}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
