import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, Text, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Vector3, Mesh, Group } from 'three';

function SpaceStation() {
  const stationRef = useRef<Group>(null);

  useFrame((state) => {
    if (stationRef.current) {
      stationRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={stationRef} position={[0, 0, -10]}>
      {/* Station spatiale simplifiée avec des formes géométriques */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 4, 32]} />
        <meshStandardMaterial color="#4f46e5" />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.2, 16, 100]} />
        <meshStandardMaterial color="#818cf8" />
      </mesh>
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[1, 0.5, 1]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
    </group>
  );
}

function FloatingText({ text, position }: { text: string; position: [number, number, number] }) {
  const textRef = useRef<Mesh>(null);
  const initialPosition = new Vector3(...position);

  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.y = initialPosition.y + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <Text
      ref={textRef}
      position={position}
      fontSize={0.5}
      color="#4f46e5"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}

function CameraController() {
  const { camera, mouse } = useThree();
  const targetPosition = useRef(new Vector3());

  useFrame(() => {
    targetPosition.current.set(
      mouse.x * 2,
      mouse.y * 2,
      camera.position.z
    );
    camera.position.lerp(targetPosition.current, 0.05);
  });

  return null;
}

function Scene3D() {
  return (
    <Canvas className="w-full h-screen">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <CameraController />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SpaceStation />
        
        <FloatingText text="Portfolio" position={[-2, 2, 0]} />
        <FloatingText text="Immersif" position={[1, 1, 0]} />
        
        {/* Planète décorative */}
        <mesh position={[3, -2, -5]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial
            color="#4338ca"
            emissive="#4338ca"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Satellites décoratifs */}
        <mesh position={[-3, 1, -3]} rotation={[0.5, 0.5, 0]}>
          <dodecahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#818cf8" />
        </mesh>

        <mesh position={[2, -1, -2]} rotation={[0.2, 0.4, 0.1]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#6366f1" />
        </mesh>
      </Suspense>
    </Canvas>
  );
}

export default Scene3D;