const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose);


const brasseurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    pays: {
        type: String,
        required: true
    }
});


brasseurSchema.plugin(autoIncrement.plugin, 'Brasseur');
const Brasseur = mongoose.model('Brasseur', brasseurSchema);

module.exports = { Brasseur };




