# Journal des interventions des agents

Ce fichier conserve les faits vérifiables. Chaque intervention doit préciser son périmètre, les contrôles exécutés et les limites restantes.

## 23 juillet 2026 — Organisation centrale des créations d’applications

- **Agent :** ChatGPT
- **Branche :** `agent/organiser-creations-applications`
- **Objet :** créer un index GitHub central pour les applications et préparer la configuration du projet ChatGPT correspondant.

### Fichiers ajoutés

- `CREATIONS-APPLICATIONS/README.md`
- `CREATIONS-APPLICATIONS/01-PRO-ONLINE.md`
- `CREATIONS-APPLICATIONS/MODELE-PROJET.md`
- `CREATIONS-APPLICATIONS/PROJET-CHATGPT.md`

### Fichiers mis à jour

- `README.md`
- `docs/DECISIONS.md`
- `docs/CHANGELOG_AGENT.md`

### Résultat

- portefeuille d’applications créé ;
- PRO-ONLINE enregistré comme `APP-001` ;
- règles de classement et états de maturité définis ;
- modèle de fiche préparé pour les futures applications ;
- instructions de la rubrique Projets de ChatGPT préparées ;
- anciens outils musicaux exclus du périmètre de cette organisation.

### Contrôles exécutés

- vérification des dépôts accessibles au compte GitHub connecté ;
- confirmation que `nicotine1983/PRO-ONLINE` est actuellement le seul dépôt accessible appartenant à l’utilisateur ;
- revue des liens relatifs et des fichiers Markdown ajoutés ;
- aucune modification du code d’exécution ni des contrats d’API.

### Contrôles non exécutés

- aucun test applicatif : intervention documentaire uniquement ;
- création d’une organisation ou d’un nouveau dépôt GitHub : action non exposée par le connecteur disponible ;
- création et déplacement de conversations dans l’interface ChatGPT : action non exposée par les outils disponibles.

### Risques, limites ou suites

- l’index central est provisoirement hébergé dans le dépôt PRO-ONLINE ;
- lorsqu’un second dépôt d’application sera créé, il devra être ajouté à `CREATIONS-APPLICATIONS/README.md` ;
- la suppression définitive des anciens fichiers de la Bibliothèque ChatGPT doit être effectuée depuis l’interface Bibliothèque.

---

## 23 juillet 2026 — Mise en place de la mémoire commune

- **Agent :** ChatGPT
- **Branche :** `agent/connect-chatgpt-codex`
- **Objet :** préparer le passage de relais entre ChatGPT et Codex.

### Fichiers ajoutés

- `AGENTS.md`
- `docs/PROJECT_CONTEXT.md`
- `docs/DECISIONS.md`
- `docs/ROADMAP.md`
- `docs/CURRENT_TASK.md`
- `docs/WORKFLOW_CHATGPT_CODEX.md`
- `docs/CHANGELOG_AGENT.md`

### Résultat

- règles permanentes définies ;
- état réel du prototype documenté ;
- décisions initiales consignées ;
- première tâche Codex délimitée ;
- méthode de revue et de passage de relais documentée.

### Contrôles

- inspection des fichiers principaux de la branche `main` via GitHub ;
- aucune modification du code d’exécution ;
- aucun test applicatif lancé, car cette intervention ne modifie que la documentation.

### Limites

- l’exécution locale n’a pas été réalisée dans cette intervention ;
- les défauts repérés dans `cockpit-web/app.js` restent à corriger par la tâche active.

---

## Modèle pour les prochaines entrées

```markdown
## AAAA-MM-JJ — Titre

- **Agent :**
- **Branche :**
- **Tâche :**

### Modifications

- ...

### Contrôles exécutés

- `commande` — résultat

### Contrôles non exécutés

- ... — motif

### Risques, limites ou suites

- ...
```
