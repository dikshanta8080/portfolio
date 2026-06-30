import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { personalInfo, stats } from '../constants/data';
import {
  useScrollAnimation,
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../hooks/useScrollAnimation';

export default function About() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[rgba(123,47,255,0.03)] to-[#0a0a0f] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
        >
          <h2 className="section-heading gradient-text">About Me</h2>
          <p className="section-subheading mb-12">
            Get to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-3 glass-card p-8 neon-glow-hover"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInUpVariants}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[#a0a0b0] text-base md:text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-[#a0a0b0] text-base leading-relaxed mb-8">
              I focus on building robust backend systems — from RESTful APIs
              to event-driven architectures powered by Apache Kafka. Every line of
              code I write is driven by clean architecture principles and
              production-ready practices.
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <FaGithub size={16} />
              View GitHub Profile
            </a>
          </motion.div>

          <motion.div
            className="lg:col-span-2 grid gap-4"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItemVariants}
                className="glass-card p-6 text-center neon-glow-hover"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[#a0a0b0] text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
