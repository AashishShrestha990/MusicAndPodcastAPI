const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Users', customerSchema);