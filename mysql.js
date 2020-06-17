const Sequelize = require('sequelize').Sequelize
const sequelize = new Sequelize('sistemadecadastro', 'root', 'r2d2c3poj', {
    host:"localhost",
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(()=>console.log("sucesso na conexão"))
    .catch((error)=>console.log("erro na conexão: " + error))

