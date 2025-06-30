import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const mouse = useRef([0, 0]);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 2000; i++) {
      const time = Math.random() * 100;
      const factor = Math.random() * 20 + 10;
      const speed = Math.random() * 0.01;
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(particles.length * 3);
    particles.forEach((particle, i) => {
      positions[i * 3] = particle.x;
      positions[i * 3 + 1] = particle.y;
      positions[i * 3 + 2] = particle.z;
    });
    return positions;
  }, [particles]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Mouse interaction
      ref.current.rotation.x += (mouse.current[1] - ref.current.rotation.x) * 0.01;
      ref.current.rotation.y += (mouse.current[0] - ref.current.rotation.y) * 0.01;
    }
  });

  const handleMouseMove = (event: React.MouseEvent) => {
    mouse.current = [
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1,
    ];
  };

  return (
    <div onMouseMove={handleMouseMove} className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1000], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <Points
          ref={ref}
          positions={positions}
          stride={3}
          frustumCulled={false}
        >
          <PointMaterial
            transparent
            color="#00ffff"
            size={2}
            sizeAttenuation={true}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </Points>
      </Canvas>
    </div>
  );
}

export default function ParticleField3D() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <ParticleField />
    </div>
  );
}