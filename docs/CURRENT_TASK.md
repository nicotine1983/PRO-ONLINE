# Tâche active — Stabiliser le JavaScript du cockpit

## Objectif

Rendre `cockpit-web/app.js` syntaxiquement valide et assurer le chargement fiable des missions, de la timeline, de la carte et des alertes à partir de l’API existante.

## Périmètre autorisé

- `cockpit-web/app.js`
- `cockpit-web/index.html`, uniquement si un ajustement DOM minimal est indispensable
- `cockpit-web/style.css`, uniquement pour les états de chargement ou d’erreur
- tests ou scripts de contrôle strictement nécessaires
- `docs/CHANGELOG_AGENT.md`

## Hors périmètre

- migration de framework ;
- nouvelle base de données ;
- authentification ;
- refonte graphique ;
- changement des routes ou du format des réponses de l’API ;
- déploiement en production ;
- modification de la roadmap ou des décisions sans blocage démontré.

## Travail demandé

1. Lire `AGENTS.md` et les documents indiqués dans ce fichier.
2. Inspecter `cockpit-web/app.js`, `cockpit-web/index.html`, `cockpit-web/style.css` et `src/main.js`.
3. Supprimer la fermeture JavaScript surnuméraire qui rend le fichier invalide.
4. Implémenter `loadMap()` à partir de `GET /api/map`, ou adapter l’appel si une implémentation équivalente existe réellement dans la branche de travail.
5. Implémenter `loadAlerts()` à partir de `GET /api/alerts`, ou adapter l’appel si une implémentation équivalente existe réellement dans la branche de travail.
6. Ajouter une gestion cohérente des réponses HTTP non valides et des erreurs réseau pour les chargements dynamiques.
7. Afficher un état compréhensible dans les conteneurs concernés lorsque l’API est indisponible.
8. Éviter les erreurs JavaScript non gérées au chargement de la page.
9. Ne pas ajouter de dépendance sans nécessité démontrée.
10. Mettre à jour `docs/CHANGELOG_AGENT.md`.

## Critères d’acceptation

- `node --check cockpit-web/app.js` réussit.
- `node --check src/main.js` réussit.
- `npm run build` réussit avec les scripts présents au moment de l’intervention.
- Les appels aux routes `/api/health`, `/api/missions`, `/api/timeline`, `/api/map` et `/api/alerts` sont testés localement lorsque l’environnement le permet.
- Avec l’API disponible, les quatre zones dynamiques s’affichent sans erreur JavaScript.
- Avec l’API indisponible, l’interface affiche des messages d’échec utiles au lieu de rester vide ou de produire une exception non gérée.
- Aucun contrat d’API existant n’est modifié.
- Le diff reste limité au périmètre défini.

## Compte rendu attendu de Codex

À la fin, fournir :

- la cause des défauts corrigés ;
- la liste des fichiers modifiés ;
- les commandes exécutées et leurs résultats ;
- les limites ou tests non réalisés ;
- les risques de régression éventuels.
