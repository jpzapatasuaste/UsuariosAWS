const express = require("express");

const rutas = require("./rutas");

const app = express();

app.use(express.json());
app.use('/', rutas);

app.listen("4000", () => {
    console.log("Servidor corriendo en el puerto: 4000");
    console.log("CRUD de Usuarios");
})