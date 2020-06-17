// Inicializando o express
const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/html/index.html')
});

app.get

// Ouvindo a porta 3001 do navegador
app.listen(8081);