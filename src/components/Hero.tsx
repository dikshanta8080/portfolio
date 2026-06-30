import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';
import { FaGithub, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../constants/data';
import TerminalAnimation from './TerminalAnimation';

const particleOptions: ISourceOptions = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    number: { value: 80, density: { enable: true } },
    color: { value: ['#00f5ff', '#7b2fff'] },
    opacity: { value: { min: 0.1, max: 0.5 } },
    size: { value: { min: 1, max: 3 } },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' },
    },
    links: {
      enable: true,
      distance: 150,
      color: '#00f5ff',
      opacity: 0.15,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'grab' },
      resize: { enable: true },
    },
    modes: {
      grab: { distance: 140, links: { opacity: 0.3 } },
    },
  },
  detectRetina: true,
};

const initParticles = async (engine: Parameters<typeof loadSlim>[0]) => {
  await loadSlim(engine);
};

export default function Hero() {
  const [typewriterText, setTypewriterText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentRole.length) {
          setTypewriterText(currentRole.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(currentRole.slice(0, typewriterText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typewriterText, isDeleting, roleIndex]);

  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden section-padding pt-28 md:pt-32"
    >
      <ParticlesProvider init={initParticles}>
        <Particles id="tsparticles" options={particleOptions} className="absolute inset-0" />
      </ParticlesProvider>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,10,15,0.3)] to-[#0a0a0f] z-[1]" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="text-[#00f5ff] font-mono text-sm md:text-base mb-4 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {'< Hello World />'}
            </motion.p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hello, I&apos;m{' '}
              <span className="gradient-text block sm:inline mt-1">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-8 md:h-10 mb-6">
              <p className="text-xl md:text-2xl text-[#a0a0b0] font-mono">
                <span className="text-[#7b2fff]">{'>'}</span>{' '}
                {typewriterText}
                <span className="typewriter-cursor text-[#00f5ff]">|</span>
              </p>
            </div>

            <p className="text-[#a0a0b0] text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToProjects} className="btn-primary cursor-pointer">
                <FaArrowDown size={14} />
                View Projects
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FaGithub size={16} />
                GitHub Profile
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end float-animation"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <TerminalAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
