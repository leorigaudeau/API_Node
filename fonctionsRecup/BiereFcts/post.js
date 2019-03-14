const { Biere } = require('../../models/bieres.js');

const postBiere = (req,res) => {
    const biere = new Biere({
        nom: req.body.nom,
        brasseurid: req.body.brasseurid,
        tauxAlcool: req.body.tauxAlcool,
        typeBiereid: req.body.typeBiere,
    });
    biere.save().then(biere => {
        res.send(biere);
    }, e => {
        res.status(500).send(e);
    });
};


module.exports={postBiere};