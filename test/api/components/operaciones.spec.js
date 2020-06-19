const {
  suma,
  resta,
  multiplicacion,
  division,
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
      expect(resta(2.2, 2)).toBe(2.2 - 2);
      expect(resta(2, 2.4)).toBe(2 - 2.4);
      expect(resta(2.2, 2.4)).toBe(2.2 - 2.4);
      expect(resta(2.2, 0)).toBe(2.2);
      expect(resta(0, 2.4)).toBe(-2.4);
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

  describe("division", () => {
    it("deberia existir la fucntion", () => {
      expect(typeof division).toBe("function");
    });
    it("deberia pasar parametro a y ser un valor numerico", () => {
      expect(division(undefined, 2)).toBe(null);
      expect(division(null, 2)).toBe(null);
      expect(division("a", 2)).toBe(null);
      expect(division(true, 2)).toBe(null);
      expect(division([2], 2)).toBe(null);
      expect(division({ a: 2 }, 2)).toBe(null);
    });
    it("deberia pasar parametro b y ser un valor numerico", () => {
      expect(division(2, undefined)).toBe(null);
      expect(division(2, null)).toBe(null);
      expect(division(2, "b")).toBe(null);
      expect(division(2, false)).toBe(null);
      expect(division(2, [2])).toBe(null);
      expect(division(2, { b: 2 })).toBe(null);
    });
    it("deberia devolver un resultado numerico", () => {
      expect(division(2, 2)).toBe(1);
      expect(division(2, 1)).toBe(2);
      expect(division(1, 2)).toBe(0.5);
      expect(division(0, 1)).toBe(0);
    });
    it("deberia devolver null al pasar 0 como valor de b", () => {
      expect(division(1, 0)).toBe(null);
    });
  });
});
