// cara membuat object pada javascript

// 1. Object literal
let mentee = {
  name: "Rendra",
  age: 25,
  skills: "Frontend Developer",
  energy: 10,
  eat: (portion) => {
    mentee.energy += portion;
    console.log(`hello ${mentee.name} enjoy your meal 🍖`);
  },
  work: function (hours) {
    this.energy -= hours;
    this.energy <= 0
      ? console.log(`hello ${this.name} you work to hard, lets take a rest `)
      : console.log(`hello ${this.name} keep work spirit `);
  },
};

// 2. Function Declaration
function Mentee2(name, energy) {
  let mentee2 = {};
  mentee2.name = name;
  mentee2.energy = energy;
  mentee2.eat = function (portion) {
    this.energy += portion;
    console.log(`hello ${this.name} enjoy your meal 🍖`);
  };

  return mentee2;
}

let rendra = Mentee2("Rendra", 10);
let andriansyah = Mentee2("Andriansyah", 15);

// 3. Constructor Function
// keyword new
function Mentee3(name, energy) {
  this.name = name;
  this.energy = energy;
  this.eat = function (portion) {
    this.energy += portion;
    console.log(`hello ${this.name} enjoy your meal 🍖`);
  };
  this.work = function (hours) {
    this.energy -= hours;
    this.energy <= 0
      ? console.log(`hello ${this.name} you works to hard, lets take a rest `)
      : console.log(`hello ${this.name} keep spirit `);
  };
}

// menggunakan keyword new
let evita = new Mentee3("Evita", 20);

// 4. Object.create

const methodMentee = {
  eat: function (portion) {
    this.energy += portion;
    console.log(`hello ${this.name} enjoy your meal 🍖`);
  },

  work: function (hours) {
    this.energy -= hours;
    this.energy <= 0
      ? console.log(`hello ${this.name} you works to hard, lets take a rest `)
      : console.log(`hello ${this.name} keep spirit `);
  },
};

function Mentee4(name, energy) {
  let mentee4 = Object.create(methodMentee);
  mentee4.name = name;
  mentee4.energy = energy;

  return mentee4;
}

let gemoy = Mentee4("Gemoy", 10);
let abang = Mentee4("Abang", 15);
