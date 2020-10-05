const express = require('express');
const sequelize = require('./config/db');
const app = express(); 
const Product = require('./models/Product');
const Category = require('./models/Category')
const productRouter = require('./routes/product');

const categoryRouter = require('./routes/category');

const bodyParser = require('body-parser');
app.use(bodyParser.json())

// package tambahan untuk crud 



// connect with sequelize
sequelize
.authenticate()
.then(() => {
  console.log('Connect succes')
  Product.sync()
  Category.sync()
})
.catch(err => {
  console.log('Unable to connect', err)
})


// for route on browser, call database table products
app.use('/', productRouter)
app.use('/', categoryRouter)




app.get('/', (req, res) => { 
  res.send(
    `<h1>Link API</h1>
    /product => get all product <br/>
    /product/id => get product by id <br/>
    /category => get all category <br/>
    /category/id => get category by id
    ` 
    );
}) 

app.listen(3000, () => console.log("server berjalan pada http://localhost:3000"))