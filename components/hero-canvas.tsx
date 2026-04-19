'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';

function OrganicBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(1.2, 18);
    const position = geom.attributes.position;
    const vertex = new THREE.Vector3();

    for (let i = 0; i < position.count; i += 1) {
      vertex.fromBufferAttribute(position, i);
      const wave =
        Math.sin(vertex.x * 2.4) * 0.08 +
        Math.cos(vertex.y * 2.8) * 0.1 +
        Math.sin(vertex.z * 3.2) * 0.06;
      vertex.normalize().multiplyScalar(1.18 + wave);
      position.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }

    position.needsUpdate = true;
    geom.computeVertexNormals();
    return geom;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.12 + state.pointer.x * 0.08;
    meshRef.current.rotation.x = Math.sin(t * 0.5) * 0.08 + state.pointer.y * 0.05;
    meshRef.current.position.y = Math.sin(t * 0.9) * 0.06;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.45}>
      <mesh ref={meshRef} geometry={geometry} scale={1.38}>
        <MeshTransmissionMaterial
          thickness={0.55}
          roughness={0.15}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.03}
          backside
          samples={6}
          resolution={128}
          anisotropy={0.15}
          distortion={0.18}
          distortionScale={0.16}
          temporalDistortion={0.1}
          color="#efdbd5"
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-white via-[#fff7f5] to-[#f8ece8] shadow-soft md:h-[520px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.65),transparent_34%),radial-gradient(circle_at_70%_65%,rgba(217,193,163,0.18),transparent_25%)]" />
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 4.5], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[3, 3, 4]} intensity={1.2} color="#fff4ef" />
          <pointLight position={[-2, -1, 2]} intensity={0.8} color="#f5d7ce" />
          <OrganicBlob />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
