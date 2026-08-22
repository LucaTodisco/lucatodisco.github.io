const letterMap = [
  "./CRCardGuessing/img_supercell/letter_a.png",
  "./CRCardGuessing/img_supercell/letter_b.png",
  "./CRCardGuessing/img_supercell/letter_c.png",
  "./CRCardGuessing/img_supercell/letter_d.png",
  "./CRCardGuessing/img_supercell/letter_e.png",
  "./CRCardGuessing/img_supercell/letter_f.png",
  "./CRCardGuessing/img_supercell/letter_g.png",
  "./CRCardGuessing/img_supercell/letter_h.png",
  "./CRCardGuessing/img_supercell/letter_i.png",
  "./CRCardGuessing/img_supercell/letter_j.png",
  "./CRCardGuessing/img_supercell/letter_k.png",
  "./CRCardGuessing/img_supercell/letter_l.png",
  "./CRCardGuessing/img_supercell/letter_m.png",
  "./CRCardGuessing/img_supercell/letter_n.png",
  "./CRCardGuessing/img_supercell/letter_o.png",
  "./CRCardGuessing/img_supercell/letter_p.png",
  "./CRCardGuessing/img_supercell/letter_q.png",
  "./CRCardGuessing/img_supercell/letter_r.png",
  "./CRCardGuessing/img_supercell/letter_s.png",
  "./CRCardGuessing/img_supercell/letter_t.png",
  "./CRCardGuessing/img_supercell/letter_u.png",
  "./CRCardGuessing/img_supercell/letter_v.png",
  "./CRCardGuessing/img_supercell/letter_w.png",
  "./CRCardGuessing/img_supercell/letter_x.png",
  "./CRCardGuessing/img_supercell/letter_y.png",
  "./CRCardGuessing/img_supercell/letter_z.png"
];

const languageTexts = {
  italian: {
    toggleLanguageButton: "Cambia Lingua",
    newWordButton: "Nuova Carta",
    revealButton: "Rivela Carta",
  },
  english: {
    toggleLanguageButton: "Change Language",
    newWordButton: "New Card",
    revealButton: "Reveal Card",
  },
};

const blankImageSrc = "./CRCardGuessing/img_supercell/blank.png";

const italianWords = [
  "Arciere magico",
  "Arciere pirotecnico",
  "Arcieri",
  "Arco-X",
  "Ariete da battaglia",
  "Barbari",
  "Barbari scelti",
  "Barile barbarico",
  "Barile d'ossa",
  "Barile Goblin",  
  "Bocciatore",
  "Boia",
  "Bombarolo",
  "Boscaiolo",
  "Cacciatore",
  "Cannone",
  "Cannone a rotelle",
  "Capanna dei barbari",
  "Capanna goblin",
  "Cavaliere",
  "Cavaliere d'oro",
  "Clonazione",
  "Cimitero",
  "Congelamento",
  "Consegna Royale",
  "Cucciolo di drago",
  "Domatore di cinghiali",
  "Domatrice di arieti",
  "Draghi d'ossa",
  "Drago elettrico",
  "Drago infernale",
  "Estrattore di elisir",
  "Fantasma Royale",
  "Fenice",
  "Fornace",
  "Frecce",
  "Fulmine",
  "Furia",
  "Fuorilegge",
  "Gabbia per goblin",
  "Gang di goblin",
  "Gigante",
  "Gigante elettrico",
  "Gigante goblin",
  "Gigante Royale",
  "Goblin",
  "Goblin cerbottaniere",
  "Goblin lancieri",
  "Golem",
  "Golem del ghiaccio",
  "Golem di elisir",
  "Gran cavaliere",
  "Guardie",
  "Guaritrice guerriera",
  "Il tronco",
  "Lapide",
  "Macchina volante",
  "Maiali Royale",
  "Mascalzoni",
  "Mastino lavico",
  "Megasgherro",
  "Minatore",
  "Minatore colossale",
  "Mini PEKKA",
  "Monaco",
  "Mongolfiera",
  "Mortaio",
  "Moschettiere",
  "Orda di scheletri",
  "Orda di sgherri",
  "Palla di neve gigante",
  "PEKKA",
  "Pescatore",
  "Pipistrelli",
  "Principe",
  "Principe nero",
  "Principessa",
  "Razzo",
  "Re degli scheletri",
  "Reclute Royale",
  "Regina degli Arcieri",
  "Scarica",
  "Scaricuccioli",
  "Scheletri",
  "Scheletro gigante",
  "Scintilla",
  "Sfera infuocata",
  "Sgherri",
  "Spaccamuro",
  "Specchio",
  "Spirito del fuoco",
  "Spirito del ghiaccio",
  "Spirito della cura",
  "Spirito elettrico",
  "Strega",
  "Strega madre",
  "Strega notturna",
  "Stregone",
  "Stregone di ghiaccio",
  "Stregone elettrico",
  "Terremoto",
  "Tesla",
  "Tornado",
  "Torre bombardiera",
  "Torre infernale",
  "Tre moschettieri",
  "Trivella goblin",
  "Valchiria",
  "Veleno",
  "Berserker",
  "Gigantessa delle Rune",
  "Cespuglio Sospetto",
  "Fuorilegge Boss",
  "Goblin Demolitore",
  "Goblinstein",
  "Groviglio",
  "Imperatrice degli Spiriti",
  "Macchina Goblin",
  "Maledizione Goblin",
  "Nihil",
  "Principino",
  "Ronin"
];

