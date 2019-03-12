const { mongoose } = require('../db/connectdb.js');
const {Brasseur} = require('./brasseurs');
const { pays } = require('./pays');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const biereSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    
});


biereSchema.plugin(autoIncrement.plugin, 'Biere');
var Biere = mongoose.model('Biere', biereSchema);

module.exports = { Biere };