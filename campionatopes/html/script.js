
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
    stadioImg: "../img/stadiums/bari-estate-notte-sereno.png",
    note: "Stadio San Nicola - Bari"
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
    stadioImg: "../img/stadiums/cagliari-estate-notte-sereno.png",
    note: "Unipol Domus - Cagliari"
  },
  {
    squadraCasa: "Fiorentina",
    squadraOspite: "Reggina",
    punteggioCasa: 1,
    punteggioOspite: 1,
    marcatoriCasa: ["Chris 67'"],
    marcatoriOspite: ["57' Autorete"],
    logoCasa: "../img/fiorentina-logo.png",
    logoOspite: "../img/reggina-logo.png",
    magliaCasa: "../img/kits/stagione2/fiorentina-home.png",
    magliaOspite: "../img/kits/stagione2/reggina-away.png",
    pallone: "../img/balls/stagione2/roteiro-blue.png",
    stadioImg: "../img/stadiums/fiorentina-estate-giorno-sereno.png",
    note: "Stadio Artemio Franchi - Firenze"
  },
  {
    squadraCasa: "Genoa",
    squadraOspite: "Juventus",
    punteggioCasa: 0,
    punteggioOspite: 1,
    marcatoriCasa: [],
    marcatoriOspite: ["76' Mattia"],
    logoCasa: "../img/genoa-logo.png",
    logoOspite: "../img/juventus-logo.png",
    magliaCasa: "../img/kits/stagione2/genoa-home.png",
    magliaOspite: "../img/kits/stagione2/juventus-third.png",
    pallone: "../img/balls/stagione2/roteiro-blue.png",
    stadioImg: "../img/stadiums/genoa-estate-giorno-sereno.png",
    note: "Stadio Luigi Ferrari - Genova"
  },
  {
    squadraCasa: "Inter",
    squadraOspite: "Sampdoria",
    punteggioCasa: 2,
    punteggioOspite: 2,
    marcatoriCasa: ["Mattia 59'","Simone 90'"],
    marcatoriOspite: ["4' Antonio","51' Giampaolo"],
    logoCasa: "../img/inter-logo.png",
    logoOspite: "../img/sampdoria-logo.png",
    magliaCasa: "../img/kits/stagione2/inter-home.png",
    magliaOspite: "../img/kits/stagione2/sampdoria-away.png",
    pallone: "../img/balls/stagione2/roteiro-blue.png",
    stadioImg: "../img/stadiums/inter-estate-giorno-sereno.png",
    note: "Stadio Giuseppe Meazza - Milano"
  },
  {
    squadraCasa: "Lazio",
    squadraOspite: "Roma",
    punteggioCasa: 0,
    punteggioOspite: 0,
    marcatoriCasa: [],
    marcatoriOspite: [],
    logoCasa: "../img/lazio-logo.png",
    logoOspite: "../img/roma-logo.png",
    magliaCasa: "../img/kits/stagione2/lazio-home.png",
    magliaOspite: "../img/kits/stagione2/roma-home.png",
    pallone: "../img/balls/stagione2/roteiro-blue.png",
    stadioImg: "../img/stadiums/lazio-estate-notte-sereno.png",
    note: "Stadio Olimpico - Roma"
  }
];

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
      <div class="dettagli" style="background-image: url('${partita.stadioImg}');">
        <div class="overlay">
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
      </div>
    `;

    calendarioDiv.appendChild(partitaDiv);
  });
}

function toggleDetails(element) {
  element.classList.toggle("aperta");
}

document.addEventListener('DOMContentLoaded', generaPartite);
