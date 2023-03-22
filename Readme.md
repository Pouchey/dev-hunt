# Dev-Hunt 🤖

Ce projet est un bot Discord en TypeScript qui utilise la librairie discord.js. 
Ce bot permet de récupérer les offres d'emplois publiées concernant le développement informatique sur le site [Pole Emploi](https://www.pole-emploi.fr/).

## Prérequis 📋

Avant d'exécuter le bot, vous devez créer un fichier `.env` en copiant le fichier `.env.exemple`. Vous devez ensuite remplir les champs `TOKEN` et `CLIENT_ID` avec les informations de votre bot Discord.

🔑 `TOKEN` est le token de votre bot Discord. Vous pouvez le trouver dans la page de votre bot sur le site [Discord Developer Portal](https://discord.com/developers/applications).

🆔 `Client ID` est l'identifiant `APPLICATION_ID` de votre bot Discord. Vous pouvez le trouver dans la page de votre bot sur le site [Discord Developer Portal](https://discord.com/developers/applications).

## Installation 🚀🔧

1. Clonez le projet sur votre ordinateur : 

```bash
git clone https://github.com/votre_nom/votre_projet.git
```	
2. Installez les dépendances : 

```bash
npm install
```

3. Lancez le bot :
```bash
npm run start
```

## Structure du projet 🛠️

Le projet est divisé en plusieurs dossiers :

- `src/commands` : contient les déclaration de commandes du bot (ex. `/ping`)
- `src/config` : contient les fichiers de configuration du bot (ex. `Configuration Client`)
- `src/events` : contient les événements du bot (ex. `command -> execute`)
- `src/handlers` : contient les registres des commandes et des événements du bot 
- `src/modules` : contient les modules du bot 
- `src/utils` : contient les fonctions utilitaires du bot 



# Lancer le bot en arrière plan 📦

```bash
# Lancer le bot en arrière plan
screen -S dev-hunt
# Lancer le bot
ctrl + a + d
# Revenir sur le bot
screen -r dev-hunt
# Liste des bots en arrière plan
screen -ls
```

# Sources 📖

- Scrap : https://api.gouv.fr/les-api/api_offresdemplois

