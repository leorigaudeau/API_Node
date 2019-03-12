const { mongoose } = require('../db/connectdb.js');

const Brasseur = mongoose.model('Brasseur', {
    Nom: {
        type: String,
        required: true
    },
    Pays: {
        type: String,
        required: true
    }
});

module.exports = { Brasseur };


