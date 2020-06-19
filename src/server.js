const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Bienvenidos a Server Code Capacitacion 😎" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT} 🔥`);
});
