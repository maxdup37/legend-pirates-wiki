const DESIGNS = [
    {
        id: "golden-raider",
        name: "Golden Raider_design",
        image: "assets/img/designs/Golden_Raider.png",
        available: "Available with Legend Pass",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "dark_orb",
        name: "Dark Orb design",
        image: "assets/img/designs/Dark_Orb.png",
        available: "Available with Orb inside of Wizard Forest. (Chance rate %0.01)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "warhammer",
        name: "Warhammer design",
        image: "assets/img/designs/WARHAMMER.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "lucifer",
        name: "Lucifer design",
        image: "assets/img/designs/ALFELLUM.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "DragonSlayer",
        name: "Dragon Slayer design",
        image: "assets/img/designs/DragonSlayer.png",
        available: "Chance rate %1 from Leviathan Boss last hit",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "kiri",
        name: "Kiri design",
        image: "assets/img/designs/Kiri.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "kiyama",
        name: "Kiyama design",
        image: "assets/img/designs/Kiyama.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "colombus",
        name: "Colombus design",
        image: "assets/img/designs/Colombus.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "elcano",
        name: "Elcano design",
        image: "assets/img/designs/Elcano.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "flyingDutchman",
        name: "Flying Dutchman design",
        image: "assets/img/designs/Flying-Dutchman_store.gif",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "nerus",
        name: "Nerus design",
        image: "assets/img/designs/Nerus.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "barones",
        name: "Barones design",
        image: "assets/img/designs/Barones.png",
        available: "Season 1 Champion Rank reward and Gold Rank reward",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "bone",
        name: "Bone design",
        image: "assets/img/designs/Bone.png",
        available: "Season 1 Champion Rank reward",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "santaLucia",
        name: "Santa Lucia design",
        image: "assets/img/designs/Santa_Lucia.png",
        available: "Craftable design in Tharun: Blacksmith",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "vortex",
        name: "Vortex design",
        image: "assets/img/designs/Vortex.png",
        available: "Available from Ocean Bonus map final reward with % 5 Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "kage",
        name: "Kage design",
        image: "assets/img/designs/Kage.png",
        available: "Available from Inferno Bonus map final reward with % Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "riptide",
        name: "Riptide design",
        image: "assets/img/designs/Riptide.png",
        available: "Craftable design in Tharun: Blacksmith",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "emerald",
        name: "Emerald design",
        image: "assets/img/designs/Emerald.png",
        available: "",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "krieger",
        name: "Krieger design",
        image: "assets/img/designs/Krieger.png",
        available: "If you have Dragon Slayer Design can craftable in Tharun: Blacksmith",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "Deadlock",
        name: "Deadlock design",
        image: "assets/img/designs/Deadlock.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "skull",
        name: "Skull design",
        image: "assets/img/designs/Skull.png",
        available: "Available on Season2 Legend Pass with the 30th rewards",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "grimLurker",
        name: "Grim Lurker design",
        image: "assets/img/designs/Grim_Lurker.png",
        available: "If you reach 21. Elite Class you can craft. Can craftable in Tharun: Blacksmith",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "royale ",
        name: "Royale design",
        image: "assets/img/designs/SPOILER_Royale.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n" + "\n" + "Available from 2025 Legend Pirates Birthday",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "lunar ",
        name: "Lunar design",
        image: "assets/img/designs/Lunar.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n" + "\n" + "Available from 2025 Chinese Year Event",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "goldLunar ",
        name: "Gold Lunar design",
        image: "assets/img/designs/Gold_Lunar.png",
        available: "Available on Air Drop Flotsam with 1% Chance - REMOVED IN CONTENT",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "whiteDragon ",
        name: "White Dragon design",
        image: "assets/img/designs/White_Dragon.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "piercer ",
        name: "Piercer design",
        image: "assets/img/designs/Piercer.png",
        available: "Season 2 Gold Rank reward",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "drago ",
        name: "Drago design",
        image: "assets/img/designs/Drago.png",
        available: "Season 2 Champion Rank reward",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "grandanara ",
        name: "Grandanara design",
        image: "assets/img/designs/Grandanara.png",
        available: "Available on Air Drop Flotsam with 0.5% Chance - REMOVED IN CONTENT",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "auricPatrick ",
        name: "Auric Patrick design",
        image: "assets/img/designs/Auric_Patrick.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "ghostDragon",
        name: "Ghost Dragon design",
        image: "assets/img/designs/Ghost_Dragon.png",
        available: "Available on Season 3 Legend Pass with the 30th rewards",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "marauder",
        name: "Marauder design",
        image: "assets/img/designs/Marauder.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "peregrine",
        name: "Peregrine design",
        image: "assets/img/designs/Peregrine.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "flamethrower",
        name: "Flamethrower design",
        image: "assets/img/designs/Flamethrower_Player.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "goldenElite",
        name: "Golden Elite design",
        image: "assets/img/designs/Golden_Elite.png",
        available: "Available with the when you reach 25th Battle Rank",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "onePiece",
        name: "One Piece design",
        image: "assets/img/designs/One_Piece.png",
        available: "Available on Air Drop Flotsam with 0.5% Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "rebelCrystal ",
        name: "Rebel Crystal design",
        image: "assets/img/designs/Rebel_Crystal.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "nemesis ",
        name: "Nemesis design",
        image: "assets/img/designs/Nemesis.png",
        available: "Available on Legendary Chest with %0.5 Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "goldNemesis ",
        name: "Gold Nemesis design",
        image: "assets/img/designs/Gold_Nemesis.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (13.06.2025 - 20.06.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "kiliwalis ",
        name: "Kiliwalis design",
        image: "assets/img/designs/Kiliwalis.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (Permanent time sale)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "alduin ",
        name: "Alduin design",
        image: "assets/img/designs/Alduin.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (Permanent time sale)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "eliteVoyager",
        name: "Elite Voyager design",
        image: "assets/img/designs/Elite_Voyager.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (Permanent time sale)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "esmeralda",
        name: "Esmeralda design",
        image: "assets/img/designs/Esmeralda_gif.gif",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (20.06.2025 - 25.06.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "goldFin",
        name: "Gold Fin design",
        image: "assets/img/designs/Gold_Fin.png",
        available: "Season 3 Platin Rank reward (Platin & Champion Players will receive this design)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "berserker",
        name: "Berserker design",
        image: "assets/img/designs/Berserker.png",
        available: "Season 3 Champion Rank reward (Champion Players will receive this design)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "crossBones",
        name: "CrossBones design",
        image: "assets/img/designs/CrossBones.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (15.08.2025 - 31.08.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "grimorePack",
        name: "Grimore - 3 Color Pack design",
        image: "assets/img/designs/Grimore_Pack_Gif.gif",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (15.08.2025 - 31.08.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "quintor",
        name: "Quintor design",
        image: "assets/img/designs/Quintor.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (15.08.2025 - 31.08.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "admiralQuintor",
        name: "Admiral Quintor design",
        image: "assets/img/designs/Admiral_Quintor.png",
        available: "Available from their Admiral Quintor with the %1 Last Shoot Chance.",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "krakenSlayer",
        name: "Kraken Slayer design",
        image: "assets/img/designs/Kraken_Slayer.png",
        available: "Available from Tentacle Meats with 0.1% Chance (Includes Tentacle Meats from the Kraken Pit map) - Available from Abyssal Kraken with the %1 Last Shoot Chance.  (13-14 Level Boss)\n" +
            "Pve Dragon Pit Kraken Boss NOT include for this Last Shoot Chance earning condition.",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "lavaFighter",
        name: "Lava Fighter design",
        image: "assets/img/designs/Lava_Fighter.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (22.08.2025 - 29.08.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "reaver",
        name: "Reaver design",
        image: "assets/img/designs/Reaver.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (22.08.2025 - 29.08.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "horrowVoyager",
        name: "Horrow Voyager design",
        image: "assets/img/designs/Horrow_Voyager-p.png",
        available: "Available on Air Drop Flotsam with 0.5% Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "fist",
        name: "Fist design",
        image: "assets/img/designs/Fist1.png",
        available: "Available on Flamethrower with 1% Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "ironFist",
        name: "Iron Fist design",
        image: "assets/img/designs/Fist3.png",
        available: "If you have Fist Design can craftable in Tharun: Blacksmith",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "slyth2",
        name: "Slyth II design",
        image: "assets/img/designs/Slyth_II.png",
        available: "Available with Legend Pass on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n Season 4 Pass Reward Design",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "slyth1",
        name: "Slyth I design",
        image: "assets/img/designs/Slyth_I.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (19.09.2025 - 29.09.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "veyra2",
        name: "Veyra II design",
        image: "assets/img/designs/Veyra_II.png",
        available: "Season 4 Platin Rank reward (Platin & Champion Players will receive this design)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "veyra1",
        name: "Veyra I design",
        image: "assets/img/designs/Veyra_I.png",
        available: "Season 4 Champion Rank reward (Champion Players will receive this design)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "magellan",
        name: "Magellan 25' design",
        image: "assets/img/designs/Magellan25.png",
        available: "This design only available from Admiral Magellan",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "elcano",
        name: "Elcano 25' design",
        image: "assets/img/designs/Elcano25.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (19.09.2025 - 29.09.2025 - This design has got  Magellan Speed Effect)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "darkColumbus",
        name: "Dark Columbus design",
        image: "assets/img/designs/Dark_Columbus_Player.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (19.09.2025 - 29.09.2025 - This design has got  Magellan Repair Effect)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "brutalDesign",
        name: "Brutal Design design",
        image: "assets/img/designs/Brutal.png",
        available: "This design only available from Admiral Pumpkin with %100 Last Hit Chance in Halloween Event 2025",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "kartogas",
        name: "Kartogas design",
        image: "assets/img/designs/Kartogas.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (24.10.2025 - 31.10.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "reventus",
        name: "Reventus design",
        image: "assets/img/designs/Reventus.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (24.10.2025 - 31.10.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "bloodyNight",
        name: "Bloody Night design",
        image: "assets/img/designs/Bloody_Night.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (28.11.2025 - 01.12.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "purpleNight",
        name: "Purple Night design",
        image: "assets/img/designs/Purple_Night.png",
        available: "Available on Legend Pirates Store.\n" +
            "https://www.legendpirates.com/shop\n (28.11.2025 - 01.12.2025)",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "floraFatale ",
        name: "Flora Fatale design",
        image: "assets/img/designs/Flora_Fatale.png",
        available: "This design only available from Black Friday Admiral with %100 Last Hit Shot",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },

    {
        id: "veronica",
        name: "Veronica design",
        image: "assets/img/designs/Veronica.png",
        available: "Available on Legendary Chest with %0.5 Chance",
        stats: {
            HP: 0,
            CANNON: 0,
            SPEED: 0,
            "ELITE POINT": 0,
            REPAIR: 0,
            "POSSESSION PIRATES": 0,
            SAILING: 0,
            MASTS: 0
        },
    },
];