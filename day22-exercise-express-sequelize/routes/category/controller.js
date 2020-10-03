const Category = require('../../models/Category');

module.exports = {
    //get all
    getAllCategory : (req, res) => {
        Category.findAll()
        .then(data => {
            res.json(data);
        })
    },

    //get by id
    getCategoryById : (req, res) => {
        Category.findOne({where: {id: req.params.id}})
        .then(data => {
            res.json(data);
        })
    },

    postCategory: (req, res) => {
        Category.create({
            name: req.body.name,
        })
        .then(data => {
            res.json(data)
        })
    },

    categoryUpdate: (req, res) => {
        const id = req.params.category_id;
        Category.update({
            name: req.body.name,
        }, {where: {id: req.params.category_id}})
        .then(() => {
            res.status(200).send("Updated, Success")
        })
    },

    categoryDelete: (req, res) => {
        const id = req.params.category_id;
        Category.destroy({where: {id: id}})
        .then(() => {
            res.status(200).send("Deleted, Success")
        })
    }
}

