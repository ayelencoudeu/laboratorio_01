const http = require("http");

const servidor = http.createServer((req, res) => {
  console.log("Petición recibida", req);
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hola Mundo");
      break;
    case "/productos":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Productos en venta</h1>");
      break;
    case "/contacto":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Contacto</h1>");
  }
});

const PORT = 3000;

servidor.listen(PORT, function () {
  console.log(" Servidor escuchando en el puerto 3000");
});
