// ===============
// SPREAD OPERATOR
// ===============

// memecah iterables menjadi single element
const mentee = ["Muhammad", "Rendra", "Andriansyah"];
console.log(...mentee);

// menggabungkan 2 array
const mentee2 = ["Evita", "Sari"];
const combine = [...mentee, ...mentee2];
console.log(combine);

// meng-copy array
const mentee3 = ["Gemoy", "Abang", "Monyong"];
const copy = [...mentee3];
copy[2] = "Ucul";
console.log(copy);

const liNa = document.querySelectorAll("li");
let newArr = [...liNa].map((li) => li.textContent);
console.log(newArr);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

console.log(huruf);
nama.innerHTML = huruf;
