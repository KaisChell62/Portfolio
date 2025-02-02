import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

interface Experience {
  title: string;
  description: string;
  demo: React.ReactNode;
}

const experiences: Experience[] = [
  {
    title: "WebGL Shader Experience",
    description: "Explorez les possibilités créatives des shaders WebGL avec cette démo interactive.",
    demo: (
      <Canvas>
        <Stars />
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#4f46e5" />
        </mesh>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    )
  },
  // Ajoutez d'autres expériences ici
];

function Experiences() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Expériences Interactives</h1>
          <p className="text-xl text-gray-400">
            Découvrez des démos techniques et créatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <div className="h-64 relative">
                {experience.demo}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                <p className="text-gray-400 mb-4">{experience.description}</p>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Explorer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;