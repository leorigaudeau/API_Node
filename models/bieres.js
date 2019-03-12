const { mongoose } = require('../db/connectdb.js');
const {Brasseur} = require('./brasseurs');
const { pays } = require('./pays');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose);


const biereSchema = new Schema({
    Nom: {
        type: String,
        required: true
    },
    Brasseur,
    pays
});


biereSchema.plugin(autoIncrement.plugin, 'Biere');
var Biere = mongoose.model('Biere', biereSchema);

module.exports = { Biere };