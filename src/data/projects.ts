export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string[];
  learnings: string[];
  interactive?: {
    type: 'demo3d' | 'video' | 'animation';
    content: string;
  };
}

export const projects: Project[] = [
  {
    id: "space-explorer",
    title: "Space Explorer",
    description: "Application web 3D interactive pour explorer le système solaire",
    fullDescription: "Une expérience immersive permettant aux utilisateurs de voyager à travers le système solaire en 3D. Utilise Three.js pour le rendu 3D et inclut des informations détaillées sur chaque planète.",
    image: "https://source.unsplash.com/random/800x600?space",
    technologies: ["React", "Three.js", "WebGL", "TypeScript"],
    githubUrl: "https://github.com/username/space-explorer",
    demoUrl: "https://space-explorer.demo",
    features: [
      "Navigation 3D fluide",
      "Informations détaillées sur les planètes",
      "Effets visuels avancés",
      "Mode réalité virtuelle"
    ],
    challenges: [
      "Optimisation des performances 3D",
      "Gestion des contrôles utilisateur",
      "Création d'assets 3D réalistes"
    ],
    learnings: [
      "Maîtrise de Three.js",
      "Optimisation WebGL",
      "Architecture d'applications 3D"
    ],
    interactive: {
      type: "demo3d",
      content: "solar-system"
    }
  },
  {
    id: "ai-chat-platform",
    title: "AI Chat Platform",
    description: "Plateforme de chat alimentée par l'IA avec des fonctionnalités avancées",
    fullDescription: "Une plateforme de chat moderne utilisant des modèles d'IA pour fournir des réponses intelligentes et contextuelles aux utilisateurs.",
    image: "https://source.unsplash.com/random/800x600?artificial-intelligence",
    technologies: ["React", "Node.js", "OpenAI", "WebSocket"],
    githubUrl: "https://github.com/username/ai-chat",
    demoUrl: "https://ai-chat.demo",
    features: [
      "Chat en temps réel",
      "Intégration IA",
      "Reconnaissance vocale",
      "Historique des conversations"
    ],
    challenges: [
      "Gestion des conversations en temps réel",
      "Optimisation des requêtes API",
      "Protection des données utilisateurs"
    ],
    learnings: [
      "Intégration d'APIs d'IA",
      "Gestion d'état complexe",
      "Sécurité des applications"
    ],
    interactive: {
      type: "demo3d",
      content: "chat-demo"
    }
  },
  {
    id: "quantum-visualizer",
    title: "Quantum Visualizer",
    description: "Visualisation interactive de concepts quantiques",
    fullDescription: "Un outil éducatif qui permet de visualiser et comprendre les concepts de la mécanique quantique à travers des simulations interactives.",
    image: "https://source.unsplash.com/random/800x600?quantum",
    technologies: ["React", "D3.js", "WebGL", "Python"],
    githubUrl: "https://github.com/username/quantum-visualizer",
    demoUrl: "https://quantum-viz.demo",
    features: [
      "Simulations quantiques interactives",
      "Visualisations complexes",
      "Mode éducatif guidé",
      "Exercices pratiques"
    ],
    challenges: [
      "Représentation de concepts abstraits",
      "Performance des calculs",
      "Interface utilisateur intuitive"
    ],
    learnings: [
      "Physique quantique",
      "Visualisation de données",
      "UX pour contenus complexes"
    ]
  },
  {
    id: "eco-tracker",
    title: "Eco Tracker",
    description: "Application de suivi d'impact environnemental",
    fullDescription: "Une application mobile qui aide les utilisateurs à suivre et réduire leur empreinte carbone à travers des défis quotidiens et des visualisations de données.",
    image: "https://source.unsplash.com/random/800x600?environment",
    technologies: ["React Native", "Node.js", "MongoDB", "D3.js"],
    githubUrl: "https://github.com/username/eco-tracker",
    demoUrl: "https://eco-tracker.demo",
    features: [
      "Suivi d'empreinte carbone",
      "Défis écologiques",
      "Visualisation de données",
      "Conseils personnalisés"
    ],
    challenges: [
      "Précision des calculs d'impact",
      "Engagement utilisateur",
      "Scalabilité"
    ],
    learnings: [
      "Impact environnemental",
      "Gamification",
      "Mobile Development"
    ]
  },
  {
    id: "neural-art",
    title: "Neural Art Generator",
    description: "Générateur d'art utilisant le deep learning",
    fullDescription: "Une application web qui utilise des réseaux de neurones pour générer et transformer des œuvres d'art, permettant aux utilisateurs d'explorer la créativité assistée par l'IA.",
    image: "https://source.unsplash.com/random/800x600?art",
    technologies: ["Python", "TensorFlow", "React", "WebGL"],
    githubUrl: "https://github.com/username/neural-art",
    demoUrl: "https://neural-art.demo",
    features: [
      "Génération d'art par IA",
      "Transfert de style",
      "Galerie interactive",
      "Export haute résolution"
    ],
    challenges: [
      "Optimisation des modèles",
      "Temps de génération",
      "Interface utilisateur créative"
    ],
    learnings: [
      "Deep Learning",
      "Traitement d'images",
      "UX Design"
    ]
  },
  {
    id: "crypto-dashboard",
    title: "Crypto Analytics Dashboard",
    description: "Dashboard temps réel pour le trading de cryptomonnaies",
    fullDescription: "Une plateforme complète d'analyse de cryptomonnaies offrant des visualisations en temps réel, des alertes personnalisées et des outils d'analyse technique.",
    image: "https://source.unsplash.com/random/800x600?cryptocurrency",
    technologies: ["React", "Node.js", "WebSocket", "D3.js"],
    githubUrl: "https://github.com/username/crypto-dashboard",
    demoUrl: "https://crypto-dash.demo",
    features: [
      "Données en temps réel",
      "Analyse technique",
      "Alertes personnalisées",
      "Portfolio tracking"
    ],
    challenges: [
      "Gestion des données en temps réel",
      "Performance des graphiques",
      "Précision des calculs"
    ],
    learnings: [
      "Finance décentralisée",
      "WebSocket",
      "Visualisation de données"
    ]
  },
  {
    id: "vr-education",
    title: "VR Education Platform",
    description: "Plateforme éducative en réalité virtuelle",
    fullDescription: "Une plateforme d'apprentissage en réalité virtuelle permettant aux étudiants d'explorer des concepts scientifiques et historiques de manière immersive.",
    image: "https://source.unsplash.com/random/800x600?virtual-reality",
    technologies: ["Unity", "WebXR", "React", "Three.js"],
    githubUrl: "https://github.com/username/vr-education",
    demoUrl: "https://vr-edu.demo",
    features: [
      "Expériences VR immersives",
      "Contenu éducatif interactif",
      "Multi-utilisateurs",
      "Analytics d'apprentissage"
    ],
    challenges: [
      "Performance VR",
      "Design pédagogique",
      "Accessibilité"
    ],
    learnings: [
      "Réalité virtuelle",
      "Pédagogie numérique",
      "WebXR"
    ]
  },
  {
    id: "smart-home",
    title: "Smart Home Hub",
    description: "Interface de contrôle pour maison connectée",
    fullDescription: "Une application web et mobile pour contrôler et automatiser les appareils connectés d'une maison intelligente, avec support vocal et apprentissage des habitudes.",
    image: "https://source.unsplash.com/random/800x600?smart-home",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    githubUrl: "https://github.com/username/smart-home",
    demoUrl: "https://smart-home.demo",
    features: [
      "Contrôle vocal",
      "Automatisations",
      "Analyse de consommation",
      "Sécurité avancée"
    ],
    challenges: [
      "Intégration IoT",
      "Sécurité",
      "Fiabilité"
    ],
    learnings: [
      "IoT",
      "Domotique",
      "Sécurité réseau"
    ]
  },
  {
    id: "music-visualizer",
    title: "3D Music Visualizer",
    description: "Visualiseur de musique en 3D temps réel",
    fullDescription: "Une application web qui crée des visualisations 3D dynamiques et interactives en fonction de la musique, utilisant l'API Web Audio et WebGL.",
    image: "https://source.unsplash.com/random/800x600?music",
    technologies: ["Three.js", "Web Audio API", "React", "WebGL"],
    githubUrl: "https://github.com/username/music-viz",
    demoUrl: "https://music-viz.demo",
    features: [
      "Analyse audio en temps réel",
      "Visualisations 3D personnalisables",
      "Mode VR",
      "Partage social"
    ],
    challenges: [
      "Performance audio",
      "Synchronisation",
      "Créativité visuelle"
    ],
    learnings: [
      "Audio processing",
      "WebGL",
      "Creative coding"
    ]
  },
  {
    id: "drone-simulator",
    title: "Drone Flight Simulator",
    description: "Simulateur de vol de drone en 3D",
    fullDescription: "Un simulateur de vol de drone en 3D permettant aux utilisateurs d'apprendre à piloter dans différents environnements et conditions météorologiques.",
    image: "https://source.unsplash.com/random/800x600?drone",
    technologies: ["Unity", "WebGL", "React", "Three.js"],
    githubUrl: "https://github.com/username/drone-sim",
    demoUrl: "https://drone-sim.demo",
    features: [
      "Physique réaliste",
      "Environnements variés",
      "Mode apprentissage",
      "Challenges"
    ],
    challenges: [
      "Physique du vol",
      "Performance 3D",
      "Contrôles intuitifs"
    ],
    learnings: [
      "Simulation physique",
      "Game development",
      "UX 3D"
    ]
  }
];