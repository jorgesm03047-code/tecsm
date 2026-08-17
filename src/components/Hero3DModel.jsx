import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, RoundedBox, Edges } from '@react-three/drei';
import * as THREE from 'three';

export default function Hero3DModel({ mousePos }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Rotate slowly
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      
      // React to mouse movement
      if (mousePos?.current) {
        const targetX = (mousePos.current.x * 0.5);
        const targetY = (mousePos.current.y * 0.5);
        
        groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
        groupRef.current.rotation.x += (targetY - groupRef.current.rotation.x) * 0.05;
      }
    }
  });

  return (
    <group ref={groupRef}>
      <group position={[0, Math.sin(0) * 0.2, 0]}> {/* Manual slight float if needed, but omitted for perf */}
        {/* Central Core */}
        <RoundedBox args={[2, 2, 2]} radius={0.1} smoothness={2}>
          <meshStandardMaterial 
            color="#0077B6" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#00B4D8"
            emissiveIntensity={0.2}
          />
          <Edges scale={1.05} threshold={15} color="#4F46E5" />
        </RoundedBox>

        {/* Floating elements forming a C/E shape abstraction */}
        <group position={[0, 0, 0]}>
          <RoundedBox args={[2.5, 0.4, 0.4]} position={[0, 1.2, 1.2]} radius={0.05}>
            <meshStandardMaterial color="#00B4D8" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <RoundedBox args={[2.5, 0.4, 0.4]} position={[0, -1.2, 1.2]} radius={0.05}>
            <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <RoundedBox args={[0.4, 2.8, 0.4]} position={[-1.05, 0, 1.2]} radius={0.05}>
            <meshStandardMaterial color="#0077B6" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          {/* Inner middle bar for 'E' abstraction */}
          <RoundedBox args={[1.5, 0.4, 0.4]} position={[-0.5, 0, 1.2]} radius={0.05}>
            <meshStandardMaterial color="#00B4D8" metalness={0.8} roughness={0.2} />
          </RoundedBox>
        </group>
        
        {/* Decorative particles (Reduced count for FPS) */}
        {[...Array(8)].map((_, i) => (
          <Sphere 
            key={i} 
            args={[Math.random() * 0.05 + 0.02, 8, 8]} 
            position={[
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 6
            ]}
          >
            <meshBasicMaterial color={i % 2 === 0 ? "#00B4D8" : "#4F46E5"} />
          </Sphere>
        ))}
      </group>
    </group>
  );
}
