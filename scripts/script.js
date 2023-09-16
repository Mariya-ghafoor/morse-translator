import { convertToEnglish, convertToMorse } from "./modules/convert.js";
import { validateInput } from "./modules/validate-input.js";

const form = document.querySelector("form");
const translationPara = document.querySelector("#translationPara");
// const userInput = document.getElementById("userInput").value.trim();

//Validate Input
// Remove trailing spaces
// only accept alphabets and space
// or if . and -- then no other character should be entered except space and /
// handle cases where morse code may be wrong and cannot be translated

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value.trim();

  //Clear input field after receiving input
  //document.getElementById("userInput").value = "";

  translationPara.innerText = validateInput(userInput);
  sectionClassHandlerAdd();
});

const sectionClassHandlerAdd = () => {
  const translation = document.querySelector("section");
  translation.classList.add("show");
};

const sectionClassHandlerRemove = () => {
  const translation = document.querySelector("section");
  translation.classList.remove("show");
};

document.getElementById("userInput").addEventListener("keyup", (e) => {
  console.log("i am focused");
  console.log(e.target.value);
  if (e.target.value === "") {
    console.log("input is empty");
    sectionClassHandlerRemove();
  }
});
