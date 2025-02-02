import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, Briefcase, GraduationCap } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const timeline: TimelineEvent[] = [
  {
    date: "2024",
    title: "Senior Developer",
    description: "Lead développeur sur des projets innovants en réalité virtuelle et intelligence artificielle.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    date: "2022",
    title: "Full Stack Developer",
    description: "Développement d'applications web complexes utilisant les dernières technologies.",
    icon: <Code className="w-6 h-6" />
  },
  {
    date: "2020",
    title: "Startup Experience",
    description: "Co-fondateur d'une startup spécialisée dans les solutions IoT.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    date: "2018",
    title: "Master en Informatique",
    description: "Spécialisation en Intelligence Artificielle et Réalité Virtuelle.",
    icon: <GraduationCap className="w-6 h-6" />
  }
];

function About() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">À Propos de Moi</h1>
          <p className="text-xl text-gray-400">
            Passionné par l'innovation et les nouvelles technologies
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-indigo-600" />

          {/* Événements */}
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center justify-between mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                {event.icon}
              </div>

              {/* Contenu */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <span className="text-indigo-400 font-bold">{event.date}</span>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>

              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Compétences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technologies Frontend</h3>
              <div className="space-y-2">
                {['React', 'Vue.js', 'Three.js', 'WebGL', 'TypeScript'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      />
                    </div>
                    <span className="ml-4 min-w-[100px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technologies Backend</h3>
              <div className="space-y-2">
                {['Node.js', 'Python', 'GraphQL', 'MongoDB', 'AWS'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      />
                    </div>
                    <span className="ml-4 min-w-[100px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;