const { mongoose } = require('../db/connectdb.js');
const Schema = mongoose.Schema;
autoIncrement.initialize(mongoose);


const biereSchema = new Schema({
    nom: {
        type: String,
        required: true
    }
});


biereSchema.plugin(autoIncrement.plugin, 'Biere');
var Biere = connection.model('Biere', bookSchema);

module.exports = { Biere };