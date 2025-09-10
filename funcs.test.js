import { capitalise, reverseString, calc } from "./funcs.js"

test("capitalise word: cat to CAT", () => {
    expect(capitalise("cat")).toBe("Cat");
});


test("Reverse word: Warhammer to remmahraW", () => {
    expect(reverseString("Warhammer")).toBe("remmahraW");
})

test('adds 1 + 2 to equal 3', () => {
  expect(calc.add(1, 2)).toBe(3);
});

test('substract 3 - 2 to equal 1', () => {
  expect(calc.substract(3, 2)).toBe(1);
});

test('divide 4 / 2 to equal 1', () => {
  expect(calc.divide(4, 2)).toBe(2);
});

test('divide 5 * 5 to equal 25', () => {
  expect(calc.multiply(5, 5)).toBe(25);
});