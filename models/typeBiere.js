const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);


const typeBiere = new mongoose.Schema({
    libelle: {
        type: String,
        required: true
    },
    bieres: [{
        _id: {
            type: Number
        },
        biereid:{
            type: Number
        },
        nom: {
            type: String
        },
        brasseur:{
            type: String
        }
    }]
});

typeBiere.plugin(autoIncrement.plugin, 'TypeBiere');
var TypeBiere = mongoose.model('TypeBiere', typeBiere);

module.exports = { TypeBiere };


