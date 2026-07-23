# Roadmap PRO-ONLINE

Cette roadmap ordonne les travaux. Elle ne remplace ni `docs/CURRENT_TASK.md` ni les décisions techniques formelles.

## Phase 0 — Stabiliser le dépôt et le prototype

### 0.1 Mémoire commune des agents

- [x] Ajouter `AGENTS.md`.
- [x] Documenter le contexte réel du dépôt.
- [x] Créer le registre des décisions.
- [x] Créer le fichier de tâche active et le journal des agents.
- [x] Documenter le passage de relais ChatGPT ↔ Codex.

### 0.2 Corriger le cockpit actuel

- [ ] Corriger la syntaxe de `cockpit-web/app.js`.
- [ ] Implémenter ou sécuriser le chargement de la carte et des alertes.
- [ ] Ajouter des états visibles en cas d’API indisponible.
- [ ] Vérifier que le navigateur ne produit pas d’erreur au chargement.

### 0.3 Installer un minimum de qualité technique

- [ ] Ajouter une commande de test utile.
- [ ] Ajouter une vérification de syntaxe ou un lint adapté au projet.
- [ ] Tester les routes principales de l’API.
- [ ] Documenter l’installation et le démarrage local dans `README.md`.
- [ ] Remplacer le faux script de build par un contrôle réellement utile.

### 0.4 Clarifier la configuration

- [ ] Sortir l’URL de l’API du code de l’interface.
- [ ] Fournir un exemple de configuration sans secret.
- [ ] Documenter les environnements local, test et production.
- [ ] Vérifier les règles CORS et les erreurs HTTP.

## Phase 1 — Définir le socle métier

- [ ] Définir les utilisateurs et rôles.
- [ ] Définir le cycle de vie d’une mission.
- [ ] Définir les entités minimales : client, chantier, mission, engin, accessoire, charge, document et alerte.
- [ ] Définir les unités, sources, versions et statuts de vérification des données critiques.
- [ ] Décider de l’architecture cible et de la persistance.
- [ ] Préparer une migration progressive depuis les données statiques.

## Phase 2 — Construire un MVP exploitable

- [ ] Authentification et autorisations.
- [ ] Création, consultation et modification d’une mission.
- [ ] Planning cohérent avec détection des conflits simples.
- [ ] Gestion de stock et affectation du matériel.
- [ ] Historique des modifications et traçabilité.
- [ ] Gestion documentaire avec statut de validation.
- [ ] Tests automatisés sur les règles métier importantes.

## Phase 3 — Fonctions avancées

À engager seulement après validation du socle :

- application mobile réelle ;
- fonctionnement hors ligne et synchronisation ;
- cartographie et itinéraires ;
- calculs ou aides au levage avec données sourcées ;
- notifications ;
- signatures, rapports et exports ;
- intégrations externes.

## Priorité actuelle

La seule tâche active est décrite dans `docs/CURRENT_TASK.md`.
