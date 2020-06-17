const Sequelize = require('sequelize').Sequelize
const sequelize = new Sequelize('sistemadecadastro', 'root', 'r2d2c3poj', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(()=>console.log("sucesso na conexão"))
    .catch((error)=>console.log("erro na conexão: " + error))

const Postagem = sequelize.define('postagens', {
    title:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

// PARA INSERIR DADOS NO BANCO
Postagem.create({
    title: "Primeiro post",
    conteudo: "Utilizando o sequelize para enviar dados ao MySQL"
})

const Usuarios = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    sexo:{
        type: Sequelize.CHAR
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

// CRIA AS TABELAS NO BANCO DE DADOS:
// Usuarios.sync({force: true})    
// Postagem.sync({force: true})    