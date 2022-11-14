// =============
// RES PARAMETER
// =============

function tambahAngka(...angka) {
  let res = 0;
  // dengan for of
  for (const i of angka) {
    res += i;
  }
  return res;
}
console.log(tambahAngka(1, 2, 3, 4, 5)); // 15

function tambahAngka2(...angka) {
  // dengan reduce
  return angka.reduce((a, b) => a + b);
}
console.log(tambahAngka2(1, 3, 5, 7, 9)); // 25

// array destructuring
const nama = ["Rendra", "Andriansyah", "Evita", "Sari"];

const [R, A, ...monyong] = nama;
console.log(R); // Rendra
console.log(A); // Andrianysah
console.log(...monyong); // Evita sari

// object destructuring
const team = {
  pm: "Rendra",
  tl: "Andrianysah",
  fe: "Evita",
  be: "sari",
};

const { pm, ...myTeam } = team;
console.log(pm);
console.log(myTeam);

// filter

function filter(type, ...values) {
  return values.filter((f) => typeof f === type);
}

console.log(filter("number", 1, 2, 3, false, "Rendra", true, 4, 5, 6));
