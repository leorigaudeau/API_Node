const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const brasseur = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    pays: {
        type: String,
        required: true
    }
});

brasseur.plugin(autoIncrement.plugin, 'Brasseurs');
var Brasseur = mongoose.model('Brasseurs', brasseur);

module.exports = { Brasseur };


