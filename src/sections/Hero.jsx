import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import fullLogo from '../images/LBFULL.png';   // <-- new full logo

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center
                        min-h-screen w-full px-4">
      {/* BG gradient */}
      <div className="absolute inset-0 -z-20
                      bg-gradient-to-r from-[#3ad0e6] to-[#0057d4]" />
      <div className="absolute inset-0 -z-10 bg-deepViolet/50" />

      {/* ---------- Inner content ---------- */}
      <div className="w-full md:max-w-3xl mx-0 md:mx-auto text-center text-white">

        {/* LOGO */}
        <motion.img
          src={fullLogo}
          alt="Labees full logo"
          className="mx-auto mb-6 w-40 sm:w-48 md:w-56 rounded-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0,   opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* HEADLINE */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display font-extrabold leading-tight
                     text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
        >
          Qatar’s First Curated&nbsp;Fashion&nbsp;Marketplace.
        </motion.h1>

        {/* SUBLINE */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-sm sm:text-base md:text-xl text-gray-100"
        >
          Connecting Gen Z shoppers with bold, culturally-relevant fashion brands.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <Link
            to="/waitlist"
            className="inline-block px-10 py-4 bg-electricPurple
                       rounded-lg font-semibold text-white shadow-lg
                       hover:opacity-90 transition"
          >
            Join the Waitlist
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
