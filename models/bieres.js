const { mongoose } = require('../db/connectdb.js');
const {Brasseur} = require('./brasseurs');
const { Pays } = require('./pays');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const biere = new mongoose.Schema({
    Nom: {
        type: String,
        required: true
    },
    Brasseur,
    Pays
});


biere.plugin(autoIncrement.plugin, 'Biere');
var Biere = mongoose.model('Biere', biere);

module.exports = { Biere };