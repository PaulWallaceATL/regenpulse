"use client";

import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Placeholder GLB for facility/department views. Replace with department-specific URLs later.
 * For production: use compressed GLB/GLTF for web (e.g. gltf-pipeline with Draco, or export
 * compressed from Blender) to keep file size small and load times fast.
 */
export const PLACEHOLDER_FACILITY_GLB =
  "https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@main/2.0/Duck/glTF-Binary/Duck.glb";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const clone = useMemo(() => {
    const c = scene.clone();
    c.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return c;
  }, [scene]);

  return (
    <primitive
      object={clone}
      scale={2}
      position={[0, -0.5, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

function FallbackScene() {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#64748b" />
    </mesh>
  );
}

function SceneContent({ modelUrl }: { modelUrl: string | undefined }) {
  if (modelUrl) {
    return (
      <Suspense fallback={<FallbackScene />}>
        <Model url={modelUrl} />
      </Suspense>
    );
  }
  return <FallbackScene />;
}

export interface FacilityRenderProps {
  /**
   * URL of a GLB/GLTF model. When omitted, a simple fallback shape is shown.
   * Prefer compressed GLB (e.g. Draco) for faster loading.
   */
  modelUrl?: string;
  /** Optional className for the wrapper (e.g. height). */
  className?: string;
}

export function FacilityRender({ modelUrl, className }: FacilityRenderProps) {
  return (
    <div
      className={className}
      style={{ minHeight: 200 }}
    >
      <Canvas
        camera={{ position: [2, 1.5, 2], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[4, 6, 4]}
          intensity={1}
          castShadow
          shadow-mapSize-width={512}
          shadow-mapSize-height={512}
        />
        <SceneContent modelUrl={modelUrl} />
        <OrbitControls
          enableDamping
          dampingFactor={0.05}
          minDistance={1}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
}
