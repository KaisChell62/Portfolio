import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Scene3D from './components/Scene3D';
import Chatbot from './components/Chatbot';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
import Quiz from './pages/Quiz';
import SpaceGame from './pages/SpaceGame';
import About from './pages/About';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="bg-gray-900 text-white min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="text-xl font-bold">Portfolio</Link>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop menu */}
              <div className="hidden md:flex space-x-4">
                <Link to="/quiz" className="hover:text-indigo-400 transition-colors">Quiz</Link>
                <Link to="/game" className="hover:text-indigo-400 transition-colors">Mini-jeux</Link>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">À propos</Link>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
                <Link to="/experiences" className="hover:text-indigo-400 transition-colors">Expériences</Link>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden bg-gray-800"
          >
            <div className="px-4 py-2 space-y-2">
              <Link to="/quiz" className="block hover:text-indigo-400 transition-colors">Quiz</Link>
              <Link to="/game" className="block hover:text-indigo-400 transition-colors">Mini-jeux</Link>
              <Link to="/about" className="block hover:text-indigo-400 transition-colors">À propos</Link>
              <Link to="/contact" className="block hover:text-indigo-400 transition-colors">Contact</Link>
              <Link to="/experiences" className="block hover:text-indigo-400 transition-colors">Expériences</Link>
            </div>
          </motion.div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section avec Scene 3D */}
              <div className="h-screen relative">
                <Scene3D />
                <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
                  <div className="max-w-4xl px-4">
                    <h1 className="text-6xl font-bold mb-6">Portfolio Immersif</h1>
                    <p className="text-xl mb-8">Explorez mon univers créatif en 3D</p>
                    <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors">
                      Commencer l'aventure
                    </button>
                  </div>
                </div>
              </div>

              {/* Section Projets */}
              <div className="py-20 px-4 max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center">Mes Projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <ProjectCard key={project.id} {...project} index={index} />
                  ))}
                </div>
              </div>
            </>
          } />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/game" element={<SpaceGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <div className="flex space-x-6 mb-8">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400">&copy; 2024 Portfolio Immersif. Tous droits réservés.</p>
          </div>
        </footer>

        {/* Chatbot */}
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;