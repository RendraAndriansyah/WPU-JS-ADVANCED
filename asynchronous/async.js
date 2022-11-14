console.log("1");
setTimeout(function test() {
  console.log("2");
}, 2000); // delay 2 detik
console.log("3");

console.log("4");
setTimeout(function test() {
  console.log("5");
}, 0); // tetap harus menunggu karena setTimeout adalah bagian dari Web Apis
console.log("6");

//output 1,3,2
