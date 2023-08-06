const wordImages = [
  // Inserisci qui gli URL delle immagini corrispondenti alle lettere
  // Puoi associare le immagini con le lettere usando un array o un oggetto chiave-valore.
  // Ad esempio, se usi un array, la posizione corrisponderà all'indice della lettera.
  // wordImages[0] rappresenterà l'immagine per la prima lettera, wordImages[1] per la seconda, e così via.
  "./games/CRCardGuessing/img_supercell/letter_a.png",
  "./games/CRCardGuessing/img_supercell/letter_b.png",
  "./games/CRCardGuessing/img_supercell/letter_c.png",
  "./games/CRCardGuessing/img_supercell/letter_d.png",
  "./games/CRCardGuessing/img_supercell/letter_e.png",
  "./games/CRCardGuessing/img_supercell/letter_f.png",
  "./games/CRCardGuessing/img_supercell/letter_g.png",
  "./games/CRCardGuessing/img_supercell/letter_h.png",
  "./games/CRCardGuessing/img_supercell/letter_i.png",
  "./games/CRCardGuessing/img_supercell/letter_j.png",
  "./games/CRCardGuessing/img_supercell/letter_k.png",
  "./games/CRCardGuessing/img_supercell/letter_l.png",
  "./games/CRCardGuessing/img_supercell/letter_m.png",
  "./games/CRCardGuessing/img_supercell/letter_n.png",
  "./games/CRCardGuessing/img_supercell/letter_o.png",
  "./games/CRCardGuessing/img_supercell/letter_p.png",
  "./games/CRCardGuessing/img_supercell/letter_q.png",
  "./games/CRCardGuessing/img_supercell/letter_r.png",
  "./games/CRCardGuessing/img_supercell/letter_s.png",
  "./games/CRCardGuessing/img_supercell/letter_t.png",
  "./games/CRCardGuessing/img_supercell/letter_u.png",
  "./games/CRCardGuessing/img_supercell/letter_v.png",
  "./games/CRCardGuessing/img_supercell/letter_w.png",
  "./games/CRCardGuessing/img_supercell/letter_x.png",
  "./games/CRCardGuessing/img_supercell/letter_y.png",
  "./games/CRCardGuessing/img_supercell/letter_z.png"
  // ... e così via per le altre lettere dell'alfabeto.
];

// Definisci le parole corrette per i testi in italiano e in inglese
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

const blankImageSrc = "././games/CRCardGuessing/img_supercell/blank.png"; // Percorso dell'immagine "blank"

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
  "Veleno"
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
  "Poison"
];

// Variabile per tenere traccia della lingua selezionata (0 per italiano, 1 per inglese)
let currentLanguage = "italian";
let currentWord = "";

// Funzione per aggiornare i testi dei pulsanti in base alla lingua corrente
function updateButtonTexts() {
  toggleLanguageButton.textContent = languageTexts[currentLanguage].toggleLanguageButton;
  newWordButton.textContent = languageTexts[currentLanguage].newWordButton;
  revealButton.textContent = languageTexts[currentLanguage].revealButton;
}

// Funzione per selezionare casualmente una parola da un array in base alla lingua selezionata
function getRandomWord() {
  if (currentLanguage === "italian") {
    return italianWords[Math.floor(Math.random() * italianWords.length)].toUpperCase();
  } else {
    return englishWords[Math.floor(Math.random() * englishWords.length)].toUpperCase();
  }
}

// Funzione per visualizzare le immagini per la parola corrente
function displayWordImages() {
  const wordImagesDiv = document.getElementById("word-images");
  wordImagesDiv.innerHTML = ""; // Pulisce il contenuto precedente

  const wordParts = currentWord.split(" ");
  const addSpace = wordParts.length > 1;

  for (let i = 0; i < wordParts.length; i++) {
    const wordPart = wordParts[i];

    for (let j = 0; j < wordPart.length; j++) {
      const letter = wordPart[j].toUpperCase(); // Converti la lettera in maiuscolo
      const letterIndex = letter.charCodeAt(0) - 65;

	  if (letterIndex >= 0 && letterIndex < wordImages.length) {
		const imageSrc = wordImages[letterIndex];
		const image = document.createElement("img");
		image.src = blankImageSrc; // Usa l'immagine "blank" come immagine iniziale
		image.classList.add("letter-image", "hidden-letter");
		image.setAttribute("data-letter-index", letterIndex); // Aggiungi l'indice della lettera come attributo

		if (i === wordParts.length - 1 && j === wordPart.length - 1) {
		  image.classList.add("last-letter");
		}

		// Aggiunge un listener di evento per cambiare la classe al click
		image.addEventListener("click", function () {
		  if (this.classList.contains("hidden-letter")) {
			this.classList.remove("hidden-letter");
			const letterIndex = this.getAttribute("data-letter-index");
			this.src = wordImages[letterIndex];
		  }
		});

		wordImagesDiv.appendChild(image);
	  } else {
		// Se la lettera non è un'immagine, aggiungila come testo normale
		const letterSpan = document.createElement("span");
		letterSpan.textContent = letter;
		wordImagesDiv.appendChild(letterSpan);
	  }
	}

	if (addSpace && i < wordParts.length - 1) {
      const spaceSpan = document.createElement("span");
      spaceSpan.textContent = " ";
      spaceSpan.classList.add("word-space"); // Aggiunge la classe per lo spazio tra le parole
      wordImagesDiv.appendChild(spaceSpan);
    }
  }
}

// Funzione per aggiornare i testi dei pulsanti in base alla lingua corrente
function updateButtonTexts() {
  toggleLanguageButton.textContent = languageTexts[currentLanguage].toggleLanguageButton;
  newWordButton.textContent = languageTexts[currentLanguage].newWordButton;
  revealButton.textContent = languageTexts[currentLanguage].revealButton;
}


// Bottone per generare una nuova parola
const newWordButton = document.getElementById("new-word-button");
newWordButton.addEventListener("click", function () {
  currentWord = getRandomWord();
  displayWordImages();
});

// Bottone per rivelare la parola
const revealButton = document.getElementById("reveal-button");
revealButton.addEventListener("click", function () {
  const letterImages = document.getElementsByClassName("letter-image");
  for (let image of letterImages) {
	image.classList.remove("hidden-letter");
	const letterIndex = image.getAttribute("data-letter-index");
	image.src = wordImages[letterIndex];
  }
});

// Bottone per cambiare lingua
const toggleLanguageButton = document.getElementById("toggle-language-button");
toggleLanguageButton.addEventListener("click", function () {
  toggleLanguage();
  updateButtonTexts();
});

// Funzione per cambiare lingua e visualizzare una nuova parola
function toggleLanguage() {
  currentLanguage = currentLanguage === "italian" ? "english" : "italian";
  document.getElementById("word-images").innerHTML = ""; // Pulisce il contenuto precedente
  currentWord = getRandomWord();
  displayWordImages();
}

// Genera una parola casuale all'avvio della pagina
currentWord = getRandomWord();
displayWordImages();
updateButtonTexts(); // Imposta i testi dei pulsanti inizialmente in italiano




