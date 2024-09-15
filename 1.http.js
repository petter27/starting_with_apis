const http = require('node:http');
const fs = require('node:fs');
const { error } = require('node:console');

const desiredPort = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if(req.url === '/'){
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('Bienvenido a la página principal');

    }else if (req.url === '/saludo'){
        res.statusCode = 200; // OK
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('Hola mundo');
    }else if(req.url === '/imagen'){
        fs.readFile('images/dog_lion.jpg', (error, data) => {
              if(error){
                res.statusCode = 500; // Internal Server Error
                res.end('Error interno');
              }else{
                res.setHeader('Content-Type', 'image/jpg');
                res.end(data);
              }
         });


    }else{
        res.statusCode = 404; // Not Found
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
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