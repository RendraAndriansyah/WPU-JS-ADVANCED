// =======================
// OBJECT DENGAN PROTOTYPE
// =======================

function Mahasiswa(name, energy) {
  this.name = name;
  this.energy = energy;
}

Mahasiswa.prototype.eat = function (eats) {
  this.energy += eats;
  console.log(`hello ${this.name}, enjoy your meal 🍽️`);
};

Mahasiswa.prototype.study = function (study) {
  this.energy -= study;
  console.log(`hii ${this.name} keep study hard for your goals 😃`);
};

let rendra = new Mahasiswa("Rendra", 10);

// ===================
// OBJECT DENGAN CLASS
// ===================

class Mentee {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(portions) {
    this.energy += portions;
    console.log(`hello ${this.name}, enjoy your meal`);
  }

  study(hours) {
    this.energy -= hours;
    console.log(`hii ${this.name} good works`);
  }
}

let evita = new Mentee("Evita", 25);

let nilai = [1, 2, 3];
console.log(nilai);
