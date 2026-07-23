# PRO-ONLINE — Instructions permanentes pour les agents

Ce fichier définit les règles communes à ChatGPT, Codex et à tout autre agent intervenant sur ce dépôt.

## Avant toute modification

1. Lire `README.md` puis les fichiers suivants :
   - `docs/PROJECT_CONTEXT.md`
   - `docs/DECISIONS.md`
   - `docs/ROADMAP.md`
   - `docs/CURRENT_TASK.md`
2. Inspecter les fichiers réels du dépôt. Ne jamais déduire l’architecture à partir d’un plan ou d’une ancienne conversation.
3. Vérifier la branche, l’état Git et les modifications déjà présentes.
4. N’exécuter que la tâche décrite dans `docs/CURRENT_TASK.md`, sauf demande explicite contraire.

## Règles de travail

- Réaliser une seule tâche clairement délimitée à la fois.
- Limiter les changements aux fichiers nécessaires.
- Ne pas remplacer la pile technique ni introduire un framework sans décision inscrite dans `docs/DECISIONS.md`.
- Ne pas supprimer une fonctionnalité pour contourner un défaut.
- Ne jamais écrire de secret, jeton, mot de passe, clé API ou donnée personnelle dans Git.
- Ne pas modifier un contrat d’API existant sans documenter la compatibilité et les conséquences.
- Préférer les corrections simples, vérifiables et réversibles.
- Ajouter ou adapter les contrôles pertinents : syntaxe, lint, tests, exécution locale et build, selon ce que le dépôt permet réellement.
- Signaler explicitement tout contrôle non exécuté ou impossible à exécuter.
- Examiner le diff final avant de conclure.

## Sécurité métier

PRO-ONLINE concerne le levage, la manutention et le transport. Toute donnée relative aux charges, portées, capacités, calages, accessoires, gabarits, itinéraires, ouvrages ou restrictions doit être traitée comme une donnée critique.

- Une valeur d’exemple ou communautaire ne doit jamais être présentée comme une donnée constructeur, réglementaire ou validée.
- Une donnée critique doit, lorsque cela s’applique, comporter sa source, sa date de validité, son unité et son statut de vérification.
- Le logiciel ne doit pas remplacer l’abaque constructeur, la notice, l’étude de levage, le plan de prévention ni la décision d’une personne compétente.
- Toute incertitude doit être visible pour l’utilisateur ; elle ne doit pas être masquée par une valeur par défaut trompeuse.

## Fin de tâche

Une tâche n’est terminée que lorsque :

1. les critères d’acceptation de `docs/CURRENT_TASK.md` sont traités ;
2. les contrôles réalisables ont été exécutés ;
3. les fichiers modifiés et les résultats des contrôles sont listés ;
4. les risques, limites et blocages sont indiqués ;
5. `docs/CHANGELOG_AGENT.md` est mis à jour ;
6. aucune modification hors périmètre n’a été ajoutée au diff.
