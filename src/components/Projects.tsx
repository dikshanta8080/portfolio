import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, projectFilters } from '../constants/data';
import type { ProjectFilter } from '../types';
import {
  useScrollAnimation,
  fadeInUpVariants,
  staggerContainerVariants,
} from '../hooks/useScrollAnimation';

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      ref={cardRef}
      className="glass-card p-6 neon-glow-hover flex flex-col h-full cursor-default"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-[#f0f0f5]">{project.title}</h3>
        {project.stars !== undefined && (
          <span className="flex items-center gap-1 text-yellow-400 text-sm">
            <FaStar size={12} />
            {project.stars}
          </span>
        )}
      </div>

      <span className="inline-block self-start px-3 py-1 text-xs font-mono rounded-full border border-[rgba(123,47,255,0.4)] text-[#7b2fff] mb-4">
        {project.category}
      </span>

      <p className="text-[#a0a0b0] text-sm leading-relaxed mb-4 flex-grow">
        {project.description}
      </p>

      {project.highlights && (
        <ul className="mb-4 space-y-1">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="text-xs text-[#a0a0b0] flex items-start gap-2">
              <span className="text-[#00f5ff] mt-0.5">▹</span>
              {highlight}
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs rounded-md bg-[rgba(0,245,255,0.08)] text-[#00f5ff] border border-[rgba(0,245,255,0.15)]"
          >
            {tech}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary w-full mt-auto text-center"
      >
        <FaGithub size={14} />
        View on GitHub
        <FaExternalLinkAlt size={10} />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const { ref, isInView } = useScrollAnimation();

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[rgba(0,245,255,0.02)] to-[#0a0a0f] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
        >
          <h2 className="section-heading gradient-text">Projects</h2>
          <p className="section-subheading mb-8">
            Real-world applications built with Java, Spring Boot & more
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
          transition={{ delay: 0.2 }}
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#00f5ff] to-[#7b2fff] text-white shadow-[0_0_20px_rgba(0,245,255,0.3)]'
                  : 'glass-card text-[#a0a0b0] hover:text-white neon-glow-hover'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#a0a0b0] py-12">
            No projects found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
