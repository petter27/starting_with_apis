const express = require('express');
const ditto = require('./pokemon/ditto.json');

const PORT = process.env.PORT ?? 1234;

const app = express();

app.disable('x-powered-by'); // deshabilitar la cabecera X-Powered-By

app.get('/pokemon/ditto', (req, res) => {
  // por defecto el status es 200, detecta eñ content-type automaticamente y envia el contenido
  // res.send('<h1>Hello World</h1>');
  res.json(ditto);
});

app.post('/pokemon', (req, res) => {
  let body = '';
  // escuchar el evento data
  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const data = JSON.parse(body);
    data.timestamp = Date.now();
    res.status(201).json(data);
  });
});

// controlador de errores 404, siempre se debe colocar al final
app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
