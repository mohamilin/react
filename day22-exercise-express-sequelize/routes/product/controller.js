const Product = require ('../../models/Product');
const Category = require('../../models/Category');
module.exports = {
    getAllProduct : (req, res) => {
        Product.findAll({
            include: [Category],
            attributes: {exclude:['category_id', 'categoryId' ]}
        })
        .then(data => {
            res.json(data);
        })
    }
}

