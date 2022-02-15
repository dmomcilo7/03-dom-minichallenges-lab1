"use strict";
//#1
const total = document.querySelector(".total");

let sum = 0;

console.dir(total);
const snackButtons = document.querySelectorAll(".snack-button");

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost");
    sum += parseInt(cost);
    console.log(sum);
    total.textContent = `Total: $${sum}.00`;
  });
});

//try other way too again

//#2
const form = document.querySelector(".two form");
const bank = document.querySelector(".bank");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const howMany = document.querySelector("#howMany").value;
  const whichCoin = document.querySelector("#whichCoin").value;
  //   console.log(howMany, whichCoin); for testing that this works
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin);
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});

//#3
const on = document.querySelector(".on-switch");
const off = document.querySelector(".off-switch");
const toggle = document.querySelector(".toggle-switch");
const end = document.querySelector(".end-switch");
const lightbulb = document.querySelector(".lightbulb");

on.addEventListener("click", () => {
  lightbulb.classList.add("on");
});

off.addEventListener("click", () => {
  lightbulb.classList.remove("on");
});

toggle.addEventListener("click", () => {
  lightbulb.classList.toggle("on");
});

end.addEventListener("click", () => {
  lightbulb.remove();
  on.disabled = true;
  off.disabled = true;
  toggle.disabled = true;
  end.disabled = true;
});
