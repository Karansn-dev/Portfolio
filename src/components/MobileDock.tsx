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
        className="fixed top-5 right-5 z-50 flex flex-col justify-center items-center w-12 h-12 md:hidden bg-slate-900/80 rounded-xl shadow-lg border border-cyan-400/10 focus:outline-none"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <motion.span
          className="block w-7 h-1 bg-cyan-300 rounded mb-1.5"
          animate={open ? "openTop" : "closed"}
          variants={barVariants}
        />
        <motion.span
          className="block w-7 h-1 bg-cyan-300 rounded mb-1.5"
          animate={open ? "openMid" : "closed"}
          variants={barVariants}
        />
        <motion.span
          className="block w-7 h-1 bg-cyan-300 rounded"
          animate={open ? "openBot" : "closed"}
          variants={barVariants}
        />
      </button>
      {/* Overlay Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-900/95 flex flex-col items-center justify-center space-y-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-2xl font-bold text-cyan-300 hover:text-white transition-colors duration-200"
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