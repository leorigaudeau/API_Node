const { mongoose } = require('../db/connectdb.js');
const {Brasseur} = require('./brasseurs');
const { pays } = require('./pays');

const Biere = mongoose.model('Biere', {
    Nom: {
        type: String,
        required: true
    },
    Brasseur,
    pays
});

module.exports = { Biere };


