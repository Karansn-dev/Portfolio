import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const ACCENT_COLOR = 'rgba(92,225,230,0.45)'; // Site accent
const CURSOR_SIZE = 32;
const SPLASH_SIZE = 120;
const SPLASH_DURATION = 0.45; // seconds

function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0
  );
}

const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [splash, setSplash] = useState<{
    x: number;
    y: number;
    key: number;
  }[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const splashKey = useRef(0);

  // Motion values for lerp trailing
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Track mouse position
  useEffect(() => {
    if (isTouchDevice()) {
      setIsMobile(true);
      return;
    }
    const move = (e: MouseEvent) => {
      animate(cursorX, e.clientX - CURSOR_SIZE / 2, { type: 'spring', stiffness: 400, damping: 40 });
      animate(cursorY, e.clientY - CURSOR_SIZE / 2, { type: 'spring', stiffness: 400, damping: 40 });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY]);

  // Hide on mobile
  useEffect(() => {
    if (isMobile && cursorRef.current) {
      cursorRef.current.style.display = 'none';
    }
  }, [isMobile]);

  // Hover detection for interactive elements
  useEffect(() => {
    if (isMobile) return;
    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.closest('button, a, input, textarea, select, [role="button"], .hover-target, [data-cursor-hover]')
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mouseout', checkHover);
    return () => {
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mouseout', checkHover);
    };
  }, [isMobile]);

  // Splash effect on click
  useEffect(() => {
    if (isMobile) return;
    const handleClick = (e: MouseEvent) => {
      setSplash((prev) => [
        ...prev,
        { x: e.clientX, y: e.clientY, key: splashKey.current++ },
      ]);
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [isMobile]);

  // Remove splash after animation
  useEffect(() => {
    if (!splash.length) return;
    const timeout = setTimeout(() => {
      setSplash((prev) => prev.slice(1));
    }, SPLASH_DURATION * 1000);
    return () => clearTimeout(timeout);
  }, [splash]);

  // Hide cursor when over input/textareas
  useEffect(() => {
    if (isMobile) return;
    const hideCursor = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select')) {
        if (cursorRef.current) cursorRef.current.style.opacity = '0';
      } else {
        if (cursorRef.current) cursorRef.current.style.opacity = '1';
      }
    };
    window.addEventListener('mouseover', hideCursor);
    window.addEventListener('mouseout', hideCursor);
    return () => {
      window.removeEventListener('mouseover', hideCursor);
      window.removeEventListener('mouseout', hideCursor);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x: cursorX,
          y: cursorY,
          width: CURSOR_SIZE,
          height: CURSOR_SIZE,
          pointerEvents: 'none',
          zIndex: 50,
          mixBlendMode: 'lighten',
        }}
        animate={{
          scale: hovering ? 1.35 : 1,
          boxShadow: hovering
            ? `0 0 0 8px ${ACCENT_COLOR}, 0 0 32px 8px ${ACCENT_COLOR}`
            : `0 0 0 2px ${ACCENT_COLOR}`,
          background: hovering
            ? 'radial-gradient(circle, rgba(92,225,230,0.25) 60%, rgba(127,90,240,0.12) 100%)'
            : 'radial-gradient(circle, rgba(92,225,230,0.18) 60%, rgba(127,90,240,0.08) 100%)',
          filter: 'blur(1.5px)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="rounded-full shadow-lg"
      />
      {/* Splash/Ripple Effects */}
      {splash.map(({ x, y, key }) => (
        <motion.div
          key={key}
          initial={{
            opacity: 0.35,
            scale: 0.2,
            x: x - SPLASH_SIZE / 2,
            y: y - SPLASH_SIZE / 2,
          }}
          animate={{
            opacity: 0,
            scale: 1.2,
            x: x - SPLASH_SIZE / 2,
            y: y - SPLASH_SIZE / 2,
          }}
          transition={{ duration: SPLASH_DURATION, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            width: SPLASH_SIZE,
            height: SPLASH_SIZE,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(92,225,230,0.25) 60%, rgba(127,90,240,0.10) 100%)',
            pointerEvents: 'none',
            zIndex: 49,
            mixBlendMode: 'lighten',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor; 