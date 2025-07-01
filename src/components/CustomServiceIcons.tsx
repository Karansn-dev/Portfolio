import React from 'react';

const iconBase = 'w-16 h-16 p-2 rounded-2xl transition-transform duration-200 ease-out group-hover:scale-105 group-hover:shadow-lg';

export const WebDevIcon = () => (
  <div className={`${iconBase} bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-700`}>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="18" width="40" height="28" rx="6"/>
      <path d="M20 26 L28 32 L20 38"/>
      <path d="M44 26 L36 32 L44 38"/>
      <circle cx="32" cy="44" r="2.5"/>
    </svg>
  </div>
);

export const UIDesignIcon = () => (
  <div className={`${iconBase} bg-gradient-to-br from-pink-400 via-purple-400 to-pink-600`}>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="16" y="16" width="32" height="32" rx="10"/>
      <circle cx="32" cy="32" r="8"/>
      <path d="M32 24 V40"/>
      <path d="M24 32 H40"/>
    </svg>
  </div>
);

export const StrategyIcon = () => (
  <div className={`${iconBase} bg-gradient-to-br from-green-400 via-emerald-400 to-green-600`}>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 48 L32 16 L48 48 Z"/>
      <circle cx="32" cy="40" r="3"/>
      <path d="M32 16 V40"/>
    </svg>
  </div>
);

export const PerformanceIcon = () => (
  <div className={`${iconBase} bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-600`}>
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="20"/>
      <path d="M32 32 L32 18"/>
      <path d="M32 32 L44 32"/>
      <path d="M32 32 L40 40"/>
      <circle cx="32" cy="32" r="3"/>
    </svg>
  </div>
); 