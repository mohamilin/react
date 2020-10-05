const express  = require("express");
const app = express();

const {PORT, MONGODB_URI_LIVE} = require("./config");
const localPort = PORT || 8000
const {dbMongo} = require("./config")

console.log("port", PORT);
console.log("MONGODB_URI_LIVE", MONGODB_URI_LIVE);

app.get("/", (req, res) => {
    res.send("well,...")
});

if(dbMongo){
    app.listen(localPort, () => {
        console.log(`Running ${localPort}`);
    });
} else {
    console.log("Not Connect")
}

