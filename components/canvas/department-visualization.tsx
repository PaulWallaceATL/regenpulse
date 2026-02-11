"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

const DEPT_COUNT = 15;
const RADIUS = 4;
const TWO_PI = Math.PI * 2;

type ShapeKind =
  | "box"
  | "sphere"
  | "torus"
  | "torusKnot"
  | "icosahedron"
  | "octahedron"
  | "tetrahedron"
  | "dodecahedron"
  | "cylinder"
  | "cone"
  | "ring"
  | "capsule"
  | "doubleCone";

const SHAPE_KINDS: ShapeKind[] = [
  "box",
  "sphere",
  "torus",
  "torusKnot",
  "icosahedron",
  "octahedron",
  "tetrahedron",
  "dodecahedron",
  "cylinder",
  "cone",
  "ring",
  "capsule",
  "doubleCone",
];

const BASE_POSITIONS = Array.from({ length: DEPT_COUNT }, (_, i) => {
  const angle = (i / DEPT_COUNT) * TWO_PI;
  const yOffset = Math.sin(i * 0.7) * 0.8;
  return new THREE.Vector3(
    Math.cos(angle) * RADIUS,
    yOffset,
    Math.sin(angle) * RADIUS
  );
});

const COLORS = [
  "#64748b", "#475569", "#0ea5e9", "#06b6d4", "#10b981",
  "#84cc16", "#eab308", "#f97316", "#ef4444", "#ec4899",
  "#8b5cf6", "#6366f1", "#14b8a6", "#22c55e", "#a855f7",
];

const SCALE_HOVER = new THREE.Vector3(1.15, 1.15, 1.15);
const SCALE_NORMAL = new THREE.Vector3(1, 1, 1);