const englishWords = [
  "Magic Archer",
  "Firecracker",
  "Archers",
  "X-Bow",
  "Battle Ram",
  "Barbarian",
  "Elite Barbarians",
  "Barbarian Barrel",
  "Skeleton Barrel",
  "Goblin Barrel",
  "Bowler",
  "Executioner",
  "Bomber",
  "Lumberjack",
  "Hunter",
  "Cannon",
  "Cannon Cart",
  "Barbarian Hut",
  "Goblin Hut",
  "Knight",
  "Golden Knight",
  "Clone",
  "Graveyard",
  "Freeze",
  "Royal Delivery",
  "Baby Dragon",
  "Hog Rider",
  "Ram Rider",
  "Skeleton Dragons",
  "Electro Dragon",
  "Inferno Dragon",
  "Elixir Collector",
  "Royal Ghost",
  "Phoenix",
  "Furnace",
  "Arrows",
  "Lightning",
  "Rage",
  "Bandit",
  "Goblin Cage",
  "Goblin Gang",
  "Giant",
  "Electro Giant",
  "Goblin Giant",
  "Royal Giant",
  "Goblins",
  "Dart Goblin",
  "Spear Goblins",
  "Golem",
  "Ice Golem",
  "Elixir Golem",
  "Mega Knight",
  "Guards",
  "Battle Healer",
  "The Log",
  "Tombstone",
  "Flying Machine",
  "Royal Hogs",
  "Rascals",
  "Lava Hound",
  "Mega Minion",
  "Miner",
  "Mighty Miner",
  "Mini PEKKA",
  "Monk",
  "Balloon",
  "Mortar",
  "Musketeer",
  "Skeleton Army",
  "Minion Horde",
  "Giant Snowball",
  "PEKKA",
  "Fisherman",
  "Bats",
  "Prince",
  "Dark Prince",
  "Princess",
  "Rocket",
  "Skeleton King",
  "Royal Recruits",
  "Archer Queen",
  "Zap",
  "Zappies",
  "Skeletons",
  "Giant Skeleton",
  "Sparky",
  "Fireball",
  "Minions",
  "Wall Breakers",
  "Mirror",
  "Fire Spirit",
  "Ice Spirit",
  "Heal Spirit",
  "Electro Spirit",
  "Witch",
  "Mother Witch",
  "Night Witch",
  "Wizard",
  "Ice Wizard",
  "Electro Wizard",
  "Earthquake",
  "Tesla",
  "Tornado",
  "Bomb Tower",
  "Inferno Tower",
  "Three Musketeers",
  "Goblin Drill",
  "Valkyrie",
  "Poison",
  "Berserker",
  "Rune Giant",
  "Suspicious Bush",
  "Boss Bandit",
  "Goblin Demolisher",
  "Goblinstein",
  "Vines",
  "Spirit Empress",
  "Goblin Machine",
  "Goblin Curse",
  "Void",
  "Little Prince",
  "Ronin"
];

