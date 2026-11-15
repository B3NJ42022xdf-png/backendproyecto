
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const openapi = require("./docs/openapi");

const app = express();
const PORT = process.env.PORT || 3001;

// Documentación de la API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));

// req(request) res(response) res.json(respuesta en formato JSON)
// arrow function
app.get("/api/saludo", (req, res) => {
    res.json({ mensaje: "Hola desde mi API" });
});

// Primer ejercicio
app.get("/api/yo", (req, res) => {
    res.json({
        nombre: "Magenta Paredes",
        carrera: "Ing. de Software"
    });
});

app.listen(PORT, () => console.log("API lista"));
