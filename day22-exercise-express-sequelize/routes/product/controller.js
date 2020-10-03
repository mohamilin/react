const Product = require ('../../models/Product');
const Category = require('../../models/Category');

module.exports = {
    //get all
    getAllProduct : (req, res) => {
        Product.findAll({
            include: [Category],
            attributes: {exclude:['category_id', 'categoryId' ]}
        })
        .then(data => {
            res.json(data);
        })
    },

    //get by id
    getProductById : (req, res) => {
        Product.findOne({where: {id: req.params.id}})
        .then(data => {
            res.json(data);
        })
    },

    postProduct: (req, res) => {
        Product.create({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id,
        })
        .then(data => {
            res.send(data)
        })
    },

    productUpdate: (req, res) => {
        const id = req.params.product_id;
        Product.update({
            name: req.body.name,
            description: req.body.description,
            category_id: req.body.category_id,
        }, {where: {id: req.params.product_id}})
        .then(() => {
            res.status(200).send("Updated, Success")
        })
    },

    productDelete: (req, res) => {
        const id = req.params.product_id;
        Product.destroy({where: {id: id}})
        .then(() => {
            res.status(200).send("Deleted, Success")
        })
    }
}

