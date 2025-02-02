import { useState } from 'react';
import { motion } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle technologie est utilisée pour le rendu 3D dans ce portfolio ?",
    options: ["Three.js", "Unity", "Unreal Engine", "WebGL pur"],
    correctAnswer: 0
  },
  // Ajoutez plus de questions ici
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {showScore ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-8 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Quiz terminé !</h2>
            <p className="text-xl mb-6">
              Votre score : {score} sur {questions.length}
            </p>
            <button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
              }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Recommencer
            </button>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-gray-800 p-8 rounded-lg"
          >
            <div className="mb-8">
              <div className="text-sm text-gray-400 mb-2">
                Question {currentQuestion + 1} sur {questions.length}
              </div>
              <h2 className="text-2xl font-bold">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full p-4 text-left bg-gray-700 rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Quiz;