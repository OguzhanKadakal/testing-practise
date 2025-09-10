const capitalise = require("./capitalise.js");

test("capitalise word: cat to CAT", () => {
    expect(capitalise("cat")).toBe("Cat");
});

