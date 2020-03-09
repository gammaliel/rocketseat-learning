const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o App
const app = express();

// Permite o envio de informações usando JSON para a API
app.use(express.json());

// Habilita CORS
app.use(cors());

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Importa todos os models da pasta
requireDir("./src/models/");

app.use("/api", require("./src/routes"));

app.listen(3001);
