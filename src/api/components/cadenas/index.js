module.exports = {
    invierteCadena: (cadena) => {
        if (typeof cadena != "string") return null;
        const length_cadena = cadena.trim().length;
        if (length_cadena == 0) return cadena;
        return cadena.split("").reverse().join("");
    },
    esPalindromo: (cadena) => {
        if (typeof cadena != "string" || cadena.trim().length == 0) return null;
        let cad = (cadena.toLowerCase().split("")).map((item) => {
            if(item === "é") return "e";
            if(item === "í") return "i";
            if(item === "ó") return "o";
            if(item === "ú") return "u";
            return item;
        }).join("");
        const invertida = cad.split("").reverse().join("");
        if (cad.replace(/\s/g,"") === invertida.replace(/\s/g,"")) return true;
        return false;
    },
    cadenaToSequelize: (cadena) => {        
        if (typeof cadena != "string" || cadena.trim().length == 0) return null;
        const parametro = cadena.split(":");
        if (parametro.length != 4) return null;
        if (parametro[0] === "" || parametro[1] === "" || parametro[2] === "" || parametro[3] === "") return null;
        if (parametro[1].split("/").length !== 3 || /@+/.test(parametro[2]) == false) return null;
        const port_and_dbname = parametro[3].split("/");
        if (port_and_dbname.length != 2 || port_and_dbname[0].trim() == "" || port_and_dbname[1].trim() == "") return null;
        return {database: port_and_dbname[1], username: (parametro[1].split("/"))[2], password: parametro[2].replace(/(.*)@(.*)/,'$1'), host: (parametro[2].replace(/(.*)@(.*)/,'$2')), dialect: parametro[0]};
    },
}