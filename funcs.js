function capitalise(str) {
  if (typeof str !== "string" || !str) {
    throw new Error("Input must be a non-empty string");
  }
  const chars = str.split("");
  chars[0] = chars[0].toUpperCase();
  return chars.join("");
}

function reverseString(str) {
  if (typeof str !== "string" || !str) {
    throw new Error("Input must be a non-empty string");
  }
  const chars = str.split("");
  const reversedString = chars.toReversed().join("");
  return reversedString;
}

const calc = {
  add: (no1, no2) => no1 + no2,
  substract: (no1, no2) => no1 - no2,
  multiply: (no1, no2) => no1 * no2,
  divide: (no1, no2) => (no2 !== 0 ? no1 / no2 : undefined),
};

function caesarCipher(str, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const shift = ((key % 26) + 26) % 26;
    return str
        .split("")
        .map((char) => {
            const lowerChar = char.toLowerCase();
            const idx = alphabet.indexOf(lowerChar);
            if (idx === -1) return char;
            const cipherIdx = (idx + shift) % 26;
            const cipherChar = alphabet[cipherIdx];
            return char === char.toUpperCase() ? cipherChar.toUpperCase() : cipherChar;
        })
        .join("");
}

export { capitalise, reverseString, calc, caesarCipher };
