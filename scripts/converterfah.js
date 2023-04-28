"use strict";

window.onload = init();

function init() {
  const convertBtnFahEl = document.getElementById("convertBtnFah");
  convertBtnFahEl.onclick = onConvertBtnFahClicked;
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.onclick = onResetBtnClicked;
}

function onConvertBtnFahClicked() {
  const fahFieldEl = document.getElementById("fahField");

  const fah = +fahField.value;
  const cel = ((fah - 32) * 5) / 9;

  const celFieldEl = document.getElementById("celField");
  celFieldEl.value = cel;
}

function onResetBtnClicked() {
  resetBtn = "";
}
