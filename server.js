const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post')


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
    Post.create({
        titulo:req.body.titulo,
        conteudo: req.body.conteudo 
    })
})

// Ouvindo a porta 3001 do navegador
app.listen(8081);