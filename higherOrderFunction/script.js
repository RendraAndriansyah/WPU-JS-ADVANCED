const angka = [1, 9, 2, 7, 3, 6, 5, 3, -3, -6];

// ==========
// = FILTER =
// ==========

// FILTER ANGKA LEBIH DARI 5 TANPA CALLBACK (5 BARIS CODE)
const filterAngka2 = angka.filter(checkAngka);
function checkAngka(angka) {
  return angka >= 5;
}
console.log(filterAngka2); // [9,7,6,4]

// FILTER ANGKA LEBIH DARI 5 DENGAN CALLBACK FUNCTION BIASA (4 BARIS CODE)
const filterAngka = angka.filter(function (a) {
  return a >= 5;
});
console.log(filterAngka); // [9,7,6,4]

// FILTER ANGKA LEBIH DARI 4 DENGAN CALLBACK ARROW FUNCTION (2 BARIS CODE)
const filterAngka3 = angka.filter((a) => a >= 5);
console.log(filterAngka3);

// =======
// = MAP =
// =======

// TIAP VALUE DIKALI 5 DENGAN CALLBACK ARROW FUNCTION
const mapAngka = angka.map((a) => a * 2);
console.log(mapAngka); // [2.18,4,14,6,12,10,6,-6,-12]

// ==========
// = REDUCE =
// ==========

// MENJUMLAHKAN TOTAL NILAI DARI VALUE
// reduce membutuhkan 2 parameter, parameter pertama(acc) return value
// dan parameter kedua(cur) adalah nilai awal
const reduceAngka = angka.reduce((acc, cur) => acc + cur);
console.log(reduceAngka); // 27

// =============
// = CHAINLINK =
// =============

const angka2 = [2, 4, 6, 8, 10, 1, 3, 5, 7, 9];

const chainlinkAngka = angka2
  .filter((a) => a >= 5) // [6,8,10,5,7,9,]
  .map((a) => a * 2) // [12,16,20,10,14,18,20]
  .reduce((acc, cur) => acc + cur); // [12 + 16 + 20 + 10 + 14 + 18 + 20]

console.log(chainlinkAngka); //
