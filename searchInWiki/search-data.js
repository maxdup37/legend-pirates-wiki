// searchInWiki/search-data.js

const WIKI_PAGES = [
    {
        title: "Bien débuter",
        url: "pages/guides/getting-started.html",
        tags: "guide débuter tutoriel newbie",
        content: "Guide pour bien commencer sur Legend Pirates, premières quêtes, bases du gameplay."
    },
    {
        title: "Start Equipment",
        url: "pages/start-equipment.html",
        tags: "start équipement début stuff gear",
        content: "Équipement de départ recommandé, armes et armures pour les premiers niveaux."
    },
    {
        title: "Special Designs",
        url: "pages/special-designs.html",
        tags: "skins designs spéciaux cosmétique",
        content: "Liste des designs spéciaux, comment les obtenir, rareté et effets visuels."
    },
    {
        title: "EP Paper",
        url: "pages/ep-paper.html",
        tags: "ep paper système points",
        content: "Explication du système de EP Paper et de son impact sur la progression."
    },
    {
        title: "Chests",
        url: "pages/chest.html",
        tags: "coffres chest loot récompenses",
        content: "Types de coffres, taux de drop, récompenses possibles."
    },
    {
        title: "Pirate Coins Market",
        url: "pages/pirate-coins-market.html",
        tags: "pirate coins marché monnaie shop",
        content: "Fonctionnement du marché Pirate Coins, achats et ventes."
    },
    {
        title: "Captain Bonus Map System",
        url: "pages/captain-bonus-map-system.html",
        tags: "captain bonus map système",
        content: "Description du système de cartes bonus du capitaine."
    },
    {
        title: "Skill Tree",
        url: "pages/skill-tree.html",
        tags: "skill tree compétences talents builds",
        content: "Arbre de compétences, branches principales et builds recommandés."
    },
    {
        title: "Skill Guide",
        url: "pages/skill-guide.html",
        tags: "skill guide compétences builds",
        content: "Guide détaillé des compétences et conseils de synergie."
    },
    {
        title: "Season System",
        url: "pages/season-system.html",
        tags: "season saison classement récompenses",
        content: "Fonctionnement des saisons, récompenses et reset."
    },
    {
        title: "Daily Limit Gameplay",
        url: "pages/daily-limit-gameplay.html",
        tags: "daily limit limite journalière",
        content: "Limites journalières des activités et conseils d’optimisation."
    },
    {
        title: "Air Drop",
        url: "pages/air-drop.html",
        tags: "air drop event loot",
        content: "Système d'air drop et types de récompenses."
    },
    {
        title: "Monsters",
        url: "pages/monster.html",
        tags: "monster monstres ennemis mobs",
        content: "Bestiaire des monstres, zones de spawn et niveaux recommandés."
    },
    {
        title: "PVE Kraken Pit",
        url: "pages/pve-kraken-pit.html",
        tags: "pve kraken pit boss raid",
        content: "Instance Kraken Pit, mécaniques et stratégies."
    },
    {
        title: "PVE Dragon Pit",
        url: "pages/pve-dragon-pit.html",
        tags: "pve dragon pit boss raid",
        content: "Instance Dragon Pit, mécaniques et stratégies."
    },
    {
        title: "Level Quests",
        url: "pages/level-quests.html",
        tags: "quêtes level leveling missions",
        content: "Quêtes de niveau, ordre recommandé pour progresser efficacement."
    },
    {
        title: "Boss",
        url: "pages/boss.html",
        tags: "boss world boss raid",
        content: "Liste des boss principaux et leurs mécaniques."
    },
    {
        title: "Deck Build",
        url: "pages/deck-build.html",
        tags: "deck build cartes stratégie",
        content: "Exemples de decks efficaces et synergies de cartes."
    },
    {
        title: "Badges",
        url: "pages/badges.html",
        tags: "badges succès succès succès",
        content: "Liste des badges, conditions d’obtention et effets éventuels."
    },
    {
        title: "Admiral Ships",
        url: "pages/admiral-ships.html",
        tags: "admiral ships navires bateau",
        content: "Liste des navires d’amiral, statistiques et rôles."
    },
    {
        title: "NPC Ships",
        url: "pages/npc-ships.html",
        tags: "npc ships navires ennemis",
        content: "Types de navires contrôlés par l’IA et leurs comportements."
    },
    {
        title: "Boss Monsters",
        url: "pages/boss-monsters.html",
        tags: "boss monsters monstres élites",
        content: "Monstres de type boss, emplacement et tactiques de combat."
    },
    {
        title: "Elite Level Ship",
        url: "pages/elite-level-ship.html",
        tags: "elite ship niveau navire élite",
        content: "Progression de niveau des navires élites et améliorations associées."
    },
    {
        title: "Items",
        url: "pages/items.html",
        tags: "items objets inventaire consommables",
        content: "Liste des objets importants, consommables et matériaux."
    },
    {
        title: "Booster Items",
        url: "pages/booster-items.html",
        tags: "booster items bonus buffs",
        content: "Objets de boost temporaires et leurs effets."
    },
    {
        title: "Bonus Map Inferno",
        url: "pages/bonus-map-inferno.html",
        tags: "bonus map inferno",
        content: "Carte bonus Inferno, mécaniques et récompenses."
    },
    {
        title: "Bonus Map Ocean",
        url: "pages/bonus-map-ocean.html",
        tags: "bonus map ocean",
        content: "Carte bonus Ocean, ennemis et loot."
    },
    {
        title: "Bonus Maps Guide",
        url: "pages/bonus-maps-guide.html",
        tags: "bonus maps guide",
        content: "Guide général des bonus maps et conseils d’optimisation."
    },
    {
        title: "Deck Level",
        url: "pages/deck-level.html",
        tags: "deck level amélioration",
        content: "Niveaux de deck, paliers et gains de stats."
    },
    {
        title: "Deck Upgrade Guide",
        url: "pages/deck-upgrade-guide.html",
        tags: "deck upgrade amélioration guide",
        content: "Guide pour améliorer efficacement son deck."
    },
    {
        title: "Elite Quest",
        url: "pages/elite-quest.html",
        tags: "elite quest quêtes élites",
        content: "Quêtes élites, prérequis et récompenses."
    },
    {
        title: "Cannonball",
        url: "pages/cannonball.html",
        tags: "cannonball boulets munition",
        content: "Types de boulets de canon et usages conseillés."
    },
    {
        title: "Raid Map Witch",
        url: "pages/raidmap-witch.html",
        tags: "raid map witch event",
        content: "Carte de raid Witch, phases et stratégies."
    },
    {
        title: "Guild Relation Block",
        url: "pages/guildrelation-block.html",
        tags: "guilde relation alliance diplomatie",
        content: "Système de relations entre guildes et blocages."
    },
    {
        title: "Event Designs",
        url: "pages/event-designs.html",
        tags: "event designs skins événements",
        content: "Designs obtenables lors des événements temporaires."
    },
    {
        title: "Harpoons",
        url: "pages/harpoons.html",
        tags: "harpoons harpons armes",
        content: "Système de harpons et utilisation en combat."
    },
    {
        title: "Start Ship",
        url: "pages/start-ship.html",
        tags: "start ship navire débutant",
        content: "Navire de départ, caractéristiques et conseils de progression."
    },
    {
        title: "Cannons",
        url: "pages/cannons.html",
        tags: "cannons canons armement",
        content: "Types de canons, dégâts et optimisation."
    },
    {
        title: "Event Monster",
        url: "pages/event-monster.html",
        tags: "event monster monstres event",
        content: "Monstres spécifiques aux événements et leurs récompenses."
    },
    {
        title: "Daily Task",
        url: "pages/daily-task.html",
        tags: "daily task tâches quotidiennes",
        content: "Tâches quotidiennes recommandées pour optimiser la progression."
    },
    {
        title: "Code History",
        url: "pages/code-history.html",
        tags: "code history historique codes",
        content: "Historique et suivi des codes/rewards du jeu."
    }
];
