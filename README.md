# Developer Portfolio Template

Bienvenue dans cette template de portfolio interactif conçue pour les développeurs ! Ce projet fournit un portfolio clé en main, idéal pour présenter vos compétences, vos projets, et vos expériences dans un format moderne et engageant. Avec des animations avancées, un mini-jeu, un chatbot, et bien plus, cette template est parfaite pour impressionner vos visiteurs.

---

## 🧩 **Fonctionnalités principales**

- **Chatbot interactif** : Un chatbot prêt à l'emploi, à connecter à l'API de votre choix (OpenAI, DeepSeek, etc.).
- **Mini-jeu spatial** : Un jeu intégré pour ajouter une touche ludique à votre portfolio.
- **Quiz** : Un quiz personnalisable pour engager vos visiteurs.
- **Pages détaillées** : Inclut des pages comme "À propos", "Contact", "Projets" et "Expériences".
- **Composants modulaires** : Code facilement personnalisable grâce à des composants React bien structurés.
- **Animations avancées** : Utilise Framer Motion et Three.js pour un rendu immersif.

---

## 📂 **Structure du projet**

Voici la structure principale du projet :

```
src
├── components
│   ├── Chatbot.tsx         # Composant du chatbot interactif
│   ├── ProjectCard.tsx     # Carte pour afficher les projets
│   ├── Scene3D.tsx         # Scène 3D pour des animations immersives
│
├── data
│   ├── projects.ts         # Données des projets
│
├── pages
│   ├── About.tsx           # Page "À propos"
│   ├── Contact.tsx         # Page de contact
│   ├── Experiences.tsx     # Page "Expériences"
│   ├── ProjectDetail.tsx   # Détails des projets
│   ├── Quiz.tsx            # Page du quiz
│   ├── SpaceGame.tsx       # Mini-jeu spatial
│
├── App.tsx                 # Composant racine de l'application
├── index.css               # Styles globaux
├── main.tsx                # Point d'entrée de l'application
├── vite-env.d.ts           # Déclarations spécifiques à Vite

.gitignore                  # Fichiers ignorés par Git
index.html                  # Fichier HTML principal
package.json                # Dépendances et scripts
postcss.config.js           # Configuration PostCSS
vite.config.ts              # Configuration Vite
```

---

## 🚀 **Installation et démarrage**

### **1. Cloner le dépôt**
```bash
git clone <URL-DU-DÉPÔT>
cd <nom-du-dépôt>
```

### **2. Installer les dépendances**
```bash
npm install
```

### **3. Lancer le serveur de développement**
```bash
npm run dev
```
Ouvrez votre navigateur à [http://localhost:5173](http://localhost:5173).

---

## ✏️ **Personnalisation**

### **1. Ajouter des projets**
Ajoutez vos projets dans le fichier `src/data/projects.ts`. Exemple :
```ts
export const projects = [
  {
    id: 1,
    title: "Mon projet incroyable",
    description: "Description de mon projet",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/utilisateur/projet",
    demo: "https://monprojetdemo.com"
  },
  // Ajoutez plus de projets ici
];
```

### **2. Connecter une API au chatbot**
Le composant `Chatbot.tsx` est préconfiguré pour accepter une API. Modifiez la fonction suivante :
```ts
async function fetchResponse(message: string) {
  const response = await fetch('URL-DE-VOTRE-API', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data.reply;
}
```
Remplacez `URL-DE-VOTRE-API` par l'URL de l'API de votre choix (par exemple, OpenAI ou DeepSeek).

### **3. Modifier le style**
Les styles globaux sont définis dans `src/index.css`. Vous pouvez également utiliser Tailwind CSS pour personnaliser rapidement l'apparence.

---

## 🧪 **Fonctionnalités incluses**

### **Chatbot**
- Emplacement : `src/components/Chatbot.tsx`
- Préconfiguré pour accepter une API d'intelligence artificielle.

### **Mini-jeu spatial**
- Emplacement : `src/pages/SpaceGame.tsx`
- Basé sur Three.js pour un rendu immersif.

### **Quiz**
- Emplacement : `src/pages/Quiz.tsx`
- Contient un quiz interactif, facile à personnaliser.

### **Pages "Projets" et "Expériences"**
- `src/pages/ProjectDetail.tsx` pour afficher les détails des projets.
- `src/pages/Experiences.tsx` pour lister les expériences.

### **À propos**
- Emplacement : `src/pages/About.tsx`
- Présente vos compétences, vos outils, et votre parcours.

### **Contact**
- Emplacement : `src/pages/Contact.tsx`
- Formulaire de contact fonctionnel avec une animation de succès.

---

## 🛠️ **Technologies utilisées**

- **React** : Bibliothèque pour l'interface utilisateur.
- **TypeScript** : Typage statique pour un développement robuste.
- **Vite** : Environnement de développement rapide.
- **Tailwind CSS** : Framework CSS pour un design moderne et réactif.
- **Framer Motion** : Animations avancées.
- **Three.js** : Scènes et objets 3D interactifs.

---

## 💡 **Contribuer**

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

---

## 📄 **Licence**

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier, et le redistribuer.

---

### ⭐ **Merci d'utiliser cette template !**
N'hésitez pas à la partager avec d'autres développeurs qui souhaitent créer leur propre portfolio interactif. 🚀
