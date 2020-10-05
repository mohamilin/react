const dbMongo = require("./database");

const {PORT, MONGODB_URI_LIVE} = require("./environment");

module.exports = {
    dbMongo,
    PORT,
    MONGODB_URI_LIVE,
};