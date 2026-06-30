import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_KEY = 'da-portfolio-loaded';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(LOADING_KEY);
    if (hasVisited) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem(LOADING_KEY, 'true');
      setIsVisible(false);
      onComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="loading-logo w-24 h-24 rounded-2xl flex items-center justify-center neon-border"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <span className="text-3xl font-bold gradient-text font-mono">DA</span>
          </motion.div>
          <motion.p
            className="mt-6 text-[#a0a0b0] text-sm tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
