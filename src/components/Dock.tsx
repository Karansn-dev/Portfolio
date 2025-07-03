import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Users, Briefcase, Layers, Mail, Award, ChevronLeft } from "lucide-react";
import "../components/ScrollFloat.css";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Briefcase, label: "About", href: "#about" },
  { icon: Users, label: "Team", href: "#team" },
  { icon: Layers, label: "Services", href: "#services" },
  { icon: Award, label: "Milestones", href: "#achievements" },
  { icon: Layers, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

function Dock() {
  const [open, setOpen] = useState(false);

  // Show dock if mouse is near right edge or dock is hovered/focused
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth - e.clientX < 32) setOpen(true);
      else if (!document.getElementById('dock-bar')?.matches(':hover')) setOpen(false);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Arrow indicator for the Dock */}
      <motion.button
        className="fixed top-1/2 right-0 z-50 -translate-y-1/2 bg-white/40 backdrop-blur-xl border border-white/30 rounded-l-xl px-1.5 py-2 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300/60 transition-all duration-300 hover:scale-105"
        style={{ boxShadow: "0 2px 8px 0 rgba(127,90,240,0.10)" }}
        initial={{ opacity: 0.7, x: 0 }}
        animate={open ? { opacity: 0.2, x: 16 } : { opacity: 0.7, x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        aria-label="Open navigation bar"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onFocus={() => setOpen(true)}
      >
        <ChevronLeft className="w-5 h-5 text-purple-400" />
      </motion.button>
      <AnimatePresence>
        <motion.nav
          id="dock-bar"
          role="toolbar"
          aria-label="Main Navigation"
          className="fixed top-6 right-0 z-50 flex flex-col gap-2 md:gap-3 bg-white/40 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-l-2xl px-3 py-1 md:px-4 md:py-1.5 min-w-[160px] md:min-w-[180px]"
          style={{ alignItems: "flex-end", minWidth: 140, maxWidth: 'unset' }}
          initial={{ x: '100%' }}
          animate={{ x: open ? 0 : '100%' }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          tabIndex={0}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
        >
          {NAV_ITEMS.map((item) => (
            <DockItem key={item.label} icon={item.icon} label={item.label} href={item.href} />
          ))}
        </motion.nav>
      </AnimatePresence>
    </>
  );
}

function DockItem({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      className="group relative flex items-center gap-2 md:gap-3 px-2 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300/60 text-slate-800 hover:text-purple-600 overflow-hidden bg-white/30 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 shadow-md backdrop-blur-md"
      style={{ minWidth: 0 }}
      tabIndex={0}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileHover={{ scale: 1.12 }}
      whileFocus={{ scale: 1.12 }}
    >
      {/* Sliding Glow */}
      <motion.div
        className="absolute left-0 top-0 h-full z-0"
        initial={{ width: 0, opacity: 0 }}
        animate={hovered ? { width: "100%", opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30, duration: 0.35 }}
        style={{
          background: "linear-gradient(270deg, rgba(127,90,240,0.10) 0%, rgba(92,225,230,0.10) 100%)",
          filter: "blur(2.5px)",
          borderRadius: 10,
        }}
      />
      <span className="relative z-10 flex items-center gap-2 md:gap-3">
        <Icon className="w-6 h-6 md:w-[22px] md:h-[22px] text-purple-400" />
        <span className="text-[15px] md:text-[16px] font-medium whitespace-nowrap select-none">
          {label}
        </span>
      </span>
    </motion.a>
  );
}

export default Dock; 