
//import smw dependencies dan middleware
import express from 'express';
//tambhkan body parser
import bodyParser from 'body-parser';
    //import mongose
import mongoose from 'mongoose';


    //import controller
import {userController} from './controller';



//install expree app
const app = express();

    //kita gunkanan dependencies bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//kita gunakan dependencies
//menggunkan untuk API
    //kemudian ganti code berikut ini :
// app.get('/', (req, res) => {
//     res.status(200).json({
//         status: 'Server run Success',
//     });
// });
    //menjadi : (jngn lupa kode diatas do komen aja)
app.use('/', userController);

// start server
app.listen(8080, () => {
    console.log('success on 8080');
    mongoose.connect("mongodb://localhost/test").then(() => {
    console.log(`Conneted to mongoDB at port 27017`);
  });
});