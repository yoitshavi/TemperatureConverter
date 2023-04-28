"use strict";

window.onload = init();

function init() {
  const convertBtnCelEl = document.getElementById("convertBtnCel");
  if (convertBtnCelEl != null) {
    convertBtnCelEl.onclick = onConvertBtnCelClicked;
  }
  const convertBtnFahEl = document.getElementById("convertBtnFah");
  if (convertBtnFahEl != null) {
    convertBtnFahEl.onclick = onConvertBtnFahClicked;
  }
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.onclick = onResetBtnClicked;
}

function onConvertBtnCelClicked() {
  const celFieldEl = document.getElementById("celField");

  const cel = +celField.value;
  const fah = (cel * 9) / 5 + 32;

  const fahFieldEl = document.getElementById("fahField");
  fahFieldEl.value = fah;
}
function onConvertBtnFahClicked() {
  const fahFieldEl = document.getElementById("fahField");

  const fah = +fahField.value;
  const cel = ((fah - 32) * 5) / 9;

  const celFieldEl = document.getElementById("celField");
  celFieldEl.value = cel;
}
function onResetBtnClicked() {
  const formEl = document.getElementById("form").reset();
}
