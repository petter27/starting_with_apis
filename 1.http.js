const http = require('node:http');

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  
    if(req.url === '/'){
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Bienvenido a la página principal');

    }else if (req.url === '/saludo'){
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Hola mundo');
    }else{
        res.statusCode = 404; // Not Found
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Ruta no encontrada');
    }
};

const server = http.createServer(processRequest);

// comodin puerto = 0 para que el sistema operativo asigne un puerto disponible automáticamente
server.listen(desiredPort, () => {
  console.log(
    `Servidor escuchando en el puerto http://localhost:${desiredPort}`
  );
});