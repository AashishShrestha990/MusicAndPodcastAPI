const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Postsong', songsSchema);