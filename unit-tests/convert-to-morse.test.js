//import { describe } from "yargs";
import { convertToMorse } from "../scripts/modules/convert.js";

//Must accept ? ! etc

describe("must correctly convert to Morse code", () => {
  it("must correctly translate single word", () => {
    expect(convertToMorse("Hello")).toBe(".... . .-.. .-.. ---");
  });

  it("must correctly translate two or more words separated by a space", () => {
    expect(convertToMorse("Hello World")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
  });

  it("must correctly translate single characters separated by a space", () => {
    expect(convertToMorse("S O S")).toBe("... / --- / ...");
  });

  it("must correctly translate words with punctuation", () => {
    expect(convertToMorse("How are you?")).toBe(
      ".... --- .-- / .- .-. . / -.-- --- ..-"
    );
  });

  it("must correctly translate words with punctuation", () => {
    expect(convertToMorse("hey, there")).toBe(".... . -.-- / - .... . .-. .");
  });
});
