const express = require("express");

const app = express();

const { sumar, restar, multiplicar, dividir } = require("./Operaciones");

const a = 227;
const b = 45;

app.get("/", (req, res) => {
  res.send("bienvendio a la pagina principal de express");
});

app.get("/sumar", (req, res) => {
  res.status(200).send(`Estamos sumandos", ${sumar(a, b)}`);
});

app.get("/restar", (req, res) => {
  res.status(200).send(`Estamos sumandos", ${restar(a, b)}`);
});

app.get("/multiplica", (req, res) => {
  res.status(200).send(`Estamos sumandos", ${multiplicar(a, b)}`);
});

app.get("/divide", (req, res) => {
  res.status(200).send(`Estamos sumandos", ${dividir(a, b)}`);
});

app.put("/editar", (req, res) => {
  res.send("Datos editados con exito");
});

app.delete("/eliminar", (req, res) => {
  res.send("Datos eliminados");
});

module.exports = { app, sumar };
