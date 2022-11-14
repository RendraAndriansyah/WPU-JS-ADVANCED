function init() {
  return function (nama, usia) {
    console.log(nama);
    console.log(usia);
  };
}

let panggilNama = init();
panggilNama("Rendra", 25);

//===================
console.log(`\n`);
//===================

function salam(waktu) {
  return function (nama) {
    console.log(`Selamat ${waktu}, Nama saya ${nama}`);
  };
}

let pagi = salam("pagi");
let siang = salam("siang");
let malam = salam("malam");
pagi("Muhammad");
siang("Rendra");
malam("Andriansyah");

//====================//
console.log(`\n`);
//===================//

let add = (function count() {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
