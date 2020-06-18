const Hapi = require("@hapi/hapi");

// const path = require("path");
// const ruta = path.join(__dirname, "/public");
// console.log(ruta);

const PORT = process.env.PORT || 3000;

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: "localhost",
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

  await server.start();
  console.log("Servidor corriendo en el puerto: " + PORT);
};

init();
