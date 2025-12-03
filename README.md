# Playdge

Playdge est une application mobile permettant de réaliser des projets personnels en engageant des sommes d'argent comme source de motivation.

## 🏗 Architecture Technique

Le projet est structuré en deux parties principales :

- **Backend** : API REST développée avec **NestJS** (Node.js), utilisant **Prisma** comme ORM et **PostgreSQL** comme base de données.
- **Mobile** : Application multiplateforme (iOS/Android) développée avec **React Native** et **Expo**, utilisant **Expo Router** pour la navigation.

## 🚀 Démarrage Rapide

### Prérequis
- Docker & Docker Compose
- Node.js (v18+)
- Environnement de développement mobile (Xcode pour iOS, Android Studio pour Android) ou l'application Expo Go sur votre téléphone.

### 1. Base de données (Docker)
Lancer la base de données PostgreSQL locale via Docker Compose :

```bash
# À la racine du projet
docker-compose up -d
```
Cela lancera un conteneur PostgreSQL accessible sur le port `5433` (configuré dans `docker-compose.yml`).
Le projet est également configuré pour **OrbStack** avec le domaine `postgres.playdge.orb.local`.

### 2. Backend (API)
Installation des dépendances et démarrage du serveur de développement :

```bash
cd backend

# Installation des dépendances
npm install

# Initialisation de la base de données (Migrations)
npx prisma migrate dev

# Lancer le serveur en mode développement
npm run start:dev
```
L'API sera accessible sur `http://localhost:3000`.
Endpoints principaux :
- `GET /projects`
- `POST /projects`

### 3. Mobile (Frontend)
L'application mobile est située dans le dossier `mobile/`.

```bash
cd mobile

# Installation des dépendances
npm install

# Lancer l'application
npm start
```

Cela démarrera le serveur de développement Metro.
- Appuyez sur `a` pour lancer sur Android (nécessite un émulateur ou un appareil connecté).
- Appuyez sur `i` pour lancer sur iOS (nécessite un simulateur - macOS uniquement).
- Scannez le QR code avec l'application **Expo Go** pour tester sur votre appareil physique.

## 🛠 Commandes Utiles

### Backend
- `npm run test` : Lancer les tests unitaires.
- `npm run build` : Compiler le projet.
- `npx prisma studio` : Interface web pour visualiser la base de données.

### Mobile
- `npm start` : Démarrer le serveur de développement.
- `npm run android` : Lancer sur Android.
- `npm run ios` : Lancer sur iOS.
