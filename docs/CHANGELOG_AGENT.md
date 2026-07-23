# Journal des interventions des agents

Ce fichier conserve les faits vérifiables. Chaque intervention doit préciser son périmètre, les contrôles exécutés et les limites restantes.

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
