import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, OrbitControls, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Background() {
  return (
    <mesh scale={100} rotation={[0, 0, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial side={THREE.BackSide} color="#121A1B" />
    </mesh>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} position={[2, 0, 0]} scale={1.2}>
          <MeshDistortMaterial
            color="#A7AA63"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[-3, 2, -2]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#505039" metalness={0.5} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={3}>
        <mesh position={[-2, -2, -1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#EAE6D2" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 bg-primary overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#A7AA63" intensity={1} />
        
        <FloatingShapes />
        <Background />
        
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary pointer-events-none" />
    </div>
  );
}
