const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


const app = express();


// Configurando o template engine (Handlebars)
app.engine('handlebars', handlebars({defaultLayout: 'main'})) // main => template padrão da aplicação
app.set('view engine', 'handlebars')

// Config Bodyparser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// Rotas
app.get('/cad', (req, res)=>{ 
    res.render('formulario')    // Exibe o arquivo do formulario handlebars da pasta views 
})

app.post('/add', (req, res)=>{
    res.send(`Titulo: ${req.body.titulo}, Conteúdo: ${req.body.conteudo}`)
    res.body.conteudo
})


// Ouvindo a porta 3001 do navegador
app.listen(8081);