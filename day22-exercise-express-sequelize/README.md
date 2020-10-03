### DOCUMENTATION
```html

1. Buat sebuah project (nama disesuaikan)
    - Lakukan instalasi pada project tersebut :
        * npm init
        * yarn add express sequelize mysql2
        * yarn add nodemon -D

    - Buat file app.js
    - Buat folder config, models, routes, public
    - Buat folder images didalam public : untuk menyimpan gambar ( jika nanti diperlukan )

2. Test apakah server kita sudah berjalan apa belum dengan 
    - menambahkan code dalam app.js

        const express = require('express');
        const app = express(); 

        app.get('/', (req, res) => { 
        res.send('Hello World');
        }) 

        app.listen(8080, () => console.log("server berjalan pada http://localhost:8080"))
    
    - menambahkan "dev": "nodemon app.js" pada package.json di bagian scripts

3. Jalankan node app.js pada terminal, berhasil jika muncul : 
    server berjalan pada http://localhost:8080

4. Buat database di mysql workbench dengan table product dan categories
    table products :
        id int primary key auto_increment,
        name varchar(100),
        description varchar (255),
        image varchar (255),
        category_id int,
        foreign key (category_id) references categories (id)

    table categories :
        id int primary key auto_increment,
        name varchar (30)

5. Konfigurasi database dengan membuat file db.js pada folder config dan berikan code untuk mengkoneksikannya :
    const {Sequelize} = require('sequelize');

    const sequelize = new Sequelize({
        host: 'localhost',
        dialect: 'mysql',
        username: 'root',
        password: '*****',
        database: 'store'
    });

    module.exports = sequelize;

6. Buat model pada folder model dengan nama Products.js dan Category.js
    Dalam Product.js kita akan hubungkan relasi one to one menggunakan konsep 
    A.belongsTo(B).
        Ketika kita menghubungkan dengan table lain maka jangan lupa mengimportnya.
        Begitu juga ketika kita akan mengimport/menghubungkan dengan file jangan lupa juga diimport dengan *require*

    - model : Product.js
       const {Sequelize} = require('sequelize');
        const sequelize = require('../config/db');
        const Category = require ('./Category');

        const Product = sequelize.define('products', {
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            image: {
                type: Sequelize.STRING,
                get() {
                    const image = this.getDataValue('image');
                    return "/img/"+image;
                }
            },
            category_id: Sequelize.INTEGER,
        }, {
            underscored: true,
            timestamps: false
        });

        Product.belongsTo(Category)

        module.exports = Product
    
    - model : Category.js
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

7. Membuat route pada folder routes > product dengan file index.js dan controller.js. 
    -Pada file controller.js
        * Kita hubungkan dengan 2 model (Product dan Category) kemudian akan kita inisasikan dengan getAllProduct kemudian Product kita panggil menggunakan findAll. 

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


    - Pada file index.js : 
        * Kemudian kita buat router dengan menggunakan method pada express dan kita panggil getAllProduct agar nantinya saling tersambung antara file app.js dengan file yang terdapat dalam model. 

            const express = require('express');
            const router = express.Router();
            const {getAllProduct} = require('./controller');
            router.get("/", getAllProduct)
            module.exports = router
            
8. Setelah kita bwt config, model, dan controllernya. selanjutnya yaitu kita lakukan connect agar satu sama lain tersambung. 

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