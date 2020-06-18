const { suma } = require("../../src/components/operaciones");

describe("Test unitarios del componente operaciones", () => {
  describe("Test de funcion suma", () => {
    it("suma 1 + 2 = 3", () => {
      expect(suma(1, 2)).toEqual(3);
    });
  });
});
