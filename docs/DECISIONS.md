# Registre des décisions

Ce document consigne les choix validés. Une idée, une ancienne conversation ou une ligne de roadmap ne vaut pas décision tant qu’elle n’est pas inscrite ici.

## D-001 — Le dépôt est la source de vérité

- **Statut :** validée
- **Date :** 23 juillet 2026
- **Décision :** les agents doivent vérifier les fichiers présents avant de décrire ou modifier l’architecture.
- **Conséquence :** une technologie envisagée mais absente du dépôt ne doit pas être présentée comme déjà installée.

## D-002 — Stabiliser le prototype avant toute migration

- **Statut :** validée
- **Date :** 23 juillet 2026
- **Décision :** conserver provisoirement l’API Express et le cockpit HTML/CSS/JavaScript pendant la phase de stabilisation.
- **Conséquence :** aucune migration vers NestJS, Prisma, PostgreSQL, React, Expo ou une autre pile ne doit être engagée sans décision séparée, justification et plan de migration.
- **Motif :** corriger et tester l’existant permet d’obtenir une base observable avant d’augmenter la complexité.

## D-003 — Utiliser les fichiers du dépôt comme mémoire commune

- **Statut :** validée
- **Date :** 23 juillet 2026
- **Décision :** `AGENTS.md` et le dossier `docs/` assurent le passage de contexte entre ChatGPT, Codex et les développeurs.
- **Conséquence :** la tâche active doit être écrite dans `docs/CURRENT_TASK.md` et les travaux réalisés dans `docs/CHANGELOG_AGENT.md`.

## D-004 — Traiter les données de levage comme critiques

- **Statut :** validée
- **Date :** 23 juillet 2026
- **Décision :** toute fonction future concernant une capacité, une charge, une portée, un calage, un accessoire, un gabarit, un itinéraire ou une restriction doit distinguer les données d’exemple, communautaires, constructeur et réglementaires.
- **Conséquence :** les modèles devront prévoir la source, l’unité, la date ou version de validité et le statut de vérification.

## D-005 — Travailler par branche et pull request

- **Statut :** validée
- **Date :** 23 juillet 2026
- **Décision :** les changements d’agent sont réalisés sur une branche dédiée puis revus dans une pull request avant fusion dans `main`.
- **Conséquence :** ne pas pousser directement une évolution fonctionnelle sur `main`.

## D-006 — Maintenir un index central des applications

- **Statut :** validée
- **Date :** 23 juillet 2026
- **Décision :** le dossier `CREATIONS-APPLICATIONS/` recense les applications, leur état réel, leurs risques et leur prochaine action.
- **Conséquence :** chaque nouvelle application indépendante doit recevoir une fiche dans cet index et, dès que nécessaire, son propre dépôt GitHub.
- **Limite actuelle :** le compte connecté ne dispose pour l’instant que du dépôt `nicotine1983/PRO-ONLINE` ; l’index est donc hébergé provisoirement dans ce dépôt.

## Décisions encore ouvertes

Les sujets suivants ne sont **pas encore décidés** :

- architecture cible de l’API ;
- choix et schéma de la base de données ;
- authentification et rôles ;
- framework de l’interface web ;
- technologie et périmètre de l’application mobile ;
- hébergement cible et stratégie de déploiement ;
- modèle métier définitif des missions, engins, accessoires, charges et documents.
