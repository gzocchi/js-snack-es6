// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// FUNCTIONS
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const serieB = [
  {
    nome: "Empoli",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Monza",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Salernitana",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Lecce",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Venezia",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Cittadella",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Brescia",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Chievo Verona",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Spal",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Frosinone",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Reggina",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "L.R. Vicenza",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Cremonese",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Pisa",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Pordenone",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Ascoli",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Cosenza",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Reggiana",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Pescara",
    punti: 0,
    falli_subiti: 0,
  },
  {
    nome: "Virtus Entella",
    punti: 0,
    falli_subiti: 0,
  },
];

// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const falliSerieB = [];
for (var i = 0; i < serieB.length; i++) {
  serieB[i].punti = randomNumber(18, 90);
  serieB[i].falli_subiti = randomNumber(15, 82);
  let { nome, falli_subiti } = serieB[i];
  falliSerieB.push([nome, falli_subiti]);
  console.log(`Squadra: ${nome} - ${falli_subiti} falli subiti`);
}
//console.log(falliSerieB);   // debug
