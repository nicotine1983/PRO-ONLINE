# Faire travailler ChatGPT et Codex ensemble

## Principe

Les conversations ChatGPT et Codex ne constituent pas une mémoire commune fiable. **Le dépôt Git est la mémoire commune.**

- ChatGPT analyse, structure les décisions et prépare une tâche vérifiable.
- Codex lit les mêmes fichiers, modifie le code, exécute les contrôles et journalise le résultat.
- Une pull request permet ensuite de revoir le diff avant fusion.

## Cycle recommandé

### 1. Préparer avec ChatGPT

Ouvrir le dépôt ou transmettre son lien, puis utiliser une demande de ce type :

```text
Lis AGENTS.md et le dossier docs du dépôt PRO-ONLINE.
Analyse l’état réel de la branche principale sans modifier le code.
Prépare une seule prochaine tâche dans docs/CURRENT_TASK.md.
Mets à jour docs/ROADMAP.md ou docs/DECISIONS.md uniquement si nécessaire.
Définis le périmètre, les critères d’acceptation, les contrôles et les risques.
Ne suppose aucune technologie absente du dépôt.
```

### 2. Exécuter avec Codex

Dans Codex, ouvrir le même dépôt et la branche prévue, puis utiliser :

```text
Lis AGENTS.md et tous les documents qu’il référence.
Exécute uniquement docs/CURRENT_TASK.md.
Inspecte d’abord l’état réel du dépôt et le diff existant.
Implémente la correction la plus simple respectant le périmètre.
Lance tous les contrôles réalisables, examine le diff final et mets à jour
docs/CHANGELOG_AGENT.md.
Ne modifie ni l’architecture ni les contrats d’API sans décision explicite.
```

### 3. Revoir

Avant fusion :

1. lire le résumé de Codex ;
2. examiner chaque fichier modifié ;
3. vérifier les commandes réellement exécutées ;
4. distinguer les tests réussis des tests non réalisés ;
5. contrôler les risques métier et les données critiques ;
6. fusionner seulement si le diff correspond à la tâche.

### 4. Préparer la tâche suivante

Après fusion ou correction du diff :

- déplacer la tâche terminée dans le journal ;
- choisir une seule priorité de la roadmap ;
- réécrire entièrement `docs/CURRENT_TASK.md` ;
- créer une nouvelle branche dédiée.

## Fichiers de passage de relais

| Fichier | Rôle |
|---|---|
| `AGENTS.md` | Règles permanentes et sécurité |
| `docs/PROJECT_CONTEXT.md` | État réel et contexte du dépôt |
| `docs/DECISIONS.md` | Choix validés et choix encore ouverts |
| `docs/ROADMAP.md` | Ordre des étapes |
| `docs/CURRENT_TASK.md` | Une seule tâche exécutable |
| `docs/CHANGELOG_AGENT.md` | Preuves et résultats des interventions |

## Règles pratiques

- Une branche par tâche : `agent/<description-courte>`.
- Une tâche doit être suffisamment petite pour produire un diff lisible.
- Les conversations peuvent proposer ; seuls les fichiers et décisions validées engagent le projet.
- Ne jamais fusionner parce que « Codex dit que cela fonctionne » : vérifier les commandes, leurs sorties et le diff.
- Pour les fonctions de levage ou de transport, exiger une validation humaine et des sources adaptées avant tout usage opérationnel.
