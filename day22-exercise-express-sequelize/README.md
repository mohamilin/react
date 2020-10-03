### DOCUMENTATION
```html

1. Buat sebuah project (nama disesuaikan)
    - Lakukan instalasi pada project tersebut :
        * npm init
        * yarn add express sequelize mysql2
        * yarn add nodemon -D

    - Buat file app.js
    - Buat folder config, models, routes, public
    - Buat folder images didalam public : untuk menyimpan gambar <em> jika nanti diperlukan</em>
2. Test apakah server kita sudah berjalan apa belum dengan 
    - menambahkan code dalam app.js

        const express = require('express');
        const app = express(); 

        app.get('/', (req, res) => { 
        res.send('Hello World');
        }) 

        app.listen(8080, () => console.log("server berjalan pada http://localhost:8080"))
    
    - menambahkan "dev": "nodemon app.js" pada package.json di bagian scripts

Jalankan node app.js pada terminal, berhasil jika muncul : 
    server berjalan pada http://localhost:8080
