// AMBIL SEMUA ELEMENT VIDEO
// Array.from untuk mengubah nodelist menjadi array
const videos = Array.from(document.querySelectorAll("[data-duration]"));
console.log(videos);

// PILIH VIDEO JAVASCRIPT LANJUTAN
const JsLanjutan = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  // AMBIL DURASI MASING MASING VIDEO
  .map((item) => item.dataset.duration)
  // KONVERSI VALUE DURASI MENJADI INTEGER
  .map((waktu) => {
    const part = waktu.split(":").map((part) => parseFloat(part));
    // UBAH VALUE MENIT DURASI MENJADI DETIK
    return part[0] * 60 + part[1];
  });
//   .reduce((total, wleowleowloe) => total + wleowleowloe);
console.log(JsLanjutan);

// JUMLAHKAN DETIK
const konversi = JsLanjutan.reduce((total, waktu) => total + waktu);
console.log(konversi);

// UBAH FORMAT MENJADI JAM, MENIT, DETIK
const jam = Math.floor(konversi / 3600);
const menit = Math.floor((konversi - jam * 3600) / 60);
const detik = konversi - (jam * 3600 + menit * 60);

// SIMPAN PADA DOM

//DOM JUMLAH VIDEO
const jumlahVideo = document.querySelector(".jumlah-video");
jumlahVideo.textContent = `${JsLanjutan.length} video`;

// DOM DURASI
const durasiVideo = document.querySelector(".durasi-video");
durasiVideo.textContent = `${jam} jam ${menit} menit ${detik} detik.`;
