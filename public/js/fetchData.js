console.log("fetchData javascript is running");

const myform = document.querySelector("form");
const myinput = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

myform.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "loading...";
  fetch("http://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
      messageOne.textContent = "puzzle";
      messageTwo.textContent = data.puzzle;
    });
  });
});
