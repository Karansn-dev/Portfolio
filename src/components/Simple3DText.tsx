import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function Floating3DText() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Letter C - using boxes */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box args={[0.3, 1.5, 0.3]} position={[-2, 0, 0]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        <Box args={[1.2, 0.3, 0.3]} position={[-1.4, 0.6, 0]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
        <Box args={[1.2, 0.3, 0.3]} position={[-1.4, -0.6, 0]}>
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </Float>

      {/* Letter Y */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.7}>
        <Box args={[0.3, 0.8, 0.3]} position={[-0.5, 0.2, 0]}>
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
        <Box args={[0.3, 0.8, 0.3]} position={[0.1, 0.2, 0]}>
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[-0.2, -0.4, 0]}>
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={0.4}
            metalness={0.9}
            roughness={0.1}
          />
        </Box>
      </Float>

      {/* Letter B */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.4}>
        <Box args={[0.3, 1.5, 0.3]} position={[0.8, 0, 0]}>
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[1.2, 0.6, 0]}>
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[1.2, 0, 0]}>
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[1.2, -0.6, 0]}>
          <meshStandardMaterial
            color="#ffff00"
            emissive="#ffff00"
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
      </Float>

      {/* Letter E */}
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <Box args={[0.3, 1.5, 0.3]} position={[1.8, 0, 0]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.4}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[2.2, 0.6, 0]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.4}
          />
        </Box>
        <Box args={[0.6, 0.3, 0.3]} position={[2.1, 0, 0]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.4}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[2.2, -0.6, 0]}>
          <meshStandardMaterial
            color="#00ff00"
            emissive="#00ff00"
            emissiveIntensity={0.5}
            metalness={0.6}
            roughness={0.4}
          />
        </Box>
      </Float>

      {/* Letter R */}
      <Float speed={1.5} rotationIntensity={0.7} floatIntensity={0.3}>
        <Box args={[0.3, 1.5, 0.3]} position={[2.8, 0, 0]}>
          <meshStandardMaterial
            color="#ff6600"
            emissive="#ff6600"
            emissiveIntensity={0.4}
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
        <Box args={[0.8, 0.3, 0.3]} position={[3.2, 0.6, 0]}>
          <meshStandardMaterial
            color="#ff6600"
            emissive="#ff6600"
            emissiveIntensity={0.4}
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
        <Box args={[0.6, 0.3, 0.3]} position={[3.1, 0, 0]}>
          <meshStandardMaterial
            color="#ff6600"
            emissive="#ff6600"
            emissiveIntensity={0.4}
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
        <Box args={[0.3, 0.8, 0.3]} position={[3.2, -0.2, 0]}>
          <meshStandardMaterial
            color="#ff6600"
            emissive="#ff6600"
            emissiveIntensity={0.4}
            metalness={0.5}
            roughness={0.5}
          />
        </Box>
      </Float>

      {/* Decorative spheres */}
      {[...Array(6)].map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random() * 2}
          rotationIntensity={Math.random() * 2}
          floatIntensity={1 + Math.random() * 2}
          floatingRange={[-0.3, 0.3]}
        >
          <Sphere
            args={[0.1, 16, 16]}
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 4 + 2,
              (Math.random() - 0.5) * 2
            ]}
          >
            <meshStandardMaterial
              color={`hsl(${i * 60}, 70%, 60%)`}
              emissive={`hsl(${i * 60}, 70%, 60%)`}
              emissiveIntensity={0.3}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function Simple3DText() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        <pointLight position={[0, 10, 0]} intensity={0.6} color="#ffff00" />
        
        <Floating3DText />
      </Canvas>
    </div>
  );
} 