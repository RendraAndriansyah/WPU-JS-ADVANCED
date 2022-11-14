// dengan AJAX JQUERY
$.ajax({
  url: "https://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
  success: ({ Search }) => {
    Search.forEach((S) => {
      console.log(S.Title);
    });
  },
  error: (e) => console.log(e.responsText),
});

// DENGAN FETCH
fetch("https://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
  .then((respons) => respons.json())
  .then(({ Search }) => {
    // console.log(Search[].Title);
    Search.forEach((s) => console.log(s.Title));
  });

// contoh simple 1
let ditepati1 = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati1) {
    resolve("Promise ditepati");
  } else {
    reject("AuAuAuAu");
  }
});

// THEN UNTUK RESOLVE (SUCCESS)
// CATCH UNTUK REJECT (ERROR)

janji1
  .then((Response) => console.log(`ok ${Response}`))
  .catch((resp) => console.log(`Not Ok ${resp}`));

// contoh simple 2
let ditepati2 = true;
const janji2 = new Promise((resolve, reject) => {
  if (ditepati2) {
    setTimeout(() => {
      resolve("nice brody");
    }, 2000);
  } else {
    setTimeout(() => {
      reject("fail Catch API");
    }, 2000);
  }
});

janji2
  .finally(() => console.log("selesai menunggu!"))
  .then((Response) => console.log(`ok ${Response}`))
  .catch((resp) => console.log(`Not Ok ${resp}`));
