function capitalise(str) {
  const chars = str.split("");
  chars[0] = chars[0].toUpperCase();
  return chars.join("");
}

function reverseString(str) {
    const chars = str.split("");
    const reversedString = chars.toReverse().join("");
    return reversedString;
}


export { capitalise, reverseString };