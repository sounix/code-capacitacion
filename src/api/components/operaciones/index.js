module.exports = {
  suma: (a, b) => {
    if (!Number.isFinite(a)) return null;
    if (!Number.isFinite(b)) return null;
    return a + b;
  },
  resta: (a, b) => {
    if (!Number.isFinite(a)) return null;
    if (!Number.isFinite(b)) return null;
    return a - b;
  },
  multiplicacion: (a, b) => {
    if (!Number.isFinite(a)) return null;
    if (!Number.isFinite(b)) return null;
    return a * b;
  },
  division: (a, b) => {
    if (!Number.isFinite(a)) return null;
    if (!Number.isFinite(b) || b === 0) return null;
    return a / b;
  },
};
