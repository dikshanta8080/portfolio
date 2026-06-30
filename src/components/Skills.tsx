import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../constants/data';
import { getSkillIcon } from '../utils/icons';
import {
  useScrollAnimation,
  fadeInUpVariants,
} from '../hooks/useScrollAnimation';

function SkillChip({
  name,
  icon,
  brandColor,
  index,
  isInView,
}: {
  name: string;
  icon: string;
  brandColor: string;
  index: number;
  isInView: boolean;
}) {
  const Icon = getSkillIcon(icon);

  return (
    <motion.div
      className="group flex items-center gap-2.5 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] cursor-default transition-all duration-300"
      style={{ '--skill-color': brandColor } as CSSProperties}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{
        scale: 1.05,
        borderColor: `${brandColor}66`,
        boxShadow: `0 0 16px ${brandColor}44`,
      }}
    >
      <Icon className="text-xl shrink-0" style={{ color: brandColor }} />
      <span className="text-xs font-medium text-[#c0c0d0] whitespace-nowrap group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();
  let globalIndex = 0;

  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
        >
          <h2 className="section-heading gradient-text">Skills & Technologies</h2>
          <p className="section-subheading mb-10">
            Tools and technologies I use to build scalable backends
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-6 md:p-8 neon-glow-hover space-y-6"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5"
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00f5ff] sm:w-28 shrink-0">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 flex-1">
                {category.skills.map((skill) => {
                  const cardIndex = globalIndex++;
                  return (
                    <SkillChip
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      brandColor={skill.brandColor}
                      index={cardIndex}
                      isInView={isInView}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
