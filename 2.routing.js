const http = require('node:http');
// commonJS allow us to import JSON files as modules
const dittoJSON = require('./pokemon/ditto.json');

const processRequest = (req, res) => {
    const { method, url } = req;
    switch(method){
        case 'GET':
            switch(url){
                case '/pokemon/ditto':
                    res.setHeader('Content-Type', 'application/json');
                   return res.end(JSON.stringify(dittoJSON));
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    res.end('Ruta no encontrada');
            }
        case 'POST':
            switch(url){
                case '/pokemon':{
                    let body = '';

                    // el body llega por trozos o porciones (chunks) en binario y con toString lo convertimos a texto
                    req.on('data', (chunk) => {
                        body += chunk.toString();
                    });
                    // node js es basado en eventos, por lo que el evento end se dispara cuando se termina de recibir la data del body
                    req.on('end', () => {
                        const parsedBody = JSON.parse(body);
                        res.writeHead(201, {'Content-Type': 'application/json'});
                        res.end(JSON.stringify(parsedBody));
                    });
                    break;
                };
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    res.end('Ruta no encontrada');
                
                    
            }
    }
};

const server = http.createServer(processRequest);

server.listen(3000, () =>{
    console.log('Servidor escuchando en la ruta http://localhost:3000');
});