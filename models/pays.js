const { mongoose } = require('../db/connectdb.js');

const pays = mongoose.model('pays', {
    Nom: {
        type: String,
        required: true
    },
    Alcool: {
        type: String,
        required: true
    }
});

module.exports = { pays };


