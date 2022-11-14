// ===========
// ASYNC AWAIT
// ===========

// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Test 1");
//   }, 3000);
// });
// coba.then((test1) => console.log(test1));

function cobaPromise() {
  return new Promise((resolve, reject) => {
    console.log("=== angka anda harus melebihi 2 ===");
    const AngkaRandom = Math.floor(Math.random(1) * 5);
    if (AngkaRandom > 2) {
      setTimeout(() => {
        resolve(`selamat angka anda ${AngkaRandom} `);
      }, 3000);
    } else
      setTimeout(() => {
        reject(`maaf angka anda ${AngkaRandom} `);
      }, 3000);
  });
}

// const cobaErr = cobaPromise();
// cobaErr.then((coba) => console.log(coba)).catch((coba) => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (error) {
    console.log(error);
  }
}
cobaAsync();
