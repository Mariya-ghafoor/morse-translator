import { convertToEnglish, convertToMorse } from "./modules/convert.js";
import { validateInput } from "./modules/validate-input.js";

const form = document.querySelector("form");
const translationPara = document.querySelector("#translationPara");

//Validate Input
// Remove trailing spaces
// only accept alphabets and space
// or if . and -- then no other character should be entered except space and /
// handle cases where morse code may be wrong and cannot be translated

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value.trim();
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
  if (e.target.value === "") {
    sectionClassHandlerRemove();
  }
});
