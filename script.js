const satu = document.querySelector(".const1");
const dua = document.querySelector(".const2");
const tiga = document.querySelector(".const3");

let i = 0;
let j = 0;
let h = 0;
const gambar = ["gambar1", "gambar2", "gambar3"];

window.onload = function () {
  setInterval(function () {
    satu.setAttribute("src", "img/" + gambar[i++] + ".png");

    if (i === gambar.length) {
      i = 0;
    }
  }, 1000);
  setInterval(function () {
    dua.setAttribute("src", "img/" + gambar[j++] + ".png");

    if (j === gambar.length) {
      j = 0;
    }
  }, 3000);
  setInterval(function () {
    tiga.setAttribute("src", "img/" + gambar[h++] + ".png");

    if (h === gambar.length) {
      h = 0;
    }
  }, 2000);
};

const jmlProduk = document.getElementById("jumlahProduk");
const hargaProduk = document.getElementById("total");
const select = document.querySelector("select");

select.addEventListener("click", function () {
  // console.log(select.value);
  let a = "";
  if (select.value === "Pas Bunga Minimalis") {
    a = 20000;
  } else if (select.value === "Produk 1") {
    a = 15000;
  } else if (select.value === "Produk 2") {
    a = 10000;
  }
  jmlProduk.addEventListener("input", function () {
    // console.log(jmlproduk.value);

    total.setAttribute("value", "Rp. " + jmlProduk.value * a);
  });
});

// tb1.addEventListener("click", function () {
//   a = 3000;
// });

// for (let i = 1; i < userProduk.length; i++) {
//   userProduk[i].addEventListener("change", function () {
//     console.log(userProduk[i].value);
//     console.log("benar");
//   });
// }
