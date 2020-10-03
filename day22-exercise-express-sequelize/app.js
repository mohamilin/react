const express = require('express');
const sequelize = require('./config/db');
const app = express(); 

const Product = require('./models/Product');
const productRouter = require('./routes/product');

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
app.use('/product', productRouter)

app.get('/', (req, res) => { 
  res.send('Hello World');
}) 

app.listen(3000, () => console.log("server berjalan pada http://localhost:3000"))