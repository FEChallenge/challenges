import { calculatePostfixNotation } from "./calculatorPostfixNotation.ts";

describe("후위표현식을 계산하면", () => {
  it("1 2 + 는 3 다.", () => {
    const answer = calculatePostfixNotation(["1", "2", "+"]);
    expect(answer).toBe("3");
  });
  it("1 2 3 * - 는 -5 다.", () => {
    const answer = calculatePostfixNotation(["1", "2", "3", "*", "-"]);
    expect(answer).toBe("-5");
  });
  it("2 3 * 4 + 는 10 다.", () => {
    const answer = calculatePostfixNotation(["2", "3", "*", "4", "+"]);
    expect(answer).toBe("10");
  });
  it("1 2 3 * 4 5 / - + 는 6.2 다.", () => {
    const answer = calculatePostfixNotation(["1", "2", "3", "*", "4", "5", "/", "-", "+"]);
    expect(answer).toBe("6.2");
  });
  it("1 2 3 * 4 * - 5 5 / + 는 -22 이다.", () => {
    const answer = calculatePostfixNotation(["1", "2", "3", "*", "4", "*", "-", "5", "5", "/", "+"]);
    expect(answer).toBe("-22");
  });
  it("33 67 + 는 100 이다.", () => {
    const answer = calculatePostfixNotation(["33", "67", "+"]);
    expect(answer).toBe("100");
  });
});
