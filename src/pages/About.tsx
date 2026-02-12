import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.document.title = "About Me - Kenzō";
  }, [])

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-7 w-full max-w-4xl mx-auto h-full px-4">
      <motion.div 
        className="flex-shrink-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img
          src="/assets/avatar.png"
          alt="avatar"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-sm object-cover"
        />
      </motion.div>

      <motion.div 
        className="flex items-center gap-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        <p className="text-text-strong font-mono font-normal text-sm sm:text-base capitalize leading-5 sm:leading-6">
          A driven student at 1337BG (42 Network), passionate about Cybersecurity 
          and exploring DevOps & Web Backend Development. With a solid base in scripting and systems, I enjoy 
          uncovering how things work under the hood and securing them, while embracing 
          42's peer-learning philosophy.
        </p>
      </motion.div>
    </div>
  );
}
