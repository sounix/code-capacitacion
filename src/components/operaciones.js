module.exports = {
  suma: (a, b) => {
    if (typeof a !== "number") return null;
    if (typeof b !== "number") return null;
    return a + b;
  },
  resta: (a, b) => {
    return `la resta de ${a} - ${b} = ${a - b}`;
  },
};
