import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/outline';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/LB.png';   // your gradient logo

/* ───────────────────────────── nav items (ENG / AR) */
const labels = {
  ENG: ['Startup', 'About', 'How it Works', 'Plans/Pricing'],
  AR:  ['الشركة', 'من نحن', 'كيف يعمل', 'الأسعار'],
};
const routes = ['/', '/about', '/how', '/pricing']; // keep in same order

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('ENG');
  const [dark, setDark] = useState(false);

  /* toggle body class for dark mode */
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDark(!dark);
  };

  /* staggered desktop link animation */
  const linkVariants = {
    hidden: (i) => ({ y: -15, opacity: 0, transition: { delay: i * 0.05 } }),
    show:   (i) => ({ y:  0, opacity: 1, transition: { delay: i * 0.05 } }),
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0,  opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80 }}
      className="sticky top-0 z-50 backdrop-blur-md
                 bg-white/80 dark:bg-dark2/90 shadow-md"
    >
      {/* ──────────── inner flex container (mobile 100 %, md centered) */}
      <div
        className="w-full md:max-w-7xl mx-0 md:mx-auto
                   px-4 md:px-6 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            alt="Labees"
            className="h-8 w-auto"
            whileHover={{ rotate: 8 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {labels[lang].map((label, i) => (
            <motion.li
              key={label}
              custom={i}
              initial="hidden"
              animate="show"
              variants={linkVariants}
            >
              <Link
                to={routes[i]}
                className="relative text-gray-700 dark:text-gray-200
                           hover:text-electricPurple"
              >
                {label}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] w-full
                             bg-electricPurple origin-left scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'ENG' ? 'AR' : 'ENG')}
            className="text-sm font-semibold text-midnightBlue dark:text-electricPurple"
          >
            {lang === 'ENG' ? 'AR' : 'ENG'}
          </button>

          {/* Dark / light toggle */}
          <button
            onClick={toggleDark}
            className="p-2 rounded-lg hover:bg-dark3/20 dark:hover:bg-dark1/40"
          >
            {dark ? (
              <SunIcon  className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-dark1"
          >
            {open ? (
              <XIcon   className="h-6 w-6 text-midnightBlue dark:text-gray-200" />
            ) : (
              <MenuIcon className="h-6 w-6 text-midnightBlue dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white dark:bg-dark2 px-4"
          >
            {labels[lang].map((label, i) => (
              <li key={label} className="py-3 border-b dark:border-dark3">
                <Link
                  to={routes[i]}
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 dark:text-gray-200
                             hover:text-electricPurple"
                >
                  {label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
