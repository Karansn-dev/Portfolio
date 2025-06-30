import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface CardProps {
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
}

function InteractiveCard({ title, description, color, position }: CardProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      if (hovered) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
      }
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={hovered ? 0.5 : 0.2}
      floatIntensity={hovered ? 0.5 : 0.2}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={position}>
        {/* Main card */}
        <Box
          ref={meshRef}
          args={[3, 4, 0.2]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.3 : 0.1}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </Box>
        
        {/* Title representation with spheres */}
        <group position={[0, 1, 0.15]}>
          {title.split('').map((char, i) => (
            <Sphere
              key={i}
              args={[0.08, 8, 8]}
              position={[(i - title.length / 2) * 0.15, 0, 0]}
            >
              <meshStandardMaterial
                color="white"
                emissive="white"
                emissiveIntensity={0.2}
                metalness={0.9}
                roughness={0.1}
              />
            </Sphere>
          ))}
        </group>
        
        {/* Description representation with smaller spheres */}
        <group position={[0, 0, 0.15]}>
          {description.split('').slice(0, 20).map((char, i) => (
            <Sphere
              key={i}
              args={[0.04, 6, 6]}
              position={[(i - 10) * 0.12, 0, 0]}
            >
              <meshStandardMaterial
                color="white"
                emissive="white"
                emissiveIntensity={0.1}
                metalness={0.7}
                roughness={0.3}
                transparent
                opacity={0.7}
              />
            </Sphere>
          ))}
        </group>
        
        {/* Decorative elements */}
        <group position={[0, -1.5, 0.15]}>
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              args={[0.1, 0.1, 0.1]}
              position={[(i - 2) * 0.3, 0, 0]}
            >
              <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={0.3}
                metalness={0.6}
                roughness={0.4}
              />
            </Box>
          ))}
        </group>
      </group>
    </Float>
  );
}

export default function InteractiveCard3D() {
  const cards = [
    {
      title: "Web Development",
      description: "Cutting-edge web solutions",
      color: "#00ffff",
      position: [-4, 0, 0] as [number, number, number]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful user experiences",
      color: "#ff00ff",
      position: [0, 0, 0] as [number, number, number]
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive solutions",
      color: "#ffff00",
      position: [4, 0, 0] as [number, number, number]
    }
  ];

  return (
    <div className="w-full h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff00ff" />
        
        {cards.map((card, index) => (
          <InteractiveCard
            key={index}
            title={card.title}
            description={card.description}
            color={card.color}
            position={card.position}
          />
        ))}
      </Canvas>
    </div>
  );
} 