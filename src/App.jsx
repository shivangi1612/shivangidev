import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Download } from 'lucide-react';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import Navigation from './components/Navigation';
import AboutSection from './components/About';
import SkillsGallery from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { LoadingScreen } from './components/Loading';
import BackgroundEffects from './components/BackgroundEffects';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-background text-foreground relative"
          >

            <main className="container mx-auto px-16 pt-20 relative z-50">
            <BackgroundEffects />  
            <Navigation isDark={isDark} toggleTheme={toggleTheme} />
              {/* Hero Section */}
              <section id="home" className="min-h-[calc(100vh-6rem)] flex items-center relative">
                <div className="w-full grid md:grid-cols-2 gap-8 items-center relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-20"
                  >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Hi, I'm{' '}
                   <TypeAnimation
                    sequence={[
                   'Shivangi Singh.', 
                    2000,              
                    '',                
                    500,
                   'a Frontend Developer.', 
                    2000,
                    '', 
                    500,
                   'a Web Enthusiast.',
                    2000
                   ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-primary"
                   />
                </h1>
                   
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                      A passionate frontend developer crafting beautiful and functional web experiences.
                    </p>
            
                   <div className="flex gap-4">
                      <a
                        href="../assets/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        <Download size={20} />
                        Download Resume
                      </a>
                      <div className="flex gap-4">
                        <a href="https://github.com/shivangi1612" className="p-4 rounded-full hover:bg-accent transition-colors">
                          <FaGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/shivangisingh1612004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-4 rounded-full hover:bg-accent transition-colors">
                          <Linkedin size={20} />
                        </a>
                        <a href="https://x.com/i_shivangisingh?t=DYF5OVIPaR2Gjn8zxYHPRg&s=08" className="p-4 rounded-full hover:bg-accent transition-colors">
                          <FaXTwitter size={20} />
                        </a>
                        <a href="mailto:shivangi.singh161204@gmail.com" className="p-4 rounded-full hover:bg-accent transition-colors">
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  <img
                    src="../assets/mypicture1.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </section>

              {/* Other sections */}
              <section id="about" className="py-20 relative z-20 pt-30">
                <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                <AboutSection />
              </section>

              <section id="skills" className="py-20 relative z-20 pt-40">
                <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
                <SkillsGallery />
              </section>

              <section id="experience" className="py-20 relative z-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
                <Experience />
              </section>

              <section id="projects" className="py-20 relative z-20 pt-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <Projects />
              </section>

              <section id="contact" className="py-20 relative z-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
                <div className="max-w-xl mx-auto">
                  <p className="text-center text-muted-foreground mb-8">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <a href="mailto:shivangi.singh161204@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                      <Mail size={20} />
                      Email
                    </a>
                    <a href="https://www.linkedin.com/in/shivangisingh1612004?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center gap-2 text-primary hover:underline">
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                    <a href="https://x.com/i_shivangisingh?t=DYF5OVIPaR2Gjn8zxYHPRg&s=08" className="flex items-center gap-2 text-primary hover:underline">
                      <FaXTwitter size={20} />
                      Twitter
                    </a>
                    <a href="https://github.com/shivangi1612" className="flex items-center gap-2 text-primary hover:underline">
                      <FaGithub size={20} />
                      GitHub
                    </a>
                  </div>
                </div>
              </section>
            </main>

            <footer className="border-t py-8 relative z-20">
              <div className="container mx-auto px-4 text-center text-muted-foreground">
                <p>© {new Date().getFullYear()} Shivangi Singh. All rights reserved.</p>
                <p className="text-sm">Made with ❤️ using React, Tailwind CSS & Framer Motion.</p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
