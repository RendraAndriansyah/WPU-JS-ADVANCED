// ARROW FUNCTION

const tampilPesan = (nama) => {
  return `hello ${nama}`;
};

console.log(tampilPesan("Rendra"));

// CARA YANG LEBIH RINGKAS (IMPLICIT RETURN)
// tidak perlu curly bracket dan keyword return
const tampilPesan2 = (nama) => `hello ${nama}`;

console.log(tampilPesan2("Andrianysah"));

// CONTOH ARRAY IMPLICIT RETURN
let nama = ["Muhammad", "Rendra", "Andrianysah"];
let jumlahHuruf = nama.map((nama) => nama.length);

console.log(jumlahHuruf);

let objectJumlahHuruf = nama.map((nama) => ({
  nama: nama,
  jumlahHuruf: nama.length,
}));

console.table(objectJumlahHuruf);
