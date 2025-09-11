import { capitalise, reverseString, calc, caesarCipher, analyseArray } from "./funcs.js";

test("capitalise word: cat to CAT", () => {
  expect(capitalise("cat")).toBe("Cat");
});

test("capitalise throws error for empty string", () => {
  expect(() => capitalise("")).toThrow("Input must be a non-empty string");
});

test("capitalise throws error for non-string", () => {
  expect(() => capitalise(123)).toThrow("Input must be a non-empty string");
});

test("Reverse word: Warhammer to remmahraW", () => {
  expect(reverseString("Warhammer")).toBe("remmahraW");
});

test("reverseString throws error for empty string", () => {
  expect(() => reverseString("")).toThrow("Input must be a non-empty string");
});

test("reverseString throws error for non-string", () => {
  expect(() => reverseString(123)).toThrow("Input must be a non-empty string");
});

test("adds 1 + 2 to equal 3", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("substract 3 - 2 to equal 1", () => {
  expect(calc.substract(3, 2)).toBe(1);
});

test("divide 4 / 2 to equal 1", () => {
  expect(calc.divide(4, 2)).toBe(2);
});

test("divide 5 * 5 to equal 25", () => {
  expect(calc.multiply(5, 5)).toBe(25);
});

test("Ceaser cipher xyz should return abc", () => {
    expect(caesarCipher('xyz', 3)).toBe("abc")
})

test("Ceaser cipher heLLo should return abc", () => {
    expect(caesarCipher('HeLLo', 3)).toBe("KhOOr")
})

test("Ceaser cipher heLLo should return abc", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!")
})

describe("Analyse a number array and return an object with number properties", () => {
    it("returns an object with average, min, max, length with correct values", () => {
        expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    });
    it("Throws error when its not an array", () => {
      expect(() => analyseArray({} || "")).toThrow("Input must be an array of numbers");
    });
    it("Throws error when array contains non-number elements", () => {
      expect(() => analyseArray([1, "a", 3])).toThrow("Input must be an array of numbers");
    });
});
