import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface EnergyOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
  trail: { x: number; y: number; opacity: number }[];
}

interface NebulaCloud {
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  pulsePhase: number;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const energyOrbsRef = useRef<EnergyOrb[]>([]);
  const nebulaCloudsRef = useRef<NebulaCloud[]>([]);
  const animationRef = useRef<number>();
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const starCount = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      const colors = ['#ffffff', '#ffd700', '#87ceeb', '#ff69b4', '#98fb98', '#dda0dd'];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      return stars;
    };

    const createShootingStars = () => {
      const shootingStars: ShootingStar[] = [];
      return shootingStars;
    };

    const createEnergyOrbs = () => {
      const orbs: EnergyOrb[] = [];
      const orbCount = 6;
      const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff6600', '#9966ff'];
      
      for (let i = 0; i < orbCount; i++) {
        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 15 + 10,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.03 + 0.02,
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: []
        });
      }
      return orbs;
    };

    const createNebulaClouds = () => {
      const clouds: NebulaCloud[] = [];
      const cloudCount = 4;
      const colors = ['#4a0e4e', '#1a0033', '#330066', '#660099', '#003366', '#006666'];
      
      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 200 + 150,
          opacity: Math.random() * 0.15 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.005,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
      return clouds;
    };

    const drawStar = (star: Star) => {
      const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinklePhase);
      const currentOpacity = star.opacity * (0.7 + 0.3 * twinkle);
      const currentSize = star.size * (0.8 + 0.2 * twinkle);

      ctx.save();
      ctx.globalAlpha = currentOpacity;
      ctx.fillStyle = star.color;
      ctx.shadowBlur = currentSize * 3;
      ctx.shadowColor = star.color;
      
      // Draw star shape
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
        const x = star.x + Math.cos(angle) * currentSize;
        const y = star.y + Math.sin(angle) * currentSize;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        
        const innerAngle = ((i + 0.5) * Math.PI * 2) / 5 - Math.PI / 2;
        const innerX = star.x + Math.cos(innerAngle) * (currentSize * 0.4);
        const innerY = star.y + Math.sin(innerAngle) * (currentSize * 0.4);
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawShootingStar = (shootingStar: ShootingStar) => {
      ctx.save();
      ctx.globalAlpha = shootingStar.opacity;
      
      const gradient = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - shootingStar.vx * shootingStar.length,
        shootingStar.y - shootingStar.vy * shootingStar.length
      );
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.5, '#ffff00');
      gradient.addColorStop(1, 'transparent');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ffffff';
      
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.vx * shootingStar.length,
        shootingStar.y - shootingStar.vy * shootingStar.length
      );
      ctx.stroke();
      ctx.restore();
    };

    const drawEnergyOrb = (orb: EnergyOrb) => {
      const pulse = Math.sin(timeRef.current * orb.pulseSpeed + orb.pulsePhase);
      const currentSize = orb.size * (0.8 + 0.4 * pulse);
      
      // Draw trail
      ctx.save();
      for (let i = 0; i < orb.trail.length; i++) {
        const trailPoint = orb.trail[i];
        ctx.globalAlpha = trailPoint.opacity;
        ctx.fillStyle = orb.color;
        ctx.shadowBlur = 5;
        ctx.shadowColor = orb.color;
        ctx.beginPath();
        ctx.arc(trailPoint.x, trailPoint.y, (orb.size * 0.3) * (i / orb.trail.length), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Draw main orb
      ctx.save();
      ctx.globalAlpha = 0.8;
      
      const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, currentSize);
      gradient.addColorStop(0, orb.color);
      gradient.addColorStop(0.7, orb.color + '80');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.shadowBlur = currentSize;
      ctx.shadowColor = orb.color;
      
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, currentSize, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner glow
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(orb.x, orb.y, currentSize * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawNebulaCloud = (cloud: NebulaCloud) => {
      const pulse = Math.sin(timeRef.current * 0.01 + cloud.pulsePhase);
      const currentOpacity = cloud.opacity * (0.7 + 0.3 * pulse);
      
      ctx.save();
      ctx.globalAlpha = currentOpacity;
      ctx.translate(cloud.x, cloud.y);
      ctx.rotate(cloud.rotation);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, cloud.size);
      gradient.addColorStop(0, cloud.color + '80');
      gradient.addColorStop(0.5, cloud.color + '40');
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.filter = 'blur(20px)';
      
      // Draw multiple overlapping circles for nebula effect
      for (let i = 0; i < 3; i++) {
        const offsetX = (Math.random() - 0.5) * cloud.size * 0.3;
        const offsetY = (Math.random() - 0.5) * cloud.size * 0.3;
        ctx.beginPath();
        ctx.arc(offsetX, offsetY, cloud.size * (0.7 + i * 0.15), 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.restore();
    };

    const updateShootingStar = (shootingStar: ShootingStar) => {
      shootingStar.x += shootingStar.vx;
      shootingStar.y += shootingStar.vy;
      shootingStar.life++;
      shootingStar.opacity = 1 - (shootingStar.life / shootingStar.maxLife);
      
      return shootingStar.life < shootingStar.maxLife &&
             shootingStar.x > -100 && shootingStar.x < canvas.width + 100 &&
             shootingStar.y > -100 && shootingStar.y < canvas.height + 100;
    };

    const updateEnergyOrb = (orb: EnergyOrb) => {
      orb.x += orb.vx;
      orb.y += orb.vy;
      
      // Add to trail
      orb.trail.unshift({ x: orb.x, y: orb.y, opacity: 0.5 });
      if (orb.trail.length > 20) orb.trail.pop();
      
      // Update trail opacity
      orb.trail.forEach((point, index) => {
        point.opacity *= 0.95;
      });
      
      // Bounce off edges
      if (orb.x < 0 || orb.x > canvas.width) orb.vx *= -1;
      if (orb.y < 0 || orb.y > canvas.height) orb.vy *= -1;
      
      orb.x = Math.max(0, Math.min(canvas.width, orb.x));
      orb.y = Math.max(0, Math.min(canvas.height, orb.y));
    };

    const updateNebulaCloud = (cloud: NebulaCloud) => {
      cloud.rotation += cloud.rotationSpeed;
    };

    const spawnShootingStar = () => {
      if (Math.random() < 0.003) {
        const side = Math.floor(Math.random() * 4);
        let x, y, vx, vy;
        
        switch (side) {
          case 0: // Top
            x = Math.random() * canvas.width;
            y = -50;
            vx = (Math.random() - 0.5) * 4;
            vy = Math.random() * 3 + 2;
            break;
          case 1: // Right
            x = canvas.width + 50;
            y = Math.random() * canvas.height;
            vx = -(Math.random() * 3 + 2);
            vy = (Math.random() - 0.5) * 4;
            break;
          case 2: // Bottom
            x = Math.random() * canvas.width;
            y = canvas.height + 50;
            vx = (Math.random() - 0.5) * 4;
            vy = -(Math.random() * 3 + 2);
            break;
          default: // Left
            x = -50;
            y = Math.random() * canvas.height;
            vx = Math.random() * 3 + 2;
            vy = (Math.random() - 0.5) * 4;
        }
        
        shootingStarsRef.current.push({
          x, y, vx, vy,
          length: Math.random() * 30 + 20,
          opacity: 1,
          life: 0,
          maxLife: Math.random() * 100 + 50
        });
      }
    };

    const animate = () => {
      timeRef.current += 1;
      
      // Create cosmic gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, '#0a0a2e');
      gradient.addColorStop(0.5, '#16213e');
      gradient.addColorStop(1, '#0f0f23');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw nebula clouds
      nebulaCloudsRef.current.forEach(cloud => {
        updateNebulaCloud(cloud);
        drawNebulaCloud(cloud);
      });

      // Draw stars
      starsRef.current.forEach(star => {
        drawStar(star);
      });

      // Spawn and update shooting stars
      spawnShootingStar();
      shootingStarsRef.current = shootingStarsRef.current.filter(shootingStar => {
        const alive = updateShootingStar(shootingStar);
        if (alive) drawShootingStar(shootingStar);
        return alive;
      });

      // Update and draw energy orbs
      energyOrbsRef.current.forEach(orb => {
        updateEnergyOrb(orb);
        drawEnergyOrb(orb);
      });

      // Draw connections between energy orbs
      for (let i = 0; i < energyOrbsRef.current.length; i++) {
        for (let j = i + 1; j < energyOrbsRef.current.length; j++) {
          const orb1 = energyOrbsRef.current[i];
          const orb2 = energyOrbsRef.current[j];
          const dx = orb1.x - orb2.x;
          const dy = orb1.y - orb2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            ctx.save();
            ctx.globalAlpha = (200 - distance) / 200 * 0.3;
            const gradient = ctx.createLinearGradient(orb1.x, orb1.y, orb2.x, orb2.y);
            gradient.addColorStop(0, orb1.color);
            gradient.addColorStop(1, orb2.color);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 5;
            ctx.shadowColor = orb1.color;
            ctx.beginPath();
            ctx.moveTo(orb1.x, orb1.y);
            ctx.lineTo(orb2.x, orb2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      starsRef.current = createStars();
      shootingStarsRef.current = createShootingStars();
      energyOrbsRef.current = createEnergyOrbs();
      nebulaCloudsRef.current = createNebulaClouds();
      animate();
    };

    init();

    const handleResize = () => {
      resizeCanvas();
      starsRef.current = createStars();
      energyOrbsRef.current = createEnergyOrbs();
      nebulaCloudsRef.current = createNebulaClouds();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;