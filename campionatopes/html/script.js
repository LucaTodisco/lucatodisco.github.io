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
    pallone: "../img/balls/stagione2/roteiro-blue.png",
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
    pallone: "../img/balls/stagione2/roteiro-blue.png",
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
    pallone: "../img/balls/stagione2/roteiro-blue.png",
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
        <div class="logo-blocco">
          <img src="${partita.logoCasa}" alt="${partita.squadraCasa}" class="logo-squadra">
        </div>
        <div class="nome-squadra">${partita.squadraCasa}</div>
        <div class="punteggio">${partita.punteggioCasa} - ${partita.punteggioOspite}</div>
        <div class="nome-squadra">${partita.squadraOspite}</div>
        <div class="logo-blocco">
          <img src="${partita.logoOspite}" alt="${partita.squadraOspite}" class="logo-squadra">
        </div>
      </div>
      <div class="dettagli">
        <div class="marcatori">
          <div class="marcatore casa">${partita.marcatoriCasa.join("<br>")}</div>
          <div class="marcatore ospite">${partita.marcatoriOspite.join("<br>")}</div>
        </div>
        <div class="divise">
          <img src="${partita.magliaCasa}" alt="Maglia ${partita.squadraCasa}" class="divisa">
          <img src="${partita.pallone}" alt="Pallone" class="pallone">
          <img src="${partita.magliaOspite}" alt="Maglia ${partita.squadraOspite}" class="divisa">
        </div>
        <div class="note">${partita.note}</div>
      </div>
    `;

    calendarioDiv.appendChild(partitaDiv);
  });
}

function toggleDetails(element) {
  element.classList.toggle("aperta");
}

document.addEventListener('DOMContentLoaded', generaPartite);
