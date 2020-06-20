const Hapi = require("@hapi/hapi");

const path = require("path");
// const { request } = require("http");
const ruta = path.join(__dirname, "/public");
// console.log(ruta);

const PORT = process.env.PORT || 3000;

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: "localhost",
    routes: {
      files: {
        relativeTo: ruta
      }
    },
  });

  await server.register(require("@hapi/inert"));

  server.route({
    method: "GET",
    path: "/images/hapi.png",
    handler: (request, h) => {
      return h.file("../public/images/hapi.png");
    }
  });

  server.route({
    method: "GET",
    path: "/html/view_logo.html",
    handler: (request, h) => {
      return h.file("../public/html/viewlogo.html");
    }
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "<h1>Bienvenido al servdior hapi</h1>";
    },
  });

  server.route({
    method: "GET",
    path: "/api/v1/json",
    handler: (request, h) => {
      return { message: "Bienvenido al servdior hapi con json" };
    },
  });

  server.route({
    method: "GET",
    path: "/hello/{name}",
    handler: (request, h) => {
      return `Hola ${request.params.name}, saludando de server hapijs`;
    }
  });

  server.route({
    method: "GET",
    path: "/api/v1/suma/{num1},{num2}",
    handler: (req, h) => {
      const num1 = parseInt(req.params.num1);
      const num2 = parseInt(req.params.num2);
      const suma =  num1+num2;
      return `${num1} + ${num2} = ${suma}`;
    }
  });

  await server.start();
  console.log("Servidor corriendo en el puerto: " + PORT);
};

init();
