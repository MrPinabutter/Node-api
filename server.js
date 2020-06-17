const express = require('express');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize').Sequelize


const app = express();

// Conexão com o banco de dados
const sequelize = new Sequelize('sistemadecadastro', 'root', 'r2d2c3poj', {
    host:"localhost",
    dialect: 'mysql'
})
// Configurando o template engine (Handlebars)
app.engine('handlebars', handlebars({defaultLayout: 'main'})) // main => template padrão da aplicação
app.set('view engine', 'handlebars')

// Rotas
app.get('/cad', (req, res)=>{ 
    res.render('formulario')    // Exibe o arquivo do formulario handlebars da pasta views 
})



// Ouvindo a porta 3001 do navegador
app.listen(8081);