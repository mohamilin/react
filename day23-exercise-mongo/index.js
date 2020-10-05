const express = require("express");
const app = express();
const {dbMongoose, PORT, MONGODB_URI_LIVE} = require('./config');
const localhost = PORT || 3000
const appController = require('./routes/SchoolController');

const bodyParser = require('body-parser');

console.log('dbmongo', dbMongoose);
console.log('port', PORT);
console.log('dbmongo', MONGODB_URI_LIVE);

// app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// app.use(bodyParser);
app.use(appController);



app.get('/', (req, res) => {
    res.send(`Successfuly on ${localhost}`)
})

if(dbMongoose) {
    app.listen(localhost, () => {
        console.log(`success on local ${localhost} `);
    });
} else {
    console.log(`i'm sory`)
}

