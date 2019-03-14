const { Brasseur } = require('../../models/brasseurs.js');

const postBrasseur = (req,res) => {
    const brasseur = new Brasseur({
        nom: req.body.nom,
        pays: req.body.pays,
        bieres: req.body.bieres
    });
    brasseur.save().then(brasseur => {
        res.send(brasseur);
    }, e => {
        res.status(500).send(e);
    });
};


module.exports={postBrasseur};