function DepartmentShape({
  index,
  shapeKind,
  materialType,
  color,
  isHovered,
  onHover,
}: {
  index: number;
  shapeKind: ShapeKind;
  materialType: "standard" | "physical";
  color: string;
  isHovered: boolean;
  onHover: (index: number, hovered: boolean) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const emissiveIntensityRef = useRef(0);

  const materialProps = useMemo(
    () => ({
      color,
      metalness: 0.2 + (index % 3) * 0.2,
      roughness: 0.4 + (index % 4) * 0.15,
      ...(materialType === "physical"
        ? { clearcoat: 0.3, clearcoatRoughness: 0.2 }
        : {}),
    }),
    [color, index, materialType]
  );

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh?.material) return;
    const mat = mesh.material as THREE.MeshStandardMaterial;
    if (!mat.emissive) return;
    const target = isHovered ? 0.6 : 0;
    emissiveIntensityRef.current += (target - emissiveIntensityRef.current) * Math.min(delta * 8, 1);
    mat.emissiveIntensity = emissiveIntensityRef.current;
    mat.emissive.setStyle(color);
  });

  const common = {
    ref: meshRef,
    castShadow: true,
    receiveShadow: true,
    onPointerOver: () => onHover(index, true),
    onPointerOut: () => onHover(index, false),
  };

  if (shapeKind === "box") {
    return (
      <mesh {...common}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "sphere") {
    return (
      <mesh {...common}>
        <sphereGeometry args={[0.35, 24, 24]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "torus") {
    return (
      <mesh {...common} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.12, 16, 32]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "torusKnot") {
    return (
      <mesh {...common} scale={0.4}>
        <torusKnotGeometry args={[0.4, 0.12, 64, 16]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "icosahedron") {
    return (
      <mesh {...common}>
        <icosahedronGeometry args={[0.4, 0]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "octahedron") {
    return (
      <mesh {...common}>
        <octahedronGeometry args={[0.4, 0]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "tetrahedron") {
    return (
      <mesh {...common}>
        <tetrahedronGeometry args={[0.45, 0]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "dodecahedron") {
    return (
      <mesh {...common}>
        <dodecahedronGeometry args={[0.35, 0]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "cylinder") {
    return (
      <mesh {...common}>
        <cylinderGeometry args={[0.25, 0.25, 0.5, 24]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "cone") {
    return (
      <mesh {...common}>
        <cylinderGeometry args={[0.3, 0, 0.5, 24]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "ring") {
    return (
      <mesh {...common} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.2, 0.35, 32]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} side={THREE.DoubleSide} />
        ) : (
          <meshPhysicalMaterial {...materialProps} side={THREE.DoubleSide} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "capsule") {
    return (
      <mesh {...common}>
        <capsuleGeometry args={[0.2, 0.35, 8, 16]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }
  if (shapeKind === "doubleCone") {
    return (
      <mesh {...common} rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[0.3, 0, 0.5, 24]} />
        {materialType === "standard" ? (
          <meshStandardMaterial {...materialProps} />
        ) : (
          <meshPhysicalMaterial {...materialProps} />
        )}
      </mesh>
    );
  }

  return null;
}

function ShapeDriftAndRotation({
  groupRefs,
  hoveredIndex,
}: {
  groupRefs: React.MutableRefObject<(THREE.Group | null)[]>;
  hoveredIndex: number | null;
}) {
  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    for (let i = 0; i < DEPT_COUNT; i++) {
      const group = groupRefs.current[i];
      if (!group) continue;
      const base = BASE_POSITIONS[i];
      const phase = i * 0.4;
      group.position.set(
        base.x + Math.sin(t * 0.35 + phase) * 0.18,
        base.y + Math.cos(t * 0.28 + phase * 1.1) * 0.12,
        base.z + Math.sin(t * 0.22 + phase * 0.7) * 0.18
      );
      group.rotation.y += delta * (0.15 + (i % 3) * 0.08);
      group.rotation.x += delta * 0.04;
      group.rotation.z += delta * (0.02 + (i % 2) * 0.03);
      const targetScale = hoveredIndex === i ? SCALE_HOVER : SCALE_NORMAL;
      group.scale.lerp(targetScale, Math.min(delta * 6, 1));
    }
  });
  return null;
}

function CameraRig() {
  const { camera, controls } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0, 10));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useEffect(() => {
    const pos = { x: 0, y: 0, z: 10 };
    const look = { x: 0, y: 0, z: 0 };
    const tl = gsap
      .timeline({ repeat: -1 })
      .to(pos, {
        x: 1.4,
        z: 8,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        onUpdate: () => {
          targetPos.current.set(pos.x, pos.y, pos.z);
        },
      })
      .to(
        pos,
        {
          y: 0.6,
          duration: 4,
          ease: "sine.inOut",
          yoyo: true,
          onUpdate: () => {
            targetPos.current.set(pos.x, pos.y, pos.z);
          },
        },
        "<"
      )
      .to(
        look,
        {
          x: 0.8,
          y: 0.3,
          duration: 6,
          ease: "sine.inOut",
          yoyo: true,
          onUpdate: () => {
            targetLookAt.current.set(look.x, look.y, look.z);
          },
        },
        "<"
      );
    return () => tl.kill();
  }, []);

  useFrame(() => {
    camera.position.lerp(targetPos.current, 0.03);
    if (controls && "target" in controls) {
      (controls as { target: THREE.Vector3 }).target.lerp(
        targetLookAt.current,
        0.03
      );
    }
  });
  return null;
}

function Scene() {
  const groupRefs = useRef<(THREE.Group | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[6, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={20}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />
      <directionalLight position={[-4, 4, -3]} intensity={0.25} />
      <ShapeDriftAndRotation groupRefs={groupRefs} hoveredIndex={hoveredIndex} />
      <CameraRig />
      {BASE_POSITIONS.map((_, i) => (
        <group
          key={i}
          ref={(el) => {
            groupRefs.current[i] = el;
          }}
        >
          <DepartmentShape
            index={i}
            shapeKind={SHAPE_KINDS[i % SHAPE_KINDS.length]}
            materialType={i % 2 === 0 ? "standard" : "physical"}
            color={COLORS[i % COLORS.length]}
            isHovered={hoveredIndex === i}
            onHover={(idx, hovered) => setHoveredIndex(hovered ? idx : null)}
          />
        </group>
      ))}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={14}
      />
    </>
  );
}

export function DepartmentVisualization() {
  return (
    <div className="h-full w-full min-h-[280px] rounded-xl overflow-hidden bg-black/5">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        shadows
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
