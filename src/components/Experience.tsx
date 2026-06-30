import { motion } from 'framer-motion';
import { experienceItems } from '../constants/data';
import type { ExperiencePhaseType } from '../types';
import {
  useScrollAnimation,
  fadeInUpVariants,
} from '../hooks/useScrollAnimation';

const phaseStyles: Record<
  ExperiencePhaseType,
  { badge: string; dot: string; border: string }
> = {
  'Learning & Building': {
    badge: 'bg-gradient-to-r from-[#00f5ff]/20 to-[#7b2fff]/20 text-[#00f5ff] border-[#00f5ff]/40',
    dot: 'shadow-[0_0_12px_#00f5ff,0_0_24px_#7b2fff]',
    border: 'border-[#00f5ff]/30',
  },
  'Phase 1': {
    badge: 'bg-[#00f5ff]/10 text-[#00f5ff] border-[#00f5ff]/40',
    dot: 'shadow-[0_0_12px_#00f5ff]',
    border: 'border-[#00f5ff]/20',
  },
  'Phase 2': {
    badge: 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/40',
    dot: 'shadow-[0_0_12px_#00ff88]',
    border: 'border-[#00ff88]/20',
  },
  'Phase 3': {
    badge: 'bg-[#7b2fff]/10 text-[#b794f6] border-[#7b2fff]/40',
    dot: 'shadow-[0_0_12px_#7b2fff]',
    border: 'border-[#7b2fff]/20',
  },
  'Phase 4': {
    badge: 'bg-[#ff6b35]/10 text-[#ff9f6b] border-[#ff6b35]/40',
    dot: 'shadow-[0_0_12px_#ff6b35]',
    border: 'border-[#ff6b35]/20',
  },
};

function TimelineEntry({
  item,
  index,
}: {
  item: (typeof experienceItems)[0];
  index: number;
}) {
  const styles = phaseStyles[item.type];
  const { ref, isInView } = useScrollAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div ref={ref} className="relative grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr] gap-4 md:gap-8">
      {/* Timeline dot + line */}
      <div className="relative flex flex-col items-center">
        <motion.div
          className={`relative z-10 w-4 h-4 rounded-full bg-[#0a0a0f] border-2 border-[#00f5ff] ${styles.dot}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        />
        {index < experienceItems.length - 1 && (
          <div className="absolute top-4 w-px h-[calc(100%+3rem)] bg-gradient-to-b from-[#00f5ff]/60 via-[#7b2fff]/30 to-transparent" />
        )}
      </div>

      {/* Card */}
      <motion.div
        className={`glass-card p-6 md:p-8 neon-glow-hover mb-12 ${styles.border}`}
        initial={{ opacity: 0, x: 60 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${styles.badge}`}
          >
            {item.type === 'Learning & Building' ? 'Overall' : item.type}
          </span>
          <span className="text-xs font-mono text-[#a0a0b0] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.1)]">
            {item.period}
          </span>
          {item.duration && (
            <span className="text-xs font-mono text-[#7b2fff] px-3 py-1 rounded-full border border-[rgba(123,47,255,0.3)]">
              {item.duration}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-[#f0f0f5] mb-3">{item.title}</h3>
        <p className="text-[#a0a0b0] text-sm leading-relaxed mb-4">{item.description}</p>

        <ul className="space-y-2">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-sm text-[#a0a0b0]">
              <span className="text-[#00f5ff] mt-0.5 shrink-0">▹</span>
              {highlight}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[rgba(0,245,255,0.02)] to-[#0a0a0f] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
        >
          <h2 className="section-heading gradient-text">Experience</h2>
          <p className="section-subheading mb-12">
            My learning journey from Core Java fundamentals to Spring Boot backend development, with Kafka and event-driven systems as a current learning phase
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main timeline spine */}
          <div className="absolute left-5 md:left-[30px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00f5ff]/40 via-[#7b2fff]/20 to-transparent hidden sm:block" />

          {experienceItems.map((item, index) => (
            <TimelineEntry key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
