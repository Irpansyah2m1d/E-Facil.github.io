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
