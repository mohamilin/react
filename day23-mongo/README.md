## DOC
1. click : init -y
2. npm i express dotenv mongoose
3. npm i nodemon -D
4. create file index.js 
5. add code on package.json like this :
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev" : "nodemon dev index.js"
    },

### happy code
```js
1. code in index.js :
    const express  = require("express");
    const app = express();

    app.listen(3000, () => {
        console.log('running')
    })

2. Run server with npm run dev, must show 'running'. 

3. add file .env and .env.example

4. add folder config and database.js, environment.js, index.js in here.

5. config > environment.js, you must add config with require
    require("dotenv").config();

    module.exports = {
        PORT: process.env.PORT,
        MONGODB_URL_LIVE: process.env.MONGODB_URL_LIVE,
    }


6. config > database.js, you must require mongoose