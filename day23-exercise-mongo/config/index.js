const dbMongoose = require('./database');

const {PORT, MONGODB_URI_LIVE} = require('./environment');

module.exports = {
    dbMongoose,
    PORT,
    MONGODB_URI_LIVE,
}