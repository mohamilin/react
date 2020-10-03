const {Sequelize} = require('sequelize');
const sequelize = require('../config/db');
const Category = require ('./Category');

const Product = sequelize.define('products', {
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    category_id: Sequelize.INTEGER,
}, {
    underscored: true,
    timestamps: false
});

Product.belongsTo(Category)

module.exports = Product