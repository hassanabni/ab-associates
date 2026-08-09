"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function TowerCluster() {
  const group = useRef<THREE.Group>(null);

  const towers = useMemo(
    () => [
      { x: -1.4, h: 3.2, w: 0.42, z: 0 },
      { x: -0.6, h: 4.4, w: 0.5, z: -0.3 },
      { x: 0.3, h: 5.4, w: 0.56, z: 0.1 },
      { x: 1.15, h: 3.8, w: 0.44, z: -0.15 },
      { x: 1.85, h: 2.9, w: 0.38, z: 0.2 },
    ],
    []
  );

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={group}>
      {towers.map((t, i) => (
        <mesh key={i} position={[t.x, t.h / 2 - 2, t.z]} castShadow receiveShadow>
          <boxGeometry args={[t.w, t.h, t.w]} />
          <MeshTransmissionMaterial
            thickness={0.4}
            roughness={0.08}
            transmission={0.92}
            ior={1.2}
            chromaticAberration={0.02}
            backside
            color="#6de3e8"
          />
        </mesh>
      ))}
      <mesh position={[0, -2.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#0a0e12" metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

export default function AbstractTower() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [3.4, 1.6, 4.6], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 6, 3]} intensity={1.6} color="#f4f1ea" />
          <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#0e7c8c" />
          <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.4}>
            <TowerCluster />
          </Float>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 2.6}
            maxPolarAngle={Math.PI / 2.1}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
