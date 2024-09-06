// const app = require("./express");
const PORT = 3000;
const { app } = require("./express");

const { sumar, restar, multiplicar, dividir } = require("./Operaciones");

const a = 1357;
const b = 25;
console.log(`Servidor sumando" ${sumar(a, b)}`);
console.log(`Servidor restando" ${restar(a, b)}`);
console.log(`Servidor multiplicando" ${multiplicar(a, b)}`);
console.log(`Servidor dividiendo" ${dividir(a, b)}`);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto" ${PORT}`);
});
