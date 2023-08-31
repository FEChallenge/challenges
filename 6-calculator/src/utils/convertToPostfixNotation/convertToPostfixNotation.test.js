import { convertToPostfixNotation } from "./convertToPostfixNotation";

describe("후위표현식으로 변환하면", () => {
  it("a + b 는 a b + 이다.", () => {
    const answer = convertToPostfixNotation(["a", "+", "b"]);
    expect(answer).toStrictEqual(["a", "b", "+"]);
  });
  it("a - b * c 는 a b c * - 이다.", () => {
    const answer = convertToPostfixNotation(["a", "-", "b", "*", "c"]);
    expect(answer).toStrictEqual(["a", "b", "c", "*", "-"]);
  });
  it("a * b + c 는 a b * c + 이다.", () => {
    const answer = convertToPostfixNotation(["a", "*", "b", "+", "c"]);
    expect(answer).toStrictEqual(["a", "b", "*", "c", "+"]);
  });
  it("a + b * c - d / e 는 a b c * d e / - + 이다.", () => {
    const answer = convertToPostfixNotation(["a", "+", "b", "*", "c", "-", "d", "/", "e"]);
    expect(answer).toStrictEqual(["a", "b", "c", "*", "+", "d", "e", "/", "-"]);
  });
  it("a - b * c * d + e / f 는 a b c * d * - e f / + - 이다.", () => {
    const answer = convertToPostfixNotation(["a", "-", "b", "*", "c", "*", "d", "+", "e", "/", "f"]);
    expect(answer).toStrictEqual(["a", "b", "c", "*", "-", "d", "*", "e", "f", "/", "+"]);
  });
});
