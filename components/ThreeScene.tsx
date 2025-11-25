/* FILE 11: components/ThreeScene.tsx */
'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Environment } from '@react-three/drei';

function RotatingCube() {
  const ref = useRef<any>();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.25;
      ref.current.rotation.z += delta * 0.08;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={[1.1,1.1,1.1]}>
      <boxGeometry args={[2.2,2.2,2.2]} />
      <meshStandardMaterial color="#0ea5e9" metalness={0.8} roughness={0.2} emissive="#07304a" emissiveIntensity={0.25} />
    </mesh>
  )
}

export default function ThreeScene(){
  return (
    <div style={{position:'absolute', inset:0, zIndex:0, pointerEvents:'none'}}>
      <Canvas camera={{position:[0,0,8], fov:55}}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[6,6,6]} intensity={0.9} color="#3b82f6" />
        <pointLight position={[-6,-4,3]} intensity={0.8} color="#06b6d4" />
        <RotatingCube />
        <Stars radius={80} depth={40} count={4000} factor={4} fade speed={0.3} />
        <Environment preset="night" />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate autoRotate autoRotateSpeed={0.15} />
      </Canvas>
    </div>
  )
}
