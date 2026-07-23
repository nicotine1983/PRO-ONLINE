# Contexte du projet PRO-ONLINE

## Finalité

PRO-ONLINE est un projet d’application destiné à l’organisation d’activités de **levage, manutention et transport**. Le dépôt contient actuellement un prototype technique ; il ne constitue pas encore un outil opérationnel de sécurité ou de calcul.

## État réel constaté

État inspecté sur la branche `main` le **23 juillet 2026**.

### API

- Runtime : Node.js.
- Serveur : Express avec CORS.
- Point d’entrée : `src/main.js`.
- Données : valeurs statiques en mémoire, sans base de données.
- Routes actuellement visibles :
  - `GET /`
  - `GET /api/health`
  - `GET /api/missions`
  - `GET /api/timeline`
  - `GET /api/map`
  - `GET /api/alerts`
- Scripts actuels dans `package.json` :
  - `npm run build` affiche seulement `build ok` ;
  - `npm run start:prod` lance `node src/main.js`.

### Interface web

- Dossier : `cockpit-web/`.
- Technologie : HTML, CSS et JavaScript sans framework.
- L’interface appelle l’API hébergée à l’adresse codée en dur dans `cockpit-web/app.js`.
- Les écrans visibles concernent le tableau de bord, les missions, le planning, le stock et la logistique.

### Mobile

Le dépôt contient un fichier racine nommé `mobile` qui décrit textuellement une structure de dossiers. Il ne faut pas le considérer comme une application mobile fonctionnelle tant que les fichiers et commandes correspondants ne sont pas réellement présents.

## Limites et défauts connus

Les points suivants ont été observés lors de l’inspection initiale :

- `cockpit-web/app.js` contient une fermeture `});` supplémentaire après le gestionnaire `load` ;
- `loadMap()` et `loadAlerts()` sont appelées au chargement, mais leurs définitions ne figurent pas dans le fichier inspecté ;
- les appels réseau des fonctions de chargement ne gèrent pas correctement les erreurs HTTP et réseau ;
- les données du tableau de bord et de l’API sont essentiellement des exemples codés en dur ;
- aucune suite de tests, règle de lint, vérification de types, authentification ou persistance n’est établie ;
- le fichier `README.md` de la branche principale ne documente pas encore l’installation ni l’usage du prototype.

## Règle de vérité

L’ordre de priorité des sources est le suivant :

1. fichiers réellement présents dans la branche de travail ;
2. décisions consignées dans `docs/DECISIONS.md` ;
3. contexte décrit dans ce document ;
4. roadmap et anciennes conversations.

En cas de contradiction, l’agent doit vérifier le dépôt et signaler l’écart au lieu de l’inventer ou de le masquer.

## Exigence de sécurité métier

Aucune donnée de démonstration ne doit être utilisée pour décider d’un levage, d’un calage, d’un élingage, d’une capacité, d’un itinéraire ou d’une restriction. Les futures fonctions critiques devront gérer au minimum :

- la source de la donnée ;
- la date ou version de validité ;
- l’unité ;
- le statut de vérification ;
- les hypothèses ;
- les avertissements et limites d’utilisation.
