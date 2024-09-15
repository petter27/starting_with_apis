const http = require('node:http');
const { findAvailablePort } = require('./14.free-port.js');

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log('Petición recibida');
  res.end('Hola mundo');
});
// comodin puerto = 0 para que el sistema operativo asigne un puerto disponible automáticamente
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(
      `Servidor escuchando en el puerto http://localhost:${server.address().port}`
    );
  });
}).catch(error => {
  console.error('Error al encontrar puerto disponible:', error);
});
