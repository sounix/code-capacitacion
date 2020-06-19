const {
  suma,
  resta,
  multiplicacion,
} = require("../../../src/api/components/operaciones");
describe("componente - operaciones", () => {
  describe("suma", () => {
    it("deberia existir la funcion", () => {
      expect(typeof suma).toBe("function");
    });
    it("deberia pasar parametro a y ser un valor numerico", () => {
      expect(suma(undefined, 2)).toBe(null);
      expect(suma(null, 2)).toBe(null);
      expect(suma("a", 2)).toBe(null);
      expect(suma(true, 2)).toBe(null);
      expect(suma([2], 2)).toBe(null);
      expect(suma({ a: 2 }, 2)).toBe(null);
    });
    it("deberia pasar parametro b y ser un valor numerico", () => {
      expect(suma(2, undefined)).toBe(null);
      expect(suma(2, null)).toBe(null);
      expect(suma(2, "b")).toBe(null);
      expect(suma(2, false)).toBe(null);
      expect(suma(2, [2])).toBe(null);
      expect(suma(2, { b: 2 })).toBe(null);
    });
    it("deberia devolver un resultado numerico", () => {
      expect(suma(2, 2)).toBe(4);
      expect(suma(-2, 2)).toBe(0);
      expect(suma(2, -2)).toBe(0);
      expect(suma(2.2, 2)).toBe(4.2);
      expect(suma(2, 2.4)).toBe(4.4);
      expect(suma(2.2, 2.4)).toBe(4.6);
      expect(suma(2, 0)).toBe(2);
      expect(suma(0, 2)).toBe(2);
    });
  });

  describe("resta", () => {
    it("deberia existir la function", () => {
      expect(typeof resta).toBe("function");
    });
    it("deberia pasar parametro a y ser un valor numerico", () => {
      expect(resta(undefined, 2)).toBe(null);
      expect(resta(null, 2)).toBe(null);
      expect(resta("a", 2)).toBe(null);
      expect(resta(true, 2)).toBe(null);
      expect(resta([2], 2)).toBe(null);
      expect(resta({ a: 2 }, 2)).toBe(null);
    });
    it("deberia pasar parametro b y ser un valor numerico", () => {
      expect(resta(2, undefined)).toBe(null);
      expect(resta(2, null)).toBe(null);
      expect(resta(2, "b")).toBe(null);
      expect(resta(2, false)).toBe(null);
      expect(resta(2, [2])).toBe(null);
      expect(resta(2, { b: 2 })).toBe(null);
    });
    it("deberia devolver un resultado numerico", () => {
      expect(resta(2, 2)).toBe(0);
      expect(resta(-2, 2)).toBe(-4);
      expect(resta(2, -2)).toBe(4);
      expect(resta(2, 0)).toBe(2);
      expect(resta(0, -2)).toBe(2);
      expect(resta(2.2, 2)).toBe(0.2);
      expect(resta(2, 2.4)).toBe(0.4);
      expect(resta(2.2, 2.4)).toBe(0.2);
    });
  });

  describe("multiplicacion", () => {
    it("deberia existir la function", () => {
      expect(typeof multiplicacion).toBe("function");
    });
    it("deberia pasar parametro a y ser un valor numerico", () => {
      expect(multiplicacion(undefined, 2)).toBe(null);
      expect(multiplicacion(null, 2)).toBe(null);
      expect(multiplicacion("a", 2)).toBe(null);
      expect(multiplicacion(true, 2)).toBe(null);
      expect(multiplicacion([2], 2)).toBe(null);
      expect(multiplicacion({ a: 2 }, 2)).toBe(null);
    });
    it("deberia pasar parametro b y ser un valor numerico", () => {
      expect(multiplicacion(2, undefined)).toBe(null);
      expect(multiplicacion(2, null)).toBe(null);
      expect(multiplicacion(2, "b")).toBe(null);
      expect(multiplicacion(2, false)).toBe(null);
      expect(multiplicacion(2, [2])).toBe(null);
      expect(multiplicacion(2, { b: 2 })).toBe(null);
    });
    it("deberia devolver un resultado numerico", () => {
      expect(multiplicacion(2, 2)).toBe(4);
      expect(multiplicacion(-2, 2)).toBe(-4);
      expect(multiplicacion(2, -2)).toBe(-4);
      expect(multiplicacion(2.2, 2)).toBe(4.4);
      expect(multiplicacion(2, 2.4)).toBe(4.8);
      expect(multiplicacion(2.2, 2.4)).toBe(5.28);
      expect(multiplicacion(2, 0)).toBe(0);
      expect(multiplicacion(0, 2)).toBe(0);
    });
  });
});
