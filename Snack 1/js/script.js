// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
const racingBike = [
  {
    nome: "BIANCHI - Via Nirone 7",
    peso: 9.66,
  },
  {
    nome: "TREK - Checkpoint ALR 4",
    peso: 10.26,
  },
  {
    nome: "CANYON - Speedmax CF 8 DISC",
    peso: 9.32,
  },
  {
    nome: "SCOTT - Speedster 10",
    peso: 9.5,
  },
  {
    nome: "SPECIALIZED - S-Works Shiv Disc",
    peso: 6.5,
  },
];
console.log(racingBike); // debug

// Stampare a schermo la bici con peso minore.
let [lightBike] = racingBike;

for (var i = 1; i < racingBike.length; i++) {
  if (racingBike[i].peso < lightBike.peso) {
    lightBike = racingBike[i];
  }
}

const { nome, peso } = lightBike;
console.log(`La bicicletta più leggera è: ${nome}
con un peso di ${peso} Kg`);
