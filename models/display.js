const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    gender: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

const Details = mongoose.model('student', studentSchema)
module.exports = Details;
