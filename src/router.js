const Hapi = require("@hapi/hapi");

const server = Hapi.server({
    port: PORT,
    host: "localhost",
    routes: {
      files: {
        relativeTo: ruta
      }
    },
  });
  

module.exports = server;