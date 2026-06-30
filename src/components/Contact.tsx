import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { personalInfo, socialLinks } from '../constants/data';
import { getIcon } from '../utils/icons';
import {
  useScrollAnimation,
  fadeInUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, formData, publicKey);
        toast.success('Message sent successfully! I\'ll get back to you soon.');
      } else {
        toast.success('Message received! (Demo mode — configure EmailJS in .env to send real emails)');
      }
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again or reach out via GitHub.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[rgba(123,47,255,0.03)] to-[#0a0a0f] pointer-events-none" />

      <div className="section-container relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeInUpVariants}
        >
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="section-subheading mb-12">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-8 neon-glow-hover"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={staggerItemVariants} className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-[#a0a0b0] mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(0,245,255,0.15)] text-[#f0f0f5] placeholder-[#a0a0b0]/50 focus:outline-none focus:border-[#00f5ff] focus:shadow-[0_0_15px_rgba(0,245,255,0.15)] transition-all"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-[#a0a0b0] mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(0,245,255,0.15)] text-[#f0f0f5] placeholder-[#a0a0b0]/50 focus:outline-none focus:border-[#00f5ff] focus:shadow-[0_0_15px_rgba(0,245,255,0.15)] transition-all"
                placeholder="your@email.com"
              />
            </motion.div>

            <motion.div variants={staggerItemVariants} className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-[#a0a0b0] mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(0,245,255,0.15)] text-[#f0f0f5] placeholder-[#a0a0b0]/50 focus:outline-none focus:border-[#00f5ff] focus:shadow-[0_0_15px_rgba(0,245,255,0.15)] transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={staggerItemVariants}
              className="btn-primary w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#7b2fff] to-[#00f5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.form>

          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={staggerItemVariants} className="glass-card p-6 neon-glow-hover">
              <h3 className="text-lg font-semibold text-[#f0f0f5] mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = getIcon(link.icon);
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-[#a0a0b0] hover:text-[#00f5ff] neon-glow-hover transition-colors"
                      aria-label={link.name}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="glass-card p-6 neon-glow-hover">
              <h3 className="text-lg font-semibold text-[#f0f0f5] mb-2">Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-[#00f5ff] hover:underline text-sm break-all"
              >
                {personalInfo.email}
              </a>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="glass-card p-6 neon-glow-hover">
              <h3 className="text-lg font-semibold text-[#f0f0f5] mb-2">Location</h3>
              <p className="text-[#a0a0b0] text-sm">Open to remote opportunities worldwide</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
