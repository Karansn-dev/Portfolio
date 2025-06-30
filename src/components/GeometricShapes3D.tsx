import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Sphere, Cylinder, Torus, Float } from '@react-three/drei';
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
      {/* Floating Cube */}
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
        floatingRange={[-0.5, 0.5]}
      >
        <Box args={[1, 1, 1]} position={[-3, 0, 0]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </Box>
      </Float>

      {/* Floating Sphere */}
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={1.5}
        floatingRange={[-0.3, 0.3]}
      >
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

      {/* Floating Cylinder */}
      <Float
        speed={1}
        rotationIntensity={1.5}
        floatIntensity={1}
        floatingRange={[-0.4, 0.4]}
      >
        <Cylinder args={[0.5, 0.5, 1.5, 32]} position={[3, 0, 0]}>
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
            wireframe
          />
        </Cylinder>
      </Float>

      {/* Floating Torus */}
      <Float
        speed={2.5}
        rotationIntensity={0.8}
        floatIntensity={2.5}
        floatingRange={[-0.6, 0.6]}
      >
        <Torus args={[1, 0.3, 16, 100]} position={[0, 3, 0]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </Torus>
      </Float>
    </group>
  );
}

export default function GeometricShapes3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        <pointLight position={[0, 10, 0]} intensity={0.6} color="#ffff00" />
        
        <FloatingShapes />
      </Canvas>
    </div>
  );
}