// =============
// DESTRUCTURING
// =============

// CONTOH 1 ARRAY
const nama = ["Rendra", "Andrianysah", "Evita", "Sari"];

const monyong = nama[2];
console.log(monyong); // Evita

const [R, A, E, S] = nama; // assignment dengan kurung siku
console.log(R); // Rendra
console.log(A); // Andrianshyah
console.log(E); // Evita
console.log(S); // Sari

// swap item
let a = 10;
let b = 25;
[a, b] = [b, a]; // SWAP
console.log(a); // 25
console.log(b); // 10

// return value dengan function
function test() {
  return ["Muhammad", "Rendra", "Andriansyah"];
}
const [muh, ren, and] = test();
console.log(muh); // Muhammad

// res parameter
const data = [1, 2, 3, 4, 5];
const [c, ...dataSelector] = data; // titik 3 ...
console.log(c); // 1
console.log(dataSelector); // [2,3,4,5]

// ===============
// CONTOH 2 OBJECT
// ===============

const bio = {
  namaP: "Rendra",
  usia: 25,
};
const { namaP, usia } = bio; // assignment dengan bracket (harus sama dengan property object)

console.log(namaP); // Rendra
console.log(usia); // 25

({ namaS, usiaS } = { namaS: "Evita", usiaS: 24 }); // assignmnet tanpa deklarasi object

console.log(namaS); // Evita
console.log(usiaS); // 24

const bio2 = {
  nama: "Rendra",
  pekerjaan: "Frontend Developer",
};

function getProperty({ nama, pekerjaan }) {
  // destructuring parameter arguments
  return `hii nama saya ${nama}, dan pekerjaan saya adalaha ${pekerjaan}`;
}

console.log(getProperty(bio2));
