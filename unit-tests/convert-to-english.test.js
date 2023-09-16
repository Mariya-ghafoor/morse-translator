import { convertToEnglish } from "../scripts/modules/convert";

describe("must correctly convert to English", () => {
  it("must correctly translate single word", () => {
    expect(convertToEnglish("- . ... -")).toBe("TEST");
  });

  it("must correctly translate two or more words separated by a space", () => {
    expect(convertToEnglish(".... --- .-- / .- .-. . / -.-- --- ..-")).toBe(
      "HOW ARE YOU"
    );
  });

  it("must correctly translate single characters separated by a space", () => {
    expect(convertToEnglish("... / --- / ...")).toBe("S O S");
  });
});
