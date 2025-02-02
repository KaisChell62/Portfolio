import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi du message
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', message: '' });

    // Réinitialiser le message de succès après 5 secondes
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-gray-400">
            Envoyez-moi un message et je vous répondrai dès que possible
          </p>
        </motion.div>

        <div className="relative">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full bg-indigo-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700'
              }`}
            >
              <Send size={20} />
              <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer'}</span>
            </motion.button>

            {/* Animation de succès */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-90 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <Send size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">Je vous répondrai dès que possible.</p>
                </div>
              </motion.div>
            )}
          </motion.form>

          {/* Décoration spatiale */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-600 rounded-full opacity-10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600 rounded-full opacity-10 blur-3xl" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
