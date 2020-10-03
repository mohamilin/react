const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('categories', {
    name: Sequelize.STRING,
}, {
    underscored: true,
    timestamps: false,
    freezeTableName: true
})

module.exports = Category