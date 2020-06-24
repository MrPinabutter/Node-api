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
    app.get('/', (req, res) => {
        Post.findAll().then((posts) => {
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', (req, res)=>{ 
        res.render('formulario')    // Exibe o arquivo do formulario handlebars da pasta views 
    })

    app.post('/add', (req, res)=>{
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo 
        }).then(() => {
            res.redirect('/')
        }).catch((erro) => {
            res.send("Falha no envio do Post: " + erro)
        })
    })

    app.get('/deletar/:id', (req, res) => {
        Post.destroy({where:{'id':req.params.id}}).then(()=>{
            res.send('Deletado com sucesso!')
        }).catch((erro) => {
            res.send('Postagem inexistente')
        })
    })

// Ouvindo a porta 3001 do navegador
app.listen(8081);