import {} from "./funcs.js"

test("capitalise word: cat to CAT", () => {
    expect(capitalise("cat")).toBe("Cat");
});


test("Reverse word: Warhammer to remmahraW", () => {
    expect(reverseString("Warhammer")).toBe("remmahraW");
})
