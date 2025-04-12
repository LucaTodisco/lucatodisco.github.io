// Dati delle partite
const partite = [
  {
    squadraCasa: "Bari",
    squadraOspite: "Parma",
    punteggioCasa: 0,
    punteggioOspite: 1,
    marcatoriCasa: [],
    marcatoriOspite: ["53' David"],
    logoCasa: "../img/bari-logo.png",
    logoOspite: "../img/parma-logo.png",
    magliaCasa: "../img/kits/stagione2/bari-home.png",
    magliaOspite: "../img/kits/stagione2/parma-home.png",
    pallone: "../img/balls/stagione2/seriea-summer.png",
    note: "Partita giocata allo Stadio San Nicola."
  },
  {
    squadraCasa: "Cagliari",
    squadraOspite: "Napoli",
    punteggioCasa: 1,
    punteggioOspite: 1,
    marcatoriCasa: ["Fabio 5'"],
    marcatoriOspite: ["90' Gilberto"],
    logoCasa: "../img/cagliari-logo.png",
    logoOspite: "../img/napoli-logo.png",
    magliaCasa: "../img/kits/stagione2/cagliari-home.png",
    magliaOspite: "../img/kits/stagione2/napoli-away.png",
    pallone: "../img/balls/stagione2/seriea-summer.png",
    note: "Partita giocata allo Stadio Sant'Elia."
  },
  {
    squadraCasa: "Fiorentina",
    squadraOspite: "Reggina",
    punteggioCasa: 1,
    punteggioOspite: 1,
    marcatoriCasa: ["Chris 67'"],
    marcatoriOspite: ["57' Autorete"],  // Correzione da marcatoriOspiti a marcatoriOspite
    logoCasa: "../img/fiorentina-logo.png",
    logoOspite: "../img/reggina-logo.png",
    magliaCasa: "../img/kits/stagione2/fiorentina-home.png",
    magliaOspite: "../img/kits/stagione2/reggina-away.png",
    pallone: "../img/balls/stagione2/seriea-summer.png",
    note: "Partita giocata allo stadio Artemio Franchi."
  }
];

// Funzione per generare il calendario delle partite
function generaPartite() {
  const calendarioDiv = document.getElementById('calendario-partite');

  partite.forEach(partita => {
    const partitaDiv = document.createElement('div');
    partitaDiv.classList.add('partita');
    partitaDiv.setAttribute('onclick', 'toggleDetails(this)');

    partitaDiv.innerHTML = `
      <div class="titolo-partita">
        <div class="logo-wrapper">
          <img src="${partita.logoCasa}" alt="Logo ${partita.squadraCasa}" class="logo-squadra">
        </div>
        <div class="info-partita">
          <span class="nome-squadra">${partita.squadraCasa}</span>
          <span class="punteggio">${partita.punteggioCasa} - ${partita.punteggioOspite}</span>
          <span class="nome-squadra">${partita.squadraOspite}</span>
        </div>
        <div class="logo-wrapper">
          <img src="${partita.logoOspite}" alt="Logo ${partita.squadraOspite}" class="logo-squadra">
        </div>
      </div>
      <div class="dettagli">
        <div class="marcatori">
          <div class="marcatore casa">
            <strong>Marcatori Casa:</strong>
            <p>${partita.marcatoriCasa.join(", ")}</p>
          </div>
          <div class="marcatore ospite">
            <strong>Marcatori Ospite:</strong>
            <p>${partita.marcatoriOspite.join(", ")}</p>
          </div>
        </div>
        <div class="divise">
          <img src="${partita.magliaCasa}" alt="Maglia ${partita.squadraCasa}" class="divisa">
          <img src="${partita.pallone}" alt="Pallone" class="pallone">
          <img src="${partita.magliaOspite}" alt="Maglia ${partita.squadraOspite}" class="divisa">
        </div>
        <p class="note">Note: ${partita.note}</p>
      </div>
    `;

    calendarioDiv.appendChild(partitaDiv);
  });
}


// Funzione per aprire/chiudere i dettagli della partita
function toggleDetails(element) {
  element.classList.toggle("aperta");
}

// Genera il calendario all'avvio della pagina
document.addEventListener('DOMContentLoaded', generaPartite);
