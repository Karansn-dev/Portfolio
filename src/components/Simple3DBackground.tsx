import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Simple floating shapes */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box args={[1, 1, 1]} position={[-3, 0, 0]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.6}>
        <Box args={[1, 1, 1]} position={[3, 0, 0]}>
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
      </Float>
    </group>
  );
}

export default function Simple3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        
        <FloatingShapes />
      </Canvas>
    </div>
  );
} 