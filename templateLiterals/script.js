const bio = {
  nameAva: "Rendra",
  usia: 25,
  skill: "Junior Frontend Developer",
};

// ====================
// == HTML FRAGMENTS ==
// ====================

const test = `
<div class="bio">
    <h2> Nama : ${bio.nameAva}</h2>
    <span class="age">Usia : ${bio.usia}</span> 
    <br>
    <span class="age">Skill : ${bio.skill}</span>
</div>`;

// console.log(test);

// document.body.innerHTML = test; // menambahkan ke tampilan

// =====================
// LOOPING PADA LITERALS
// =====================
const bio2 = [
  {
    nama: "Rendra",
    namaB: "Andrianysah",
  },
  {
    nama: "Evi",
    namaB: "Tasari",
  },
  {
    nama: "Gemoy",
    namaB: "Abang",
  },
];

const el = `<div class="bio-2">
    ${bio2
      .map(
        (b) =>
          `<ul>
                <li>${b.nama}</li>
                <li>${b.namaB}</li>
           </ul>`
      )
      .join("")}
</div>`;

// document.body.innerHTML = el;

// ============
// CONDITIONALS
// ============
const lagu = [
  {
    judul: `what i've done`,
    penyanyi: "Linkin Park",
  },
  {
    judul: `In the end`,
    penyanyi: "Linkin Park",
    feat: "Mike Shinoda",
  },
];

const el2 = `<div class="lagu">
${lagu
  .map(
    (song) =>
      `
        <ul>
            <li>${song.judul}</li>
            <li>${song.penyanyi} ${song.feat ? `feat. ${song.feat}` : ""}</li>
        </ul>
    `
  )
  .join("")}
</div>`;

// document.body.innerHTML = el2;

// ==================================
// NESTED || HTML FRAGMENTS BERSARANG
// ==================================
const mentee = {
  nama: "Muhammad Rendra Andrianysah",
  week: 5,
  roadmap: [
    "Intro ReactJS",
    "ReactJS Component",
    "intro NextJS",
    "Group Project 1",
    "Group Project 2",
  ],
};

function cetakRoadmap(roadmap) {
  return `<ol>
    ${roadmap.map((rm) => `<li>${rm}</li>`).join("")}
    </ol>`;
}

const el3 = ` <div class="mentee">
    <h2>${mentee.nama}</h2>
    <h4 class="week">Week ${mentee.week}</h4>
    <h6>Roadmap</h6>
    ${cetakRoadmap(mentee.roadmap)}

</div>`;

document.body.innerHTML = el3;
