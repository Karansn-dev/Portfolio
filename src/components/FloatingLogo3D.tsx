import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles, Box, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

function FloatingLogo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
        floatingRange={[-0.1, 0.1]}
      >
        {/* Main logo structure using geometric shapes */}
        <group>
          {/* Central sphere */}
          <Sphere args={[0.8, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#00ffff"
              emissive="#00ffff"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
              transparent
              opacity={0.9}
            />
          </Sphere>
          
          {/* Orbiting rings */}
          <Torus args={[1.2, 0.1, 16, 100]} position={[0, 0, 0]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial
              color="#ff00ff"
              emissive="#ff00ff"
              emissiveIntensity={0.4}
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={0.8}
            />
          </Torus>
          
          <Torus args={[1.5, 0.08, 16, 100]} position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]}>
            <meshStandardMaterial
              color="#ffff00"
              emissive="#ffff00"
              emissiveIntensity={0.3}
              metalness={0.7}
              roughness={0.3}
              transparent
              opacity={0.7}
            />
          </Torus>
          
          {/* Decorative cubes around the sphere */}
          {[...Array(6)].map((_, i) => (
            <Float
              key={i}
              speed={1 + Math.random() * 2}
              rotationIntensity={Math.random() * 2}
              floatIntensity={1 + Math.random() * 2}
              floatingRange={[-0.2, 0.2]}
            >
              <Box
                args={[0.2, 0.2, 0.2]}
                position={[
                  Math.cos(i * Math.PI / 3) * 2,
                  Math.sin(i * Math.PI / 3) * 2,
                  Math.sin(i * Math.PI / 2) * 0.5
                ]}
              >
                <meshStandardMaterial
                  color={`hsl(${i * 60}, 70%, 60%)`}
                  emissive={`hsl(${i * 60}, 70%, 60%)`}
                  emissiveIntensity={0.2}
                  metalness={0.5}
                  roughness={0.5}
                />
              </Box>
            </Float>
          ))}
        </group>
      </Float>
      
      <Sparkles
        count={100}
        scale={[4, 4, 4]}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#00ffff"
      />
    </group>
  );
}

export default function FloatingLogo3D() {
  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        
        <FloatingLogo />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 