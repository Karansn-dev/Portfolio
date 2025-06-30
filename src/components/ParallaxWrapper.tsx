import React, { useState, useEffect } from 'react';

interface ParallaxWrapperProps {
  children: React.ReactNode;
  strength?: number;
}

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children, strength = 3 }) => {
  const [transformStyle, setTransformStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) { // Disable effect on tablet/mobile
        setTransformStyle({ transform: '' });
        return;
      }
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xOffset = (clientX / innerWidth - 0.5) * 2; // Range: -1 to 1
      const yOffset = (clientY / innerHeight - 0.5) * 2; // Range: -1 to 1

      setTransformStyle({
        transform: `perspective(1500px) rotateX(${-yOffset * strength}deg) rotateY(${xOffset * strength}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.15s linear'
      });
    };
    
    const handleMouseLeave = () => {
      setTransformStyle({
        transform: `perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return <div style={transformStyle}>{children}</div>;
};

export default ParallaxWrapper; 