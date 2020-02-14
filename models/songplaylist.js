const mongoose = require('mongoose');

const slistSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: false
    },
    sname: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('songplaylist', slistSchema);