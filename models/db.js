const Sequelize = require('sequelize').Sequelize;

// Conexão com o banco de dados
const sequelize = new Sequelize('postapp', 'root', 'r2d2c3poj', {
    host:"localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}