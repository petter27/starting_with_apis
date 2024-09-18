const express = require('express');
const ditto = require('./pokemon/ditto.json');

const PORT = process.env.PORT ?? 1234;

const app = express();

app.disable('x-powered-by'); // deshabilitar la cabecera X-Powered-By

app.use(express.json()); // hace lo mismo que el middleware que creamos
// middleware
/*
app.use((req, res, next) => {
  if (req.method !== 'POST') return next();
  if (req.headers['content-type'] !== 'application/json') return next();
  // solo se ejecuta si el metodo es POST y el content-type es application/json
  let body = '';
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    // mutar la request y meter la informacion en el req.body
    req.body = data;
    next();
  });
}); */

app.get('/pokemon/ditto', (req, res) => {
  // por defecto el status es 200, detecta eñ content-type automaticamente y envia el contenido
  // res.send('<h1>Hello World</h1>');
  res.json(ditto);
});

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body);
});

// controlador de errores 404, siempre se debe colocar al final
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
