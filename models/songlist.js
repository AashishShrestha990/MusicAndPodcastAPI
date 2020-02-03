const mongoose = require('mongoose');

const slistSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: false
    },
    pid: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('songlist', slistSchema);