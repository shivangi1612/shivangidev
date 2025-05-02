import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "The Soul Store",
    description: "Modern and sleek looking clothing store",
    image: "../assets/port5.png",
    stack: ["React", "Tailwind CSS", "Javascript", "Framer Motion"],
    demo: "https://thesoulstore.netlify.app/",
    source: "https://github.com/shivangi1612/the-soul-store"
  },
  {
    title: "Pixel Block Game",
    description: "A fully functional pixel word game.",
    image: "../assets/port2.png",
    stack: ["React", "Tailwind CSS", "Javascript"],
    demo: "https://pixiblock.netlify.app/",
    source: "https://github.com/shivangi1612/pixel-game"
  },
  {
    title: "Pixel Wisdom",
    description: "Retro styled blog website.",
    image: "../assets/port4.png",
    stack: ["Nextjs", "Tailwind CSS", "Javascript"],
    demo: "https://pixelwisdom.netlify.app/",
    source: "https://github.com/shivangi1612/pixel-blog-website"
  }
];

const ProjectCard = ({ project }) => {
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.03 },
  };

  return (
    <motion.div
      className="mb-8 overflow-hidden rounded-xl bg-accent/10 transition-all duration-300 group"
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="overflow"
      >
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.demo}
            className="flex items-center gap-2 text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            View Demo
          </a>
          <a
            href={project.source}
            className="flex items-center gap-2 text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;