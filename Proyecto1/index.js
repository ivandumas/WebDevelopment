// Importando la biblioteca para realizar apps web
const { response } = require("express");
const express = require("express");
const path = require("path");
// Creación de la aplicación web
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "public")));

// Atender una petición del recurso mipagina
app.get("/mipagina", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "index.html"));
});

// Atender una petición del recurso mipagina
app.get("/tarea", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "tarea.html"));
});

app.get("/recurso3", function (request, response) {
  response.send(path.join(__dirname, "views", "index.html"));
});

app.listen(8080, () => {
  console.log("Aplicación web en línea en el puerto 8080");
});
