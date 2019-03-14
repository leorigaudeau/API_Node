const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const biere = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    brasseurid:{
        type:Number 
    },
    tauxAlcool:{
        type: String
    },
    typeBiereid:{
        type:Number
    }
});


biere.plugin(autoIncrement.plugin, 'Biere');
var Biere = mongoose.model('Biere', biere);

module.exports = { Biere };