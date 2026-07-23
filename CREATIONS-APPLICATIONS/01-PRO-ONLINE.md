# APP-001 — PRO-ONLINE

## Résumé

- **Nom :** PRO-ONLINE
- **Domaine :** levage, manutention et transport
- **État actuel :** prototype à stabiliser
- **Dépôt :** `nicotine1983/PRO-ONLINE`
- **Branche principale :** `main`
- **Responsable :** Nicolas Connangle

## Objectif

Créer une application permettant d’organiser des missions, du planning, des informations de chantier, du matériel et des alertes dans le domaine du levage et du transport.

Le prototype ne doit pas être présenté comme un outil validé de calcul de capacité, d’élingage, de calage ou de décision de sécurité.

## État technique vérifié

- API Node.js avec Express et CORS.
- Point d’entrée serveur : [`../src/main.js`](../src/main.js).
- Interface web statique en HTML, CSS et JavaScript : [`../cockpit-web/`](../cockpit-web/).
- Données de démonstration stockées en mémoire.
- Aucune base de données opérationnelle.
- Aucun calcul métier critique validé.
- Aucun projet mobile fonctionnel vérifié à ce stade.

## Documentation de référence

- [Instructions permanentes](../AGENTS.md)
- [Contexte technique](../docs/PROJECT_CONTEXT.md)
- [Décisions](../docs/DECISIONS.md)
- [Roadmap](../docs/ROADMAP.md)
- [Tâche active](../docs/CURRENT_TASK.md)
- [Journal des agents](../docs/CHANGELOG_AGENT.md)

## Prochaine action

Exécuter uniquement la tâche définie dans [`../docs/CURRENT_TASK.md`](../docs/CURRENT_TASK.md), puis vérifier le diff, les contrôles effectués et le journal des modifications.

## Risques principaux

- confusion possible entre données de démonstration et données validées ;
- absence actuelle de persistance des données ;
- interface et JavaScript du cockpit encore à stabiliser ;
- architecture cible non décidée ;
- risque de complexification prématurée si une migration technique est engagée avant la stabilisation du prototype.

## Règle de progression

Toute évolution doit être réalisée sur une branche dédiée, avec une tâche délimitée, des critères d’acceptation et une pull request avant fusion dans `main`.
