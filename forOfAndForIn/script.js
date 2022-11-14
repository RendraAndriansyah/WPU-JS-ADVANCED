// ======
// FOR OF
// ======

// array
const mhs = ["Muhammad", "Rendra", "Andriansyah"];

// looping dengan for biasa
console.log("==== FOR BIASA ====");
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// looping dengan forEach *** hanya bisa digunakan pada type data array
console.log("==== FOREACH ====");
mhs.forEach((m) => console.log(m));

// looping dengan for of
console.log("==== FOR OF ====");
for (const iterator of mhs) {
  console.log(iterator);
}

// string
const nama = "RENDRA";
console.log("==== STRING ====");
for (const iterator of nama) {
  console.log(iterator); // melooping tiap character
}

// nodelist
const nodeList = document.querySelectorAll(".nama");
console.log("==== NODELIST =====");
for (const node of nodeList) {
  console.log(node.textContent);
}

// arguments
console.log("==== ARGUMENTS =====");
function jumlahAngka(...arr) {
  let res = 0;
  for (const iterator of arr) {
    res += iterator;
  }
  return res;
}
console.log(jumlahAngka(1, 3, 5, 7, 9)); // 25

// ======
// FOR IN
// ======

// object
const bio = {
  nama: "Rendra",
  usia: 25,
  class: "Frontend Developer",
  batch: 10,
  mentee: "Prayoga",
};

console.log("==== FOR IN ====");
for (const key in bio) {
  console.log(bio[key]);
}
