const express = require('express');

const School = require('../models/School');

const app = express();

app.get('/school', (req, res) => {
    School.find({}, (err, result) => {
        res.status(200).json({
            data:result
        })
    })
})

app.get('/school/:id', (req, res) => {
    const id = req.params.id;

    School.findById(id, (err, result) => {
        res.status(200).json({
            data:result
        })
    })
})

app.post('/school', (req, res) => {
    const {name, nis} = req.body;
    const schoolData = {name, nis}
    const newSchool = new School(schoolData);

    newSchool
        .save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(() => {
            res.status(400).send("unable")
        })
})

app.put('/school/:id', (req, res) => {
    console.log('liat body', req.body)
    School.findByIdAndUpdate(
        {_id: req.params.id},
        {$set: {
            name: req.body.name,
            nis: req.body.nis
        }}
    )
    .then (result => {
        console.log('hasil', result)
        res.status(200).json({data: result})
    })
})

app.delete('/school/:id', (req, res) => {
    School.findByIdAndDelete(req.params.id, (err, result)=>{
        if(err){
            console.log("error in deleting!");
            return error;
        } else {
            console.log("deleted this data");
            console.log('hasil', result)
            res.status(200).send('deleted');
        }
    })
})

module.exports = app;