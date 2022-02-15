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