let currentLanguage = "italian";
let currentWord = "";

function updateButtonTexts() {
  document.getElementById("toggle-language-button").textContent = languageTexts[currentLanguage].toggleLanguageButton;
  document.getElementById("new-word-button").textContent = languageTexts[currentLanguage].newWordButton;
  document.getElementById("reveal-button").textContent = languageTexts[currentLanguage].revealButton;
}

function getRandomWord() {
  const words = currentLanguage === "italian" ? italianWords : englishWords;
  return words[Math.floor(Math.random() * words.length)].toUpperCase();
}

function displayWordImages() {
  const wordImagesDiv = document.getElementById("word-images");
  wordImagesDiv.innerHTML = ""; 

  const wordParts = currentWord.split(" ");

  wordParts.forEach((wordPart, partIndex) => {
    // Contenitore per la singola parola
    const wordContainer = document.createElement("div");
    wordContainer.style.display = "flex";
    
    for (let j = 0; j < wordPart.length; j++) {
      const letter = wordPart[j];
      const letterIndex = letter.charCodeAt(0) - 65;

      // Se è una lettera valida, crea l'immagine coperta
      if (letterIndex >= 0 && letterIndex <= 25 && letterMap[letterIndex]) {
        const image = document.createElement("img");
        image.src = blankImageSrc; 
        image.classList.add("letter-image", "hidden-letter");
        image.setAttribute("data-letter-index", letterIndex);

        image.addEventListener("click", function () {
          if (this.classList.contains("hidden-letter")) {
            this.classList.remove("hidden-letter");
            this.classList.add("reveal-anim"); 
            this.src = letterMap[this.getAttribute("data-letter-index")];
          }
        });

        wordContainer.appendChild(image);
      } else {
        // Caratteri speciali (spazi, trattini)
        const letterSpan = document.createElement("span");
        letterSpan.textContent = letter;
        letterSpan.style.alignSelf = "center";
        wordContainer.appendChild(letterSpan);
      }
    }
    
    wordImagesDiv.appendChild(wordContainer);

    if (partIndex < wordParts.length - 1) {
      const spaceSpan = document.createElement("span");
      spaceSpan.classList.add("word-space");
      wordImagesDiv.appendChild(spaceSpan);
    }
  });
}

// ==========================================
// EVENT LISTENERS DEI PULSANTI
// ==========================================

document.getElementById("new-word-button").addEventListener("click", function () {
  currentWord = getRandomWord();
  displayWordImages();
});

document.getElementById("reveal-button").addEventListener("click", function () {
  const letterImages = document.getElementsByClassName("letter-image");
  for (let image of letterImages) {
    if (image.classList.contains("hidden-letter")) {
      image.classList.remove("hidden-letter");
      image.classList.add("reveal-anim");
      image.src = letterMap[image.getAttribute("data-letter-index")];
    }
  }
});

document.getElementById("toggle-language-button").addEventListener("click", function () {
  currentLanguage = currentLanguage === "italian" ? "english" : "italian";
  currentWord = getRandomWord();
  displayWordImages();
  updateButtonTexts();
});

// ==========================================
// AVVIO DEL GIOCO
// ==========================================
currentWord = getRandomWord();
displayWordImages();
updateButtonTexts();
