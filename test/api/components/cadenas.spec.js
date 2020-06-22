const { invierteCadena, isPalindromo, cadenaToSequelize } = require("../../../src/api/components/cadenas");
describe("componente - cadenas", () =>{
    describe("invierteCadena", () => {
        it("deberia de existir la funcion", () =>{
            expect(typeof invierteCadena).toBe("function");
        });
        it('deberia de contener una cadena', () => {
            expect(invierteCadena(null)).toBe(null);
            expect(invierteCadena(1)).toBe(null);
            expect(invierteCadena(undefined)).toBe(null);
            expect(invierteCadena(2.3)).toBe(null);
            expect(invierteCadena(true)).toBe(null);
            expect(invierteCadena({a: ""})).toBe(null);
            expect(invierteCadena(["a"])).toBe(null);
            expect(invierteCadena("      ")).toBe(null);
        });
        it("deberia de retornar la cadena invertida", () => {
            const cadena = {cad1: "hola"}
            expect(invierteCadena("hola")).toBe("aloh");
            expect(invierteCadena("hola como estas")).toBe("satse omoc aloh");
            expect(invierteCadena(" hola")).toBe("aloh ");
            expect(invierteCadena("hola ")).toBe(" aloh");
            expect(invierteCadena(" hola ")).toBe(" aloh ");
            expect(invierteCadena(" hola 123456789")).toBe("987654321 aloh ");
            expect(invierteCadena( cadena.cad1 )).toBe("aloh");
        });
    });

    describe("isPalindromo", () => {
        it("deberia de existir la funcion", () => {
            expect(typeof isPalindromo).toBe("function");
        });
        it('deberia de contener una cadena y no tiene que estar vacia', () => {
            expect(isPalindromo(null)).toBe(null);
            expect(isPalindromo(1)).toBe(null);
            expect(isPalindromo(undefined)).toBe(null);
            expect(isPalindromo(2.3)).toBe(null);
            expect(isPalindromo(true)).toBe(null);
            expect(isPalindromo({a: ""})).toBe(null);
            expect(isPalindromo(["a"])).toBe(null);
            expect(isPalindromo("      ")).toBe(null);
            expect(isPalindromo("")).toBe(null);
        });
        it("deberia de ser un palindromo", () => {
            expect(isPalindromo("oxxo")).toBe(true);
            expect(isPalindromo("anita lava la tina")).toBe(true);
            expect(isPalindromo("No subas abusón")).toBe(true);
            expect(isPalindromo("Isaac no rónca así")).toBe(true);
        });
        it("deberia de enviar cadenas que no sean palindromos", () => {
            expect(isPalindromo("No subas, abusón")).toBe(false);
            expect(isPalindromo("hola hola")).toBe(false);
        });
    });

    describe("cadena a objeto sequelize", () => {
        it("deberia de existir la funcion", () => {
            expect( typeof cadenaToSequelize).toBe("function");
        });
        it("deberia de enviar una cadena no vacia", () => {
            expect(cadenaToSequelize("")).toBe(null);
            expect(cadenaToSequelize("    ")).toBe(null);
            expect(cadenaToSequelize(null)).toBe(null);
            expect(cadenaToSequelize(1)).toBe(null);
            expect(cadenaToSequelize(undefined)).toBe(null);
            expect(cadenaToSequelize(2.3)).toBe(null);
            expect(cadenaToSequelize(true)).toBe(null);
            expect(cadenaToSequelize({a: ""})).toBe(null);
            expect(cadenaToSequelize(["a"])).toBe(null);
        });
        it("deberia de enviar una cadena con el formato de sequelize 'dialiect://user:pass@example.com:5432/dbname'", () => {
            const cadena = {cad1: "hola"}    
            expect(cadenaToSequelize("")).toBe(null);
            expect(cadenaToSequelize(cadena.cad1)).toBe(null);
            expect(cadenaToSequelize("mysql::pass@localhost:3306::")).toBe(null);
            expect(cadenaToSequelize("::")).toBe(null);
            expect(cadenaToSequelize(":::")).toBe(null);
            expect(cadenaToSequelize("://root:pass@localhost:3306")).toBe(null);
            expect(cadenaToSequelize("mysql::pass@localhost:3306")).toBe(null);
            expect(cadenaToSequelize("mysql:root::3306")).toBe(null);
            expect(cadenaToSequelize("mysql:root:pass@localhost:")).toBe(null);
            expect(cadenaToSequelize("mysql:root:pass@localhost:3306")).toBe(null);
            expect(cadenaToSequelize("mysql:/root:pass@localhost:3306")).toBe(null);
            expect(cadenaToSequelize("mysql://root:passlocalhost:3306")).toBe(null);
            expect(cadenaToSequelize("mysql://root:pass@localhost:3306")).toBe(null);
            expect(cadenaToSequelize("mysql://root:pass@localhost:/")).toBe(null);
            expect(cadenaToSequelize("mysql://root:pass@localhost:3306/")).toBe(null);
            expect(cadenaToSequelize("mysql://root:pass@localhost:/dbname")).toBe(null);
        });
        it("deberia devolver un objeto ",() => {
            expect(typeof cadenaToSequelize("mssql://root:admin@localhost:5432/spa_oluta")).toBe("object");
        });
        it("deberia de regresar un objeto con los datos definidos", () => {
            expect(cadenaToSequelize ("mssql://root:admin@localhost:5432/spa_oluta")).toStrictEqual({database: "spa_oluta", dialect: "mssql", host: "localhost", password: "admin", username:  "root", port: "5432"});
            expect(cadenaToSequelize ("mysql://admin:12345@192.168.100.1:3306/db_any")).toStrictEqual({database:"db_any", username:"admin", password:"12345", host:"192.168.100.1", dialect:"mysql", port: "3306"});
        });
    });
});