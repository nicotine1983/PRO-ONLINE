# Configuration du projet ChatGPT — CRÉATIONS D’APPLICATIONS

## Nom recommandé

`CRÉATIONS D’APPLICATIONS`

## Finalité

Regrouper dans un même projet ChatGPT les conversations, décisions et documents concernant la conception et le développement d’applications.

Les outils musicaux, les anciens scripts de classement audio et leurs fichiers de travail ne font pas partie de ce projet.

## Instructions de projet à copier dans ChatGPT

```text
Ce projet centralise uniquement mes créations d’applications logicielles.

Commencer chaque intervention par identifier l’application concernée et vérifier son état réel dans les fichiers ou le dépôt GitHub.

Distinguer clairement :
- les fonctions déjà présentes ;
- les fonctions prévues ;
- les hypothèses ;
- les décisions validées ;
- les risques et les limites.

Pour PRO-ONLINE, utiliser le dépôt nicotine1983/PRO-ONLINE comme source de vérité. Lire AGENTS.md et les documents du dossier docs avant toute proposition de modification.

Ne jamais présenter une technologie envisagée comme déjà installée. Ne jamais enregistrer de secret, mot de passe, jeton ou clé API dans une conversation destinée à être copiée dans Git.

Pour chaque nouvelle application :
1. définir le problème à résoudre ;
2. définir le périmètre initial ;
3. créer une fiche projet ;
4. choisir un dépôt GitHub distinct si le produit est indépendant ;
5. définir une seule prochaine tâche ;
6. prévoir des critères d’acceptation et des contrôles.

Pour les fonctions liées au levage, aux charges, aux capacités, au calage, à l’élingage, aux gabarits ou aux itinéraires, traiter les données comme critiques et exiger une source, une unité, une date de validité et un statut de vérification.

Répondre de manière directe, factuelle et applicable en France. Signaler les incertitudes et les conséquences pratiques.
```

## Conversations à placer dans ce projet

- conception et développement de PRO-ONLINE ;
- organisation ChatGPT ↔ Codex ;
- architecture, fonctionnalités, tests et déploiement des futures applications ;
- décisions techniques et métier liées à ces applications.

## Conversations à laisser en dehors

- musique et classement de titres ;
- dossiers personnels, médicaux ou professionnels sans lien direct avec une application ;
- mécanique ou diagnostic ponctuel ne donnant pas lieu à un produit logiciel ;
- créations graphiques sans composant applicatif.

## Documents à ajouter au projet ChatGPT

En priorité :

- `AGENTS.md` ;
- `docs/PROJECT_CONTEXT.md` ;
- `docs/DECISIONS.md` ;
- `docs/ROADMAP.md` ;
- `docs/CURRENT_TASK.md` ;
- `CREATIONS-APPLICATIONS/README.md`.

## Règle de synchronisation

- ChatGPT prépare le contexte, les décisions et la tâche.
- Les décisions durables sont inscrites dans GitHub.
- Codex lit le dépôt, modifie le code et exécute les contrôles.
- Le résultat est consigné dans `docs/CHANGELOG_AGENT.md`.
- La branche est revue avant fusion dans `main`.
