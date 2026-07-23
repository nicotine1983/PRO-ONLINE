# Créations d’applications — Index central

Ce dossier centralise l’organisation des applications créées ou en cours de création.

Il sert de **portefeuille de projets** et de point d’entrée commun pour ChatGPT, Codex et GitHub. Le code de chaque application doit rester dans son propre dépôt lorsqu’elle constitue un produit indépendant.

## Applications recensées

| Identifiant | Application | Domaine | État | Fiche |
|---|---|---|---|---|
| APP-001 | PRO-ONLINE | Levage, manutention et transport | Prototype à stabiliser | [Ouvrir la fiche](01-PRO-ONLINE.md) |

## Règles d’organisation

1. Une application indépendante doit disposer de son propre dépôt GitHub.
2. Chaque dépôt doit contenir au minimum :
   - un `README.md` ;
   - un `AGENTS.md` ;
   - un dossier `docs/` ;
   - une tâche active clairement définie ;
   - un journal des modifications réalisées par les agents.
3. Les technologies réellement présentes dans le dépôt doivent être distinguées des technologies seulement envisagées.
4. Aucun secret, mot de passe, jeton ou clé API ne doit être enregistré dans Git.
5. Les données critiques liées au levage, aux charges, aux capacités, aux ouvrages ou aux itinéraires doivent conserver leur source, leur unité, leur date de validité et leur statut de vérification.
6. Une nouvelle application est ajoutée à cet index seulement lorsqu’un objectif, un périmètre et un emplacement de travail ont été définis.

## États utilisés

- **Idée** : besoin identifié, sans prototype.
- **Prototype** : démonstration technique non fiable pour un usage réel.
- **MVP** : fonctions essentielles utilisables et testées dans un périmètre limité.
- **Bêta** : usage réel contrôlé avec retours utilisateurs.
- **Production** : version exploitée avec maintenance, sécurité et sauvegardes définies.
- **Archivé** : développement arrêté, code conservé pour historique.

## Ajouter une application

1. Copier [`MODELE-PROJET.md`](MODELE-PROJET.md).
2. Renommer la copie avec le numéro et le nom du projet.
3. Renseigner les faits vérifiés, les risques et la prochaine action.
4. Ajouter une ligne dans le tableau des applications.
5. Créer un dépôt séparé lorsque l’application est indépendante.

## Liaison avec ChatGPT

La configuration recommandée de la rubrique Projets de ChatGPT est préparée dans [`PROJET-CHATGPT.md`](PROJET-CHATGPT.md).
