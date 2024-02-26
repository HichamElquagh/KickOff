# KickOff


## Description du Projet

Ce projet est une application mobile permettant aux utilisateurs de suivre des matchs de football, consulter les détails des matchs ainsi que des joueurs. L'application est divisée en quatre écrans principaux :

1. **Écran 1: Matchs**: Affiche une liste des matchs de football avec des fonctionnalités de filtrage par "Tous les matchs" ou "Matchs en direct". Les utilisateurs peuvent également sauvegarder des matchs dans leurs favoris.

2. **Écran 2: Détails du Match**: Affiche des informations détaillées sur un match sélectionné, telles que les équipes, la date, l'heure, etc. Les utilisateurs ont la possibilité de revenir à l'écran des matchs.

3. **Écran 3: Joueurs**: Affiche une liste de tous les joueurs avec leur photo et leur nom complet. Les utilisateurs peuvent rechercher un joueur par son nom et accéder aux détails d'un joueur spécifique.

4. **Écran 4: Détails du Joueur**: Affiche des informations détaillées sur un joueur sélectionné, telles que sa taille, son poids, sa date de naissance, etc. Les utilisateurs ont la possibilité de revenir à l'écran des joueurs.

## Fonctionnalités Principales

- Affichage des matchs de football avec possibilité de filtrage.
- Consultation des détails des matchs et des joueurs.
- Recherche de joueurs par leur nom.
- Sauvegarde des matchs favoris.
- Gestion de l'état de l'application avec Redux.
- Tests réalisés avec Jest et Jest-Expo.
- Dockerisation de l'application.

## Prérequis

Avant d'exécuter l'application, assurez-vous d'avoir installé :

- Node.js
- npm (ou yarn)
- Docker (pour la dockerisation de l'application)

## Installation

1. Clonez ce dépôt sur votre machine locale.
2. Accédez au répertoire du projet via votre terminal.
3. Installez les dépendances en exécutant la commande `npm install` ou `yarn install`.
4. Pour exécuter l'application localement, utilisez la commande `npm start` ou `yarn start`.

## Tests

Les tests unitaires sont réalisés avec Jest et Jest-Expo. Pour exécuter les tests, utilisez la commande : `npm run test `


## Dockerisation

Pour dockeriser l'application, assurez-vous d'avoir Docker installé sur votre machine. Utilisez les commandes suivantes :

1. Construire l'image Docker : `docker build -t nom_de_votre_image `

2. Exécuter le conteneur Docker : `docker run nom_de_votre_image`

Remplacez `nom_de_votre_image` par le nom que vous souhaitez donner à votre image Docker.

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue pour signaler des bogues ou à proposer des améliorations via des pull requests.

## Auteurs

Ce projet a été développé par [HichamElquagh].





