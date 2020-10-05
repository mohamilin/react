const mongoose = require("mongoose");

const {MONGODB_URI_LIVE} = require("./environment");

mongoose.connect (MONGODB_URI_LIVE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} );

const dbMongo = mongoose.connection;
module.exports = dbMongo;