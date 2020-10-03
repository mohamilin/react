const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'umikulsum01',
    database: 'store'
});

module.exports = sequelize;