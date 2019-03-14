const  {TypeBiere} = require('../../models/typeBiere.js');

const postTypeBiere = (req,res) => {
    const typeBiere = new TypeBiere({
        libelle: req.body.libelle,
        bieres: req.body.bieres
        
    });
    typeBiere.save().then(typeBiere => {
        res.send(typeBiere);
    }, e => {
        res.status(500).send(e);
    });
};


module.exports={postTypeBiere};