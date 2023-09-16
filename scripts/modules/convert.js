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
  console.log({ userInputArr });

  const morseTranslation = userInputArr.map((char) => {
    if (char === " ") return "/ ";
    if (/^[,?'"!. ]+$/.test(char)) return;
    else {
      return morseCode[char] + " ";
    }
  });
  console.log({ morseTranslation });

  return morseTranslation.join("").trim();
};

//Function to convert to English

export const convertToEnglish = (userInput) => {
  console.log("im converting to english", userInput);
  const userInputArr = userInput.split(" ");
  console.log({ userInput });

  const englishTranslation = userInputArr.map((char) => {
    console.log({ char });
    if (char === "/") return " ";
    const morseCodeKeys = Object.keys(morseCode);
    const englishChar = morseCodeKeys.find((key) => morseCode[key] === char);
    return englishChar;
  });

  console.log(englishTranslation);

  return englishTranslation.join("");
};
