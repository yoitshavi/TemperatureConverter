"use strict";

window.onload = init();

function init() {
  const convertBtnCelEl = document.getElementById("convertBtnCel");
  convertBtnCelEl.onclick = onConvertBtnCelClicked;
}

function onConvertBtnCelClicked() {
  const celFieldEl = document.getElementById("celField");

  const cel = +celField.value;
  const fah = (cel * 9) / 5 + 32;

  const fahFieldEl = document.getElementById("fahField");
  fahFieldEl.value = fah;
}
