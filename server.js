// Inicializando o express
const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World')
});

// Ouvindo a porta 3001 do navegador
app.listen(3001);