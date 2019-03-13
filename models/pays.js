const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const pays = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    alcool: {
        type: String,
        required: true
    }
});

pays.plugin(autoIncrement.plugin, 'Pays');
var Pays = mongoose.model('Pays', pays);

module.exports = { Pays };


