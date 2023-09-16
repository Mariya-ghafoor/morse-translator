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
  console.log(userInput);
  // let convertedCode = "";

  //Input Validation

  // //Should either include only alphabets and spaces (for English) or dots,dashes, spaces and forward slash for morse code
  // if (/^[a-zA-Z ]+$/.test(userInput)) {
  //   convertedCode = convertToMorse(userInput);
  // } else if (/^[\.\-\/\s]+$/.test(userInput)) {
  //   convertedCode = convertToEnglish(userInput);
  //   console.log({ convertedCode });
  //   if (convertedCode.length === 0)
  //     convertedCode =
  //       "Hmm..that may look like Morse code but its not. Try again.";
  // } else {
  //   convertedCode = "Please enter either English or Morse code";
  // }

  translationPara.innerText = validateInput(userInput);
});
