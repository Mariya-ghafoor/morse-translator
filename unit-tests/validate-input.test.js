import { validateInput } from "../scripts/modules/validate-input.js";

describe("must tell the user to enter valid input", () => {
  it("must accept valid input", () => {
    expect(validateInput("This is valid input")).toBe(
      "- .... .. ... / .. ... / ...- .- .-.. .. -.. / .. -. .--. ..- -"
    );
  });

  it("must not accept numbers", () => {
    expect(validateInput("1234")).toBe(
      "Please enter either English or Morse code"
    );
  });

  it("must not accept special characters", () => {
    expect(validateInput("?%^&")).toBe(
      "Please enter either English or Morse code"
    );
  });

  it("must not accept empty string", () => {
    expect(validateInput(" ")).toBe(
      "Please enter either English or Morse code"
    );
  });

  it("must not accept gibberish morse code and inform the user", () => {
    expect(validateInput("...---")).toBe(
      "Hmm..that may look like Morse code but its not. Try again."
    );
  });
});
