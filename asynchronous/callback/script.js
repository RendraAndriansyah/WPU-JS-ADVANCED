// ========
// CALLBACK
// ========

// ====================
// synchronous callback
// ====================
function halo(namaAnda) {
  alert(`halo ${namaAnda}`);
}

function tampilkanPesan(cb) {
  const nama = prompt("Masukkan nama : ");
  cb(nama);
}
// tampilkanPesan(halo);

// dengan array of object
const bio = [
  {
    nama: "Rendra",
    pekerjaan: "Frontend",
  },
  {
    nama: "Evita",
    pekerjaan: "General Officer",
  },
];

// dengan for of
console.log("start");
for (let i = 0; i < 2000; i++) {
  console.log("hii");
}
for (const i of bio) {
  console.log(i.nama);
}
console.log("end");

console.log("===========");

//dengan forEach
console.log("start");
bio.forEach((b) => {
  for (let i = 0; i < 2000; i++) {
    console.log("hoi");
  }
  console.log(b.nama);
});
console.log("end");

// =====================
// asynchronous callback
// =====================
function getDataBio(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("get", url);
  xhr.send();
}

console.log("start");
getDataBio(
  "./data/bio.json",
  (result) => {
    let jsonRes = JSON.parse(result);
    console.log(jsonRes[0].nama);
  },
  () => console.log(alert("error"))
);
console.log("end");

// ======
// JQUERY
// ======

console.log("start");
$.ajax({
  url: "data/bio.json",
  success: (results) => {
    results.forEach((res) => console.log(res.nama));
  },
  error: () => {},
});
console.log("end");
