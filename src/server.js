const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido al servdior express</h1>");
});

app.get("/api/v1/json", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servdior express con json" });
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto: " + PORT);
});
