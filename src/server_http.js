const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("<h1>Servidor http nativo</h1>");
  res.end();
});

server.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: " + PORT);
});
