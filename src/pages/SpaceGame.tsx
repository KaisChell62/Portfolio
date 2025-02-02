import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Vector3 } from 'three';
import { Text, Stars } from '@react-three/drei';

function Ship({ position, rotation }: { position: Vector3; rotation: number }) {
  const meshRef = useRef<THREE.Mesh>();

  return (
    <mesh ref={meshRef} position={position} rotation={[0, 0, rotation]}>
      <coneGeometry args={[0.5, 1, 3]} />
      <meshStandardMaterial color="#4f46e5" />
    </mesh>
  );
}

function Asteroid({ position }: { position: Vector3 }) {
  const meshRef = useRef<THREE.Mesh>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <dodecahedronGeometry args={[0.5]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  );
}

function Game() {
  const [shipPosition, setShipPosition] = useState(new Vector3(0, -3, 0));
  const [shipRotation, setShipRotation] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useFrame(({ mouse }) => {
    if (!gameOver) {
      const newX = (mouse.x * 5);
      setShipPosition(new Vector3(newX, -3, 0));
      setShipRotation(mouse.x * 0.5);
    }
  });

  return (
    <>
      <Stars />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      <Ship position={shipPosition} rotation={shipRotation} />
      
      {/* Score */}
      <Text
        position={[-5, 4, 0]}
        color="white"
        fontSize={0.5}
        anchorX="left"
      >
        {`Score: ${score}`}
      </Text>
      
      {gameOver && (
        <Text
          position={[0, 0, 0]}
          color="white"
          fontSize={1}
          anchorX="center"
        >
          Game Over!
        </Text>
      )}
    </>
  );
}

function SpaceGame() {
  return (
    <div className="h-screen bg-gray-900">
      <Canvas>
        <Game />
      </Canvas>
    </div>
  );
}

export default SpaceGame;