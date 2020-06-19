const { suma } = require("../../src/components/operaciones");

describe("Componente suma", () => {
  it("Deberia mostrar la suma de 2 numeros", () => {
    const { a, b } = { a: 2, b: 5 };

    expect(suma(a, b)).toEqual(7);
  });

  it("Solo deberia aceptar numeros", () => {
    const { a, b } = { a: "a", b: 5 };

    expect(suma(a, b)).toBe(null);
    expect(suma(2, "aldrin")).toBe(null);
    expect(suma("Hola", "mundo")).toBe(null);
  });
});
