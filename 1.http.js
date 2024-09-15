const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log('Petición recibida');
  res.end('Hola mundo');
});

// comodin puerto = 0 para que el sistema operativo asigne un puerto disponible automáticamente
server.listen(desiredPort, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${port}`
  );
});