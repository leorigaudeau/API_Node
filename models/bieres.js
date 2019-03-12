const { mongoose } = require('../db/connectdb.js');

const Biere = mongoose.model('Biere', {
    nom: {
        type: String,
        required: true
    },
    Alcool: {
        type: String
    },
    Brasseur: [{
        type: Schema.Types.ObjectId,
        ref: 'brasseur'
    }],
    Origine: [{
        type: Schema.Types.ObjectId,
        ref: 'pays'
    }],
});

module.exports = { Biere };


