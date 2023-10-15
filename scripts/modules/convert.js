// A to Z in Morse Code
const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

//Function to convert to Morse Code

export const convertToMorse = (userInput) => {
  let userInputArr = userInput.toUpperCase().split("");

  const morseTranslation = userInputArr.map((char) => {
    if (char === " ") return "/ ";
    if (/^[,?'"!. ]+$/.test(char)) return;
    else {
      return morseCode[char] + " ";
    }
  });
  return morseTranslation.join("").trim();
};

//Function to convert to English

export const convertToEnglish = (userInput) => {
  const userInputArr = userInput.split(" ");

  const englishTranslation = userInputArr.map((char) => {
    if (char === "/") return " ";
    const morseCodeKeys = Object.keys(morseCode);
    const englishChar = morseCodeKeys.find((key) => morseCode[key] === char);
    return englishChar;
  });
  return englishTranslation.join("");
};
