// KONSEP THIS PADA ARROW FUNCTION

// ====================
// Constructor Function
// ====================
const Nama = function () {
  this.nama = "Rendra";
  this.usia = 25;
  this.intro = function () {
    return `hii nama saya ${this.nama}, usia saya ${this.usia}`;
  };
};

let panggilNama = new Nama();

// ====================
// Versi Arrow Function
// ====================
const Name = function () {
  this.name = "Andriansyah";
  this.age = 25;
  this.intro = () => `my name is ${this.name}, I'm ${this.age} old`;
};

let panggilNama2 = new Name();

// ==============
// object literal
// ==============
const mhs = {
  nama: "rendra",
  usia: 25,
  sayhello: () => {
    // console.log(`hii nama saya ${nama}, usia saya ${usia}`);
    console.log(this); // bukti arrow function tidak memiliki konsep this
  },
};

// CONTOH LAIN
const Nama3 = function (nama) {
  this.nama = nama;
  this.usia = 25;

  this.intro = function () {
    return `hii nama saya ${this.nama}, usia saya ${this.usia}`;
  };

  //   setInterval(() => {
  //     console.log(`usia ${this.nama} ${this.usia++}`);
  //   }, 500);
};

let panggilNama3 = new Nama3("rendra");

// ============
// TEST DOM BOX
// ============

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) [satu, dua] = [dua, satu];

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
