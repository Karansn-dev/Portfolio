import React from 'react';
import './ShinyText.css';

interface ShinyTextProps {
  text: string;
  speed?: number; // seconds
  disabled?: boolean;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, speed = 3, disabled = false, className = '' }) => {
  return (
    <span
      className={`shiny-text${disabled ? ' shiny-text--disabled' : ''} ${className}`}
      style={!disabled ? { ['--shine-speed' as any]: `${speed}s` } : {}}
    >
      {text}
    </span>
  );
};

export default ShinyText; 