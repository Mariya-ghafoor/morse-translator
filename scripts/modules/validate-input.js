/**
 * @jest-environment jsdom
 */
import { convertToEnglish, convertToMorse } from "./convert.js";

export const validateInput = (userInput) => {
  console.log("i m in validate");
  let convertedCode;
  //Should either include only alphabets with spaces and punctuation (for English) or dots,dashes, spaces and forward slash for morse code
  //Should not contain just spaces or punctuation

  // if (
  //   /^[a-zA-Z,?'"!. ]+$/.test(userInput) &&
  //   !/^[\s]+$/.test(userInput) &&
  //   !/^[,?'"!. ]+$/.test(userInput)
  // ) {

  if (
    /^[a-zA-Z\s?!,.:'"]+$/.test(userInput) &&
    !/^[\s]+$/.test(userInput) &&
    !/^[,?'"!. ]+$/.test(userInput)
  ) {
    convertedCode = convertToMorse(userInput);
  } else if (/^[\.\-\/\s]+$/.test(userInput) && !/^[\s]+$/.test(userInput)) {
    convertedCode = convertToEnglish(userInput);

    if (convertedCode.length === 0)
      convertedCode =
        "Hmm..that may look like Morse code but its not. Try again.";
  } else {
    convertedCode = "Please enter either English or Morse code";
  }
  console.log({ convertedCode });
  errorHandler(convertedCode);

  return convertedCode;
};

const errorHandler = (convertedCode) => {
  const userInputField = document.getElementById("userInput");
  const translationPara = document.querySelector("#translationPara");
  // console.log(userInputField.classList);
  // console.log(translationPara.classList);
  if (
    convertedCode === "Please enter either English or Morse code" ||
    convertedCode ===
      "Hmm..that may look like Morse code but its not. Try again."
  ) {
    try {
      userInputField.classList.remove("validInputField");
      userInputField.classList.add("errorField");
      translationPara.classList.add("errorMessage");
    } catch {}
  } else {
    try {
      userInputField.classList.remove("errorField");

      userInputField.classList.add("validInputField");
      translationPara.classList.remove("errorMessage");
    } catch {}
  }

  // document.getElementById("userInput").classList.add("errorField");
  // document.querySelector("section").classList.add("errorMessage");
};

// export const removeErrorHandler = () => {
//   document.getElementById("userInput").classList.remove("errorField");
//   document.querySelector("section").classList.remove("errorMessage");
// };
