import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';

export default function NotFound() {
  const { isDark } = useTheme();

  useEffect(() => {
    window.document.title = "Page Not Found";
  }, [])

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="flex flex-col items-center justify-center gap-6 px-4">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}>
        {isDark ? (
          <motion.img src="assets/shadow.gif" alt="404 not found" className="w-48 h-48 sm:w-64 sm:h-64 rounded-sm object-cover" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }} />
        ) : (
          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-mono font-normal text-text-strong text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}>
            404 NotFound!
          </motion.h1>
        )}
      </motion.div>
    </motion.div>
  );
}