// ===============
// TAGGED TEMPLATE
// ===============

const nama = "Muhammad Rendra Andriansyah";
const usia = 25;

function test(strings, ...values) {
  //   let res = "";
  //   strings.forEach((str, i) => {
  //     res += `${str}${values[i] || ""}`;
  //   });
  //   return res;
  return strings.reduce(
    (
      result,
      str,
      i
    ) => `${result}${str}<span class="hl" style="background-color:yellow;">
    ${values[i] || ""}</span>`,
    ""
  );
}

const str1 = test`halo, nama saya ${nama}, usia saya ${usia} tahun.`;

console.log(str1);
document.body.innerHTML = str1;
