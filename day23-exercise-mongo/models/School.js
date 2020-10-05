const mongoose = require('mongoose');


// create schema

const schoolSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    nis : {
        type: String,
        required: true,
    }
});

const School = mongoose.model("schools", schoolSchema);

module.exports = School;