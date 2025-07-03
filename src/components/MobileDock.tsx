import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const barVariants = {
  closed: {
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
  openTop: {
    rotate: 45,
    y: 8,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
  openMid: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  openBot: {
    rotate: -45,
    y: -8,
    transition: { type: "spring" as const, stiffness: 400, damping: 30 },
  },
};

function MobileDock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-5 right-5 z-50 flex flex-col justify-center items-center w-12 h-12 md:hidden bg-white/30 backdrop-blur-xl rounded-xl shadow-xl border border-white/30 focus:outline-none transition-all duration-300 hover:scale-105"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <motion.span
          className="block w-7 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded mb-1.5 shadow-sm"
          animate={open ? "openTop" : "closed"}
          variants={barVariants}
        />
        <motion.span
          className="block w-7 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded mb-1.5 shadow-sm"
          animate={open ? "openMid" : "closed"}
          variants={barVariants}
        />
        <motion.span
          className="block w-7 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded shadow-sm"
          animate={open ? "openBot" : "closed"}
          variants={barVariants}
        />
      </button>
      {/* Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/30 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            onClick={() => setOpen(false)}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-semibold text-slate-800 hover:text-purple-600 transition-colors duration-200 px-6 py-2 rounded-xl bg-white/40 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 shadow-md backdrop-blur-md"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileDock; 