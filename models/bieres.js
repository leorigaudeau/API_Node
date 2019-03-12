const { mongoose } = require('../db/connectdb.js');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose);


const biereSchema = new Schema({
    nom: {
        type: String,
        required: true
    }
});


biereSchema.plugin(autoIncrement.plugin, 'Biere');
var Biere = mongoose.model('Biere', biereSchema);

module.exports = { Biere };