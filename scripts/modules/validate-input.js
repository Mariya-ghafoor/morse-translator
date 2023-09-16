import { convertToEnglish, convertToMorse } from "./convert.js";

export const validateInput = (userInput) => {
  console.log("i m in validate");
  let convertedCode;
  //Should either include only alphabets with spaces and punctuation (for English) or dots,dashes, spaces and forward slash for morse code
  //Should not contain just spaces or punctuation

  if (
    /^[a-zA-Z,?'"!. ]+$/.test(userInput) &&
    !/^[\s]+$/.test(userInput) &&
    !/^[,?'"!. ]+$/.test(userInput)
  ) {
    convertedCode = convertToMorse(userInput);
  } else if (/^[\.\-\/\s]+$/.test(userInput) && !/^[\s]+$/.test(userInput)) {
    convertedCode = convertToEnglish(userInput);
    // console.log({ convertedCode });
    if (convertedCode.length === 0)
      convertedCode =
        "Hmm..that may look like Morse code but its not. Try again.";
  } else {
    convertedCode = "Please enter either English or Morse code";
  }
  // console.log({ convertedCode });

  return convertedCode;
};
