// Definizione delle carte con attributi aggiornati
const carte = [
  { nome: "Arciere Magico", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Magic Archer.png" },
  { nome: "Arciere Pirotecnico", elisir: 3, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Firecracker.png" },
  { nome: "Arcieri", elisir: 3, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Archers.png" },
  { nome: "Arco-X", elisir: 6, tipo: "Edificio", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_x-bow.png" },
  { nome: "Ariete da Battaglia", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Battle Ram.png" },
  { nome: "Barbari", elisir: 5, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Barbarians.png" },
  { nome: "Barbari Scelti", elisir: 6, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Elite Barbarians.png" },
  { nome: "Barile Barbarico", elisir: 2, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Barbarian Barrel.png" },
  { nome: "Barile d'ossa", elisir: 3, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Skeleton Barrel.png" },
  { nome: "Barile Goblin", elisir: 3, tipo: "Incantesimo", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Barrel.png" },
  { nome: "Berserker", elisir: 2, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Berserker.png" },
  { nome: "Bocciatore", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Bowler.png" },  
  { nome: "Boia", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Executioner.png" },
  { nome: "Bombarolo", elisir: 2, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Bomber.png" },
  { nome: "Boscaiolo", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Lumberjack.png" },
  { nome: "Cacciatore", elisir: 4, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Hunter.png" },
  { nome: "Cannone", elisir: 3, tipo: "Edificio", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Cannon.png" },
  { nome: "Cannone a rotelle", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Cannon Cart.png" },
  { nome: "Capanna dei barbari", elisir: 6, tipo: "Edificio", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Barbarian Hut.png" },
  { nome: "Capanna Goblin", elisir: 4, tipo: "Edificio", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin_Hut.png" },
  { nome: "Cavaliere", elisir: 3, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Knight.png" },
  { nome: "Cavaliere d'oro", elisir: 4, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Golden Knight.png" },
  { nome: "Cespuglio Sospetto", elisir: 2, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Suspicious Bush.png" },
  { nome: "Cimitero", elisir: 5, tipo: "Incantesimo", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Graveyard.png" },
  { nome: "Clonazione", elisir: 3, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Clone.png" },
  { nome: "Congelamento", elisir: 4, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Freeze.png" },
  { nome: "Consegna Royale", elisir: 3, tipo: "Incantesimo", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Royal Delivery.png" },
  { nome: "Cucciolo di Drago", elisir: 4, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Baby Dragon.png" },
  { nome: "Domatore di cinghiali", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Hog Rider.png" },
  { nome: "Domatrice di arieti", elisir: 5, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Ram Rider.png" },
  { nome: "Draghi d'ossa", elisir: 4, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Skeleton Dragons.png" },
  { nome: "Drago elettrico", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Electro Dragon.png" },
  { nome: "Drago infernale", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Inferno Dragon.png" },
  { nome: "Estrattore di elisir", elisir: 6, tipo: "Edificio", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Elixir Collector.png" },
  { nome: "Fantasma Royale", elisir: 3, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Royal Ghost.png" },
  { nome: "Fenice", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Phoenix.png" },
  { nome: "Fornace", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Furnace.png" },
  { nome: "Frecce", elisir: 3, tipo: "Incantesimo", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Arrows.png" },
  { nome: "Fulmine", elisir: 6, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Lightning.png" },
  { nome: "Fuorilegge", elisir: 3, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Bandit.png" },
  { nome: "Fuorilegge Boss", elisir: 6, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Boss Bandit.png" },
  { nome: "Furia", elisir: 2, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Rage.png" },
  { nome: "Gabbia per goblin", elisir: 4, tipo: "Edificio", rarità: "Rara", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Cage.png" },
  { nome: "Gang di goblin", elisir: 3, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Gang.png" },
  { nome: "Gigante", elisir: 5, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Giant.png" },
  { nome: "Gigante Royale", elisir: 6, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Royale Giant.png" },
  { nome: "Gigante elettrico", elisir: 7, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Electro Giant.png" },
  { nome: "Gigante goblin", elisir: 6, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Giant.png" },
  { nome: "Gigantessa delle rune", elisir: 4, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Rune_Giant.png" },
  { nome: "Goblin", elisir: 2, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin.png" },
  { nome: "Goblin cerbottaniere", elisir: 3, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Dart Goblin.png" },
  { nome: "Goblin demolitore", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Demolisher.png" },
  { nome: "Goblin lancieri", elisir: 2, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Spear Goblins.png" },
  { nome: "Goblinstein", elisir: 5, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblinstein.png" },
  { nome: "Golem", elisir: 8, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Golem.png" },
  { nome: "Golem del ghiaccio", elisir: 2, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Ice Golem.png" },
  { nome: "Golem di Elisir", elisir: 3, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Elixir Golem.png" },
  { nome: "Gran Cavaliere", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Mega Knight.png" },
  { nome: "Groviglio", elisir: 3, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Vines.png" },
  { nome: "Guardie", elisir: 3, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Guards.png" },
  { nome: "Guaritrice Guerriera", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Battle Healer.png" },
  { nome: "Il Tronco", elisir: 2, tipo: "Incantesimo", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_The Log.png" },
  { nome: "Imperatrice degli spiriti", elisir: 6, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_SpiritEmpress.png" },
  { nome: "Lapide", elisir: 3, tipo: "Edificio", rarità: "Rara", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Tombstone.png" },
  { nome: "Macchina goblin", elisir: 5, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Machine.png" },
  { nome: "Macchina volante", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Flying Machine.png" },
  { nome: "Maiali Royale", elisir: 5, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Royal Hogs.png" },
  { nome: "Maledizione goblin", elisir: 2, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Curse.png" },
  { nome: "Mascalzoni", elisir: 5, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Rascals.png" },
  { nome: "Mastino lavico", elisir: 7, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Lava Hound.png" },
  { nome: "Megasgherro", elisir: 3, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Megaminion.png" },
  { nome: "Minatore", elisir: 3, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Miner.png" },
  { nome: "Minatore colossale", elisir: 4, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Mighty Miner.png" },
  { nome: "Mini PEKKA", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Mini PEKKA.png" },
  { nome: "Monaco", elisir: 5, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Monk.png" },
  { nome: "Mongolfiera", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Balloon.png" },
  { nome: "Mortaio", elisir: 4, tipo: "Edificio", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Mortar.png" },
  { nome: "Moschettiere", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Musketeer.png" },
  { nome: "Nihil", elisir: 5, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Void.png" },
  { nome: "Orda di scheletri", elisir: 3, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Skeleton Army.png" },
  { nome: "Orda di sgherri", elisir: 5, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Minion_Horde.png" },
  { nome: "PEKKA", elisir: 7, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_PEKKA.png" },
  { nome: "Palla di neve gigante", elisir: 2, tipo: "Incantesimo", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Snowball.png" },
  { nome: "Pescatore", elisir: 3, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Fisherman.png" },
  { nome: "Pipistrelli", elisir: 2, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Bats.png" },
  { nome: "Principe", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Prince.png" },
  { nome: "Principe Nero", elisir: 4, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Dark Prince.png" },
  { nome: "Principessa", elisir: 3, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Princess.png" },
  { nome: "Principino", elisir: 3, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Little Prince.png" },
  { nome: "Razzo", elisir: 6, tipo: "Incantesimo", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Rocket.png" },
  { nome: "Re degli scheletri", elisir: 4, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Skeleton King.png" },
  { nome: "Reclute Royale", elisir: 7, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Royale Recruits.png" },
  { nome: "Regina degli arcieri", elisir: 5, tipo: "Truppa", rarità: "Campione", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Archer Queen.png" },
  { nome: "Ronin", elisir: 5, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Ronin.png" },
  { nome: "Scarica", elisir: 2, tipo: "Incantesimo", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Zap.png" },
  { nome: "Scaricuccioli", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Zappies.png" },
  { nome: "Scheletri", elisir: 1, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Skeletons.png" },
  { nome: "Scheletro gigante", elisir: 6, tipo: "Truppa", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Giant Bomber.png" },
  { nome: "Scintilla", elisir: 6, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Sparky.png" },
  { nome: "Sfera Infuocata", elisir: 4, tipo: "Incantesimo", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Fireball.png" },
  { nome: "Sgherri", elisir: 3, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Minion.png" },
  { nome: "Spaccamuro", elisir: 2, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Wall Breakers.png" },
  { nome: "Specchio", elisir: 0, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Mirror.png" },
  { nome: "Spirito del fuoco", elisir: 1, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Fire Spirit.png" },
  { nome: "Spirito del ghiaccio", elisir: 1, tipo: "Truppa", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Ice Spirit.png" },
  { nome: "Spirito della cura", elisir: 1, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Heal Spirit.png" },
  { nome: "Spirito elettrico", elisir: 1, tipo: "Truppa", rarità: "Comune", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Electro_Spirit.png" },
  { nome: "Strega", elisir: 5, tipo: "Truppa", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Witch.png" },
  { nome: "Strega madre", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Mother Witch.png" },
  { nome: "Strega notturna", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Night Witch.png" },
  { nome: "Stregone", elisir: 5, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Wizard.png" },
  { nome: "Stregone di ghiaccio", elisir: 3, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Ice Wizard.png" },
  { nome: "Stregone elettrico", elisir: 4, tipo: "Truppa", rarità: "Leggendaria", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Electro Wizard.png" },
  { nome: "Terremoto", elisir: 3, tipo: "Incantesimo", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Earthquake.png" },
  { nome: "Tesla", elisir: 4, tipo: "Edificio", rarità: "Comune", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Tesla.png" },
  { nome: "Tornado", elisir: 3, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Tornado.png" },
  { nome: "Torre bombardiera", elisir: 4, tipo: "Edificio", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Bomb Tower.png" },
  { nome: "Torre infernale", elisir: 5, tipo: "Edificio", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Inferno Tower.png" },
  { nome: "Tre moschettieri", elisir: 9, tipo: "Truppa", rarità: "Rara", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Three Musketeers.png" },
  { nome: "Trivella Goblin", elisir: 4, tipo: "Edificio", rarità: "Epica", evoluzione: "Sì", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Goblin Drill.png" },
  { nome: "Valchiria", elisir: 4, tipo: "Truppa", rarità: "Rara", evoluzione: "Sì", eroe: "Sì", immagine: "./ClasherdleItaliano/img/cards/Card_Valkyrie.png" },
  { nome: "Veleno", elisir: 4, tipo: "Incantesimo", rarità: "Epica", evoluzione: "No", eroe: "No", immagine: "./ClasherdleItaliano/img/cards/Card_Poison.png" }  
];

// Seleziona una carta segreta casualmente
let cartaSegreta = carte[Math.floor(Math.random() * carte.length)];
let tentativi = 5;
const storicoTentativi = []; 

function filtraCarte() {
  const input = document.getElementById("guess-input").value.toLowerCase();
  const suggestionsList = document.getElementById("suggestions-list");
  suggestionsList.innerHTML = '';

  const carteFiltrate = carte.filter(c => c.nome.toLowerCase().includes(input));
  
  if (carteFiltrate.length > 0 && input.trim() !== "") {
    suggestionsList.style.display = "block";
    carteFiltrate.forEach(carta => {
      const option = document.createElement("div");
      option.innerHTML = `
        <img src="${carta.immagine}" alt="${carta.nome}" style="width: 40px; height: auto; margin-right: 8px;">
        ${carta.nome}
      `;
      option.onclick = () => selezionaCarta(carta.nome);
      suggestionsList.appendChild(option);
    });
  } else {
    suggestionsList.style.display = "none";
  }
}

function selezionaCarta(nomeCarta) {
  document.getElementById("guess-input").value = nomeCarta;
  document.getElementById("suggestions-list").style.display = "none";
  document.getElementById("guess-input").focus(); 
}

function verificaCarta() {
  const input = document.getElementById("guess-input").value;
  const carta = carte.find(c => c.nome.toLowerCase() === input.toLowerCase());

  if (!carta) {
    document.getElementById("hint").innerText = "Seleziona una carta valida!";
    return;
  }

  if (storicoTentativi.some(c => c.nome.toLowerCase() === input.toLowerCase())) {
    document.getElementById("hint").innerText = "Hai già provato questa carta!";
    return;
  }

  if (tentativi <= 0) {
    document.getElementById("hint").innerText = `Hai esaurito i tentativi! La carta segreta era ${cartaSegreta.nome}.`;
    disabilitaGioco();
    return;
  }

  tentativi--;
  document.getElementById("tentativiNum").innerText = tentativi;

  storicoTentativi.unshift(carta); 
  aggiornaStoricoTentativi(carta); 

  if (carta.nome === cartaSegreta.nome) {
    document.getElementById("hint").innerText = "Complimenti! Hai indovinato la carta!";
    disabilitaGioco(); 
    return;
  } else {
    document.getElementById("hint").innerText = "Ritenta!";
  }

  if (tentativi === 0) {
    document.getElementById("hint").innerHTML = `Hai esaurito i tentativi! La carta segreta era ${cartaSegreta.nome}.`;
    disabilitaGioco();
  }

  document.getElementById("guess-input").value = "";
  document.getElementById("suggestions-list").style.display = "none";
}

function aggiornaStoricoTentativi(carta) {
  const storicoDiv = document.getElementById("historical-attempts");
  
  // Controlli per i colori
  const tipoClass = carta.tipo === cartaSegreta.tipo ? 'corretto' : 'sbagliato';
  const raritaClass = carta.rarità === cartaSegreta.rarità ? 'corretto' : 'sbagliato';
  const evoluzioneClass = carta.evoluzione === cartaSegreta.evoluzione ? 'corretto' : 'sbagliato';
  const eroeClass = carta.eroe === cartaSegreta.eroe ? 'corretto' : 'sbagliato';
  
  // Elisir: Controllo corretto/sbagliato e aggiunta della freccia di suggerimento
  const elisirClass = carta.elisir === cartaSegreta.elisir ? 'corretto' : 'sbagliato';
  let elisirArrow = carta.elisir === cartaSegreta.elisir ? '✔️' : (carta.elisir < cartaSegreta.elisir ? '🔼' : '🔽');

  const tentativoDiv = document.createElement("div");
  tentativoDiv.classList.add("storico-grid");
  
  tentativoDiv.innerHTML = `
    <div class="box-attributo box-nome-carta">
        <img src="${carta.immagine}" alt="${carta.nome}" style="width: 40px; margin-bottom: 5px;">
        <span style="font-size: 0.8em;">${carta.nome}</span>
    </div>
    <div class="box-attributo ${elisirClass}">💧<br>${carta.elisir}<br>${elisirArrow}</div>
    <div class="box-attributo ${tipoClass}">⚔️<br>${carta.tipo}</div>
    <div class="box-attributo ${raritaClass}">🌟<br>${carta.rarità}</div>
    <div class="box-attributo ${evoluzioneClass}">🧬<br>Evo<br>${carta.evoluzione}</div>
    <div class="box-attributo ${eroeClass}">👑<br>Eroe<br>${carta.eroe}</div>
  `;
  
  storicoDiv.prepend(tentativoDiv);
}

function disabilitaGioco() {
  document.getElementById("guess-input").disabled = true; 
  document.querySelector("button").disabled = true; 
}

function abilitaGioco() {
  document.getElementById("guess-input").disabled = false; 
  document.querySelector("button").disabled = false; 
}

function restartGame() {
  cartaSegreta = carte[Math.floor(Math.random() * carte.length)];
  tentativi = 5;
  storicoTentativi.length = 0; 
  document.getElementById("tentativiNum").innerText = tentativi;
  document.getElementById("hint").innerText = "";
  document.getElementById("guess-input").value = "";
  document.getElementById("suggestions-list").innerHTML = ''; 
  document.getElementById("suggestions-list").style.display = "none"; 
  document.getElementById("historical-attempts").innerHTML = ''; 
  abilitaGioco(); 
}

document.getElementById("guess-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    const suggestionsList = document.getElementById("suggestions-list");
    if (suggestionsList.style.display === "block" && suggestionsList.children.length === 1) {
        suggestionsList.children[0].click();
    }
    verificaCarta();
  }
});